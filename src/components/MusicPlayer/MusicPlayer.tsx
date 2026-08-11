import { motion } from "framer-motion";
import {
  ChevronDown,
  ExternalLink,
  Heart,
  ListMusic,
  Maximize2,
  Music2,
  Pause,
  Play,
  Repeat2,
  Shuffle,
  SkipBack,
  SkipForward,
  X
} from "lucide-react";
import type { CSSProperties } from "react";
import { useCallback, useEffect, useMemo, useRef, useState } from "react";
import { createPortal } from "react-dom";
import { musicTracks, MusicTrack } from "../../data/musicTracks";
import { Language, t } from "../../data/translations";
import { useMusicMetadata } from "../../hooks/useMusicMetadata";
import { AlbumCover } from "./AlbumCover";

type Props = {
  language: Language;
  shouldStart: boolean;
};

type SpotifyPlaybackEvent = {
  data: {
    playingURI?: string;
    isPaused?: boolean;
    isBuffering?: boolean;
    duration?: number;
    position?: number;
  };
};

type SpotifyController = {
  addListener: (event: string, listener: (event: SpotifyPlaybackEvent) => void) => void;
  destroy: () => void;
  loadEntity: (url: string) => void;
  pause: () => void;
  play: () => void;
  resume: () => void;
  seek: (seconds: number) => void;
  togglePlay: () => void;
};

type SpotifyIframeApi = {
  createController: (
    element: HTMLElement,
    options: { url: string; width: string; height: number },
    callback: (controller: SpotifyController) => void
  ) => void;
};

declare global {
  interface Window {
    onSpotifyIframeApiReady?: (api: SpotifyIframeApi) => void;
  }
}

const copy = {
  playlist: { ru: "Наш плейлист", en: "Our playlist", de: "Unsere Playlist" },
  madeForYou: { ru: "собрано для тебя", en: "made for you", de: "für dich zusammengestellt" },
  close: { ru: "Закрыть плейлист", en: "Close playlist", de: "Playlist schließen" },
  open: { ru: "Открыть весь плейлист", en: "Open full playlist", de: "Ganze Playlist öffnen" },
  favourite: { ru: "Добавить в любимые", en: "Add to favourites", de: "Zu Favoriten hinzufügen" },
  unfavourite: { ru: "Убрать из любимых", en: "Remove from favourites", de: "Aus Favoriten entfernen" },
  shuffle: { ru: "Перемешать", en: "Shuffle", de: "Mischen" },
  repeat: { ru: "Повторять песню", en: "Repeat track", de: "Titel wiederholen" },
  spotify: { ru: "Официальное воспроизведение Spotify", en: "Official Spotify playback", de: "Offizielle Spotify-Wiedergabe" },
  fallback: { ru: "Музыка с сайта", en: "Website audio", de: "Website-Audio" },
  useFallback: { ru: "Включить музыку с сайта", en: "Play website audio", de: "Website-Audio abspielen" },
  songs: { ru: "песен", en: "songs", de: "Songs" },
  albumLoading: { ru: "Альбом загружается…", en: "Loading album…", de: "Album wird geladen…" }
} as const;

function tx(value: Record<Language, string>, language: Language) {
  return value[language];
}

function formatTime(value: number) {
  if (!Number.isFinite(value) || value <= 0) return "0:00";
  const minutes = Math.floor(value / 60);
  const seconds = Math.floor(value % 60).toString().padStart(2, "0");
  return `${minutes}:${seconds}`;
}

function PlaylistRow({
  track,
  index,
  active,
  playing,
  favourite,
  language,
  onPlay,
  onFavourite,
  metadataEnabled
}: {
  track: MusicTrack;
  index: number;
  active: boolean;
  playing: boolean;
  favourite: boolean;
  language: Language;
  onPlay: () => void;
  onFavourite: () => void;
  metadataEnabled: boolean;
}) {
  const metadata = useMusicMetadata(track, metadataEnabled);

  return (
    <article className={`playlist-row ${active ? "is-active" : ""}`}>
      <button type="button" className="playlist-row-main" onClick={onPlay} aria-label={`${playing && active ? t.pauseMusic[language] : t.playMusic[language]}: ${track.title}`}>
        <span className="playlist-row-number">{String(index + 1).padStart(2, "0")}</span>
        <AlbumCover track={track} active={active && playing} metadataEnabled={metadataEnabled} />
        <span className="playlist-row-copy">
          <strong>{track.title}</strong>
          <small>{track.artist}</small>
          <em>{metadata.album || tx(copy.albumLoading, language)}</em>
        </span>
        <span className={`playlist-row-play ${active && playing ? "is-playing" : ""}`}>
          {active && playing ? <Pause size={17} fill="currentColor" /> : <Play size={17} fill="currentColor" />}
        </span>
      </button>
      <span className="playlist-row-duration">{formatTime(metadata.duration || track.duration || 0)}</span>
      <button type="button" className={`playlist-row-heart ${favourite ? "is-favourite" : ""}`} onClick={onFavourite} aria-label={tx(favourite ? copy.unfavourite : copy.favourite, language)}>
        <Heart size={17} fill={favourite ? "currentColor" : "none"} />
      </button>
    </article>
  );
}

export function MusicPlayer({ language, shouldStart }: Props) {
  const audioRef = useRef<HTMLAudioElement | null>(null);
  const spotifyHostRef = useRef<HTMLDivElement | null>(null);
  const spotifyControllerRef = useRef<SpotifyController | null>(null);
  const sourceRef = useRef<"spotify" | "local">("spotify");
  const desiredPlayingRef = useRef(false);
  const startHandledRef = useRef(false);
  const spotifyEndHandledRef = useRef("");
  const [trackIndex, setTrackIndex] = useState(0);
  const [playing, setPlaying] = useState(false);
  const [duration, setDuration] = useState(musicTracks[0].duration ?? 0);
  const [currentTime, setCurrentTime] = useState(0);
  const [open, setOpen] = useState(false);
  const [playlistOpen, setPlaylistOpen] = useState(false);
  const [spotifyReady, setSpotifyReady] = useState(false);
  const [source, setSource] = useState<"spotify" | "local">("spotify");
  const [shuffle, setShuffle] = useState(false);
  const [repeat, setRepeat] = useState(false);
  const [favourites, setFavourites] = useState<Set<string>>(() => {
    try {
      return new Set(JSON.parse(localStorage.getItem("birthday-favourite-tracks") ?? "[]") as string[]);
    } catch {
      return new Set();
    }
  });
  const track = musicTracks[trackIndex];
  const metadata = useMusicMetadata(track, true);
  const progress = useMemo(() => (duration ? Math.min((currentTime / duration) * 100, 100) : 0), [currentTime, duration]);

  useEffect(() => {
    sourceRef.current = source;
  }, [source]);

  useEffect(() => {
    localStorage.setItem("birthday-favourite-tracks", JSON.stringify([...favourites]));
  }, [favourites]);

  useEffect(() => {
    const audio = track.localFallback ? new Audio(track.localFallback) : null;
    audioRef.current = audio;
    setCurrentTime(0);
    setDuration(metadata.duration || track.duration || 0);
    spotifyEndHandledRef.current = "";
    window.dispatchEvent(new CustomEvent("birthday-track-changed", { detail: { id: track.id } }));

    if (!audio) return;
    audio.preload = "metadata";
    audio.volume = 0.28;
    const updateTime = () => {
      if (sourceRef.current === "local") setCurrentTime(audio.currentTime);
    };
    const updateDuration = () => {
      if (sourceRef.current === "local") setDuration(audio.duration || track.duration || 0);
    };
    const ended = () => window.dispatchEvent(new Event("birthday-track-ended"));
    audio.addEventListener("timeupdate", updateTime);
    audio.addEventListener("loadedmetadata", updateDuration);
    audio.addEventListener("ended", ended);

    if (sourceRef.current === "local" && desiredPlayingRef.current) {
      audio.play().then(() => setPlaying(true)).catch(() => setPlaying(false));
    }

    return () => {
      audio.pause();
      audio.removeEventListener("timeupdate", updateTime);
      audio.removeEventListener("loadedmetadata", updateDuration);
      audio.removeEventListener("ended", ended);
    };
  }, [metadata.duration, track]);

  useEffect(() => {
    let disposed = false;
    let controller: SpotifyController | null = null;
    const previousReady = window.onSpotifyIframeApiReady;

    const createController = (api: SpotifyIframeApi) => {
      if (!spotifyHostRef.current || spotifyControllerRef.current || disposed) return;
      api.createController(
        spotifyHostRef.current,
        { url: musicTracks[0].spotifyUrl, width: "100%", height: 152 },
        (created) => {
          if (disposed) {
            created.destroy();
            return;
          }
          controller = created;
          spotifyControllerRef.current = created;
          created.addListener("ready", () => setSpotifyReady(true));
          created.addListener("playback_started", () => {
            sourceRef.current = "spotify";
            setSource("spotify");
            audioRef.current?.pause();
            desiredPlayingRef.current = true;
            setPlaying(true);
          });
          created.addListener("playback_update", (event) => {
            if (sourceRef.current !== "spotify") return;
            const nextDuration = (event.data.duration ?? 0) / 1000;
            const nextPosition = (event.data.position ?? 0) / 1000;
            if (nextDuration) setDuration(nextDuration);
            setCurrentTime(nextPosition);
            setPlaying(!event.data.isPaused && !event.data.isBuffering);

            const uri = event.data.playingURI ?? "track";
            if (desiredPlayingRef.current && event.data.isPaused && nextDuration > 0 && nextDuration - nextPosition < 0.9 && spotifyEndHandledRef.current !== uri) {
              spotifyEndHandledRef.current = uri;
              window.dispatchEvent(new Event("birthday-track-ended"));
            }
          });
        }
      );
    };

    window.onSpotifyIframeApiReady = (api) => {
      previousReady?.(api);
      createController(api);
    };

    if (!document.getElementById("spotify-iframe-api")) {
      const script = document.createElement("script");
      script.id = "spotify-iframe-api";
      script.src = "https://open.spotify.com/embed/iframe-api/v1";
      script.async = true;
      document.body.appendChild(script);
    }

    return () => {
      disposed = true;
      controller?.destroy();
      spotifyControllerRef.current = null;
      window.onSpotifyIframeApiReady = previousReady;
    };
  }, []);

  useEffect(() => {
    const controller = spotifyControllerRef.current;
    if (!controller || !spotifyReady) return;
    controller.loadEntity(track.spotifyUrl);
    if (sourceRef.current === "spotify" && desiredPlayingRef.current) {
      window.setTimeout(() => controller.play(), 180);
    }
  }, [spotifyReady, track.spotifyUrl]);

  const playLocalFallback = useCallback(() => {
    const audio = audioRef.current;
    if (!audio || !track.localFallback) return;
    spotifyControllerRef.current?.pause();
    sourceRef.current = "local";
    setSource("local");
    desiredPlayingRef.current = true;
    audio.play().then(() => setPlaying(true)).catch(() => setPlaying(false));
  }, [track.localFallback]);

  const startPlayback = useCallback(() => {
    desiredPlayingRef.current = true;
    if (spotifyReady && spotifyControllerRef.current) {
      sourceRef.current = "spotify";
      setSource("spotify");
      audioRef.current?.pause();
      spotifyControllerRef.current.resume();
      setPlaying(true);
      return;
    }
    playLocalFallback();
  }, [playLocalFallback, spotifyReady]);

  const pausePlayback = useCallback(() => {
    desiredPlayingRef.current = false;
    if (sourceRef.current === "spotify") spotifyControllerRef.current?.pause();
    else audioRef.current?.pause();
    setPlaying(false);
  }, []);

  const selectTrack = useCallback((nextIndex: number, autoplay = true) => {
    pausePlayback();
    const normalized = (nextIndex + musicTracks.length) % musicTracks.length;
    desiredPlayingRef.current = autoplay;
    setTrackIndex(normalized);
    setCurrentTime(0);
    if (autoplay) {
      window.setTimeout(() => {
        if (spotifyControllerRef.current) {
          sourceRef.current = "spotify";
          setSource("spotify");
          spotifyControllerRef.current.loadEntity(musicTracks[normalized].spotifyUrl);
          spotifyControllerRef.current.play();
          setPlaying(true);
        } else {
          sourceRef.current = "local";
          setSource("local");
        }
      }, 220);
    }
  }, [pausePlayback]);

  const moveTrack = useCallback((step: number) => {
    if (step > 0 && shuffle) {
      let next = trackIndex;
      while (next === trackIndex && musicTracks.length > 1) next = Math.floor(Math.random() * musicTracks.length);
      selectTrack(next, true);
      return;
    }
    selectTrack(trackIndex + step, true);
  }, [selectTrack, shuffle, trackIndex]);

  useEffect(() => {
    const openPlaylist = () => setPlaylistOpen(true);
    const playSelected = (event: Event) => {
      const { id, autoplay = true } = (event as CustomEvent<{ id: string; autoplay?: boolean }>).detail;
      const index = musicTracks.findIndex((item) => item.id === id);
      if (index < 0) return;
      if (index === trackIndex && playing) pausePlayback();
      else if (index === trackIndex) startPlayback();
      else selectTrack(index, autoplay);
    };
    const ended = () => {
      if (repeat) {
        if (sourceRef.current === "spotify") {
          spotifyControllerRef.current?.seek(0);
          spotifyControllerRef.current?.play();
        } else if (audioRef.current) {
          audioRef.current.currentTime = 0;
          audioRef.current.play().catch(() => undefined);
        }
      } else {
        moveTrack(1);
      }
    };
    const startFromGiftClick = () => {
      startHandledRef.current = true;
      startPlayback();
    };
    window.addEventListener("birthday-open-playlist", openPlaylist);
    window.addEventListener("birthday-play-track", playSelected);
    window.addEventListener("birthday-track-ended", ended);
    window.addEventListener("birthday-start-music", startFromGiftClick);
    return () => {
      window.removeEventListener("birthday-open-playlist", openPlaylist);
      window.removeEventListener("birthday-play-track", playSelected);
      window.removeEventListener("birthday-track-ended", ended);
      window.removeEventListener("birthday-start-music", startFromGiftClick);
    };
  }, [moveTrack, pausePlayback, playing, repeat, selectTrack, startPlayback, trackIndex]);

  useEffect(() => {
    if (!shouldStart || startHandledRef.current) return;
    startHandledRef.current = true;
    startPlayback();
  }, [shouldStart, startPlayback]);

  useEffect(() => {
    if (!shouldStart) return;
    let observer: IntersectionObserver | null = null;
    const finaleIndex = musicTracks.findIndex((item) => item.id === "turning-page");
    const watch = () => {
      const section = document.getElementById("final");
      if (!section || observer || finaleIndex < 0) return false;
      observer = new IntersectionObserver(([entry]) => {
        if (entry.isIntersecting && trackIndex !== finaleIndex) selectTrack(finaleIndex, desiredPlayingRef.current);
      }, { threshold: 0.45 });
      observer.observe(section);
      return true;
    };
    const mutation = new MutationObserver(() => {
      if (watch()) mutation.disconnect();
    });
    if (!watch()) mutation.observe(document.body, { childList: true, subtree: true });
    return () => {
      mutation.disconnect();
      observer?.disconnect();
    };
  }, [selectTrack, shouldStart, trackIndex]);

  useEffect(() => {
    if (!open) return;
    const initialY = window.scrollY;
    const collapse = () => {
      if (Math.abs(window.scrollY - initialY) >= 20) setOpen(false);
    };
    window.addEventListener("scroll", collapse, { passive: true });
    return () => window.removeEventListener("scroll", collapse);
  }, [open]);

  useEffect(() => {
    if (!playlistOpen) return;
    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    const close = (event: KeyboardEvent) => {
      if (event.key === "Escape") setPlaylistOpen(false);
    };
    window.addEventListener("keydown", close);
    return () => {
      document.body.style.overflow = previousOverflow;
      window.removeEventListener("keydown", close);
    };
  }, [playlistOpen]);

  const toggle = () => playing ? pausePlayback() : startPlayback();
  const seek = (value: string) => {
    const nextTime = (Number(value) / 100) * duration;
    if (sourceRef.current === "spotify") spotifyControllerRef.current?.seek(Math.round(nextTime));
    else if (audioRef.current) audioRef.current.currentTime = nextTime;
    setCurrentTime(nextTime);
  };
  const toggleFavourite = (id: string) => setFavourites((current) => {
    const next = new Set(current);
    if (next.has(id)) next.delete(id); else next.add(id);
    return next;
  });
  const sourceLabel = source === "spotify" ? tx(copy.spotify, language) : tx(copy.fallback, language);

  const controls = (large = false) => (
    <div className={`mixer-controls ${large ? "is-large" : ""}`}>
      <button type="button" className={shuffle ? "is-active" : ""} onClick={() => setShuffle((value) => !value)} aria-label={tx(copy.shuffle, language)}><Shuffle size={large ? 19 : 17} /></button>
      <button type="button" onClick={() => moveTrack(-1)} aria-label={t.previousTrack[language]}><SkipBack size={large ? 24 : 21} fill="currentColor" /></button>
      <button type="button" className="mixer-play" onClick={toggle} aria-label={playing ? t.pauseMusic[language] : t.playMusic[language]}>
        {playing ? <Pause size={large ? 27 : 23} fill="currentColor" /> : <Play size={large ? 29 : 25} fill="currentColor" />}
      </button>
      <button type="button" onClick={() => moveTrack(1)} aria-label={t.nextTrack[language]}><SkipForward size={large ? 24 : 21} fill="currentColor" /></button>
      <button type="button" className={repeat ? "is-active" : ""} onClick={() => setRepeat((value) => !value)} aria-label={tx(copy.repeat, language)}><Repeat2 size={large ? 19 : 17} /></button>
    </div>
  );

  const modal = (
    <div className={`playlist-modal-backdrop ${playlistOpen ? "is-open" : ""}`} aria-hidden={!playlistOpen}>
      <section className="playlist-modal" role="dialog" aria-modal="true" aria-label={tx(copy.playlist, language)}>
        <div className="playlist-modal-glow" aria-hidden="true" />
        <header className="playlist-modal-header">
          <div>
            <span><Music2 size={15} /> {tx(copy.madeForYou, language)}</span>
            <h2>{tx(copy.playlist, language)} <Heart size={25} fill="currentColor" /></h2>
            <p>{musicTracks.length} {tx(copy.songs, language)} · Spotify</p>
          </div>
          <button type="button" className="playlist-modal-close" onClick={() => setPlaylistOpen(false)} aria-label={tx(copy.close, language)}><X size={22} /></button>
        </header>

        <div className="playlist-now-playing">
          <AlbumCover track={track} eager active={playing} />
          <div className="playlist-now-copy">
            <span>{sourceLabel}</span>
            <h3>{track.title}</h3>
            <p>{track.artist}</p>
            <small>{metadata.album || tx(copy.albumLoading, language)}</small>
            <div className="playlist-now-progress mixer-progress">
              <span>{formatTime(currentTime)}</span>
              <input type="range" min="0" max="100" value={progress} onChange={(event) => seek(event.target.value)} aria-label={t.seekTrack[language]} style={{ "--progress": `${progress}%` } as CSSProperties} />
              <span>{formatTime(duration || metadata.duration)}</span>
            </div>
            <div className="playlist-now-actions">
              {controls(true)}
              <button type="button" className={`playlist-now-heart ${favourites.has(track.id) ? "is-favourite" : ""}`} onClick={() => toggleFavourite(track.id)} aria-label={tx(favourites.has(track.id) ? copy.unfavourite : copy.favourite, language)}>
                <Heart size={20} fill={favourites.has(track.id) ? "currentColor" : "none"} />
              </button>
            </div>
          </div>
        </div>

        <div className="spotify-embed-shell">
          <div ref={spotifyHostRef} className="spotify-embed-host" />
          <div className="spotify-embed-caption">
            <span>{spotifyReady ? tx(copy.spotify, language) : "Spotify…"}</span>
            <a href={track.spotifyUrl} target="_blank" rel="noreferrer">Spotify <ExternalLink size={14} /></a>
            {track.localFallback && <button type="button" onClick={playLocalFallback}>{tx(copy.useFallback, language)}</button>}
          </div>
        </div>

        <div className="playlist-scroll" role="list">
          {musicTracks.map((item, index) => (
            <PlaylistRow
              key={item.id}
              track={item}
              index={index}
              active={index === trackIndex}
              playing={playing}
              favourite={favourites.has(item.id)}
              language={language}
              onPlay={() => index === trackIndex ? toggle() : selectTrack(index, true)}
              onFavourite={() => toggleFavourite(item.id)}
              metadataEnabled={playlistOpen}
            />
          ))}
        </div>
      </section>
    </div>
  );

  return (
    <>
      <motion.aside className={`site-mixer ${open ? "is-open" : "is-docked"} ${playing ? "is-playing" : ""}`} initial={{ opacity: 0, y: 24 }} animate={{ opacity: 1, y: 0 }} data-romantic="true">
        <div className="mixer-ambient" aria-hidden="true"><span /><span /><span /></div>
        <div className="mixer-cover"><AlbumCover track={track} eager active={playing} /></div>
        <div className="mixer-body">
          <div className="mixer-meta">
            <div><strong>{track.title}</strong><span>{track.artist}</span></div>
            <span className="mixer-badge" title={sourceLabel}><Music2 size={13} /></span>
            <div className={`mixer-equalizer ${playing ? "is-playing" : ""}`} aria-hidden="true"><i /><i /><i /><i /></div>
          </div>
          <div className="mixer-progress">
            <span>{formatTime(currentTime)}</span>
            <input type="range" min="0" max="100" value={progress} onChange={(event) => seek(event.target.value)} aria-label={t.seekTrack[language]} style={{ "--progress": `${progress}%` } as CSSProperties} />
            <span>{formatTime(duration || metadata.duration)}</span>
          </div>
          <button type="button" className="mixer-source" onClick={() => setPlaylistOpen(true)}><ListMusic size={14} /> {sourceLabel}</button>
        </div>
        {controls()}
        <button type="button" className="mixer-collapse" onClick={() => setOpen((value) => !value)} aria-label={open ? t.collapsePlayer[language] : t.expandPlayer[language]}>
          {open ? <ChevronDown size={18} /> : <Maximize2 size={16} />}
        </button>
        <button type="button" className="mixer-playlist-open" onClick={() => setPlaylistOpen(true)} aria-label={tx(copy.open, language)}><ListMusic size={17} /></button>
      </motion.aside>
      {createPortal(modal, document.body)}
    </>
  );
}
