import { Music2 } from "lucide-react";
import { useEffect, useState } from "react";
import type { MusicTrack } from "../../data/musicTracks";
import { useMusicMetadata } from "../../hooks/useMusicMetadata";

type Props = {
  track: MusicTrack;
  eager?: boolean;
  active?: boolean;
  metadataEnabled?: boolean;
};

export function AlbumCover({ track, eager = false, active = false, metadataEnabled = true }: Props) {
  const metadata = useMusicMetadata(track, metadataEnabled);
  const [loaded, setLoaded] = useState(false);
  const [failed, setFailed] = useState(false);

  useEffect(() => {
    setLoaded(false);
    setFailed(false);
  }, [metadata.cover, track.id]);

  return (
    <span className={`album-cover ${loaded ? "is-loaded" : ""} ${active ? "is-playing" : ""}`} aria-hidden="true">
      <span className="album-cover-fallback"><Music2 size={24} /></span>
      {metadata.cover && !failed && (
        <img
          src={metadata.cover}
          alt=""
          loading={eager ? "eager" : "lazy"}
          decoding="async"
          onLoad={() => setLoaded(true)}
          onError={() => setFailed(true)}
        />
      )}
    </span>
  );
}
