import { AnimatePresence, motion } from "framer-motion";
import { Heart } from "lucide-react";
import type { CSSProperties } from "react";
import { useState } from "react";
import { photos } from "../../data/photos";
import { LocalizedString } from "../../data/translations";

type Props = { tr: (value: LocalizedString) => string; ui: Record<string, any> };

export function FinalScene({ tr, ui }: Props) {
  const [done, setDone] = useState(false);
  const finalPhotos = photos.slice(0, 8);
  const heartRain = Array.from({ length: 72 }, (_, index) => ({
    left: `${2 + ((index * 37) % 96)}%`,
    delay: `${(index % 24) * 0.07}s`,
    duration: `${3.8 + (index % 8) * 0.28}s`,
    driftStart: `${((index % 5) - 2) * 7}px`,
    driftEnd: `${(((index * 3) % 9) - 4) * 12}px`,
    scale: `${0.68 + (index % 7) * 0.07}`,
  }));

  return (
    <section id="final" className={`page-section final-section ${done ? "is-complete" : ""}`}>
      <div className="final-photo-dust" aria-hidden="true">
        {finalPhotos.map((photo, index) => (
          <span key={photo.src} style={{ backgroundImage: `url(${photo.src})`, "--i": index } as CSSProperties} />
        ))}
      </div>
      {!done && <div className="final-orbit" aria-hidden="true">
        {Array.from({ length: 28 }, (_, i) => <span key={i} style={{ transform: `rotate(${i * 13}deg) translateY(${90 + (i % 5) * 12}px)` }}>{"\u{1F49C}"}</span>)}
      </div>}
      <AnimatePresence mode="wait">
        {!done && (
          <motion.div className="final-copy" key="final-copy" initial={{ opacity: 0, y: 24 }} whileInView={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -24 }} viewport={{ once: true }}>
            <p className="final-text">{tr(ui.finalText)}</p>
            <motion.button className="heart-action" onClick={() => setDone(true)} aria-label={tr(ui.touchHeart)} whileTap={{ scale: 0.92 }}>
              <Heart size={44} fill="currentColor" /> <span>{tr(ui.touchHeart)}</span>
            </motion.button>
          </motion.div>
        )}
      </AnimatePresence>
      <AnimatePresence>
        {done && (
          <motion.div className="confetti-layer" initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}>
            {heartRain.map((heart, i) => (
              <span
                key={i}
                style={{
                  left: heart.left,
                  animationDelay: heart.delay,
                  animationDuration: heart.duration,
                  "--drift-start": heart.driftStart,
                  "--drift-end": heart.driftEnd,
                  "--heart-scale": heart.scale,
                } as CSSProperties}
              >
                {"\u{1F49C}"}
              </span>
            ))}
            <motion.div className="final-reveal" initial={{ scale: 0.86, opacity: 0 }} animate={{ scale: [0.86, 1.04, 1], opacity: 1 }} transition={{ duration: 0.9 }}>
              <div className="final-heart-shell" aria-hidden="true" />
              <strong>{tr(ui.finalSignature)}</strong>
              <p>{tr(ui.finalAfterNote)}</p>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
