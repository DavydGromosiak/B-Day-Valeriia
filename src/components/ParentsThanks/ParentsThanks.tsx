import { AnimatePresence, motion } from "framer-motion";
import { HeartHandshake, Home, Sparkles } from "lucide-react";
import { useState } from "react";
import { parentsThanks } from "../../data/parentsThanks";
import { LocalizedString } from "../../data/translations";

type Props = {
  tr: (value: LocalizedString) => string;
};

export function ParentsThanks({ tr }: Props) {
  const [open, setOpen] = useState(true);

  return (
    <section id="parents" className="page-section parents-section">
      <div className="parents-aurora" aria-hidden="true">
        <span /><span /><span />
      </div>

      <motion.div
        className="parents-shell"
        initial={{ opacity: 0, y: 36 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.25 }}
      >
        <p className="section-kicker">{tr(parentsThanks.kicker)}</p>

        <div className="parents-heading">
          <span className="parents-mark" aria-hidden="true"><HeartHandshake size={30} /></span>
          <h2>{tr(parentsThanks.title)}</h2>
          <p>{tr(parentsThanks.subtitle)}</p>
        </div>

        <div className="parents-layout">
          <motion.aside
            className="parents-note-panel"
            data-romantic="true"
            whileHover={{ y: -4, rotate: -1 }}
            transition={{ type: "spring", stiffness: 220, damping: 18 }}
          >
            <div className="parents-note-top">
              <Home size={22} />
              <span>family constellation</span>
            </div>
            <strong>{tr(parentsThanks.recipient)}</strong>
            <p>{tr(parentsThanks.title)}</p>
            <button className="primary-button parents-toggle" onClick={() => setOpen((value) => !value)} aria-expanded={open}>
              {tr(open ? parentsThanks.closeButton : parentsThanks.openButton)}
            </button>
          </motion.aside>

          <AnimatePresence initial={false}>
            {open && (
              <motion.article
                className="parents-letter-panel"
                initial={{ opacity: 0, x: 24, scale: 0.98 }}
                animate={{ opacity: 1, x: 0, scale: 1 }}
                exit={{ opacity: 0, x: 24, scale: 0.98 }}
                transition={{ duration: 0.32 }}
              >
                <Sparkles size={22} />
                <p>{tr(parentsThanks.letter)}</p>
                <strong>{tr(parentsThanks.signature)}</strong>
              </motion.article>
            )}
          </AnimatePresence>
        </div>

        <div className="parents-values">
          {parentsThanks.values.map((item, index) => (
            <motion.article
              className="parents-value"
              key={tr(item.title)}
              initial={{ opacity: 0, y: 18 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.045 }}
            >
              <span>{String(index + 1).padStart(2, "0")}</span>
              <strong>{tr(item.title)}</strong>
              <p>{tr(item.text)}</p>
            </motion.article>
          ))}
        </div>
      </motion.div>
    </section>
  );
}
