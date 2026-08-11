import { useEffect, useState } from "react";
import type { MusicTrack } from "../data/musicTracks";

export type MusicMetadata = {
  cover: string;
  album: string;
  duration: number;
};

const memoryCache = new Map<string, MusicMetadata>();
const requestCache = new Map<string, Promise<MusicMetadata>>();
const CACHE_PREFIX = "birthday-music-meta:v2:";
const CACHE_TTL = 1000 * 60 * 60 * 24 * 30;

function normalize(value: string) {
  return value.toLowerCase().replace(/[^a-z0-9а-яё]+/gi, " ").trim();
}

function readCached(track: MusicTrack): MusicMetadata | null {
  if (memoryCache.has(track.id)) return memoryCache.get(track.id)!;

  try {
    const stored = localStorage.getItem(`${CACHE_PREFIX}${track.id}`);
    if (!stored) return null;
    const parsed = JSON.parse(stored) as MusicMetadata & { savedAt: number };
    if (Date.now() - parsed.savedAt > CACHE_TTL) return null;
    const value = { cover: parsed.cover, album: parsed.album, duration: parsed.duration };
    memoryCache.set(track.id, value);
    return value;
  } catch {
    return null;
  }
}

function writeCached(track: MusicTrack, metadata: MusicMetadata) {
  memoryCache.set(track.id, metadata);
  try {
    localStorage.setItem(`${CACHE_PREFIX}${track.id}`, JSON.stringify({ ...metadata, savedAt: Date.now() }));
  } catch {
    // Private browsing or a full storage quota should not break the player.
  }
}

function enlargeArtwork(url: string) {
  return url.replace(/\/\d+x\d+bb\./, "/600x600bb.");
}

async function resolveMetadata(track: MusicTrack): Promise<MusicMetadata> {
  const cached = readCached(track);
  if (cached) return cached;
  if (requestCache.has(track.id)) return requestCache.get(track.id)!;

  const request = Promise.allSettled([
    fetch(`https://open.spotify.com/oembed?url=${encodeURIComponent(track.spotifyUrl)}`).then((response) => {
      if (!response.ok) throw new Error("Spotify metadata is unavailable");
      return response.json() as Promise<{ thumbnail_url?: string }>;
    }),
    fetch(`https://itunes.apple.com/search?term=${encodeURIComponent(`${track.title} ${track.artist}`)}&entity=song&limit=8&country=US`).then((response) => {
      if (!response.ok) throw new Error("Apple Music metadata is unavailable");
      return response.json() as Promise<{ results?: Array<{ trackName?: string; artistName?: string; collectionName?: string; trackTimeMillis?: number; artworkUrl100?: string }> }>;
    })
  ]).then(([spotifyResult, appleResult]) => {
    const spotify = spotifyResult.status === "fulfilled" ? spotifyResult.value : null;
    const results = appleResult.status === "fulfilled" ? appleResult.value.results ?? [] : [];
    const targetTitle = normalize(track.title.replace(/\([^)]*version[^)]*\)/gi, ""));
    const targetArtist = normalize(track.artist.split(",")[0]);
    const wantsTaylorVersion = normalize(track.title).includes("taylor s version");
    const best = [...results].sort((left, right) => {
      const score = (item: (typeof results)[number]) => {
        const itemTitle = normalize(item.trackName ?? "");
        const itemArtist = normalize(item.artistName ?? "");
        const itemCollection = normalize(item.collectionName ?? "");
        return (itemTitle === targetTitle ? 4 : itemTitle.includes(targetTitle) || targetTitle.includes(itemTitle) ? 2 : 0)
          + (itemArtist.includes(targetArtist) || targetArtist.includes(itemArtist) ? 3 : 0)
          + (wantsTaylorVersion && (itemTitle.includes("taylor s version") || itemCollection.includes("taylor s version")) ? 5 : 0);
      };
      return score(right) - score(left);
    })[0];

    const metadata: MusicMetadata = {
      cover: spotify?.thumbnail_url ?? (best?.artworkUrl100 ? enlargeArtwork(best.artworkUrl100) : ""),
      album: best?.collectionName ?? "",
      duration: best?.trackTimeMillis ? Math.round(best.trackTimeMillis / 1000) : track.duration ?? 0
    };
    writeCached(track, metadata);
    return metadata;
  }).finally(() => requestCache.delete(track.id));

  requestCache.set(track.id, request);
  return request;
}

export function useMusicMetadata(track: MusicTrack, enabled = true) {
  const [metadata, setMetadata] = useState<MusicMetadata>(() => readCached(track) ?? { cover: "", album: "", duration: track.duration ?? 0 });

  useEffect(() => {
    let alive = true;
    setMetadata(readCached(track) ?? { cover: "", album: "", duration: track.duration ?? 0 });
    if (!enabled) return () => { alive = false; };

    resolveMetadata(track).then((value) => {
      if (alive) setMetadata(value);
    }).catch(() => undefined);

    return () => { alive = false; };
  }, [enabled, track]);

  return metadata;
}
