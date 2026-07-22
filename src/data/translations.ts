import { siteConfig } from "../config/siteConfig";

export type Language = "ru" | "en" | "de";
export type LocalizedString = Record<Language, string>;

export const languages: { code: Language; label: string }[] = [
  { code: "ru", label: "RU" },
  { code: "en", label: "EN" },
  { code: "de", label: "DE" }
];

export const t = {
  protocolLine: {
    ru: "[birthday.protocol]\nБережно собираю маленькую вселенную для Леруси...",
    en: "[birthday.protocol]\nGently assembling a little universe for Valeriia...",
    de: "[birthday.protocol]\nEin kleines Universum für Valeriia wird liebevoll erschaffen..."
  },
  introHeadline: {
    ru: "Леруся, я собрал для тебя маленькую вселенную",
    en: "Valeriia, I made a little universe for you",
    de: "Valeriia, ich habe ein kleines Universum für dich geschaffen"
  },
  openGift: { ru: "Войти в эту вселенную", en: "Enter this universe", de: "Dieses Universum öffnen" },
  musicOn: { ru: "Выключить музыку", en: "Turn music off", de: "Musik ausschalten" },
  musicOff: { ru: "Включить музыку", en: "Turn music on", de: "Musik einschalten" },
  playMusic: { ru: "Включить песню", en: "Play song", de: "Lied starten" },
  pauseMusic: { ru: "Поставить на паузу", en: "Pause song", de: "Lied pausieren" },
  previousTrack: { ru: "Предыдущая песня", en: "Previous song", de: "Vorheriges Lied" },
  nextTrack: { ru: "Следующая песня", en: "Next song", de: "Nächstes Lied" },
  seekTrack: { ru: "Перемотать песню", en: "Seek song", de: "Lied spulen" },
  volume: { ru: "Громкость", en: "Volume", de: "Lautstärke" },
  collapsePlayer: { ru: "Свернуть плеер", en: "Collapse player", de: "Player einklappen" },
  expandPlayer: { ru: "Открыть плеер", en: "Open player", de: "Player öffnen" },
  loadingReasons: {
    ru: "Загружаю причины, почему ты стала для меня такой дорогой...",
    en: "Loading the reasons why you became so precious to me...",
    de: "Ich lade die Gründe, warum du mir so kostbar geworden bist..."
  },
  skipIntro: { ru: "Пропустить вступление", en: "Skip intro", de: "Intro überspringen" },
  loaded100: { ru: "100 причин загружено", en: "100 reasons loaded", de: "100 Gründe wurden geladen" },
  notEnough: {
    ru: "Но даже 1000 причин было бы слишком мало",
    en: "But even 1,000 reasons would never be enough",
    de: "Aber selbst 1.000 Gründe wären viel zu wenig"
  },
  millionWords: {
    ru: "Даже миллион слов не сможет описать,\nнасколько ты мне дорога",
    en: "Even a million words could not describe\nhow much you mean to me",
    de: "Nicht einmal eine Million Worte könnte beschreiben,\nwie viel du mir bedeutest"
  },
  happyLove: {
    ru: "С 15-летием, любимая 💜🧸",
    en: "Happy 15th Birthday, my love 💜🧸",
    de: "Alles Gute zum 15. Geburtstag, meine Liebe 💜🧸"
  },
  heartCenterTop: { ru: "С 15-ЛЕТИЕМ", en: "HAPPY 15TH BIRTHDAY", de: "ALLES GUTE ZUM 15. GEBURTSTAG" },
  heartCenterName: { ru: "ЛЕРУСЯ", en: "MY LOVE", de: "MEINE LIEBE" },
  heartCenterBottom: {
    ru: "ТЫ ОЧЕНЬ ДОРОГА МНЕ",
    en: "YOU MEAN SO MUCH TO ME",
    de: "DU BEDEUTEST MIR SEHR VIEL"
  },
  startJourney: { ru: "Начать наше путешествие", en: "Start our journey", de: "Unsere Reise beginnen" },
  navHome: { ru: "Главная", en: "Home", de: "Start" },
  navReasons: { ru: "100 причин", en: "100 reasons", de: "100 Gründe" },
  navLibrary: { ru: "Библиотека чувств", en: "Feelings library", de: "Gefühlsbibliothek" },
  navPhotos: { ru: "Твои фото", en: "Your photos", de: "Deine Fotos" },
  navWords: { ru: "100 слов о тебе", en: "100 words about you", de: "100 Worte über dich" },
  navLetter: { ru: "Главное поздравление", en: "Main letter", de: "Hauptbrief" },
  navParents: { ru: "Родителям", en: "To her parents", de: "An ihre Eltern" },
  navFinal: { ru: "Финал", en: "Finale", de: "Finale" },
  restartIntro: { ru: "Повторить вступление", en: "Replay intro", de: "Intro wiederholen" },
  reasonsTitle: {
    ru: "100 причин, почему я люблю тебя",
    en: "100 reasons why I love you",
    de: "100 Gründe, warum ich dich liebe"
  },
  previous: { ru: "Предыдущая", en: "Previous", de: "Zurück" },
  next: { ru: "Следующая", en: "Next", de: "Weiter" },
  random: { ru: "Случайная причина", en: "Random reason", de: "Zufälliger Grund" },
  allReasons: { ru: "Все причины", en: "All reasons", de: "Alle Gründe" },
  favorite: { ru: "Отметить сердечком", en: "Mark with a heart", de: "Mit Herz markieren" },
  libraryTitle: { ru: "Библиотека моих чувств", en: "Library of my feelings", de: "Bibliothek meiner Gefühle" },
  allCards: { ru: "Все", en: "All", de: "Alle" },
  songShelfTeaser: {
    ru: "Открыть секретную музыкальную полку",
    en: "Open the secret music shelf",
    de: "Das geheime Musikfach öffnen"
  },
  songShelfTitle: {
    ru: "Песни, которые звучат как комплименты тебе",
    en: "Songs that feel like compliments to you",
    de: "Lieder, die sich wie Komplimente für dich anfühlen"
  },
  songShelfNote: {
    ru: "Это не строки из песен, а мои оригинальные маленькие поздравления в их настроении.",
    en: "These are not song lyrics, but my own little wishes in their mood.",
    de: "Das sind keine Songtexte, sondern meine eigenen kleinen Wünsche in ihrer Stimmung."
  },
  inspiredBy: { ru: "вайб", en: "vibe", de: "Stimmung" },
  categories: {
    birthday: { ru: "Поздравления", en: "Birthday wishes", de: "Glückwünsche" },
    love: { ru: "Почему я тебя люблю", en: "Why I love you", de: "Warum ich dich liebe" },
    moments: { ru: "Твои фото, которые мне понравились", en: "Your photos I loved", de: "Deine Fotos, die ich besonders mag" },
    secret: { ru: "Секретные письма", en: "Secret letters", de: "Geheime Briefe" },
    family: { ru: "Семья", en: "Family", de: "Familie" }
  },
  openCard: { ru: "Открыть открытку", en: "Open card", de: "Karte öffnen" },
  close: { ru: "Закрыть", en: "Close", de: "Schließen" },
  photosTitle: {
    ru: "Твои фотографии, которые мне особенно понравились",
    en: "Your photos that I especially loved",
    de: "Deine Fotos, die mir besonders gefallen"
  },
  photoPlaceholder: { ru: "Добавь фотографию сюда", en: "Add a photo here", de: "Füge hier ein Foto hinzu" },
  wordsTitle: {
    ru: "100 слов, которыми я хочу описать тебя",
    en: "100 words I would use to describe you",
    de: "100 Worte, mit denen ich dich beschreiben würde"
  },
  wordsIntro: {
    ru: "Ещё не придумали такого комплимента,\nкоторый мог бы полностью тебя описать\n\nИ даже 100 слов или даже 1000 —\nслишком мало, чтобы передать,\nнасколько ты потрясающая 💜🧸",
    en: "No compliment has been invented yet\nthat could fully describe you\n\nAnd even 100 words, or even 1,000,\nwould be too little to express\nhow wonderful you are 💜🧸",
    de: "Es gibt noch kein Kompliment,\ndas dich vollständig beschreiben könnte\n\nUnd selbst 100 Worte oder sogar 1.000\nwären viel zu wenig, um zu zeigen,\nwie wundervoll du bist 💜🧸"
  },
  finalText: {
    ru: "В твой 15-й день рождения я мог бы написать ещё тысячу причин\nсоздать ещё сотню открыток\nи подобрать ещё миллион красивых слов\n\nНо всё равно не смог бы полностью объяснить,\nнасколько сильно ты мне дорога\n\nПоэтому скажу самое главное\n\nЯ люблю тебя, Леруся 💜",
    en: "On your 15th birthday, I could write another thousand reasons\ncreate a hundred more letters\nand find a million beautiful words\n\nBut I still could not fully explain\nhow much you mean to me\n\nSo I will say the most important thing\n\nI love you, Valeriia 💜",
    de: "Zu deinem 15. Geburtstag könnte ich noch tausend Gründe aufschreiben\nnoch hundert Briefe erstellen\nund eine Million schöne Worte finden\n\nTrotzdem könnte ich nie vollständig erklären,\nwie viel du mir bedeutest\n\nDeshalb sage ich nur das Wichtigste\n\nIch liebe dich, Valeriia 💜"
  },
  touchHeart: { ru: "Нажми на сердечко", en: "Touch the heart", de: "Berühre das Herz" },
  finalSignature: {
    ru: `С 15-летием, любимая\nТвой ${siteConfig.authorName} 💜🧸`,
    en: "Happy 15th Birthday, my love\nYour Davyd 💜🧸",
    de: "Alles Gute zum 15. Geburtstag, meine Liebe\nDein Davyd 💜🧸"
  },
  finalAfterNote: {
    ru: "Эта маленькая вселенная всё равно меньше того, что я чувствую к тебе.",
    en: "This little universe is still smaller than what I feel for you.",
    de: "Dieses kleine Universum ist immer noch kleiner als das, was ich für dich fühle."
  },
  secretUnlocked: {
    ru: "Секретное сообщение разблокировано\n\nДа, я действительно люблю тебя\nнастолько сильно 💜🧸",
    en: "Secret message unlocked\n\nYes, I really do love you\nthat much 💜🧸",
    de: "Geheime Nachricht freigeschaltet\n\nJa, ich liebe dich wirklich\nso sehr 💜🧸"
  }
} satisfies Record<string, unknown>;
