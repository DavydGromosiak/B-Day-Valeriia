import { Disc3, ExternalLink, ListMusic, Music2, Sparkles, Youtube } from "lucide-react";
import { songCompliments } from "../../data/songCompliments";
import { LocalizedString } from "../../data/translations";

type Props = { tr: (value: LocalizedString) => string; ui: Record<string, any> };

export function SongShelf({ tr, ui }: Props) {
  return (
    <div className="song-shelf">
      <div className="song-shelf-heading">
        <Music2 size={24} />
        <div>
          <h3>{tr(ui.songShelfTitle)}</h3>
          <p>{tr(ui.songShelfNote)}</p>
        </div>
      </div>

      <div className="song-grid">
        {songCompliments.map((song) => (
          <article className="song-card" key={song.id} data-romantic="true">
            <span className="song-artist">{song.artist}</span>
            <h4>
              <a href={song.spotifyUrl} target="_blank" rel="noreferrer" aria-label={`${tr(ui.listenOnSpotify)}: ${song.title}`}>
                {song.title}<ExternalLink size={16} />
              </a>
            </h4>
            <div className="song-service-links">
              <a href={song.spotifyUrl} target="_blank" rel="noreferrer" aria-label={`${tr(ui.listenOnSpotify)}: ${song.title}`}>
                <Disc3 size={15} /> Spotify
              </a>
              <a href={song.youtubeUrl} target="_blank" rel="noreferrer" aria-label={`${tr(ui.listenOnYoutube)}: ${song.title}`}>
                <Youtube size={16} /> YouTube
              </a>
            </div>
            <blockquote className="song-fragment">
              <small>{tr(ui.songFragmentLabel)}</small>
              <p>“{song.excerpt}”</p>
            </blockquote>
            <div className="song-why">
              <small>{tr(ui.songWhyLabel)}</small>
              <p>{tr(song.why)}</p>
            </div>
          </article>
        ))}
      </div>

      <button
        type="button"
        className="open-playlist-button"
        onClick={() => window.dispatchEvent(new Event("birthday-open-playlist"))}
      >
        <ListMusic size={19} />
        {tr({ ru: "Открыть наш плейлист", en: "Open our playlist", de: "Unsere Playlist öffnen" })}
        <Sparkles size={16} />
      </button>
    </div>
  );
}
