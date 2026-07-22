import { motion } from "framer-motion";
import { Heart } from "lucide-react";
import { Language, LocalizedString } from "../../data/translations";
import { LanguageSwitcher } from "../LanguageSwitcher/LanguageSwitcher";

type Props = {
  language: Language;
  setLanguage: (language: Language) => void;
  tr: (value: LocalizedString) => string;
  ui: Record<string, any>;
  onOpen: () => void;
};

export function IntroScreen({ language, setLanguage, tr, ui, onOpen }: Props) {
  return (
    <motion.section className="story-screen intro-screen" initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}>
      <div className="top-controls">
        <LanguageSwitcher language={language} setLanguage={setLanguage} />
      </div>
      <motion.p className="protocol-text" initial={{ opacity: 0, y: 18 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.35 }}>
        {tr(ui.protocolLine).split("\n").map((line) => <span key={line}>{line}</span>)}
      </motion.p>
      <motion.h1 className="intro-title" initial={{ opacity: 0, y: 28 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 1 }}>
        {tr(ui.introHeadline)}
      </motion.h1>
      <motion.button className="primary-button pulse" onClick={onOpen} whileTap={{ scale: 0.96 }} aria-label={tr(ui.openGift)}>
        <Heart size={18} fill="currentColor" /> {tr(ui.openGift)}
      </motion.button>
    </motion.section>
  );
}
