import { AnimatePresence, motion } from "framer-motion";
import { ChevronDown, ChevronLeft, ChevronRight, Heart, X } from "lucide-react";
import { useCallback, useEffect, useRef, useState } from "react";
import { FeelingCard } from "../../data/cards";
import { LocalizedString } from "../../data/translations";
import { useDialogAccessibility } from "../../hooks/useDialogAccessibility";
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
  const contentRef = useRef<HTMLDivElement | null>(null);
  const dialogRef = useDialogAccessibility<HTMLElement>(Boolean(card), onClose);
  const [contentCanScroll, setContentCanScroll] = useState(false);
  const [contentAtEnd, setContentAtEnd] = useState(false);

  const updateContentScroll = useCallback(() => {
    const content = contentRef.current;
    if (!content) return;
    const canScroll = content.scrollHeight > content.clientHeight + 12;
    setContentCanScroll(canScroll);
    setContentAtEnd(!canScroll || content.scrollTop + content.clientHeight >= content.scrollHeight - 24);
  }, []);

  const resetContentScroll = useCallback(() => {
    const content = contentRef.current;
    if (!content) return;
    content.scrollTop = 0;
    content.scrollLeft = 0;
  }, []);

  const bindContentRef = useCallback((node: HTMLDivElement | null) => {
    contentRef.current = node;
    if (!node) return;
    node.scrollTop = 0;
    node.scrollLeft = 0;
    window.requestAnimationFrame(updateContentScroll);
  }, [updateContentScroll]);

  useEffect(() => {
    resetContentScroll();
    setContentAtEnd(false);
    const frame = window.requestAnimationFrame(() => {
      resetContentScroll();
      updateContentScroll();
    });
    const timeout = window.setTimeout(() => {
      resetContentScroll();
      updateContentScroll();
    }, 320);
    return () => {
      window.cancelAnimationFrame(frame);
      window.clearTimeout(timeout);
    };
  }, [card?.id, resetContentScroll, updateContentScroll]);

  if (!card) return null;
  const index = cards.findIndex((item) => item.id === card.id);
  const move = (step: number) => {
    resetContentScroll();
    onSelect(cards[(index + step + cards.length) % cards.length]);
  };
  const messageBlocks = tr(card.text).split(/\n{2,}/);
  const noteLabel = tr({ ru: "Личная заметка", en: "A personal note", de: "Eine persönliche Notiz" });
  const continueLabel = tr({ ru: "Читать дальше", en: "Keep reading", de: "Weiterlesen" });
  const isStory = card.id === 63;

  const scrollFurther = () => {
    const content = contentRef.current;
    if (!content) return;
    content.scrollBy({ top: Math.max(content.clientHeight * 0.72, 280), behavior: "smooth" });
  };

  return (
    <AnimatePresence>
      <motion.div className="modal-backdrop" initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} onMouseDown={(event) => event.currentTarget === event.target && onClose()}>
        <motion.article ref={dialogRef} role="dialog" aria-modal="true" aria-label={tr(card.title)} className={`postcard-modal ${isStory ? "is-story-modal" : ""}`} initial={{ rotateY: 65, opacity: 0, scale: 0.88 }} animate={{ rotateY: 0, opacity: 1, scale: 1 }} transition={{ type: "spring", damping: 20 }}>
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
              ref={bindContentRef}
              className={`postcard-content ${isStory ? "is-story-content" : ""} ${contentCanScroll && !contentAtEnd ? "has-scroll-cue" : ""}`}
              key={`content-${card.id}`}
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -12 }}
              transition={{ duration: 0.24 }}
              onScroll={updateContentScroll}
            >
              <div className="postcard-heading">
                <span className="postcard-note-label"><Heart size={14} fill="currentColor" /> {noteLabel}</span>
                <span className="postcard-counter">{String(index + 1).padStart(2, "0")} / {String(cards.length).padStart(2, "0")}</span>
                <h3>{tr(card.title)}</h3>
              </div>
              <div className={`postcard-note-card ${isStory ? "is-story" : ""}`}>
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
          {contentCanScroll && !contentAtEnd && (
            <button type="button" className="postcard-story-scroll" onClick={scrollFurther}>
              <span>{continueLabel}</span>
              <ChevronDown size={18} />
            </button>
          )}
          <div className="postcard-actions">
            <button type="button" className="ghost-button" onClick={() => move(-1)}><ChevronLeft size={18} />{tr(ui.previous)}</button>
            <button type="button" className="ghost-button" onClick={() => move(1)}>{tr(ui.next)}<ChevronRight size={18} /></button>
          </div>
        </motion.article>
      </motion.div>
    </AnimatePresence>
  );
}
