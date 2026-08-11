import { motion } from "framer-motion";
import { ChevronDown, ChevronUp, Play } from "lucide-react";
import { useEffect, useState } from "react";
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

function getHeartScale() {
  if (typeof window === "undefined" || window.innerWidth > 700) return 1;
  return Math.min(0.62, Math.max(0.48, (window.innerWidth - 32) / 590));
}

export function PhotoHeart({ tr, ui }: Props) {
  const [active, setActive] = useState<PhotoItem | null>(null);
  const [expanded, setExpanded] = useState(false);
  const [heartScale, setHeartScale] = useState(getHeartScale);
  const reduced = useReducedMotion();

  useEffect(() => {
    const updateScale = () => setHeartScale(getHeartScale());
    window.addEventListener("resize", updateScale);
    return () => window.removeEventListener("resize", updateScale);
  }, []);

  return (
    <section id="photos" className="page-section photo-section">
      <p className="section-kicker">{tr(ui.photosKicker)}</p>
      <h2>{tr(ui.photosTitle)}</h2>
      <div className={`photo-heart-stage ${photos.length > 28 ? "is-dense" : ""} ${expanded ? "is-expanded" : ""}`} data-romantic="true">
        {photos.map((photo, i) => {
          const p = photoPoint(i, photos.length);
          return (
            <motion.button
              className="photo-tile"
              key={photo.src}
              style={{ zIndex: active ? 0 : photos.length - i }}
              onClick={() => setActive(photo)}
              aria-label={tr(photo.alt)}
              initial={reduced ? false : { x: 0, y: 0, rotate: i * 3 - 20, opacity: 0 }}
              whileInView={{
                x: p.x * heartScale,
                y: p.y * heartScale,
                rotate: i % 2 ? 7 : -7,
                opacity: 1
              }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ delay: i * 0.04, duration: 0.85, type: "spring", damping: 18 }}
            >
              {photo.mediaType === "video" ? (
                <>
                  <video src={photo.src} aria-label={tr(photo.alt)} preload="metadata" muted playsInline />
                  <span className="photo-video-badge" aria-hidden="true"><Play size={16} fill="currentColor" /></span>
                </>
              ) : (
                <SmartImage src={photo.src} alt={tr(photo.alt)} objectPosition={photo.objectPosition} placeholder={tr(ui.photoPlaceholder)} />
              )}
            </motion.button>
          );
        })}
      </div>
      <button type="button" className="photo-expand-button" onClick={() => setExpanded((value) => !value)}>
        {expanded
          ? tr({ ru: "Собрать обратно в сердце", en: "Fold back into a heart", de: "Zurück zum Herz" })
          : tr({ ru: `Показать всю фотоленту · ${photos.length}`, en: `Show the full photo reel · ${photos.length}`, de: `Ganze Fotoreihe zeigen · ${photos.length}` })}
        {expanded ? <ChevronUp size={17} /> : <ChevronDown size={17} />}
      </button>
      <PhotoLightbox photo={active} photos={photos} tr={tr} ui={ui} onClose={() => setActive(null)} onSelect={setActive} />
    </section>
  );
}
