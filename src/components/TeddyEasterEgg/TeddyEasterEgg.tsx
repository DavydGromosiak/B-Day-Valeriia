import { AnimatePresence, motion } from "framer-motion";
import { X } from "lucide-react";
import { useEffect, useState } from "react";
import { LocalizedString } from "../../data/translations";

type Props = { tr: (value: LocalizedString) => string; ui: Record<string, any> };

const closeMessageLabel: LocalizedString = {
  ru: "Закрыть сообщение",
  en: "Close message",
  de: "Nachricht schließen"
};

export function TeddyEasterEgg({ tr, ui }: Props) {
  const [count, setCount] = useState(0);
  const [unlocked, setUnlocked] = useState(false);
  const [messageOpen, setMessageOpen] = useState(false);

  useEffect(() => {
    if (!messageOpen) return;

    const closeOnEscape = (event: KeyboardEvent) => {
      if (event.key === "Escape") setMessageOpen(false);
    };

    window.addEventListener("keydown", closeOnEscape);
    return () => window.removeEventListener("keydown", closeOnEscape);
  }, [messageOpen]);

  const handleTeddyClick = () => {
    if (unlocked) {
      setMessageOpen(true);
      return;
    }

    setCount((value) => {
      const nextCount = value + 1;
      if (nextCount >= 5) {
        setUnlocked(true);
        setMessageOpen(true);
      }
      return nextCount;
    });
  };

  return (
    <>
      <button className="teddy" onClick={handleTeddyClick} aria-label="Secret teddy">🧸</button>
      <AnimatePresence>
        {messageOpen && (
          <motion.aside
            className="secret-message"
            role="dialog"
            aria-label={tr(closeMessageLabel)}
            initial={{ opacity: 0, y: 20, scale: 0.96 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 10, scale: 0.97 }}
          >
            <button className="secret-message-close" onClick={() => setMessageOpen(false)} aria-label={tr(closeMessageLabel)}>
              <X size={17} />
            </button>
            <p>{tr(ui.secretUnlocked)}</p>
          </motion.aside>
        )}
      </AnimatePresence>
    </>
  );
}
