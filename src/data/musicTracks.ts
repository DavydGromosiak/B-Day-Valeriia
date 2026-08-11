export type MusicTrack = {
  id: string;
  title: string;
  artist: string;
  spotifyUrl: string;
  localFallback?: string;
  duration?: number;
  featured?: boolean;
};

// Единственный конфиг плейлиста. Для новой песни достаточно добавить один объект.
// Обложка и название альбома автоматически запрашиваются по spotifyUrl/title/artist.
// localFallback необязателен: это только резерв, если Spotify Embed недоступен.
export const musicTracks: MusicTrack[] = [
  {
    id: "golden-hour",
    title: "golden hour (Ruel Remix)",
    artist: "JVKE, Ruel",
    spotifyUrl: "https://open.spotify.com/track/5x7N3OBtXAvVpSbRAav5g5",
    localFallback: "/audio/golden-hour-ruel-remix.mp3",
    duration: 209,
    featured: true
  },
  {
    id: "falling-in-love",
    title: "this is what falling in love feels like",
    artist: "JVKE",
    spotifyUrl: "https://open.spotify.com/track/6Bv9YSU5on6rU5SZ6PHoll",
    localFallback: "/audio/this-is-what-falling-in-love-feels-like-jvke.m4a",
    duration: 120,
    featured: true
  },
  {
    id: "valentine",
    title: "Valentine",
    artist: "Laufey",
    spotifyUrl: "https://open.spotify.com/track/6cx5CvFhqN19efStehJqoW",
    localFallback: "/audio/valentine-laufey.m4a",
    duration: 169,
    featured: true
  },
  {
    id: "glue-song",
    title: "Glue Song",
    artist: "beabadoobee",
    spotifyUrl: "https://open.spotify.com/track/1EsgckAAfRM9RARzihEL4G",
    localFallback: "/audio/glue-song-beabadoobee.m4a",
    duration: 135,
    featured: true
  },
  {
    id: "enchanted",
    title: "Enchanted (Taylor's Version)",
    artist: "Taylor Swift",
    spotifyUrl: "https://open.spotify.com/track/3sW3oSbzsfecv9XoUdGs7h",
    localFallback: "/audio/enchanted-taylor-swift.m4a",
    duration: 353
  },
  {
    id: "dandelions",
    title: "Dandelions",
    artist: "Ruth B.",
    spotifyUrl: "https://open.spotify.com/track/2eAvDnpXP5W0cVtiI0PUxV",
    localFallback: "/audio/dandelions-ruth-b.m4a",
    duration: 234
  },
  {
    id: "those-eyes",
    title: "Those Eyes",
    artist: "New West",
    spotifyUrl: "https://open.spotify.com/track/2psRActEWsTlYYd7EDoyVR",
    localFallback: "/audio/those-eyes-new-west.m4a",
    duration: 221
  },
  {
    id: "photograph",
    title: "Photograph",
    artist: "Ed Sheeran",
    spotifyUrl: "https://open.spotify.com/track/1HNkqx9Ahdgi1Ixy2xkKkL",
    localFallback: "/audio/photograph-ed-sheeran.m4a",
    duration: 259
  },
  {
    id: "just-the-way-you-are",
    title: "Just the Way You Are",
    artist: "Bruno Mars",
    spotifyUrl: "https://open.spotify.com/track/7BqBn9nzAq8spo5e7cZ0dJ",
    localFallback: "/audio/just-the-way-you-are-bruno-mars.m4a",
    duration: 221
  },
  {
    id: "here-with-me",
    title: "Here With Me",
    artist: "d4vd",
    spotifyUrl: "https://open.spotify.com/track/78Sw5GDo6AlGwTwanjXbGh",
    localFallback: "/audio/here-with-me-d4vd.m4a",
    duration: 242
  },
  {
    id: "turning-page",
    title: "Turning Page",
    artist: "Sleeping At Last",
    spotifyUrl: "https://open.spotify.com/track/2zMczIZC0m0Sh1RybFXSGx",
    localFallback: "/audio/turning-page-sleeping-at-last.mp3",
    duration: 256
  }
];

export const featuredMusicTracks = musicTracks.filter((track) => track.featured);
