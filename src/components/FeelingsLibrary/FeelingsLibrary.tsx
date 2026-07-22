import { motion } from "framer-motion";
import { BookOpen, Disc3, HeartHandshake, Image, Mail, Music2, Sparkles } from "lucide-react";
import { useState } from "react";
import { CardCategory, cards, FeelingCard } from "../../data/cards";
import { songCompliments } from "../../data/songCompliments";
import { LocalizedString } from "../../data/translations";
import { PostcardModal } from "../PostcardModal/PostcardModal";

type Props = { tr: (value: LocalizedString) => string; ui: Record<string, any> };

const icons = { birthday: Sparkles, love: Mail, moments: Image, secret: BookOpen, family: HeartHandshake };

export function FeelingsLibrary({ tr, ui }: Props) {
  const [category, setCategory] = useState<CardCategory | "all">("all");
  const [active, setActive] = useState<FeelingCard | null>(null);
  const [showSongs, setShowSongs] = useState(false);
  const filtered = category === "all" ? cards : cards.filter((card) => card.category === category);

  return (
    <section id="library" className="page-section content-section">
      <p className="section-kicker">letters / postcards / tiny stories</p>
      <h2>{tr(ui.libraryTitle)}</h2>
      <div className="tabs" role="tablist" aria-label={tr(ui.libraryTitle)}>
        <button className={category === "all" ? "active" : ""} onClick={() => setCategory("all")}>{tr(ui.allCards)}</button>
        {(Object.keys(ui.categories) as CardCategory[]).map((key) => (
          <button key={key} className={category === key ? "active" : ""} onClick={() => setCategory(key)}>{tr(ui.categories[key])}</button>
        ))}
      </div>
      <button className={`playlist-trigger ${showSongs ? "active" : ""}`} onClick={() => setShowSongs((value) => !value)} aria-expanded={showSongs}>
        <Disc3 size={18} />
        {tr(ui.songShelfTeaser)}
      </button>
      {showSongs && (
        <motion.div className="song-shelf" initial={{ opacity: 0, y: 18 }} animate={{ opacity: 1, y: 0 }}>
          <div className="song-shelf-heading">
            <Music2 size={24} />
            <div>
              <h3>{tr(ui.songShelfTitle)}</h3>
              <p>{tr(ui.songShelfNote)}</p>
            </div>
          </div>
          <div className="song-grid">
            {songCompliments.map((song, index) => (
              <motion.article
                className="song-card"
                key={song.id}
                initial={{ opacity: 0, y: 14 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.035 }}
                data-romantic="true"
              >
                <span>{tr(ui.inspiredBy)} / {song.vibe}</span>
                <p>{tr(song.note)}</p>
              </motion.article>
            ))}
          </div>
        </motion.div>
      )}
      <div className="card-grid">
        {filtered.map((card, i) => {
          const Icon = icons[card.category];
          return (
            <motion.button
              className={`feeling-card ${card.shape}`}
              key={`${category}-${card.id}`}
              onClick={() => setActive(card)}
              aria-label={`${tr(ui.openCard)}: ${tr(card.title)}`}
              initial={{ opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.04 }}
            >
              <Icon size={22} />
              <span>{tr(ui.categories[card.category])}</span>
              <strong>{tr(card.title)}</strong>
              <small>💜</small>
            </motion.button>
          );
        })}
      </div>
      <PostcardModal card={active} cards={filtered} tr={tr} ui={ui} onClose={() => setActive(null)} onSelect={setActive} />
    </section>
  );
}
