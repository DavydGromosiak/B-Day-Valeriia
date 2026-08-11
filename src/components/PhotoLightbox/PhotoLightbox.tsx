import { AnimatePresence, motion } from "framer-motion";
import { ChevronLeft, ChevronRight, X } from "lucide-react";
import { useEffect } from "react";
import { createPortal } from "react-dom";
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

  return createPortal(
    <AnimatePresence>
      <motion.div
        className="modal-backdrop photo-lightbox-backdrop"
        style={{ zIndex: 10000 }}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
      >
        <div className="lightbox">
          <button
            type="button"
            className="icon-button modal-close"
            style={{ position: "absolute", top: 14, right: 14, left: "auto", zIndex: 12 }}
            onClick={onClose}
            aria-label={tr(ui.close)}
          >
            <X size={19} />
          </button>
          <div className="lightbox-media" style={{ position: "relative" }}>
            {photo.mediaType === "video" ? (
              <video key={photo.src} src={photo.src} aria-label={tr(photo.alt)} controls playsInline preload="metadata" />
            ) : (
              <SmartImage src={photo.src} alt={tr(photo.alt)} objectPosition={photo.objectPosition} placeholder={tr(ui.photoPlaceholder)} />
            )}
            <button
              type="button"
              className="icon-button lightbox-prev"
              style={{ position: "absolute", top: "50%", left: 18, right: "auto", transform: "translateY(-50%)", zIndex: 10 }}
              onClick={() => move(-1)}
              aria-label={tr(ui.previous)}
            >
              <ChevronLeft />
            </button>
            <button
              type="button"
              className="icon-button lightbox-next"
              style={{ position: "absolute", top: "50%", right: 18, left: "auto", transform: "translateY(-50%)", zIndex: 10 }}
              onClick={() => move(1)}
              aria-label={tr(ui.next)}
            >
              <ChevronRight />
            </button>
          </div>
          <p>{tr(photo.caption)}</p>
        </div>
      </motion.div>
    </AnimatePresence>,
    document.body
  );
}
