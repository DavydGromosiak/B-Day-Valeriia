import { AnimatePresence, motion } from "framer-motion";
import { RotateCcw, Sparkles, Star } from "lucide-react";
import { CSSProperties, useMemo, useState } from "react";
import { birthdayWishes } from "../../data/wishConstellation";
import { LocalizedString } from "../../data/translations";

type Props = { tr: (value: LocalizedString) => string; ui: Record<string, any> };

export function WishConstellation({ tr, ui }: Props) {
  const [opened, setOpened] = useState<number[]>([]);
  const [activeId, setActiveId] = useState<number | null>(null);
  const activeWish = useMemo(
    () => birthdayWishes.find((wish) => wish.id === activeId) ?? null,
    [activeId]
  );
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
    setActiveId(null);
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
            const isActive = activeWish?.id === wish.id;
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

        <motion.article
          className={`wish-card ${activeWish ? "is-revealed" : "is-sealed"}`}
          data-wish-number={activeWish ? String(activeWish.id).padStart(2, "0") : ""}
          layout
        >
          <AnimatePresence mode="wait">
            {activeWish ? (
              <motion.div
                className="wish-message"
                key={activeWish.id}
                initial={{ opacity: 0, rotateX: -72, y: -18, scale: 0.94 }}
                animate={{ opacity: 1, rotateX: 0, y: 0, scale: 1 }}
                exit={{ opacity: 0, rotateX: 40, y: 12, scale: 0.97 }}
                transition={{ duration: 0.42, ease: [0.2, 0.8, 0.2, 1] }}
              >
                <div className="wish-message-head">
                  <motion.div
                    className="wish-message-icon"
                    initial={{ scale: 0.6, rotate: -28 }}
                    animate={{ scale: 1, rotate: 0 }}
                    transition={{ delay: 0.12, type: "spring", stiffness: 230, damping: 16 }}
                  >
                    <Star size={22} fill="currentColor" />
                  </motion.div>
                  <span>{tr(ui.wishNumber)} {String(activeWish.id).padStart(2, "0")}</span>
                  <strong>{String(activeWish.id).padStart(2, "0")} / 15</strong>
                </div>
                <h3>{tr(activeWish.title)}</h3>
                <div className="wish-message-divider" aria-hidden="true">
                  <i />
                  <Sparkles size={15} />
                  <i />
                </div>
                <p>{tr(activeWish.text)}</p>
                <div className="wish-message-progress">
                  <span>{tr(ui.wishesProgress)}</span>
                  <b>{String(opened.length).padStart(2, "0")} / 15</b>
                </div>
              </motion.div>
            ) : (
              <motion.div
                className="wish-sealed"
                key="sealed-wish"
                initial={{ opacity: 0, scale: 0.94 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9, y: 14 }}
                transition={{ duration: 0.3 }}
              >
                <motion.div
                  className="wish-seal"
                  animate={{ scale: [1, 1.06, 1], rotate: [0, 3, 0, -3, 0] }}
                  transition={{ duration: 4.8, repeat: Infinity, ease: "easeInOut" }}
                >
                  <Star size={28} />
                </motion.div>
                <span>{tr(ui.wishesSealedKicker)}</span>
                <h3>{tr(ui.wishesSealedTitle)}</h3>
                <p>{tr(ui.wishesSealedText)}</p>
              </motion.div>
            )}
          </AnimatePresence>
          {opened.length > 0 && (
            <button className="icon-text-button wish-reset" onClick={reset}>
              <RotateCcw size={16} />
              {tr(ui.wishesReset)}
            </button>
          )}
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
