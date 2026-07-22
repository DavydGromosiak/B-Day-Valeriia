import { Gift, Heart, HeartHandshake, Home, Image, Library, MessageCircleHeart, RotateCcw, Sparkles } from "lucide-react";
import { LocalizedString } from "../../data/translations";

type Props = {
  tr: (value: LocalizedString) => string;
  ui: Record<string, any>;
  onReplay: () => void;
};

export function Navigation({ tr, ui, onReplay }: Props) {
  const links = [
    ["#home", tr(ui.navHome), Home],
    ["#reasons", tr(ui.navReasons), Heart],
    ["#library", tr(ui.navLibrary), Library],
    ["#photos", tr(ui.navPhotos), Image],
    ["#words", tr(ui.navWords), Sparkles],
    ["#letter", tr(ui.navLetter), MessageCircleHeart],
    ["#parents", tr(ui.navParents), HeartHandshake],
    ["#final", tr(ui.navFinal), Gift]
  ] as const;

  return (
    <>
      <nav className="side-nav" aria-label="Main navigation">
        {links.map(([href, label, Icon]) => (
          <a href={href} key={href} aria-label={label}><Icon size={18} /><span>{label}</span></a>
        ))}
        <button onClick={onReplay} aria-label={tr(ui.restartIntro)}><RotateCcw size={18} /><span>{tr(ui.restartIntro)}</span></button>
      </nav>
      <nav className="bottom-nav" aria-label="Mobile navigation">
        {links.map(([href, label, Icon]) => (
          <a href={href} key={href} aria-label={label}><Icon size={18} /></a>
        ))}
      </nav>
    </>
  );
}
