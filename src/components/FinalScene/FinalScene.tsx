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
  const finalParagraphs = tr(ui.finalText).split("\n\n");
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
          <span
            key={photo.src}
            style={{
              backgroundImage: `url(${photo.src})`,
              "--i": index,
              "--float-duration": `${7.2 + index * 0.46}s`,
              "--float-delay": `${index * -0.72}s`,
              "--float-x": `${index % 2 === 0 ? 12 + index : -12 - index}px`,
              "--float-y": `${index % 3 === 0 ? -18 : 14}px`,
            } as CSSProperties}
          />
        ))}
      </div>
      {!done && (
        <div className="final-pulse-rings" aria-hidden="true">
          <span />
          <span />
          <span />
        </div>
      )}
      {!done && <div className="final-orbit" aria-hidden="true">
        {Array.from({ length: 28 }, (_, i) => (
          <span
            key={i}
            style={{
              transform: `rotate(${i * 13}deg) translateY(${90 + (i % 5) * 12}px)`,
              "--twinkle-delay": `${-(i % 7) * 0.34}s`,
            } as CSSProperties}
          >
            {"\u2665"}
          </span>
        ))}
      </div>}
      <AnimatePresence mode="wait">
        {!done && (
          <motion.div
            className="final-copy"
            key="final-copy"
            initial={{ opacity: 0, y: 36, scale: 0.97 }}
            whileInView={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: -30, scale: 0.96 }}
            transition={{ duration: 0.8, ease: [0.2, 0.8, 0.2, 1] }}
            viewport={{ once: true, amount: 0.25 }}
          >
            <div className="final-text">
              {finalParagraphs.map((paragraph, index) => (
                <motion.p
                  key={`${paragraph}-${index}`}
                  initial={{ opacity: 0, y: 24, filter: "blur(7px)" }}
                  whileInView={{ opacity: 1, y: 0, filter: "blur(0px)" }}
                  transition={{ duration: 0.72, delay: 0.18 + index * 0.28, ease: [0.2, 0.8, 0.2, 1] }}
                  viewport={{ once: true, amount: 0.35 }}
                >
                  {paragraph}
                </motion.p>
              ))}
            </div>
            <motion.button
              className="heart-action"
              onClick={() => setDone(true)}
              aria-label={tr(ui.touchHeart)}
              initial={{ opacity: 0, y: 18 }}
              whileInView={{ opacity: 1, y: 0 }}
              whileHover={{ scale: 1.045 }}
              whileTap={{ scale: 0.9 }}
              transition={{ delay: 1.18, duration: 0.48 }}
              viewport={{ once: true }}
            >
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
                {"\u2665"}
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
