import { LocalizedString } from "./translations";

export type SongCompliment = {
  id: number;
  title: string;
  artist: string;
  fragment: LocalizedString;
  why: LocalizedString;
  spotifyUrl: string;
  youtubeUrl: string;
};

// EDIT HERE: можно менять песни, смысловые урывки и объяснения.
// Важно: сюда не вставляются полные реальные lyrics популярных песен.
// Вместо цитат здесь личная адаптация смысла, чтобы сайт оставался тёплым и безопасным.
const songComplimentEntries: Omit<SongCompliment, "spotifyUrl" | "youtubeUrl">[] = [
  {
    id: 1,
    title: "Until I Found You",
    artist: "Stephen Sanchez",
    fragment: {
      ru: "Смысл урывка для меня: человек появляется в жизни не громко, но в какой-то момент ты понимаешь, что уже не хочешь терять его.",
      en: "What I hear in this part is that someone can quietly come into your life, and then you realize you really do not want to lose them.",
      de: "Was ich in dieser Stelle höre: Jemand kommt leise in dein Leben, und irgendwann merkst du, dass du diese Person nicht verlieren willst."
    },
    why: {
      ru: "Я выбрал это, потому что с тобой у меня именно так. Не было какого-то резкого “вау”, просто ты становилась всё ближе, а потом я понял, что ты для меня уже очень важная 🙈",
      en: "I chose it because this is how it feels with you. It was not one loud wow moment. You just became closer and closer, and then I realized how important you are to me 🙈",
      de: "Ich habe es gewählt, weil es sich mit dir genau so anfühlt. Es war kein lauter Wow-Moment. Du wurdest einfach immer wichtiger, bis ich es richtig gemerkt habe 🙈"
    }
  },
  {
    id: 2,
    title: "golden hour",
    artist: "JVKE",
    fragment: {
      ru: "Смысл урывка: человек выглядит так красиво в обычном свете, что момент будто сам становится мягче и теплее.",
      en: "The idea: someone looks so beautiful in ordinary light that the whole moment feels softer and warmer.",
      de: "Die Idee: Jemand sieht im normalen Licht so schön aus, dass der ganze Moment weicher und wärmer wirkt."
    },
    why: {
      ru: "Потому что многие твои фото у меня вызывают именно это чувство. Смотришь и думаешь: ну как можно так случайно красиво получиться 🥹",
      en: "Because many of your photos give me exactly that feeling. I look at them and think: how can she look this beautiful so naturally 🥹",
      de: "Weil mir viele deiner Fotos genau dieses Gefühl geben. Ich schaue sie an und denke: Wie kann sie so natürlich schön aussehen 🥹"
    }
  },
  {
    id: 3,
    title: "Perfect",
    artist: "Ed Sheeran",
    fragment: {
      ru: "Смысл урывка: есть момент, который не надо улучшать, потому что рядом с нужным человеком он уже ощущается правильным.",
      en: "The idea: some moments do not need to be improved, because with the right person they already feel right.",
      de: "Die Idee: Manche Momente muss man nicht besser machen, weil sie mit der richtigen Person schon richtig wirken."
    },
    why: {
      ru: "Не хочу писать слишком идеально, но иногда с тобой правда хочется просто остановиться и подумать: вот бы это подольше не заканчивалось",
      en: "I do not want to make it sound too perfect, but sometimes with you I really just want time to slow down a little.",
      de: "Ich will es nicht zu perfekt klingen lassen, aber manchmal wünsche ich mir wirklich, dass die Zeit mit dir kurz langsamer wird."
    }
  },
  {
    id: 4,
    title: "All of Me",
    artist: "John Legend",
    fragment: {
      ru: "Смысл урывка: любить человека не только за удобные стороны, а за всё, что делает его настоящим.",
      en: "The idea: loving someone not only for the easy parts, but for everything that makes them real.",
      de: "Die Idee: Einen Menschen nicht nur für die einfachen Seiten zu mögen, sondern für alles, was ihn echt macht."
    },
    why: {
      ru: "Мне нравится в тебе не только когда ты милая. Мне нравится и твой характер, и когда ты споришь, и когда чуть злишься. Это тоже ты, и это тоже по-своему родное 😅",
      en: "I do not only like you when you are sweet. I like your character too, even when you argue or get a little annoyed. That is also you, and it feels close to me 😅",
      de: "Ich mag dich nicht nur, wenn du süß bist. Ich mag auch deinen Charakter, wenn du diskutierst oder ein bisschen sauer bist. Das bist auch du, und es fühlt sich nah an 😅"
    }
  },
  {
    id: 5,
    title: "Just the Way You Are",
    artist: "Bruno Mars",
    fragment: {
      ru: "Смысл урывка: не нужно становиться другой, чтобы быть любимой. Достаточно быть собой.",
      en: "The idea: you do not need to become someone else to be loved. Being yourself is enough.",
      de: "Die Idee: Du musst nicht anders werden, um geliebt zu werden. Du selbst zu sein reicht."
    },
    why: {
      ru: "Потому что мне правда нравится именно ты: с привычками, настроением, милотой, упрямством и маленькими странностями. Менять это было бы преступлением против красоты момента",
      en: "Because I really like exactly you: your habits, moods, sweetness, stubbornness, and little strange things. Changing that would honestly be a crime against the moment.",
      de: "Weil ich wirklich genau dich mag: deine Gewohnheiten, Stimmungen, deine liebe Art, deine Sturheit und deine kleinen Eigenheiten. Das zu ändern wäre wirklich schade."
    }
  },
  {
    id: 6,
    title: "Die With A Smile",
    artist: "Lady Gaga & Bruno Mars",
    fragment: {
      ru: "Смысл урывка: если рядом тот самый человек, даже сложный день хочется встретить с улыбкой.",
      en: "The idea: when the right person is near, even a hard day feels easier to face with a smile.",
      de: "Die Idee: Wenn die richtige Person nah ist, fühlt sich sogar ein schwerer Tag leichter an."
    },
    why: {
      ru: "Я выбрал это из-за твоей улыбки. Не буду драматизировать, но она реально может сделать мой день лучше, даже если до этого всё было так себе",
      en: "I chose it because of your smile. I will not make it dramatic, but it really can make my day better, even if it was not going well before.",
      de: "Ich habe es wegen deines Lächelns gewählt. Ich will es nicht dramatisch machen, aber es kann meinen Tag wirklich besser machen."
    }
  },
  {
    id: 7,
    title: "Yellow",
    artist: "Coldplay",
    fragment: {
      ru: "Смысл урывка: у человека есть свой свет, который не кричит, но почему-то остаётся в памяти.",
      en: "The idea: someone has their own light, not loud, but somehow impossible to forget.",
      de: "Die Idee: Jemand hat ein eigenes Licht, nicht laut, aber irgendwie bleibt es im Kopf."
    },
    why: {
      ru: "Знаешь, в тебе есть такой тихий свет. Не тот, где надо всем что-то доказывать, а тот, который замечаешь и потом долго вспоминаешь",
      en: "You know, you have that quiet kind of light. Not the kind that tries to prove anything, but the kind you notice and remember.",
      de: "Weißt du, du hast so ein ruhiges Licht. Nicht eins, das etwas beweisen will, sondern eins, das man bemerkt und lange in Erinnerung behält."
    }
  },
  {
    id: 8,
    title: "Can't Help Falling in Love",
    artist: "Elvis Presley",
    fragment: {
      ru: "Смысл урывка: чувства иногда приходят не по плану, а просто тихо становятся фактом.",
      en: "The idea: feelings do not always arrive by plan. Sometimes they quietly become a fact.",
      de: "Die Idee: Gefühle kommen nicht immer nach Plan. Manchmal werden sie einfach leise zu einer Tatsache."
    },
    why: {
      ru: "Потому что я сам не сразу понял, насколько сильно ты мне нравишься. Просто стал чаще думать о тебе, ждать сообщения и улыбаться с переписки",
      en: "Because I did not understand right away how much I liked you. I just started thinking about you more, waiting for your messages, and smiling at our chat.",
      de: "Weil ich selbst nicht sofort verstanden habe, wie sehr ich dich mag. Ich dachte einfach öfter an dich, freute mich auf deine Nachrichten und musste bei unserem Chat lächeln."
    }
  },
  {
    id: 9,
    title: "Make You Feel My Love",
    artist: "Adele",
    fragment: {
      ru: "Смысл урывка: хочется быть рядом с человеком не только когда всё хорошо, но и когда ему тяжело.",
      en: "The idea: wanting to be there for someone not only when everything is fine, but also when it is hard.",
      de: "Die Idee: Für jemanden da sein zu wollen, nicht nur wenn alles gut ist, sondern auch wenn es schwer ist."
    },
    why: {
      ru: "Мне хочется, чтобы со мной тебе не приходилось делать вид, что всё нормально. Я не всегда умею красиво говорить, но я правда хочу быть рядом по-настоящему",
      en: "I want you to feel that with me you do not have to pretend everything is fine. I am not always good with words, but I truly want to be there.",
      de: "Ich möchte, dass du bei mir nicht so tun musst, als wäre alles gut. Ich bin nicht immer gut mit Worten, aber ich will wirklich da sein."
    }
  },
  {
    id: 10,
    title: "Best Part",
    artist: "Daniel Caesar & H.E.R.",
    fragment: {
      ru: "Смысл урывка: иногда лучший кусочек дня — это не событие, а человек, который делает обычное приятным.",
      en: "The idea: sometimes the best part of the day is not an event, but a person who makes ordinary things feel good.",
      de: "Die Idee: Manchmal ist der beste Teil des Tages kein Ereignis, sondern ein Mensch, der normale Dinge schön macht."
    },
    why: {
      ru: "Потому что иногда мне достаточно твоего сообщения, фотки или какой-то мелочи от тебя, и день уже становится чуть теплее",
      en: "Because sometimes your message, your photo, or one small thing from you is enough to make my day feel warmer.",
      de: "Weil manchmal deine Nachricht, dein Foto oder eine kleine Sache von dir reicht, damit mein Tag wärmer wird."
    }
  },
  {
    id: 11,
    title: "Lover",
    artist: "Taylor Swift",
    fragment: {
      ru: "Смысл урывка: любовь — это не только громкие признания, а желание быть рядом в обычных днях.",
      en: "The idea: love is not only big confessions, but wanting to be close in ordinary days.",
      de: "Die Idee: Liebe sind nicht nur große Geständnisse, sondern der Wunsch, im Alltag nah zu sein."
    },
    why: {
      ru: "Мне нравится, что с тобой важными становятся простые вещи: спросить как день, переживать за настроение, радоваться твоим маленьким радостям",
      en: "I like that with you, simple things become important: asking about your day, caring about your mood, and being happy for your little joys.",
      de: "Ich mag, dass mit dir einfache Dinge wichtig werden: nach deinem Tag fragen, auf deine Stimmung achten und mich über deine kleinen Freuden freuen."
    }
  },
  {
    id: 12,
    title: "Photograph",
    artist: "Ed Sheeran",
    fragment: {
      ru: "Смысл урывка: фото хранит не идеальность, а чувство, которое хочется оставить рядом.",
      en: "The idea: a photo keeps not perfection, but a feeling you want to keep close.",
      de: "Die Idee: Ein Foto bewahrt nicht Perfektion, sondern ein Gefühl, das man nah behalten möchte."
    },
    why: {
      ru: "Именно поэтому я сохраняю твои фото. Не потому что они все “идеальные”, а потому что в них есть ты: взгляд, мимика, настроение, момент",
      en: "That is why I save your photos. Not because they are all perfect, but because they have you in them: your look, expression, mood, and moment.",
      de: "Deshalb speichere ich deine Fotos. Nicht weil sie alle perfekt sind, sondern weil sie dich zeigen: deinen Blick, deinen Ausdruck, deine Stimmung und den jeweiligen Moment."
    }
  },
  {
    id: 13,
    title: "A Thousand Years",
    artist: "Christina Perri",
    fragment: {
      ru: "Смысл для меня: иногда человек становится настолько важным, что даже ожидание и волнение рядом с ним ощущаются не зря.",
      en: "The meaning for me: sometimes a person becomes so important that even waiting and feeling nervous around them feels worth it.",
      de: "Die Bedeutung für mich: Manchmal wird ein Mensch so wichtig, dass sich sogar das Warten und die Aufregung lohnen."
    },
    why: {
      ru: "Эта песня напоминает мне о том, как чувства растут постепенно. Сначала ты просто нравишься, а потом вдруг понимаешь, что думаешь о человеке намного чаще, чем собирался 🥹",
      en: "This song reminds me of how feelings grow slowly. First you simply like someone, and then you realize you think about them much more often than you planned 🥹",
      de: "Dieses Lied erinnert mich daran, wie Gefühle langsam wachsen. Zuerst mag man jemanden einfach, und dann merkt man, dass man viel öfter an diese Person denkt als geplant 🥹"
    }
  },
  {
    id: 14,
    title: "Say You Won't Let Go",
    artist: "James Arthur",
    fragment: {
      ru: "Смысл для меня: настоящее чувство видно не только в красивых словах, а в желании оставаться рядом в самых обычных днях.",
      en: "The meaning for me: real feelings are not only in beautiful words, but in wanting to stay close through ordinary days.",
      de: "Die Bedeutung für mich: Echte Gefühle stecken nicht nur in schönen Worten, sondern auch im Wunsch, im normalen Alltag nah zu bleiben."
    },
    why: {
      ru: "Мне нравится сама мысль о простом «я рядом». Без огромных обещаний и пафоса. Просто спрашивать, как ты, слушать твои истории и не исчезать, когда настроение не самое лучшее",
      en: "I like the simple idea of saying, “I am here.” No huge promises. Just asking how you are, listening to your stories, and not disappearing when your mood is not the best.",
      de: "Ich mag den einfachen Gedanken: „Ich bin da.“ Keine riesigen Versprechen. Einfach fragen, wie es dir geht, deine Geschichten hören und nicht verschwinden, wenn deine Stimmung nicht die beste ist."
    }
  },
  {
    id: 15,
    title: "Those Eyes",
    artist: "New West",
    fragment: {
      ru: "Смысл для меня: сильнее всего запоминаются не идеальные кадры, а взгляд и маленькие детали, которые замечаешь только у важного человека.",
      en: "The meaning for me: what stays with you is not a perfect picture, but a look and the little details you notice only in someone important.",
      de: "Die Bedeutung für mich: Im Kopf bleiben nicht perfekte Bilder, sondern ein Blick und kleine Details, die man nur bei einem wichtigen Menschen bemerkt."
    },
    why: {
      ru: "У тебя очень запоминающийся взгляд. На некоторых фотографиях я реально сначала смотрю тебе в глаза, а уже потом замечаю всё остальное. Не знаю, как это нормально объяснить, но вот так 😅",
      en: "Your look is very easy to remember. In some photos I honestly notice your eyes first and everything else only after. I do not really know how to explain it better 😅",
      de: "Dein Blick bleibt leicht in Erinnerung. Auf manchen Fotos sehe ich ehrlich zuerst deine Augen und alles andere erst danach. Ich weiß nicht, wie ich es besser erklären soll 😅"
    }
  },
  {
    id: 16,
    title: "Dandelions",
    artist: "Ruth B.",
    fragment: {
      ru: "Смысл для меня: когда загадываешь что-то хорошее, в голове почему-то сразу появляется один конкретный человек.",
      en: "The meaning for me: when you make a small wish, one particular person somehow appears in your mind right away.",
      de: "Die Bedeutung für mich: Wenn man sich etwas Schönes wünscht, erscheint irgendwie sofort ein bestimmter Mensch im Kopf."
    },
    why: {
      ru: "Наверное, немного глупо звучит, но когда я представляю что-то хорошее впереди, ты там появляешься сама собой. Я специально тебя туда не вставляю, честно 🙈",
      en: "It may sound a little silly, but when I imagine something good ahead, you appear there on your own. I do not place you there on purpose, honestly 🙈",
      de: "Vielleicht klingt es ein bisschen albern, aber wenn ich mir etwas Schönes in der Zukunft vorstelle, bist du einfach dabei. Ich setze dich nicht extra hinein, ehrlich 🙈"
    }
  },
  {
    id: 17,
    title: "I Wanna Be Yours",
    artist: "Arctic Monkeys",
    fragment: {
      ru: "Смысл для меня: иногда хочется не придумывать идеальное признание, а просто стать человеком, к которому можно прийти и которому можно доверять.",
      en: "The meaning for me: sometimes you do not need a perfect confession. You just want to be someone the other person can come to and trust.",
      de: "Die Bedeutung für mich: Manchmal braucht man kein perfektes Geständnis. Man möchte einfach jemand sein, zu dem die andere Person kommen und dem sie vertrauen kann."
    },
    why: {
      ru: "Я не всегда знаю, какие слова правильные. Но мне правда хочется быть тем, кому ты можешь написать и хорошее, и странное, и то, что тебя бесит. Мне важно, чтобы рядом со мной тебе было спокойно",
      en: "I do not always know the right words. But I really want to be someone you can text about good things, strange things, and things that annoy you. I want you to feel calm with me.",
      de: "Ich kenne nicht immer die richtigen Worte. Aber ich möchte jemand sein, dem du schöne, komische und nervige Dinge schreiben kannst. Mir ist wichtig, dass du dich bei mir ruhig fühlst."
    }
  },
  {
    id: 18,
    title: "Adore You",
    artist: "Harry Styles",
    fragment: {
      ru: "Смысл для меня: заботиться о человеке хочется не ради ответа или награды, а просто потому, что он тебе важен.",
      en: "The meaning for me: you want to care for someone not for a reward or an answer, but simply because they matter to you.",
      de: "Die Bedeutung für mich: Man möchte sich nicht wegen einer Belohnung um jemanden kümmern, sondern einfach, weil dieser Mensch wichtig ist."
    },
    why: {
      ru: "Мне приятно делать для тебя какие-то мелочи и видеть, что ты улыбаешься. Даже этот сайт я делал не ради идеальной реакции. Мне просто хотелось подарить тебе что-то очень твоё 💜",
      en: "I like doing small things for you and seeing you smile. Even this website was not made for a perfect reaction. I simply wanted to give you something that feels truly yours 💜",
      de: "Ich mache gern kleine Dinge für dich und sehe dich lächeln. Auch diese Website habe ich nicht für eine perfekte Reaktion gemacht. Ich wollte dir einfach etwas schenken, das wirklich zu dir gehört 💜"
    }
  },
  {
    id: 19,
    title: "Rewrite the Stars",
    artist: "Zac Efron & Zendaya",
    fragment: {
      ru: "Смысл для меня: иногда обстоятельства и сомнения всё усложняют, но это не отменяет желания попробовать быть ближе.",
      en: "The meaning for me: circumstances and doubts can make everything harder, but they do not remove the wish to become closer.",
      de: "Die Bedeutung für mich: Umstände und Zweifel können alles schwieriger machen, aber der Wunsch nach mehr Nähe bleibt trotzdem."
    },
    why: {
      ru: "Не всё всегда получается легко и понятно, и мы оба можем накрутить лишнего. Но мне нравится мысль, что важное не обязательно бросать только потому, что иногда оно сложное",
      en: "Not everything is always easy or clear, and both of us can overthink things. But I like the thought that something important should not be abandoned only because it is sometimes difficult.",
      de: "Nicht alles ist immer leicht oder klar, und wir können beide zu viel nachdenken. Aber ich mag den Gedanken, dass man etwas Wichtiges nicht aufgeben muss, nur weil es manchmal schwierig ist."
    }
  },
  {
    id: 20,
    title: "Glue Song",
    artist: "beabadoobee",
    fragment: {
      ru: "Смысл для меня: человек может как-то незаметно приклеиться к мыслям, и потом ты вспоминаешь его даже во время самых обычных дел.",
      en: "The meaning for me: someone can quietly stick in your thoughts, and then you remember them even during the most ordinary things.",
      de: "Die Bedeutung für mich: Ein Mensch kann leise in den Gedanken hängen bleiben, und dann erinnert man sich sogar bei ganz normalen Dingen an ihn."
    },
    why: {
      ru: "Это очень похоже на тебя в моей голове. Могу заниматься вообще чем-то другим, увидеть смешную мелочь или красивый свет и внезапно подумать: надо бы Лере показать 🫶🏻",
      en: "This is very much how you are in my head. I can be doing something completely different, notice a funny detail or beautiful light, and suddenly think: I should show this to Valeriia 🫶🏻",
      de: "So bist du oft in meinem Kopf. Ich kann etwas ganz anderes machen, ein lustiges Detail oder schönes Licht sehen und plötzlich denken: Das muss ich Valeriia zeigen 🫶🏻"
    }
  }
];

const makeSpotifyUrl = (title: string, artist: string) =>
  `https://open.spotify.com/search/${encodeURIComponent(`${title} ${artist}`)}`;

const makeYoutubeUrl = (title: string, artist: string) =>
  `https://www.youtube.com/results?search_query=${encodeURIComponent(`${title} ${artist} official audio`)}`;

export const songCompliments: SongCompliment[] = songComplimentEntries.map((entry) => ({
  ...entry,
  spotifyUrl: makeSpotifyUrl(entry.title, entry.artist),
  youtubeUrl: makeYoutubeUrl(entry.title, entry.artist)
}));
