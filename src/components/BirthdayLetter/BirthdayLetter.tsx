import { AnimatePresence, motion } from "framer-motion";
import { ArrowDown, BookOpen, Feather, Heart, MailOpen, Sparkles, X } from "lucide-react";
import { useEffect, useRef, useState } from "react";
import { birthdayLetter } from "../../data/birthdayLetter";
import { LocalizedString } from "../../data/translations";

type Props = { tr: (value: LocalizedString) => string };

const LETTER_READING_PROGRESS_KEY = "birthday-letter-reading-progress";

const getSavedReadingProgress = () => {
  if (typeof window === "undefined") return 0;

  try {
    const savedPercent = Number(window.localStorage.getItem(LETTER_READING_PROGRESS_KEY));
    if (!Number.isFinite(savedPercent)) return 0;
    return Math.min(1, Math.max(0, savedPercent / 100));
  } catch {
    return 0;
  }
};

const letterUi = {
  kicker: {
    ru: "главное письмо",
    en: "main letter",
    de: "hauptbrief"
  },
  heading: {
    ru: "Письмо, которое хочется открыть не спеша",
    en: "A letter to take your time with",
    de: "Ein Brief, den man langsam öffnen möchte"
  },
  note: {
    ru: "Я спрятал здесь самое тёплое поздравление. Нажми на конверт, и он откроется для тебя.",
    en: "I hid my warmest birthday message here. Open the envelope, and the letter will appear.",
    de: "Hier habe ich meine herzlichste Geburtstagsnachricht versteckt. Öffne den Umschlag, dann erscheint der Brief."
  },
  sealedFor: {
    ru: "для Любимой Леры",
    en: "for Valeriia",
    de: "für Valeriia"
  },
  sealedTitle: {
    ru: "открыть в день рождения",
    en: "open on your birthday",
    de: "zum Geburtstag öffnen"
  },
  open: {
    ru: "Открыть письмо",
    en: "Open letter",
    de: "Brief öffnen"
  },
  close: {
    ru: "Закрыть письмо",
    en: "Close letter",
    de: "Brief schließen"
  },
  opened: {
    ru: "письмо открыто",
    en: "letter opened",
    de: "brief geöffnet"
  },
  sender: {
    ru: "от Давида · для Любимой Леры",
    en: "from Davyd · for Valeriia",
    de: "von Davyd · für Valeriia"
  },
  contents: {
    ru: "Главы письма",
    en: "Letter chapters",
    de: "Briefkapitel"
  },
  chapter: {
    ru: "Глава",
    en: "Chapter",
    de: "Kapitel"
  },
  nextChapter: {
    ru: "Следующая глава",
    en: "Next chapter",
    de: "Nächstes Kapitel"
  },
  readingProgress: {
    ru: "Прочитано",
    en: "Read",
    de: "Gelesen"
  }
} satisfies Record<string, LocalizedString>;

export function BirthdayLetter({ tr }: Props) {
  const [open, setOpen] = useState(false);
  const [activeChapter, setActiveChapter] = useState(0);
  const [readingProgress, setReadingProgress] = useState(getSavedReadingProgress);
  const openedLetterRef = useRef<HTMLElement | null>(null);
  const chapterRefs = useRef<Array<HTMLElement | null>>([]);
  const readingFrameRef = useRef<number | null>(null);
  const letterBlocks = tr(birthdayLetter.body).split(/\n{2,}/);
  const introBlocks: string[] = [];
  const chapters: Array<{ title: string; paragraphs: string[] }> = [];

  letterBlocks.forEach((block) => {
    if (block.startsWith("## ")) {
      chapters.push({ title: block.slice(3), paragraphs: [] });
    } else if (chapters.length === 0) {
      introBlocks.push(block);
    } else {
      chapters[chapters.length - 1].paragraphs.push(block);
    }
  });

  useEffect(() => {
    if (!open) return;
    const timer = window.setTimeout(() => {
      openedLetterRef.current?.scrollIntoView({ behavior: "smooth", block: "start" });
    }, 260);
    return () => window.clearTimeout(timer);
  }, [open]);

  useEffect(() => {
    if (!open) {
      setActiveChapter(0);
      return;
    }

    const updateReadingState = () => {
      const letter = openedLetterRef.current;
      if (!letter) return;

      const rect = letter.getBoundingClientRect();
      const travel = Math.max(rect.height - window.innerHeight * 0.55, 1);
      const progress = Math.min(1, Math.max(0, (window.innerHeight * 0.22 - rect.top) / travel));
      setReadingProgress((previousProgress) => {
        const furthestProgress = Math.max(previousProgress, progress);
        const previousPercent = Math.round(previousProgress * 100);
        const furthestPercent = Math.round(furthestProgress * 100);

        if (furthestPercent > previousPercent) {
          try {
            window.localStorage.setItem(LETTER_READING_PROGRESS_KEY, String(furthestPercent));
          } catch {
            // The progress remains available for the current visit if storage is unavailable.
          }
        }

        return furthestProgress;
      });

      const readingLine = window.innerHeight * 0.38;
      let current = 0;
      chapterRefs.current.forEach((chapter, index) => {
        if (chapter && chapter.getBoundingClientRect().top <= readingLine) current = index;
      });
      setActiveChapter(current);
    };

    const closeOnEscape = (event: KeyboardEvent) => {
      if (event.key === "Escape") setOpen(false);
    };

    const scheduleReadingState = () => {
      if (readingFrameRef.current !== null) return;
      readingFrameRef.current = window.requestAnimationFrame(() => {
        readingFrameRef.current = null;
        updateReadingState();
      });
    };

    updateReadingState();
    window.addEventListener("scroll", scheduleReadingState, { passive: true });
    window.addEventListener("resize", scheduleReadingState);
    window.addEventListener("keydown", closeOnEscape);
    return () => {
      window.removeEventListener("scroll", scheduleReadingState);
      window.removeEventListener("resize", scheduleReadingState);
      window.removeEventListener("keydown", closeOnEscape);
      if (readingFrameRef.current !== null) {
        window.cancelAnimationFrame(readingFrameRef.current);
        readingFrameRef.current = null;
      }
    };
  }, [open, chapters.length]);

  const scrollToChapter = (index: number) => {
    chapterRefs.current[index]?.scrollIntoView({
      behavior: window.matchMedia("(prefers-reduced-motion: reduce)").matches ? "auto" : "smooth",
      block: "start"
    });
  };

  return (
    <section id="letter" className={`page-section letter-section ${open ? "is-open" : ""}`}>
      <div className="letter-aurora" aria-hidden="true">
        <span />
        <span />
        <span />
      </div>
      <motion.div className="letter-shell" initial={{ opacity: 0, y: 34 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, amount: 0.35 }}>
        <div className="letter-intro">
          <span className="letter-mark"><Sparkles size={20} /> {tr(letterUi.kicker)}</span>
          <h2>{tr(letterUi.heading)}</h2>
          <p>{tr(letterUi.note)}</p>
        </div>

        <div className="letter-scene" data-romantic="true">
          <AnimatePresence mode="wait">
            {!open ? (
              <motion.button
                key="sealed-letter"
                className="sealed-envelope"
                onClick={() => setOpen(true)}
                aria-label={tr(letterUi.open)}
                initial={{ opacity: 0, rotateX: 12, y: 26 }}
                animate={{ opacity: 1, rotateX: 0, y: 0 }}
                exit={{ opacity: 0, rotateX: -48, y: -24, scale: 0.92 }}
                transition={{ type: "spring", damping: 18, stiffness: 120 }}
              >
                <span className="envelope-flap" />
                <span className="envelope-fold left" />
                <span className="envelope-fold right" />
                <span className="envelope-sparkles" aria-hidden="true">
                  <i />
                  <i />
                  <i />
                </span>
                <span className="envelope-kicker">{tr(letterUi.sealedFor)}</span>
                <strong>{tr(letterUi.sealedTitle)}</strong>
                <span className="wax-seal"><Heart size={30} fill="currentColor" /></span>
                <span className="envelope-action"><MailOpen size={18} /> {tr(letterUi.open)}</span>
              </motion.button>
            ) : (
              <motion.div
                key="opened-letter"
                className="opened-envelope-stage"
                initial={{ opacity: 0, y: 56, rotateX: 10, scale: 0.96 }}
                animate={{ opacity: 1, y: 0, rotateX: 0, scale: 1 }}
                exit={{ opacity: 0, y: 24, scale: 0.96 }}
                transition={{ type: "spring", damping: 21, stiffness: 120 }}
              >
                <div className="opened-letter-seal" aria-hidden="true">
                  <Heart size={20} fill="currentColor" />
                </div>
                <article ref={openedLetterRef} className="main-letter opened-letter">
                  <div className="letter-paper-top">
                    <div className="letter-sender">
                      <Feather size={18} aria-hidden="true" />
                      <span>{tr(letterUi.opened)}</span>
                      <strong>{tr(letterUi.sender)}</strong>
                    </div>
                    <button className="letter-close" onClick={() => setOpen(false)} aria-label={tr(letterUi.close)}>
                      <X size={16} /> {tr(letterUi.close)}
                    </button>
                  </div>
                  <div className="letter-reading-progress" aria-label={`${tr(letterUi.readingProgress)} ${Math.round(readingProgress * 100)}%`}>
                    <span>{tr(letterUi.readingProgress)}</span>
                    <i><b style={{ transform: `scaleX(${readingProgress})` }} /></i>
                    <strong>{Math.round(readingProgress * 100)}%</strong>
                  </div>
                  <header className="letter-title-block">
                    <span><Heart size={16} fill="currentColor" /> 15</span>
                    <h2>{tr(birthdayLetter.title)}</h2>
                  </header>
                  <div className="letter-intro-copy">
                    {introBlocks.map((block, index) => <p key={`${block}-${index}`}>{block}</p>)}
                  </div>

                  <nav className="letter-chapter-nav" aria-label={tr(letterUi.contents)}>
                    <div className="letter-chapter-nav-title">
                      <BookOpen size={17} />
                      <span>{tr(letterUi.contents)}</span>
                    </div>
                    <div className="letter-chapter-links">
                      {chapters.map((chapter, index) => (
                        <button
                          key={chapter.title}
                          className={activeChapter === index ? "active" : ""}
                          onClick={() => scrollToChapter(index)}
                          aria-current={activeChapter === index ? "step" : undefined}
                          title={chapter.title}
                        >
                          <span>{String(index + 1).padStart(2, "0")}</span>
                          <strong>{chapter.title}</strong>
                        </button>
                      ))}
                    </div>
                  </nav>

                  <div className="letter-body">
                    {chapters.map((chapter, index) => (
                      <motion.section
                        key={chapter.title}
                        ref={(node) => { chapterRefs.current[index] = node; }}
                        className={`letter-chapter ${activeChapter === index ? "is-active" : ""}`}
                        initial={{ opacity: 0, y: 26 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true, amount: 0.08 }}
                        transition={{ duration: 0.55, ease: [0.2, 0.8, 0.2, 1] }}
                      >
                        <div className="letter-chapter-heading">
                          <span>{tr(letterUi.chapter)} {String(index + 1).padStart(2, "0")}</span>
                          <h3>{chapter.title}</h3>
                        </div>
                        <div className="letter-chapter-copy">
                          {chapter.paragraphs.map((paragraph, paragraphIndex) => (
                            <p key={`${paragraph}-${paragraphIndex}`}>{paragraph}</p>
                          ))}
                        </div>
                        {index < chapters.length - 1 && (
                          <button className="letter-next-chapter" onClick={() => scrollToChapter(index + 1)}>
                            <span>{tr(letterUi.nextChapter)}</span>
                            <ArrowDown size={17} />
                          </button>
                        )}
                      </motion.section>
                    ))}
                  </div>
                  <div className="letter-closing">
                    <Heart size={22} fill="currentColor" aria-hidden="true" />
                    <strong>{tr(birthdayLetter.closing)}</strong>
                  </div>
                </article>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </motion.div>
    </section>
  );
}
