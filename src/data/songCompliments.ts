import { LocalizedString } from "./translations";

export type SongCompliment = {
  id: number;
  title: string;
  artist: string;
  excerpt: string;
  why: LocalizedString;
  spotifyUrl: string;
  youtubeUrl: string;
};

const l = (ru: string, en: string, de: string): LocalizedString => ({ ru, en, de });

const spotifySearch = (title: string, artist: string) =>
  `https://open.spotify.com/search/${encodeURIComponent(`${title} ${artist}`)}`;

const youtubeSearch = (title: string, artist: string) =>
  `https://www.youtube.com/results?search_query=${encodeURIComponent(`${title} ${artist} official audio`)}`;

const entries: Omit<SongCompliment, "spotifyUrl" | "youtubeUrl">[] = [
  {
    id: 1,
    title: "Until I Found You",
    artist: "Stephen Sanchez",
    excerpt: "I would never fall in love again until I found her",
    why: l(
      "Эта строчка напоминает мне о том, как ты постепенно стала для меня самым близким человеком. Я не искал красивую историю — просто однажды понял, насколько сильно дорожу тобой.",
      "This line reminds me how gradually you became the person closest to me. I was not searching for a perfect story — one day I simply understood how much Valeriia means to me.",
      "Diese Zeile erinnert mich daran, wie Valeriia nach und nach zu meinem vertrautesten Menschen geworden ist. Ich suchte keine perfekte Geschichte — irgendwann verstand ich einfach, wie viel sie mir bedeutet."
    )
  },
  {
    id: 2,
    title: "golden hour",
    artist: "JVKE",
    excerpt: "I don't need no light to see you shine",
    why: l(
      "Мне нравится твой собственный свет — в улыбке, взгляде и даже самых обычных фотографиях. Рядом с тобой простой момент действительно становится теплее.",
      "I love Valeriia's own kind of light — in her smile, her eyes, and even the most ordinary photos. Beside her, a simple moment really does feel warmer.",
      "Ich liebe Valeriias ganz eigenes Licht — in ihrem Lächeln, ihrem Blick und selbst auf ganz normalen Fotos. Neben ihr fühlt sich ein einfacher Moment wirklich wärmer an."
    )
  },
  {
    id: 3,
    title: "Perfect",
    artist: "Ed Sheeran",
    excerpt: "I found a love for me",
    why: l(
      "Не потому, что у нас всё всегда идеально, а потому, что именно с тобой мне хочется сохранять прогулки, разговоры и маленькие совместные моменты.",
      "Not because everything between us is always perfect, but because Valeriia is the person whose walks, conversations, and little shared moments I want to keep.",
      "Nicht weil zwischen uns immer alles perfekt ist, sondern weil ich gerade mit Valeriia Spaziergänge, Gespräche und kleine gemeinsame Momente bewahren möchte."
    )
  },
  {
    id: 4,
    title: "All of Me",
    artist: "John Legend",
    excerpt: "All of me loves all of you",
    why: l(
      "Мне дорога не только твоя нежность. Мне дорог и твой характер, упрямство, эмоции и все маленькие особенности, которые делают тебя именно тобой.",
      "I cherish more than Valeriia's tenderness. I cherish her character, stubbornness, emotions, and every little detail that makes her exactly who she is.",
      "Ich liebe nicht nur Valeriias zärtliche Seite. Ich liebe auch ihren Charakter, ihren Eigensinn, ihre Gefühle und all die kleinen Dinge, die sie zu ihr selbst machen."
    )
  },
  {
    id: 5,
    title: "Just the Way You Are",
    artist: "Bruno Mars",
    excerpt: "You're amazing just the way you are",
    why: l(
      "Тебе не нужно становиться другой, чтобы нравиться мне сильнее. Я люблю настоящую тебя — с твоим настроением, привычками, смехом и милыми странностями.",
      "Valeriia does not need to become someone else for me to love her more. I love the real her — her moods, habits, laugh, and sweet little quirks.",
      "Valeriia muss nicht anders werden, damit ich sie noch mehr liebe. Ich liebe sie so, wie sie wirklich ist — mit ihren Stimmungen, Gewohnheiten, ihrem Lachen und ihren süßen Eigenheiten."
    )
  },
  {
    id: 6,
    title: "Yellow",
    artist: "Coldplay",
    excerpt: "Look at the stars, look how they shine for you",
    why: l(
      "Эта строка подходит всей маленькой вселенной на сайте. Для меня каждая звезда здесь — ещё один способ напомнить, насколько ты мне дорога.",
      "This line belongs in the little universe of this website. Every star here is another way to remind Valeriia how much she means to me.",
      "Diese Zeile passt in das kleine Universum dieser Website. Jeder Stern hier ist eine weitere Erinnerung daran, wie viel Valeriia mir bedeutet."
    )
  },
  {
    id: 7,
    title: "Can't Help Falling in Love",
    artist: "Elvis Presley",
    excerpt: "Take my hand, take my whole life too",
    why: l(
      "Я не сразу понял, насколько сильно влюбился. Сначала просто чаще ждал твоих сообщений, хотел гулять и рассказывать тебе обо всём — а потом чувства стали очевидными.",
      "I did not immediately understand how deeply I had fallen in love. First I simply waited for Valeriia's messages and wanted to share everything with her — then the feeling became obvious.",
      "Ich verstand nicht sofort, wie sehr ich mich verliebt hatte. Zuerst wartete ich einfach öfter auf Valeriias Nachrichten und wollte ihr alles erzählen — dann wurde das Gefühl offensichtlich."
    )
  },
  {
    id: 8,
    title: "Make You Feel My Love",
    artist: "Adele",
    excerpt: "To make you feel my love",
    why: l(
      "Мне хочется быть рядом не только в радостные дни. Важно, чтобы ты могла написать мне, когда устала, сомневаешься или просто нуждаешься в поддержке.",
      "I want to be beside Valeriia not only on happy days. I want her to be able to write when she is tired, uncertain, or simply needs support.",
      "Ich möchte nicht nur an schönen Tagen bei Valeriia sein. Sie soll mir schreiben können, wenn sie müde oder unsicher ist oder einfach Unterstützung braucht."
    )
  },
  {
    id: 9,
    title: "Lover",
    artist: "Taylor Swift",
    excerpt: "Can I go where you go?",
    why: l(
      "Мне нравится думать не только о больших событиях, но и об обычных днях рядом: прогулках, сообщениях допоздна, поездках и новых воспоминаниях.",
      "I like thinking not only about big occasions, but about ordinary days beside Valeriia: walks, late-night messages, journeys, and new memories.",
      "Ich denke gern nicht nur an große Ereignisse, sondern auch an normale Tage mit Valeriia: Spaziergänge, späte Nachrichten, Reisen und neue Erinnerungen."
    )
  },
  {
    id: 10,
    title: "Photograph",
    artist: "Ed Sheeran",
    excerpt: "We keep this love in a photograph",
    why: l(
      "Именно поэтому здесь столько фотографий. Для других это просто кадры, а для меня — сохранённые взгляды, эмоции и кусочки нашей общей истории.",
      "That is why this website holds so many photos. To others they may be pictures; to me they preserve Valeriia's expressions, emotions, and pieces of our shared story.",
      "Deshalb gibt es auf dieser Website so viele Fotos. Für andere sind es Bilder; für mich bewahren sie Valeriias Blicke, Gefühle und Teile unserer gemeinsamen Geschichte."
    )
  },
  {
    id: 11,
    title: "Those Eyes",
    artist: "New West",
    excerpt: "I close my eyes and all I see is you",
    why: l(
      "У тебя взгляд, который остаётся в памяти. Иногда я открываю фотографию и сначала смотрю именно в твои глаза, а всё остальное замечаю уже потом.",
      "Valeriia has the kind of eyes that stay in my memory. Sometimes I open a photo and look into her eyes first; everything else comes later.",
      "Valeriia hat einen Blick, der im Gedächtnis bleibt. Manchmal öffne ich ein Foto und sehe zuerst in ihre Augen; alles andere bemerke ich erst danach."
    )
  },
  {
    id: 12,
    title: "Glue Song",
    artist: "beabadoobee",
    excerpt: "I've never known someone like you",
    why: l(
      "Ты незаметно стала частью моих мыслей. Я вижу что-то смешное или красивое — и почти сразу думаю, что хочу показать это тебе.",
      "Valeriia quietly became part of my thoughts. Whenever I see something funny or beautiful, I almost immediately want to show it to her.",
      "Valeriia wurde ganz leise ein Teil meiner Gedanken. Wenn ich etwas Lustiges oder Schönes sehe, möchte ich es ihr fast sofort zeigen."
    )
  }
];

const directSpotify: Record<number, string> = {
  1: "https://open.spotify.com/track/0T5iIrXA4p5GsubkhuBIKV",
  2: "https://open.spotify.com/track/4yNk9iz9WVJikRFle3XEvn",
  5: "https://open.spotify.com/track/7BqBn9nzAq8spo5e7cZ0dJ",
  10: "https://open.spotify.com/track/1HNkqx9Ahdgi1Ixy2xkKkL",
  11: "https://open.spotify.com/track/2psRActEWsTlYYd7EDoyVR",
  12: "https://open.spotify.com/track/1EsgckAAfRM9RARzihEL4G"
};

export const songCompliments: SongCompliment[] = entries.map((entry) => ({
  ...entry,
  spotifyUrl: directSpotify[entry.id] ?? spotifySearch(entry.title, entry.artist),
  youtubeUrl: youtubeSearch(entry.title, entry.artist)
}));
