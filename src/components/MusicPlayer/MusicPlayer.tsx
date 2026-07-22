import { motion } from "framer-motion";
import { ChevronDown, Maximize2, Music2, Pause, Play, SkipBack, SkipForward, Volume1, Volume2, VolumeX } from "lucide-react";
import type { CSSProperties } from "react";
import { useEffect, useMemo, useRef, useState } from "react";
import { musicTracks } from "../../data/musicTracks";
import { Language, t } from "../../data/translations";

type Props = {
  language: Language;
  shouldStart: boolean;
};

function formatTime(value: number) {
  if (!Number.isFinite(value) || value <= 0) return "0:00";
  const minutes = Math.floor(value / 60);
  const seconds = Math.floor(value % 60).toString().padStart(2, "0");
  return `${minutes}:${seconds}`;
}

export function MusicPlayer({ language, shouldStart }: Props) {
  const audioRef = useRef<HTMLAudioElement | null>(null);
  const [trackIndex, setTrackIndex] = useState(0);
  const [playing, setPlaying] = useState(false);
  const [duration, setDuration] = useState(0);
  const [currentTime, setCurrentTime] = useState(0);
  const [volume, setVolume] = useState(0.26);
  const [muted, setMuted] = useState(false);
  const [open, setOpen] = useState(false);
  const [coverFailed, setCoverFailed] = useState(false);
  const [audioFailed, setAudioFailed] = useState(false);
  const track = musicTracks[trackIndex];
  const progress = useMemo(() => (duration ? Math.min((currentTime / duration) * 100, 100) : 0), [currentTime, duration]);

  useEffect(() => {
    const audio = new Audio(track.src);
    audio.preload = "metadata";
    audio.volume = muted ? 0 : volume;
    audioRef.current = audio;
    setAudioFailed(false);
    setCoverFailed(false);
    setCurrentTime(0);
    setDuration(0);

    const updateTime = () => setCurrentTime(audio.currentTime);
    const updateDuration = () => setDuration(audio.duration || 0);
    const fail = () => {
      setAudioFailed(true);
      setPlaying(false);
    };
    const next = () => setTrackIndex((value) => (value + 1) % musicTracks.length);

    audio.addEventListener("timeupdate", updateTime);
    audio.addEventListener("loadedmetadata", updateDuration);
    audio.addEventListener("durationchange", updateDuration);
    audio.addEventListener("error", fail);
    audio.addEventListener("ended", next);

    if (playing || shouldStart) {
      audio.play().then(() => setPlaying(true)).catch(() => setPlaying(false));
    }

    return () => {
      audio.pause();
      audio.removeEventListener("timeupdate", updateTime);
      audio.removeEventListener("loadedmetadata", updateDuration);
      audio.removeEventListener("durationchange", updateDuration);
      audio.removeEventListener("error", fail);
      audio.removeEventListener("ended", next);
    };
  }, [track.src, trackIndex]);

  useEffect(() => {
    if (!audioRef.current) return;
    audioRef.current.volume = muted ? 0 : volume;
  }, [muted, volume]);

  useEffect(() => {
    if (!shouldStart || !audioRef.current || audioFailed) return;
    audioRef.current.play().then(() => setPlaying(true)).catch(() => setPlaying(false));
  }, [audioFailed, shouldStart]);

  useEffect(() => {
    const startFromGiftClick = () => {
      const audio = audioRef.current;
      if (!audio || audioFailed) return;
      audio.play().then(() => setPlaying(true)).catch(() => setPlaying(false));
    };
    window.addEventListener("birthday-start-music", startFromGiftClick);
    return () => window.removeEventListener("birthday-start-music", startFromGiftClick);
  }, [audioFailed]);

  const toggle = () => {
    const audio = audioRef.current;
    if (!audio || audioFailed) return;
    if (playing) {
      audio.pause();
      setPlaying(false);
    } else {
      audio.play().then(() => setPlaying(true)).catch(() => setPlaying(false));
    }
  };

  const toggleMute = () => {
    setMuted((value) => !value);
  };

  const changeVolume = (value: string) => {
    const nextVolume = Number(value) / 100;
    setVolume(nextVolume);
    setMuted(nextVolume === 0);
  };

  const moveTrack = (step: number) => {
    setTrackIndex((value) => (value + step + musicTracks.length) % musicTracks.length);
  };

  const seek = (value: string) => {
    const audio = audioRef.current;
    if (!audio || !duration) return;
    const nextTime = (Number(value) / 100) * duration;
    audio.currentTime = nextTime;
    setCurrentTime(nextTime);
  };

  const VolumeIcon = muted || volume === 0 ? VolumeX : volume < 0.5 ? Volume1 : Volume2;

  return (
    <motion.aside className={`site-mixer ${open ? "is-open" : "is-docked"}`} initial={{ opacity: 0, y: 24 }} animate={{ opacity: 1, y: 0 }} data-romantic="true">
      <div className="mixer-ambient" aria-hidden="true">
        <span /><span /><span />
      </div>
      <div className="mixer-cover" aria-hidden="true">
        {coverFailed ? <Music2 size={28} /> : <img src={track.cover} alt="" onError={() => setCoverFailed(true)} />}
      </div>
      <div className="mixer-body">
        <div className="mixer-meta">
          <div>
            <strong>{track.title}</strong>
            <span>{track.artist}</span>
          </div>
          <span className="mixer-badge" title="site mix"><Music2 size={13} /></span>
          <div className={`mixer-equalizer ${playing ? "is-playing" : ""}`} aria-hidden="true">
            <i /><i /><i /><i />
          </div>
        </div>
        <div className="mixer-progress">
          <span>{formatTime(currentTime)}</span>
          <input
            type="range"
            min="0"
            max="100"
            value={progress}
            onChange={(event) => seek(event.target.value)}
            aria-label={t.seekTrack[language]}
            style={{ "--progress": `${progress}%` } as CSSProperties}
          />
          <span>{formatTime(duration)}</span>
        </div>
        <div className="mixer-volume">
          <button onClick={toggleMute} aria-label={muted ? t.musicOff[language] : t.musicOn[language]}>
            <VolumeIcon size={18} />
          </button>
          <input
            type="range"
            min="0"
            max="100"
            value={muted ? 0 : Math.round(volume * 100)}
            onChange={(event) => changeVolume(event.target.value)}
            aria-label={t.volume[language]}
            style={{ "--volume": `${muted ? 0 : volume * 100}%` } as CSSProperties}
          />
          <span>{Math.round((muted ? 0 : volume) * 100)}%</span>
        </div>
      </div>
      <div className="mixer-controls">
        <button onClick={() => moveTrack(-1)} aria-label={t.previousTrack[language]}><SkipBack size={22} fill="currentColor" /></button>
        <button className="mixer-play" onClick={toggle} aria-label={playing ? t.pauseMusic[language] : t.playMusic[language]}>
          {playing ? <Pause size={25} fill="currentColor" /> : <Play size={27} fill="currentColor" />}
        </button>
        <button onClick={() => moveTrack(1)} aria-label={t.nextTrack[language]}><SkipForward size={22} fill="currentColor" /></button>
      </div>
      <button className="mixer-collapse" onClick={() => setOpen((value) => !value)} aria-label={open ? t.collapsePlayer[language] : t.expandPlayer[language]}>
        {open ? <ChevronDown size={18} /> : <Maximize2 size={16} />}
      </button>
    </motion.aside>
  );
}
