import { useEffect, useState } from "react";
import { useReducedMotion } from "../../hooks/useReducedMotion";

export function CustomCursor() {
  const reduced = useReducedMotion();
  const [pos, setPos] = useState({ x: -40, y: -40 });
  const [hover, setHover] = useState(false);
  const [heart, setHeart] = useState(false);

  useEffect(() => {
    const coarse = window.matchMedia("(pointer: coarse)").matches;
    if (coarse || reduced) return;
    const move = (event: PointerEvent) => setPos({ x: event.clientX, y: event.clientY });
    const over = (event: PointerEvent) => {
      const element = event.target as HTMLElement;
      setHover(Boolean(element.closest("button,a,[role='button']")));
      setHeart(Boolean(element.closest("[data-romantic='true']")));
    };
    window.addEventListener("pointermove", move);
    window.addEventListener("pointerover", over);
    return () => {
      window.removeEventListener("pointermove", move);
      window.removeEventListener("pointerover", over);
    };
  }, [reduced]);

  if (typeof window !== "undefined" && (window.matchMedia("(pointer: coarse)").matches || reduced)) return null;

  return <div className={`custom-cursor ${hover ? "hover" : ""} ${heart ? "heart" : ""}`} style={{ left: pos.x, top: pos.y }} />;
}
