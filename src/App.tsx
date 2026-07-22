import { AnimatePresence, motion } from "framer-motion";
import { useState } from "react";
import { BirthdayLetter } from "./components/BirthdayLetter/BirthdayLetter";
import { ComplimentsSection } from "./components/ComplimentsSection/ComplimentsSection";
import { CustomCursor } from "./components/CustomCursor/CustomCursor";
import { FeelingsLibrary } from "./components/FeelingsLibrary/FeelingsLibrary";
import { FinalScene } from "./components/FinalScene/FinalScene";
import { IntroScreen } from "./components/IntroScreen/IntroScreen";
import { LanguageSwitcher } from "./components/LanguageSwitcher/LanguageSwitcher";
import { MusicPlayer } from "./components/MusicPlayer/MusicPlayer";
import { Navigation } from "./components/Navigation/Navigation";
import { ParentsThanks } from "./components/ParentsThanks/ParentsThanks";
import { PhotoHeart } from "./components/PhotoHeart/PhotoHeart";
import { ReasonsLoader } from "./components/ReasonsLoader/ReasonsLoader";
import { ReasonsSection } from "./components/ReasonsSection/ReasonsSection";
import { TeddyEasterEgg } from "./components/TeddyEasterEgg/TeddyEasterEgg";
import { WishConstellation } from "./components/WishConstellation/WishConstellation";
import { WorldHeart } from "./components/WorldHeart/WorldHeart";
import { useLanguage } from "./hooks/useLanguage";

type Stage = "intro" | "loading" | "main";

export default function App() {
  const { language, setLanguage, translate, ui } = useLanguage();
  const [stage, setStage] = useState<Stage>("intro");
  const [musicRequested, setMusicRequested] = useState(false);

  const start = () => {
    window.dispatchEvent(new Event("birthday-start-music"));
    setMusicRequested(true);
    setStage("loading");
  };

  const replay = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
    setStage("intro");
  };

  return (
    <>
      <CustomCursor />
      <div className="space-background" aria-hidden="true">
        <span /><span /><span />
      </div>
      <MusicPlayer language={language} shouldStart={musicRequested} />
      <AnimatePresence mode="wait">
        {stage === "intro" && (
          <IntroScreen key="intro" language={language} setLanguage={setLanguage} tr={translate} ui={ui} onOpen={start} />
        )}
        {stage === "loading" && (
          <ReasonsLoader key="loader" language={language} setLanguage={setLanguage} tr={translate} ui={ui} onComplete={() => setStage("main")} onSkip={() => setStage("main")} />
        )}
      </AnimatePresence>
      {stage === "main" && (
        <motion.main initial={{ opacity: 0 }} animate={{ opacity: 1 }}>
          <header className="main-topbar">
            <LanguageSwitcher language={language} setLanguage={setLanguage} />
          </header>
          <Navigation tr={translate} ui={ui} onReplay={replay} />
          <WorldHeart tr={translate} ui={ui} />
          <ReasonsSection tr={translate} ui={ui} />
          <FeelingsLibrary tr={translate} ui={ui} />
          <PhotoHeart tr={translate} ui={ui} />
          <ComplimentsSection language={language} tr={translate} ui={ui} />
          <WishConstellation tr={translate} ui={ui} />
          <BirthdayLetter tr={translate} />
          <ParentsThanks tr={translate} />
          <FinalScene tr={translate} ui={ui} />
          <TeddyEasterEgg tr={translate} ui={ui} />
        </motion.main>
      )}
    </>
  );
}
