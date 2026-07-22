import { LocalizedString } from "./translations";

export type SongCompliment = {
  id: number;
  vibe: string;
  note: LocalizedString;
};

// EDIT HERE: можно заменить вайб песни и текст. Не вставляй сюда полные реальные lyrics популярных песен.
// Лучше оставлять оригинальные строки "в настроении песни", как маленькие музыкальные комплименты.
export const songCompliments: SongCompliment[] = [
  {
    id: 1,
    vibe: "Perfect / Ed Sheeran",
    note: {
      ru: "Если бы эта песня стала открыткой, там было бы написано: ты выглядишь так, будто вечер специально придумали для тебя.",
      en: "If this song became a card, it would say: you look like the evening was made just for you.",
      de: "Wenn dieses Lied eine Karte wäre, würde dort stehen: Du siehst aus, als wäre dieser Abend nur für dich gemacht."
    }
  },
  {
    id: 2,
    vibe: "All of Me / John Legend",
    note: {
      ru: "Мне нравится в тебе всё: нежность, характер, улыбка и даже те маленькие странности, из-за которых ты ещё роднее.",
      en: "I love everything about you: your tenderness, your character, your smile, and even the little quirks that make you dearer.",
      de: "Ich liebe alles an dir: deine Zärtlichkeit, deinen Charakter, dein Lächeln und sogar die kleinen Eigenheiten, die dich noch vertrauter machen."
    }
  },
  {
    id: 3,
    vibe: "Just the Way You Are / Bruno Mars",
    note: {
      ru: "Тебе не нужно становиться другой, чтобы быть прекрасной. Ты уже такая, на кого хочется смотреть с улыбкой.",
      en: "You do not need to become someone else to be beautiful. You already are someone I want to look at with a smile.",
      de: "Du musst nicht anders werden, um schön zu sein. Du bist schon jemand, den man mit einem Lächeln ansehen möchte."
    }
  },
  {
    id: 4,
    vibe: "A Thousand Years / Christina Perri",
    note: {
      ru: "Есть чувства, которые звучат тише слов, но держатся крепче времени. Моё чувство к тебе именно такое.",
      en: "Some feelings sound quieter than words, but hold stronger than time. My feeling for you is exactly like that.",
      de: "Manche Gefühle klingen leiser als Worte, halten aber stärker als die Zeit. Mein Gefühl für dich ist genau so."
    }
  },
  {
    id: 5,
    vibe: "Until I Found You / Stephen Sanchez",
    note: {
      ru: "С тобой внутри становится так спокойно, будто сердце наконец нашло место, где ему хорошо.",
      en: "With you, everything inside feels calm, as if my heart finally found a place where it belongs.",
      de: "Mit dir wird alles in mir ruhig, als hätte mein Herz endlich einen Ort gefunden, an dem es richtig ist."
    }
  },
  {
    id: 6,
    vibe: "Die With A Smile / Lady Gaga & Bruno Mars",
    note: {
      ru: "Если день закончится твоей улыбкой, он уже будет одним из тех дней, которые хочется беречь.",
      en: "If the day ends with your smile, it already becomes one of those days I want to keep.",
      de: "Wenn der Tag mit deinem Lächeln endet, wird er schon zu einem dieser Tage, die ich bewahren möchte."
    }
  },
  {
    id: 7,
    vibe: "Yellow / Coldplay",
    note: {
      ru: "В тебе есть свой свет. Не громкий, не показной, а такой, который замечаешь и потом долго помнишь.",
      en: "You have your own light. Not loud, not showy, but the kind you notice and remember for a long time.",
      de: "Du hast dein eigenes Licht. Nicht laut, nicht auffällig, sondern eines, das man bemerkt und lange behält."
    }
  },
  {
    id: 8,
    vibe: "Can't Help Falling in Love / Elvis Presley",
    note: {
      ru: "Иногда сердце не спрашивает разрешения. Оно просто становится мягче, когда думает о тебе.",
      en: "Sometimes the heart does not ask for permission. It simply becomes softer when it thinks of you.",
      de: "Manchmal fragt das Herz nicht um Erlaubnis. Es wird einfach weicher, wenn es an dich denkt."
    }
  },
  {
    id: 9,
    vibe: "Make You Feel My Love / Adele",
    note: {
      ru: "Мне хочется, чтобы ты всегда чувствовала: рядом со мной твоё сердце можно не прятать.",
      en: "I want you to always feel that beside me, your heart never has to hide.",
      de: "Ich möchte, dass du immer spürst: Neben mir muss sich dein Herz nie verstecken."
    }
  },
  {
    id: 10,
    vibe: "Best Part / Daniel Caesar & H.E.R.",
    note: {
      ru: "Если у дня есть самая красивая часть, то для меня это та, где появляешься ты.",
      en: "If a day has a most beautiful part, for me it is the part where you appear.",
      de: "Wenn ein Tag einen schönsten Teil hat, dann ist es für mich der, in dem du auftauchst."
    }
  },
  {
    id: 11,
    vibe: "Lover / Taylor Swift",
    note: {
      ru: "Мне нравится мысль, что любовь может быть не громкой драмой, а тёплым местом, куда хочется возвращаться.",
      en: "I love the thought that love can be not a loud drama, but a warm place you want to return to.",
      de: "Ich mag den Gedanken, dass Liebe kein lautes Drama sein muss, sondern ein warmer Ort, zu dem man zurückkehren möchte."
    }
  },
  {
    id: 12,
    vibe: "Photograph / Ed Sheeran",
    note: {
      ru: "Некоторые фото хочется хранить не в телефоне, а где-то ближе к сердцу. Твои — именно такие.",
      en: "Some photos should be kept not in a phone, but somewhere closer to the heart. Yours are exactly like that.",
      de: "Manche Fotos möchte man nicht im Handy aufbewahren, sondern näher am Herzen. Deine sind genau solche."
    }
  }
];
