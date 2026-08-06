import { motion } from "framer-motion";
import { BookOpen, Disc3, ExternalLink, HeartHandshake, Image, Mail, Music2, Sparkles, Youtube } from "lucide-react";
import { useState } from "react";
import { CardCategory, cards, FeelingCard } from "../../data/cards";
import { songCompliments } from "../../data/songCompliments";
import { LocalizedString } from "../../data/translations";
import { PostcardModal } from "../PostcardModal/PostcardModal";

type Props = { tr: (value: LocalizedString) => string; ui: Record<string, any> };

const icons = { birthday: Sparkles, love: Mail, moments: Image, secret: BookOpen, family: HeartHandshake };
const CARDS_PER_PAGE = 16;

export function FeelingsLibrary({ tr, ui }: Props) {
  const [category, setCategory] = useState<CardCategory | "all">("all");
  const [active, setActive] = useState<FeelingCard | null>(null);
  const [showSongs, setShowSongs] = useState(false);
  const [visibleCount, setVisibleCount] = useState(CARDS_PER_PAGE);
  const filtered = category === "all" ? cards : cards.filter((card) => card.category === category);
  const visibleCards = filtered.slice(0, visibleCount);

  const selectCategory = (nextCategory: CardCategory | "all") => {
    setCategory(nextCategory);
    setVisibleCount(CARDS_PER_PAGE);
  };

  return (
    <section id="library" className="page-section content-section">
      <p className="section-kicker">{tr(ui.libraryKicker)}</p>
      <h2>{tr(ui.libraryTitle)}</h2>
      <div className="tabs" role="tablist" aria-label={tr(ui.libraryTitle)}>
        <button className={category === "all" ? "active" : ""} onClick={() => selectCategory("all")}>{tr(ui.allCards)}</button>
        {(Object.keys(ui.categories) as CardCategory[]).map((key) => (
          <button key={key} className={category === key ? "active" : ""} onClick={() => selectCategory(key)}>{tr(ui.categories[key])}</button>
        ))}
      </div>
      <button className={`playlist-trigger ${showSongs ? "active" : ""}`} onClick={() => setShowSongs((value) => !value)} aria-expanded={showSongs}>
        <Disc3 size={18} />
        {tr(ui.songShelfTeaser)}
      </button>
      {showSongs && (
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
              <article
                className="song-card"
                key={song.id}
                data-romantic="true"
              >
                <span className="song-artist">{song.artist}</span>
                <h4>
                  <a href={song.spotifyUrl} target="_blank" rel="noreferrer" aria-label={`${tr(ui.listenOnSpotify)}: ${song.title}`}>
                    {song.title}
                    <ExternalLink size={16} />
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
                <div className="song-fragment">
                  <small>{tr(ui.songFragmentLabel)}</small>
                  <p>{tr(song.fragment)}</p>
                </div>
                <div className="song-why">
                  <small>{tr(ui.songWhyLabel)}</small>
                  <p>{tr(song.why)}</p>
                </div>
              </article>
            ))}
          </div>
        </div>
      )}
      <div className="card-grid">
        {visibleCards.map((card, i) => {
          const Icon = icons[card.category];
          return (
            <motion.button
              className={`feeling-card ${card.shape}`}
              key={`${category}-${card.id}`}
              onClick={() => setActive(card)}
              aria-label={`${tr(ui.openCard)}: ${tr(card.title)}`}
              initial={{ opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: Math.min(i * 0.035, 0.42) }}
            >
              <Icon size={22} />
              <span>{tr(ui.categories[card.category])}</span>
              <strong>{tr(card.title)}</strong>
              <small>💜</small>
            </motion.button>
          );
        })}
      </div>
      {visibleCount < filtered.length && (
        <button
          className="library-load-more"
          onClick={() => setVisibleCount((count) => Math.min(count + CARDS_PER_PAGE, filtered.length))}
        >
          <span>{tr(ui.showMoreCards)}</span>
          <small>+{Math.min(CARDS_PER_PAGE, filtered.length - visibleCount)}</small>
        </button>
      )}
      <PostcardModal card={active} cards={filtered} tr={tr} ui={ui} onClose={() => setActive(null)} onSelect={setActive} />
    </section>
  );
}
