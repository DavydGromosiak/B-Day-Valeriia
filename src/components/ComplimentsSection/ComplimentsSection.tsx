import { motion } from "framer-motion";
import { useState } from "react";
import { compliments } from "../../data/compliments";
import { Language, LocalizedString } from "../../data/translations";

type Props = { language: Language; tr: (value: LocalizedString) => string; ui: Record<string, any> };

export function ComplimentsSection({ language, tr, ui }: Props) {
  const [active, setActive] = useState<number | null>(null);

  return (
    <section id="words" className="page-section content-section">
      <p className="section-kicker">constellation of you</p>
      <h2>{tr(ui.wordsTitle)}</h2>
      <p className="poem-text">{tr(ui.wordsIntro)}</p>
      <div className="compliment-grid">
        {compliments.map((word, i) => {
          const other = (Object.entries(word) as [Language, string][]).filter(([code]) => code !== language).map(([, value]) => value).join(" / ");
          return (
            <motion.button
              key={`${word.ru}-${i}`}
              className={`compliment ${active === i ? "active" : ""}`}
              onClick={() => setActive(active === i ? null : i)}
              onMouseEnter={() => setActive(i)}
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: Math.min(i * 0.01, 0.7) }}
            >
              {tr(word)}
              <span>{other}</span>
            </motion.button>
          );
        })}
      </div>
    </section>
  );
}
