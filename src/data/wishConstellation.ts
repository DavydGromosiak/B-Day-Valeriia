import { LocalizedString } from "./translations";

export type BirthdayWish = {
  id: number;
  title: LocalizedString;
  text: LocalizedString;
  x: number;
  y: number;
};

// EDIT HERE: 15 маленьких желаний на 15-летие. Можно менять тексты и порядок звёзд.
export const birthdayWishes: BirthdayWish[] = [
  {
    id: 1,
    x: 10,
    y: 26,
    title: {
      ru: "Спокойствия внутри",
      en: "Peace inside",
      de: "Ruhe in dir"
    },
    text: {
      ru: "Я хочу, чтобы у тебя было больше спокойных дней. Не пустых, а именно таких, где внутри не шумит, где можно выдохнуть и почувствовать: всё нормально, я справляюсь.",
      en: "I hope you have more calm days. Not empty ones, but days when your mind is not loud, when you can breathe out and feel: it is okay, I can handle this.",
      de: "Ich wünsche dir mehr ruhige Tage. Nicht leere Tage, sondern solche, an denen es innen nicht laut ist und du fühlen kannst: Es ist okay, ich schaffe das."
    }
  },
  {
    id: 2,
    x: 24,
    y: 14,
    title: {
      ru: "Улыбок без причины",
      en: "Smiles for no reason",
      de: "Lächeln ohne Grund"
    },
    text: {
      ru: "Пусть у тебя чаще будут моменты, когда ты улыбаешься просто так. Не потому что надо, не потому что кто-то ждёт, а потому что тебе самой вдруг стало хорошо.",
      en: "I hope you have more moments when you smile for no special reason. Not because you have to, not because someone expects it, but because you suddenly feel good.",
      de: "Ich wünsche dir mehr Momente, in denen du einfach so lächelst. Nicht weil du musst, sondern weil es dir plötzlich gut geht."
    }
  },
  {
    id: 3,
    x: 42,
    y: 22,
    title: {
      ru: "Лёгкой учёбы",
      en: "Easier school days",
      de: "Leichtere Schultage"
    },
    text: {
      ru: "Пусть учёба не забирает у тебя все силы. Хочу, чтобы даже в сложные дни у тебя оставалось место для себя, отдыха, музыки и маленьких радостей.",
      en: "I hope school does not take all your energy. Even on hard days, I want you to still have space for yourself, rest, music, and small joys.",
      de: "Ich wünsche dir, dass die Schule dir nicht alle Kraft nimmt. Auch an schweren Tagen soll noch Platz für dich, Ruhe, Musik und kleine Freuden bleiben."
    }
  },
  {
    id: 4,
    x: 62,
    y: 12,
    title: {
      ru: "Верить в себя",
      en: "Belief in yourself",
      de: "Glaube an dich"
    },
    text: {
      ru: "Я хочу, чтобы ты чаще видела себя так, как я тебя вижу: не слабой, не обычной, не “ну норм”, а живой, умной, красивой и очень настоящей.",
      en: "I hope you see yourself more often the way I see you: not weak, not ordinary, not just okay, but alive, smart, beautiful, and very real.",
      de: "Ich wünsche dir, dass du dich öfter so siehst, wie ich dich sehe: nicht schwach, nicht gewöhnlich, sondern lebendig, klug, schön und sehr echt."
    }
  },
  {
    id: 5,
    x: 84,
    y: 27,
    title: {
      ru: "Тёплых людей рядом",
      en: "Warm people near you",
      de: "Warme Menschen um dich"
    },
    text: {
      ru: "Пусть рядом с тобой будут люди, после которых не становится тяжелее. Те, с кем можно быть собой, смеяться, молчать и не объяснять каждую мелочь.",
      en: "I hope you have people near you who do not make your heart heavier. People with whom you can be yourself, laugh, be quiet, and not explain every little thing.",
      de: "Ich wünsche dir Menschen in deiner Nähe, nach denen es nicht schwerer wird. Menschen, bei denen du du selbst sein kannst, lachen, schweigen und nicht alles erklären musst."
    }
  },
  {
    id: 6,
    x: 17,
    y: 48,
    title: {
      ru: "Красивых маленьких моментов",
      en: "Beautiful little moments",
      de: "Schöne kleine Momente"
    },
    text: {
      ru: "Пусть у тебя будет больше таких моментов, которые вроде маленькие, но потом вспоминаются с улыбкой: хороший свет, вкусный напиток, смешное сообщение, любимая песня.",
      en: "I hope you get more little moments that seem small, but later make you smile: nice light, a good drink, a funny message, a favorite song.",
      de: "Ich wünsche dir mehr kleine Momente, die erst klein wirken, aber später ein Lächeln bringen: schönes Licht, ein gutes Getränk, eine lustige Nachricht, ein Lieblingslied."
    }
  },
  {
    id: 7,
    x: 36,
    y: 42,
    title: {
      ru: "Не сомневаться в красоте",
      en: "No doubts about your beauty",
      de: "Keine Zweifel an deiner Schönheit"
    },
    text: {
      ru: "Мне хочется, чтобы ты меньше сомневалась в себе. Я знаю, иногда это не так просто, но правда: в тебе очень много красоты, и не только на фото.",
      en: "I want you to doubt yourself less. I know it is not always easy, but honestly, there is so much beauty in you, and not only in photos.",
      de: "Ich möchte, dass du weniger an dir zweifelst. Ich weiß, das ist nicht immer leicht, aber ehrlich: In dir ist so viel Schönheit, nicht nur auf Fotos."
    }
  },
  {
    id: 8,
    x: 55,
    y: 50,
    title: {
      ru: "Смелости для мечт",
      en: "Courage for dreams",
      de: "Mut für Träume"
    },
    text: {
      ru: "Пусть у тебя хватает смелости хотеть большего. Не обязательно всем сразу рассказывать, просто внутри знать: я могу, я попробую, я достойна.",
      en: "I hope you have enough courage to want more. You do not have to tell everyone right away, just know inside: I can, I will try, I deserve it.",
      de: "Ich wünsche dir Mut, mehr zu wollen. Du musst es nicht allen erzählen, nur innen wissen: Ich kann das, ich versuche es, ich bin es wert."
    }
  },
  {
    id: 9,
    x: 76,
    y: 45,
    title: {
      ru: "Дней без лишней тревоги",
      en: "Days with less worry",
      de: "Tage mit weniger Sorge"
    },
    text: {
      ru: "Пусть тревога не забирает у тебя настроение. Я хочу, чтобы в твоей голове чаще было тихо и мягко, а не бесконечное “а вдруг”.",
      en: "I hope worry does not steal your mood. I want your mind to feel quiet and soft more often, instead of endless what ifs.",
      de: "Ich wünsche dir, dass Sorgen dir nicht die Stimmung nehmen. In deinem Kopf soll es öfter ruhig und weich sein, nicht voller Was-wäre-wenn."
    }
  },
  {
    id: 10,
    x: 9,
    y: 72,
    title: {
      ru: "Чувствовать любовь",
      en: "Feeling loved",
      de: "Liebe spüren"
    },
    text: {
      ru: "Пусть ты всегда чувствуешь, что тебя любят не за идеальность. Не за оценки, не за настроение, не за удобность, а просто потому что ты — это ты.",
      en: "I hope you always feel loved not for being perfect. Not for grades, not for your mood, not for being easy, but simply because you are you.",
      de: "Ich wünsche dir, dass du dich geliebt fühlst, nicht weil du perfekt bist. Nicht wegen Noten oder Stimmung, sondern einfach, weil du du bist."
    }
  },
  {
    id: 11,
    x: 28,
    y: 78,
    title: {
      ru: "Больше нежности",
      en: "More tenderness",
      de: "Mehr Zärtlichkeit"
    },
    text: {
      ru: "Хочу, чтобы в твоей жизни было больше нежности. В словах, в объятиях, в заботе, в мелочах. Такой, от которой становится спокойно.",
      en: "I want your life to have more tenderness. In words, hugs, care, and small things. The kind that makes you feel calm.",
      de: "Ich wünsche dir mehr Zärtlichkeit im Leben. In Worten, Umarmungen, Fürsorge und Kleinigkeiten. So eine, die ruhig macht."
    }
  },
  {
    id: 12,
    x: 47,
    y: 70,
    title: {
      ru: "Своего темпа",
      en: "Your own pace",
      de: "Dein eigenes Tempo"
    },
    text: {
      ru: "Пусть никто не заставляет тебя жить в чужом темпе. Ты можешь расти, ошибаться, отдыхать, меняться и всё равно оставаться невероятной.",
      en: "I hope no one forces you to live at someone else's pace. You can grow, make mistakes, rest, change, and still be amazing.",
      de: "Ich wünsche dir, dass dich niemand in ein fremdes Tempo drängt. Du darfst wachsen, Fehler machen, dich ausruhen, dich ändern und trotzdem wunderbar bleiben."
    }
  },
  {
    id: 13,
    x: 66,
    y: 76,
    title: {
      ru: "Смеяться до боли в щеках",
      en: "Laughing until your cheeks hurt",
      de: "Lachen, bis die Wangen weh tun"
    },
    text: {
      ru: "Пусть у тебя будет больше такого смеха, после которого болят щёки и немного стыдно за то, как громко было, но зато очень хорошо.",
      en: "I hope you laugh more in that way when your cheeks hurt and you feel a little embarrassed by how loud it was, but it felt so good.",
      de: "Ich wünsche dir mehr Lachen, bei dem die Wangen weh tun und es dir fast peinlich ist, wie laut es war, aber es sich richtig gut anfühlt."
    }
  },
  {
    id: 14,
    x: 88,
    y: 67,
    title: {
      ru: "Беречь своё сердце",
      en: "Protecting your heart",
      de: "Dein Herz schützen"
    },
    text: {
      ru: "Я хочу, чтобы ты берегла своё сердце. Оно у тебя правда доброе, и пусть рядом будут те, кто это ценит, а не пользуется этим.",
      en: "I want you to protect your heart. It is truly kind, and I hope the people near you value that instead of using it.",
      de: "Ich möchte, dass du dein Herz schützt. Es ist wirklich gut, und ich hoffe, die Menschen um dich schätzen das und nutzen es nicht aus."
    }
  },
  {
    id: 15,
    x: 78,
    y: 86,
    title: {
      ru: "Быть счастливой по-своему",
      en: "Being happy your own way",
      de: "Auf deine Art glücklich sein"
    },
    text: {
      ru: "Самое главное: я хочу, чтобы ты была счастливой именно по-своему. Не как “надо”, не как кто-то сказал, а так, чтобы внутри было честное: да, мне хорошо 💜",
      en: "Most of all, I want you to be happy in your own way. Not the way people say you should be, but in a way that feels honestly good inside 💜",
      de: "Am wichtigsten: Ich wünsche dir, dass du auf deine eigene Art glücklich bist. Nicht so, wie andere es sagen, sondern so, dass es innen ehrlich gut ist 💜"
    }
  }
];
