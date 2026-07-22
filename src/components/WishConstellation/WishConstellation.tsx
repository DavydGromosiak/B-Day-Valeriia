import { AnimatePresence, motion } from "framer-motion";
import { RotateCcw, Sparkles, Star } from "lucide-react";
import { CSSProperties, useMemo, useState } from "react";
import { birthdayWishes } from "../../data/wishConstellation";
import { LocalizedString } from "../../data/translations";
import { useLocalStorage } from "../../hooks/useLocalStorage";

type Props = { tr: (value: LocalizedString) => string; ui: Record<string, any> };

export function WishConstellation({ tr, ui }: Props) {
  const [opened, setOpened] = useLocalStorage<number[]>("opened-birthday-wishes-v1", []);
  const [activeId, setActiveId] = useState(opened[opened.length - 1] ?? birthdayWishes[0].id);
  const activeWish = useMemo(() => birthdayWishes.find((wish) => wish.id === activeId) ?? birthdayWishes[0], [activeId]);
  const openedSet = useMemo(() => new Set(opened), [opened]);
  const allOpened = opened.length === birthdayWishes.length;

  const openWish = (id: number) => {
    setActiveId(id);
    if (!openedSet.has(id)) {
      setOpened([...opened, id]);
    }
  };

  const reset = () => {
    setOpened([]);
    setActiveId(birthdayWishes[0].id);
  };

  return (
    <section id="wishes" className="page-section content-section wish-section">
      <p className="section-kicker">15 / birthday wish constellation</p>
      <h2>{tr(ui.wishesTitle)}</h2>
      <p className="poem-text">{tr(ui.wishesIntro)}</p>

      <div className="wish-shell">
        <div className="wish-progress" aria-label={tr(ui.wishesProgress)}>
          <span>{tr(ui.wishesProgress)}</span>
          <strong>{String(opened.length).padStart(2, "0")} / 15</strong>
          <i style={{ "--progress": `${(opened.length / birthdayWishes.length) * 100}%` } as CSSProperties} />
        </div>

        <div className="wish-sky" data-romantic="true">
          {birthdayWishes.map((wish, index) => {
            const isOpened = openedSet.has(wish.id);
            const isActive = activeWish.id === wish.id;
            return (
              <motion.button
                key={wish.id}
                className={`wish-star ${isOpened ? "is-opened" : ""} ${isActive ? "is-active" : ""}`}
                onClick={() => openWish(wish.id)}
                aria-label={`${tr(ui.wishesOpenStar)} ${wish.id}`}
                style={{ "--x": `${wish.x}%`, "--y": `${wish.y}%`, "--delay": `${index * 0.08}s` } as CSSProperties}
                initial={{ opacity: 0, scale: 0.4 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.035 }}
              >
                <Star size={18} fill={isOpened ? "currentColor" : "none"} />
                <span>{wish.id}</span>
              </motion.button>
            );
          })}
        </div>

        <motion.article className="wish-card" layout>
          <AnimatePresence mode="wait">
            <motion.div
              key={activeWish.id}
              initial={{ opacity: 0, y: 14 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -12 }}
              transition={{ duration: 0.22 }}
            >
              <span>{tr(ui.wishNumber)} {String(activeWish.id).padStart(2, "0")}</span>
              <h3>{tr(activeWish.title)}</h3>
              <p>{tr(activeWish.text)}</p>
            </motion.div>
          </AnimatePresence>
          <button className="icon-text-button wish-reset" onClick={reset}>
            <RotateCcw size={16} />
            {tr(ui.wishesReset)}
          </button>
        </motion.article>
      </div>

      {allOpened && (
        <motion.div
          className="wish-unlocked"
          initial={{ opacity: 0, y: 18, scale: 0.96 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          data-romantic="true"
        >
          <Sparkles size={22} />
          <strong>{tr(ui.wishesCompleteTitle)}</strong>
          <p>{tr(ui.wishesCompleteText)}</p>
        </motion.div>
      )}
    </section>
  );
}
