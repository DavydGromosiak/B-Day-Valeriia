import { motion } from "framer-motion";
import { Headphones, ListMusic, Play, Sparkles } from "lucide-react";
import { useEffect, useState } from "react";
import { featuredMusicTracks, musicTracks } from "../../data/musicTracks";
import { LocalizedString } from "../../data/translations";
import { AlbumCover } from "./AlbumCover";

type Props = { tr: (value: LocalizedString) => string };

function playTrack(id: string) {
  window.dispatchEvent(new CustomEvent("birthday-play-track", { detail: { id, autoplay: true } }));
}

export function PlaylistPreview({ tr }: Props) {
  const [activeId, setActiveId] = useState(musicTracks[0].id);

  useEffect(() => {
    const update = (event: Event) => setActiveId((event as CustomEvent<{ id: string }>).detail.id);
    window.addEventListener("birthday-track-changed", update);
    return () => window.removeEventListener("birthday-track-changed", update);
  }, []);

  return (
    <div className="playlist-preview" data-romantic="true">
      <div className="playlist-preview-copy">
        <span><Headphones size={15} /> {tr({ ru: "наш саундтрек", en: "our soundtrack", de: "unser Soundtrack" })}</span>
        <h3>{tr({ ru: "Музыка наших воспоминаний", en: "Music for our memories", de: "Musik für unsere Erinnerungen" })}</h3>
        <p>{tr({
          ru: "Песни, которые звучат как тёплые разговоры, прогулки и маленькие моменты рядом с тобой.",
          en: "Songs that feel like warm conversations, walks, and little moments beside you.",
          de: "Lieder, die sich wie warme Gespräche, Spaziergänge und kleine Momente mit dir anfühlen."
        })}</p>
      </div>

      <div className="playlist-featured-grid">
        {featuredMusicTracks.map((track, index) => (
          <motion.button
            type="button"
            className={`playlist-featured-card ${activeId === track.id ? "is-active" : ""}`}
            key={track.id}
            onClick={() => playTrack(track.id)}
            whileHover={{ y: -4 }}
            whileTap={{ scale: 0.985 }}
          >
            <AlbumCover track={track} active={activeId === track.id} />
            <span className="playlist-featured-number">{String(index + 1).padStart(2, "0")}</span>
            <span className="playlist-featured-meta">
              <strong>{track.title}</strong>
              <small>{track.artist}</small>
            </span>
            <span className="playlist-featured-play"><Play size={18} fill="currentColor" /></span>
          </motion.button>
        ))}
      </div>

      <button type="button" className="open-playlist-button" onClick={() => window.dispatchEvent(new Event("birthday-open-playlist"))}>
        <ListMusic size={19} />
        {tr({ ru: "Открыть наш плейлист", en: "Open our playlist", de: "Unsere Playlist öffnen" })}
        <Sparkles size={16} />
      </button>
    </div>
  );
}
