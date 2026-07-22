import { motion } from "framer-motion";
import { useState } from "react";
import { photos, PhotoItem } from "../../data/photos";
import { LocalizedString } from "../../data/translations";
import { useReducedMotion } from "../../hooks/useReducedMotion";
import { PhotoLightbox } from "../PhotoLightbox/PhotoLightbox";
import { SmartImage } from "./SmartImage";

type Props = { tr: (value: LocalizedString) => string; ui: Record<string, any> };

function photoPoint(i: number, total: number) {
  const t = (Math.PI * 2 * i) / total;
  const dense = total > 28;
  const xScale = dense ? 16.2 : 14;
  const yScale = dense ? 13.6 : 12;
  return {
    x: 15 * Math.pow(Math.sin(t), 3) * xScale,
    y: -(13 * Math.cos(t) - 5 * Math.cos(2 * t) - 2 * Math.cos(3 * t) - Math.cos(4 * t)) * yScale
  };
}

export function PhotoHeart({ tr, ui }: Props) {
  const [active, setActive] = useState<PhotoItem | null>(null);
  const reduced = useReducedMotion();

  return (
    <section id="photos" className="page-section photo-section">
      <p className="section-kicker">photo constellation</p>
      <h2>{tr(ui.photosTitle)}</h2>
      <div className={`photo-heart-stage ${photos.length > 28 ? "is-dense" : ""}`} data-romantic="true">
        {photos.map((photo, i) => {
          const p = photoPoint(i, photos.length);
          return (
            <motion.button
              className="photo-tile"
              key={photo.src}
              style={{ zIndex: photos.length - i }}
              onClick={() => setActive(photo)}
              aria-label={tr(photo.alt)}
              initial={reduced ? false : { x: 0, y: 0, rotate: i * 3 - 20, opacity: 0 }}
              whileInView={{ x: reduced ? 0 : p.x, y: reduced ? 0 : p.y, rotate: i % 2 ? 7 : -7, opacity: 1 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ delay: i * 0.04, duration: 0.85, type: "spring", damping: 18 }}
            >
              <SmartImage src={photo.src} alt={tr(photo.alt)} objectPosition={photo.objectPosition} />
            </motion.button>
          );
        })}
      </div>
      <PhotoLightbox photo={active} photos={photos} tr={tr} ui={ui} onClose={() => setActive(null)} onSelect={setActive} />
    </section>
  );
}
