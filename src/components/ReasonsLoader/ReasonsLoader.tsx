import { AnimatePresence, motion } from "framer-motion";
import { type CSSProperties, useEffect, useMemo, useState } from "react";
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
  const displayProgress = Math.min(progress + 1, 100);

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
        <div className="loader-panel" style={{ "--loader-progress": `${displayProgress}%` } as CSSProperties}>
          <div className="loader-panel-top">
            <p className="section-kicker">{tr(ui.loadingReasons)}</p>
            <span>{String(displayProgress).padStart(3, "0")}%</span>
          </div>
          <div className="loader-count" aria-live="polite">
            <span className="loader-count-current">{String(displayProgress).padStart(3, "0")}</span>
            <span className="loader-count-divider">/</span>
            <span className="loader-count-total">100</span>
          </div>
          <div className="loader-progress-track" aria-hidden="true">
            <i />
          </div>
          <div className="loader-signal-row" aria-hidden="true">
            <span />
            <span />
            <span />
          </div>
          <div className="loader-terminal">
            <span className="loader-terminal-label">memory.stream</span>
            <AnimatePresence mode="wait">
              <motion.p
                key={reasonIndex}
                className="terminal-line"
                initial={{ opacity: 0, y: 12, filter: "blur(6px)" }}
                animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
                exit={{ opacity: 0, y: -12, filter: "blur(6px)" }}
                transition={{ duration: 0.4 }}
              >
                {tr(currentReason)}
              </motion.p>
            </AnimatePresence>
          </div>
          {showSkip && <button className="ghost-button" onClick={onSkip}>{tr(ui.skipIntro)}</button>}
        </div>
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
