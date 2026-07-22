import { AnimatePresence, motion } from "framer-motion";
import { useState } from "react";
import { LocalizedString } from "../../data/translations";

type Props = { tr: (value: LocalizedString) => string; ui: Record<string, any> };

export function TeddyEasterEgg({ tr, ui }: Props) {
  const [count, setCount] = useState(0);
  const unlocked = count >= 5;
  return (
    <>
      <button className="teddy" onClick={() => setCount((value) => value + 1)} aria-label="Secret teddy">🧸</button>
      <AnimatePresence>
        {unlocked && (
          <motion.div className="secret-message" initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0 }}>
            {tr(ui.secretUnlocked)}
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
