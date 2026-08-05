import { AnimatePresence, motion } from "framer-motion";
import { ChevronLeft, ChevronRight, Heart, X } from "lucide-react";
import { useEffect, useRef } from "react";
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
  const contentRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const close = (event: KeyboardEvent) => event.key === "Escape" && onClose();
    window.addEventListener("keydown", close);
    return () => window.removeEventListener("keydown", close);
  }, [onClose]);

  useEffect(() => {
    contentRef.current?.scrollTo({ top: 0 });
  }, [card?.id]);

  if (!card) return null;
  const index = cards.findIndex((item) => item.id === card.id);
  const move = (step: number) => onSelect(cards[(index + step + cards.length) % cards.length]);
  const messageBlocks = tr(card.text).split(/\n{2,}/);
  const noteLabel = tr({ ru: "Личная заметка", en: "A personal note", de: "Eine persönliche Notiz" });

  return (
    <AnimatePresence>
      <motion.div className="modal-backdrop" initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}>
        <motion.article className="postcard-modal" initial={{ rotateY: 65, opacity: 0, scale: 0.88 }} animate={{ rotateY: 0, opacity: 1, scale: 1 }} transition={{ type: "spring", damping: 20 }}>
          <button type="button" className="icon-button modal-close" onClick={onClose} aria-label={tr(ui.close)}><X size={19} /></button>
          <AnimatePresence mode="wait">
            <motion.div
              className="postcard-media"
              key={`image-${card.id}`}
              initial={{ opacity: 0, x: -18, scale: 0.98 }}
              animate={{ opacity: 1, x: 0, scale: 1 }}
              exit={{ opacity: 0, x: 18, scale: 0.98 }}
              transition={{ duration: 0.24 }}
            >
              <SmartImage src={card.image} alt={tr(card.title)} objectPosition={card.objectPosition} placeholder={tr(ui.photoPlaceholder)} />
            </motion.div>
          </AnimatePresence>
          <AnimatePresence mode="wait">
            <motion.div
              ref={contentRef}
              className="postcard-content"
              key={`content-${card.id}`}
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -12 }}
              transition={{ duration: 0.24 }}
            >
              <div className="postcard-heading">
                <span className="postcard-note-label"><Heart size={14} fill="currentColor" /> {noteLabel}</span>
                <span className="postcard-counter">{String(index + 1).padStart(2, "0")} / {String(cards.length).padStart(2, "0")}</span>
                <h3>{tr(card.title)}</h3>
              </div>
              <div className={`postcard-note-card ${card.id === 63 ? "is-story" : ""}`}>
                <div className="postcard-message">
                  {messageBlocks.map((block, blockIndex) => {
                    if (block.startsWith("## ")) {
                      return <h4 key={`${block}-${blockIndex}`}>{block.slice(3)}</h4>;
                    }

                    if (block.startsWith("**") && block.endsWith("**")) {
                      return <strong className="postcard-emphasis" key={`${block}-${blockIndex}`}>{block.slice(2, -2)}</strong>;
                    }

                    return <p key={`${block}-${blockIndex}`}>{block}</p>;
                  })}
                </div>
                <strong className="postcard-signature">{tr(card.signature)}</strong>
              </div>
            </motion.div>
          </AnimatePresence>
          <div className="postcard-actions">
            <button type="button" className="ghost-button" onClick={() => move(-1)}><ChevronLeft size={18} />{tr(ui.previous)}</button>
            <button type="button" className="ghost-button" onClick={() => move(1)}>{tr(ui.next)}<ChevronRight size={18} /></button>
          </div>
        </motion.article>
      </motion.div>
    </AnimatePresence>
  );
}
