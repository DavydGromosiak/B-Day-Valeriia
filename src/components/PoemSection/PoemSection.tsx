import { motion } from "framer-motion";
import { leraPoem } from "../../data/poem";
import { LocalizedString } from "../../data/translations";
import { useReducedMotion } from "../../hooks/useReducedMotion";

type Props = { tr: (value: LocalizedString) => string };

const lines = (value: string) =>
  value.split("\n").map((line, index) => (
    <span key={`${index}-${line}`}>
      {line}
    </span>
  ));

export function PoemSection({ tr }: Props) {
  const reducedMotion = useReducedMotion();

  const revealProps = (delay = 0) => ({
    initial: reducedMotion ? false : { opacity: 0, y: 28 },
    whileInView: { opacity: 1, y: 0 },
    viewport: { once: true, amount: 0.22 },
    transition: { duration: reducedMotion ? 0 : 0.9, delay: reducedMotion ? 0 : delay, ease: [0.16, 1, 0.3, 1] as const }
  });

  return (
    <section id="poem" className="page-section poem-section" aria-labelledby="poem-title">
      <div className="poem-ambient poem-ambient-one" aria-hidden="true" />
      <div className="poem-ambient poem-ambient-two" aria-hidden="true" />

      <div className="poem-shell">
        <motion.header className="poem-heading" {...revealProps()}>
          <p className="poem-kicker" aria-hidden="true">♡</p>
          <h2 id="poem-title">{tr(leraPoem.title)}</h2>
          <p className="poem-preface">{lines(tr(leraPoem.preface))}</p>
        </motion.header>

        <div className="poem-divider" aria-hidden="true"><span /></div>

        <div className="poem-stanzas">
          {leraPoem.stanzas.map((stanza, index) => (
            <motion.p className="poem-stanza" key={index} {...revealProps(index === 0 ? 0.08 : 0)}>
              {lines(tr(stanza))}
            </motion.p>
          ))}
        </div>

        <motion.p className="poem-postscript" {...revealProps()}>
          {tr(leraPoem.postscript)}
        </motion.p>
      </div>
    </section>
  );
}
