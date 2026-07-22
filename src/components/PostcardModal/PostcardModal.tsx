import { AnimatePresence, motion } from "framer-motion";
import { X } from "lucide-react";
import { useEffect } from "react";
import { FeelingCard } from "../../data/cards";
import { LocalizedString } from "../../data/translations";
import { SmartImage } from "../PhotoHeart/SmartImage";

type Props = {
  card: FeelingCard | null;
  cards: FeelingCard[];
  tr: (value: LocalizedString) => string;
  ui: Record<string, any>;
  onClose: () => void;
  onSelect: (card: FeelingCard) => void;
};

export function PostcardModal({ card, cards, tr, ui, onClose, onSelect }: Props) {
  useEffect(() => {
    const close = (event: KeyboardEvent) => event.key === "Escape" && onClose();
    window.addEventListener("keydown", close);
    return () => window.removeEventListener("keydown", close);
  }, [onClose]);

  if (!card) return null;
  const index = cards.findIndex((item) => item.id === card.id);
  const move = (step: number) => onSelect(cards[(index + step + cards.length) % cards.length]);

  return (
    <AnimatePresence>
      <motion.div className="modal-backdrop" initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}>
        <motion.article className="postcard-modal" initial={{ rotateY: 65, opacity: 0, scale: 0.88 }} animate={{ rotateY: 0, opacity: 1, scale: 1 }} transition={{ type: "spring", damping: 20 }}>
          <button className="icon-button modal-close" onClick={onClose} aria-label={tr(ui.close)}><X size={19} /></button>
          <SmartImage src={card.image} alt={tr(card.title)} objectPosition={card.objectPosition} />
          <div className="postcard-content">
            <h3>{tr(card.title)}</h3>
            <p>{tr(card.text)}</p>
            <strong>{tr(card.signature)}</strong>
          </div>
          <div className="control-row">
            <button className="ghost-button" onClick={() => move(-1)}>{tr(ui.previous)}</button>
            <button className="ghost-button" onClick={() => move(1)}>{tr(ui.next)}</button>
          </div>
        </motion.article>
      </motion.div>
    </AnimatePresence>
  );
}
