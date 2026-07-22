import { AnimatePresence, motion } from "framer-motion";
import { Heart, MailOpen, Sparkles, X } from "lucide-react";
import { useEffect, useRef, useState } from "react";
import { birthdayLetter } from "../../data/birthdayLetter";
import { LocalizedString } from "../../data/translations";

type Props = { tr: (value: LocalizedString) => string };

const letterUi = {
  kicker: {
    ru: "главное письмо",
    en: "main letter",
    de: "hauptbrief"
  },
  heading: {
    ru: "Письмо, которое хочется открыть не спеша",
    en: "A letter to open slowly",
    de: "Ein Brief, den man langsam öffnen möchte"
  },
  note: {
    ru: "Я спрятал здесь самое тёплое поздравление. Нажми на конверт, и он откроется для тебя.",
    en: "I hid the warmest birthday words here. Touch the envelope, and it will open for you.",
    de: "Hier habe ich die wärmsten Geburtstagsworte versteckt. Berühre den Umschlag, und er öffnet sich für dich."
  },
  sealedFor: {
    ru: "для Леруси",
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
  }
} satisfies Record<string, LocalizedString>;

export function BirthdayLetter({ tr }: Props) {
  const [open, setOpen] = useState(false);
  const openedLetterRef = useRef<HTMLElement | null>(null);

  useEffect(() => {
    if (!open) return;
    const timer = window.setTimeout(() => {
      openedLetterRef.current?.scrollIntoView({ behavior: "smooth", block: "center" });
    }, 260);
    return () => window.clearTimeout(timer);
  }, [open]);

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
              <motion.article
                key="opened-letter"
                ref={openedLetterRef}
                className="main-letter opened-letter"
                initial={{ opacity: 0, y: 56, rotateX: 10, scale: 0.96 }}
                animate={{ opacity: 1, y: 0, rotateX: 0, scale: 1 }}
                exit={{ opacity: 0, y: 24, scale: 0.96 }}
                transition={{ type: "spring", damping: 21, stiffness: 120 }}
              >
                <div className="letter-paper-top">
                  <span>{tr(letterUi.opened)}</span>
                  <button className="letter-close" onClick={() => setOpen(false)} aria-label={tr(letterUi.close)}>
                    <X size={16} /> {tr(letterUi.close)}
                  </button>
                </div>
                <h2>{tr(birthdayLetter.title)}</h2>
                <p>{tr(birthdayLetter.body)}</p>
              </motion.article>
            )}
          </AnimatePresence>
        </div>
      </motion.div>
    </section>
  );
}
