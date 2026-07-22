import { motion, useMotionValue, useTransform } from "framer-motion";
import { ArrowDown } from "lucide-react";
import type { CSSProperties } from "react";
import { worldBirthdayMessages } from "../../data/worldBirthdayMessages";
import { LocalizedString } from "../../data/translations";
import { useReducedMotion } from "../../hooks/useReducedMotion";

type Props = { tr: (value: LocalizedString) => string; ui: Record<string, any> };

type HeartWordSlot = {
  x: number;
  y: number;
  scale: number;
  opacity: number;
  maxWidth: number;
  rotate: number;
  flyX: number;
  flyY: number;
  layer: "outer" | "inner";
};

const seeded = (value: number) => {
  const raw = Math.sin(value * 12.9898 + 78.233) * 43758.5453;
  return raw - Math.floor(raw);
};

const heartPoint = (t: number) => ({
  x: 16 * Math.sin(t) ** 3,
  y: 13 * Math.cos(t) - 5 * Math.cos(2 * t) - 2 * Math.cos(3 * t) - Math.cos(4 * t),
});

const toStagePoint = (t: number, ringScale: number, index: number) => {
  const point = heartPoint(t);
  const next = heartPoint(t + 0.018);
  const x = 50 + point.x * 2.02 * ringScale;
  const y = 52 - (point.y + 2.2) * 2.82 * ringScale;
  const nextX = 50 + next.x * 2.02 * ringScale;
  const nextY = 52 - (next.y + 2.2) * 2.82 * ringScale;
  let rotate = Math.atan2(nextY - y, nextX - x) * 180 / Math.PI;

  if (rotate > 90) rotate -= 180;
  if (rotate < -90) rotate += 180;

  return {
    x: x + (seeded(index + 17) - 0.5) * 0.95,
    y: y + (seeded(index + 29) - 0.5) * 0.95,
    rotate: rotate * 0.82 + (seeded(index + 37) - 0.5) * 9,
  };
};

const createRingSlots = (
  count: number,
  layer: "outer" | "inner",
  isCompact: boolean,
  offset = 0,
): HeartWordSlot[] => Array.from({ length: count }, (_, index) => {
  const ringScale = layer === "outer" ? 1 : 0.92;
  const t = ((index + offset) / count) * Math.PI * 2;
  const point = toStagePoint(t, ringScale, index + offset * 97);
  const isTip = point.y > 80 || point.y < 18;
  const isSide = point.x < 25 || point.x > 75;

  return {
    ...point,
    scale: (layer === "outer" ? 0.88 : 0.62) + seeded(index + offset + 211) * 0.1,
    opacity: layer === "outer" ? 0.82 + seeded(index + 409) * 0.15 : 0.28 + seeded(index + 509) * 0.12,
    maxWidth: isCompact ? (isSide ? 54 : 72) : (isTip ? 70 : isSide ? 82 : 98),
    flyX: (seeded(index + offset + 503) - 0.5) * (isCompact ? 130 : 220),
    flyY: (seeded(index + offset + 607) - 0.5) * (isCompact ? 120 : 180),
    layer,
  };
});

const createHeartWordSlots = (isCompact: boolean): HeartWordSlot[] => {
  const outerCount = isCompact ? 40 : 58;
  const innerCount = isCompact ? 14 : 26;

  return [
    ...createRingSlots(outerCount, "outer", isCompact),
    ...createRingSlots(innerCount, "inner", isCompact, outerCount / 2),
  ];
};

export function WorldHeart({ tr, ui }: Props) {
  const reduced = useReducedMotion();
  const mx = useMotionValue(0);
  const my = useMotionValue(0);
  const rotateX = useTransform(my, [-0.5, 0.5], [7, -7]);
  const rotateY = useTransform(mx, [-0.5, 0.5], [-8, 8]);
  const isCompact = typeof window !== "undefined" && window.innerWidth < 600;
  const slots = createHeartWordSlots(isCompact);
  const words = slots.map((slot, index) => ({
    slot,
    message: worldBirthdayMessages[index % worldBirthdayMessages.length],
  }));

  return (
    <section id="home" className="page-section hero-section" onPointerMove={(e) => {
      const rect = e.currentTarget.getBoundingClientRect();
      mx.set((e.clientX - rect.left) / rect.width - 0.5);
      my.set((e.clientY - rect.top) / rect.height - 0.5);
    }}>
      <motion.div className="word-heart" style={{ rotateX: reduced ? 0 : rotateX, rotateY: reduced ? 0 : rotateY }} data-romantic="true">
        <svg className="heart-glow" viewBox="0 0 100 100" aria-hidden="true">
          <path d="M50 93 C21 70 8 55 8 34 C8 17 22 7 36 10 C44 12 49 20 50 28 C51 20 56 12 64 10 C78 7 92 17 92 34 C92 55 79 70 50 93Z" />
        </svg>
        <div className="heart-word-cloud" aria-hidden="true">
          {words.map(({ message, slot }, i) => (
            <motion.span
              key={`${message.language}-${i}`}
              className={`heart-word ${slot.layer === "inner" ? "is-inner" : "is-outer"}`}
              title={message.language}
              style={{
                left: `${slot.x}%`,
                top: `${slot.y}%`,
                opacity: slot.opacity,
                maxWidth: `${slot.maxWidth}px`,
                fontSize: `calc(clamp(0.56rem, 0.8vw, 0.95rem) * ${slot.scale})`,
                "--word-rotate": `${slot.rotate}deg`,
              } as CSSProperties}
              initial={reduced ? false : { opacity: 0, scale: 0.86, x: slot.flyX, y: slot.flyY }}
              whileInView={{ opacity: slot.opacity, scale: 1, x: 0, y: 0 }}
              viewport={{ once: true, amount: 0.35 }}
              transition={{ delay: i * 0.009, duration: 0.9, ease: [0.16, 1, 0.3, 1] }}
            >
              {message.text}
            </motion.span>
          ))}
        </div>
        <div className="heart-center">
          <span>{tr(ui.heartCenterTop)}</span>
          <strong>{tr(ui.heartCenterName)}</strong>
          <span>{tr(ui.heartCenterBottom)}</span>
        </div>
      </motion.div>
      <a className="primary-button journey-button" href="#reasons">
        {tr(ui.startJourney)} <ArrowDown size={18} />
      </a>
    </section>
  );
}
