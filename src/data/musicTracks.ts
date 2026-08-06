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
    id: "falling-in-love",
    title: "this is what falling in love feels like",
    artist: "JVKE",
    src: "/audio/this-is-what-falling-in-love-feels-like-jvke.m4a",
    cover: "/audio/covers/universe-mix.svg"
  },
  {
    id: "valentine",
    title: "Valentine",
    artist: "Laufey",
    src: "/audio/valentine-laufey.m4a",
    cover: "/audio/covers/universe-mix.svg"
  },
  {
    id: "glue-song",
    title: "Glue Song",
    artist: "beabadoobee",
    src: "/audio/glue-song-beabadoobee.m4a",
    cover: "/audio/covers/universe-mix.svg"
  },
  {
    id: "enchanted",
    title: "Enchanted",
    artist: "Taylor Swift",
    src: "/audio/enchanted-taylor-swift.m4a",
    cover: "/audio/covers/universe-mix.svg"
  },
  {
    id: "dandelions",
    title: "Dandelions",
    artist: "Ruth B.",
    src: "/audio/dandelions-ruth-b.m4a",
    cover: "/audio/covers/universe-mix.svg"
  },
  {
    id: "those-eyes",
    title: "Those Eyes",
    artist: "New West",
    src: "/audio/those-eyes-new-west.m4a",
    cover: "/audio/covers/universe-mix.svg"
  },
  {
    id: "photograph",
    title: "Photograph",
    artist: "Ed Sheeran",
    src: "/audio/photograph-ed-sheeran.m4a",
    cover: "/audio/covers/universe-mix.svg"
  },
  {
    id: "just-the-way-you-are",
    title: "Just the Way You Are",
    artist: "Bruno Mars",
    src: "/audio/just-the-way-you-are-bruno-mars.m4a",
    cover: "/audio/covers/universe-mix.svg"
  },
  {
    id: "here-with-me",
    title: "Here With Me",
    artist: "d4vd",
    src: "/audio/here-with-me-d4vd.m4a",
    cover: "/audio/covers/universe-mix.svg"
  },
  {
    id: "turning-page",
    title: "Turning Page",
    artist: "Sleeping At Last",
    src: "/audio/turning-page-sleeping-at-last.mp3",
    cover: "/audio/covers/universe-mix.svg"
  }
];
