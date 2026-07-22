import { AnimatePresence, motion } from "framer-motion";
import { ChevronLeft, ChevronRight, X } from "lucide-react";
import { useEffect } from "react";
import { PhotoItem } from "../../data/photos";
import { LocalizedString } from "../../data/translations";
import { SmartImage } from "../PhotoHeart/SmartImage";

type Props = {
  photo: PhotoItem | null;
  photos: PhotoItem[];
  tr: (value: LocalizedString) => string;
  ui: Record<string, any>;
  onClose: () => void;
  onSelect: (photo: PhotoItem) => void;
};

export function PhotoLightbox({ photo, photos, tr, ui, onClose, onSelect }: Props) {
  useEffect(() => {
    const handler = (event: KeyboardEvent) => {
      if (event.key === "Escape") onClose();
      if (photo && event.key === "ArrowRight") move(1);
      if (photo && event.key === "ArrowLeft") move(-1);
    };
    window.addEventListener("keydown", handler);
    return () => window.removeEventListener("keydown", handler);
  });

  if (!photo) return null;
  const index = photos.indexOf(photo);
  const move = (step: number) => onSelect(photos[(index + step + photos.length) % photos.length]);

  return (
    <AnimatePresence>
      <motion.div className="modal-backdrop" initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}>
        <div className="lightbox">
          <button className="icon-button modal-close" onClick={onClose} aria-label={tr(ui.close)}><X size={19} /></button>
          <button className="icon-button lightbox-prev" onClick={() => move(-1)} aria-label={tr(ui.previous)}><ChevronLeft /></button>
          <SmartImage src={photo.src} alt={tr(photo.alt)} objectPosition={photo.objectPosition} />
          <button className="icon-button lightbox-next" onClick={() => move(1)} aria-label={tr(ui.next)}><ChevronRight /></button>
          <p>{tr(photo.caption)}</p>
        </div>
      </motion.div>
    </AnimatePresence>
  );
}
