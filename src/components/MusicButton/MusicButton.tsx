import { Volume2, VolumeX } from "lucide-react";
import { useEffect, useRef, useState } from "react";
import { siteConfig } from "../../config/siteConfig";
import { Language, t } from "../../data/translations";

type Props = {
  language: Language;
  shouldStart: boolean;
};

export function MusicButton({ language, shouldStart }: Props) {
  const audioRef = useRef<HTMLAudioElement | null>(null);
  const [playing, setPlaying] = useState(false);
  const [available, setAvailable] = useState(true);

  useEffect(() => {
    audioRef.current = new Audio(siteConfig.musicPath);
    audioRef.current.loop = true;
    audioRef.current.volume = 0.45;
    audioRef.current.addEventListener("error", () => setAvailable(false));
    return () => audioRef.current?.pause();
  }, []);

  useEffect(() => {
    if (!shouldStart || !audioRef.current || !available) return;
    audioRef.current.currentTime = siteConfig.musicStartTime;
    audioRef.current.play().then(() => setPlaying(true)).catch(() => setPlaying(false));
  }, [available, shouldStart]);

  const toggle = () => {
    const audio = audioRef.current;
    if (!audio || !available) return;
    if (playing) {
      audio.pause();
      setPlaying(false);
    } else {
      audio.play().then(() => setPlaying(true)).catch(() => setPlaying(false));
    }
  };

  return (
    <button className="icon-button music-button" onClick={toggle} aria-label={playing ? t.musicOn[language] : t.musicOff[language]}>
      {playing ? <Volume2 size={18} /> : <VolumeX size={18} />}
    </button>
  );
}
