import { motion } from "framer-motion";
import { BookOpen, Disc3, HeartHandshake, Image, Mail, Sparkles } from "lucide-react";
import { useState } from "react";
import { CardCategory, cards, FeelingCard } from "../../data/cards";
import { LocalizedString } from "../../data/translations";
import { PostcardModal } from "../PostcardModal/PostcardModal";
import { SongShelf } from "../SongShelf/SongShelf";

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
      <button className={`playlist-trigger ${showSongs ? "active" : ""}`} onClick={() => setShowSongs((value) => !value)} aria-expanded={showSongs} aria-controls="song-shelf">
        <Disc3 size={18} />
        {tr(ui.songShelfTeaser)}
      </button>
      {showSongs && <div id="song-shelf"><SongShelf tr={tr} ui={ui} /></div>}
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
