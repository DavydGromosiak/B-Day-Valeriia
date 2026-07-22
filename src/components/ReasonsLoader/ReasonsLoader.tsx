import { AnimatePresence, motion } from "framer-motion";
import { useEffect, useMemo, useState } from "react";
import { Language, LocalizedString } from "../../data/translations";
import { reasons } from "../../data/reasons";
import { LanguageSwitcher } from "../LanguageSwitcher/LanguageSwitcher";

type Props = {
  language: Language;
  setLanguage: (language: Language) => void;
  tr: (value: LocalizedString) => string;
  ui: Record<string, any>;
  onComplete: () => void;
  onSkip: () => void;
};

export function ReasonsLoader({ language, setLanguage, tr, ui, onComplete, onSkip }: Props) {
  const [progress, setProgress] = useState(0);
  const [reasonIndex, setReasonIndex] = useState(0);
  const [showSkip, setShowSkip] = useState(false);
  const [finalStep, setFinalStep] = useState(0);
  const currentReason = useMemo(() => reasons[reasonIndex % reasons.length], [reasonIndex]);

  useEffect(() => {
    const skipTimer = window.setTimeout(() => setShowSkip(true), 3000);
    const progressTimer = window.setInterval(() => {
      setProgress((value) => Math.min(value + 1, 100));
    }, 180);
    const reasonTimer = window.setInterval(() => {
      setReasonIndex((value) => value + 1);
    }, 1250);
    return () => {
      window.clearInterval(progressTimer);
      window.clearInterval(reasonTimer);
      window.clearTimeout(skipTimer);
    };
  }, []);

  useEffect(() => {
    if (progress < 100) return;
    const first = window.setTimeout(() => setFinalStep(1), 800);
    const second = window.setTimeout(() => setFinalStep(2), 2300);
    const third = window.setTimeout(() => setFinalStep(3), 4100);
    const complete = window.setTimeout(onComplete, 9100);
    return () => [first, second, third, complete].forEach(window.clearTimeout);
  }, [progress, onComplete]);

  return (
    <section className="story-screen loader-screen">
      <div className="top-controls">
        <LanguageSwitcher language={language} setLanguage={setLanguage} />
      </div>
      {progress < 100 ? (
        <>
          <p className="section-kicker">{tr(ui.loadingReasons)}</p>
          <div className="loader-count">{String(Math.min(progress + 1, 100)).padStart(3, "0")} / 100</div>
          <AnimatePresence mode="wait">
            <motion.p
              key={reasonIndex}
              className="terminal-line"
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -12 }}
              transition={{ duration: 0.35 }}
            >
              {tr(currentReason)}
            </motion.p>
          </AnimatePresence>
          {showSkip && <button className="ghost-button" onClick={onSkip}>{tr(ui.skipIntro)}</button>}
        </>
      ) : (
        <div className="loader-final">
          <AnimatePresence mode="wait">
            <motion.div key={finalStep} initial={{ opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0 }}>
              {finalStep === 0 && tr(ui.loaded100)}
              {finalStep === 1 && tr(ui.notEnough)}
              {finalStep >= 2 && tr(ui.millionWords).split("\n").map((line) => <span key={line}>{line}</span>)}
              {finalStep === 3 && (
                <>
                  <strong>{tr(ui.happyLove)}</strong>
                  <em>{tr(ui.moreAhead)}</em>
                </>
              )}
            </motion.div>
          </AnimatePresence>
        </div>
      )}
    </section>
  );
}
