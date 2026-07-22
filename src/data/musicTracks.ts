export type MusicTrack = {
  id: string;
  title: string;
  artist: string;
  src: string;
  cover: string;
};

// EDIT HERE: добавляй сюда песни для микса сайта.
// Файлы должны лежать в public/audio, а путь начинаться с /audio/.
export const musicTracks: MusicTrack[] = [
  {
    id: "golden-hour",
    title: "golden hour",
    artist: "JVKE · Ruel Remix",
    src: "/audio/golden-hour-ruel-remix.mp3",
    cover: "/audio/covers/golden-hour-ruel-remix.jpg"
  },
  {
    id: "until-i-found-you",
    title: "Until I Found You",
    artist: "Stephen Sanchez · Piano Version",
    src: "/audio/until-i-found-you-piano.mp3",
    cover: "/audio/covers/until-i-found-you.jpg"
  }
];
