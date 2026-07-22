import { AnimatePresence, motion } from "framer-motion";
import { Heart, List, Shuffle } from "lucide-react";
import { useState } from "react";
import { reasons } from "../../data/reasons";
import { LocalizedString } from "../../data/translations";
import { useLocalStorage } from "../../hooks/useLocalStorage";

type Props = { tr: (value: LocalizedString) => string; ui: Record<string, any> };

export function ReasonsSection({ tr, ui }: Props) {
  const [index, setIndex] = useState(0);
  const [showAll, setShowAll] = useState(false);
  const [favorites, setFavorites] = useLocalStorage<number[]>("favorite-reasons", []);
  const isFavorite = favorites.includes(index);
  const go = (step: number) => setIndex((value) => (value + step + reasons.length) % reasons.length);
  const toggleFavorite = () => setFavorites(isFavorite ? favorites.filter((item) => item !== index) : [...favorites, index]);

  return (
    <section id="reasons" className="page-section content-section">
      <p className="section-kicker">birthday.PROTOCOL_FOR_LERA</p>
      <h2>{tr(ui.reasonsTitle)}</h2>
      <div className="reason-layout">
        <div className="reason-card" onTouchStart={(event) => (event.currentTarget.dataset.startX = String(event.touches[0].clientX))} onTouchEnd={(event) => {
          const start = Number(event.currentTarget.dataset.startX || 0);
          const diff = event.changedTouches[0].clientX - start;
          if (Math.abs(diff) > 45) go(diff > 0 ? -1 : 1);
        }}>
          <span className="reason-number">{String(index + 1).padStart(3, "0")} / 100</span>
          <AnimatePresence mode="wait">
            <motion.p key={index} initial={{ opacity: 0, y: 18 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -18 }}>
              {tr(reasons[index])}
            </motion.p>
          </AnimatePresence>
          <button className={`heart-toggle ${isFavorite ? "active" : ""}`} onClick={toggleFavorite} aria-label={tr(ui.favorite)}>
            <Heart size={22} fill={isFavorite ? "currentColor" : "none"} />
          </button>
        </div>
        <div className="control-row">
          <button className="ghost-button" onClick={() => go(-1)}>{tr(ui.previous)}</button>
          <button className="icon-text-button" onClick={() => setIndex(Math.floor(Math.random() * reasons.length))}><Shuffle size={17} />{tr(ui.random)}</button>
          <button className="ghost-button" onClick={() => go(1)}>{tr(ui.next)}</button>
          <button className="icon-text-button" onClick={() => setShowAll((v) => !v)}><List size={17} />{tr(ui.allReasons)}</button>
        </div>
      </div>
      {showAll && (
        <motion.div className="reason-list" initial={{ opacity: 0 }} animate={{ opacity: 1 }}>
          {reasons.map((reason, i) => <button key={reason.ru} onClick={() => setIndex(i)}>{String(i + 1).padStart(2, "0")}. {tr(reason)}</button>)}
        </motion.div>
      )}
    </section>
  );
}
