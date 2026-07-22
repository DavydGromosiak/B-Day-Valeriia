import { LocalizedString } from "./translations";

export type SongCompliment = {
  id: number;
  vibe: string;
  note: LocalizedString;
};

// EDIT HERE: можно заменить вайб песни и текст. Не вставляй сюда полные реальные lyrics популярных песен.
// Это не цитаты, а короткие личные ассоциации Давида с песнями.
export const songCompliments: SongCompliment[] = [
  {
    id: 1,
    vibe: "Until I Found You / Stephen Sanchez",
    note: {
      ru: "Если честно, эта песня у меня почему-то про то чувство, когда человек становится очень родным не сразу громко, а постепенно. Сначала просто приятно общаться, потом ждёшь сообщения, а потом ловишь себя на мысли: ну всё, попал 🙈",
      en: "Honestly, this song feels to me like that moment when someone becomes close not loudly, but slowly. First it is just nice to talk, then you wait for a message, and then you realize: okay, I am in trouble 🙈",
      de: "Ehrlich, dieses Lied fühlt sich für mich so an, wenn ein Mensch nicht laut, sondern langsam wichtig wird. Erst schreibt man einfach gern, dann wartet man auf Nachrichten, und irgendwann merkt man: okay, erwischt 🙈"
    }
  },
  {
    id: 2,
    vibe: "golden hour / JVKE",
    note: {
      ru: "Эта песня для меня про свет, но не про какой-то киношный. Скорее про тот момент, когда смотришь на твоё фото и думаешь: блин, ну как она может так выглядеть просто случайно 🥹",
      en: "For me, this song is about light, but not in a movie way. More like when I look at your photo and think: how can she look like that so naturally 🥹",
      de: "Für mich geht dieses Lied um Licht, aber nicht wie im Film. Eher so, wenn ich dein Foto anschaue und denke: Wie kann sie einfach so natürlich so aussehen 🥹"
    }
  },
  {
    id: 3,
    vibe: "Perfect / Ed Sheeran",
    note: {
      ru: "Я не буду писать, что всё идеально, потому что это звучит слишком как открытка из магазина. Но с тобой бывают моменты, где правда хочется просто остановиться и подумать: вот бы это подольше не заканчивалось",
      en: "I will not write that everything is perfect, because that sounds too much like a store-bought card. But with you, there are moments when I really want time to slow down for a bit.",
      de: "Ich schreibe nicht, dass alles perfekt ist, weil das zu sehr nach gekaufter Karte klingt. Aber mit dir gibt es Momente, in denen ich wirklich möchte, dass die Zeit kurz langsamer wird."
    }
  },
  {
    id: 4,
    vibe: "All of Me / John Legend",
    note: {
      ru: "Мне нравится в тебе не только “хорошая” часть. Мне нравится и твой характер, и когда ты злишься, и когда споришь, и когда делаешь вид, что тебе всё равно, хотя я вижу, что не всё равно 😅",
      en: "I like not only the “easy” parts of you. I like your character too, even when you get annoyed, argue, or pretend you do not care when I can see that you do 😅",
      de: "Ich mag nicht nur die “einfachen” Seiten an dir. Ich mag auch deinen Charakter, wenn du sauer bist, diskutierst oder so tust, als wäre es dir egal, obwohl ich sehe, dass es nicht egal ist 😅"
    }
  },
  {
    id: 5,
    vibe: "Just the Way You Are / Bruno Mars",
    note: {
      ru: "Эта ассоциация простая: мне не хочется, чтобы ты становилась кем-то другим ради кого-то. Мне нравится именно ты, со своими привычками, настроением, милотой и маленькими странностями",
      en: "This one is simple: I do not want you to become someone else for anyone. I like you exactly as you are, with your habits, moods, sweetness, and little strange things.",
      de: "Diese Verbindung ist einfach: Ich möchte nicht, dass du für jemanden anders wirst. Ich mag genau dich, mit deinen Gewohnheiten, Stimmungen, deiner Süße und kleinen Eigenheiten."
    }
  },
  {
    id: 6,
    vibe: "Die With A Smile / Lady Gaga & Bruno Mars",
    note: {
      ru: "Не буду драматизировать, но я правда очень люблю, когда ты улыбаешься. Даже если день был так себе, одна твоя нормальная улыбка может сделать его заметно лучше",
      en: "I will not make it dramatic, but I really love when you smile. Even if the day was not great, one real smile from you can make it much better.",
      de: "Ich will es nicht dramatisch machen, aber ich liebe es wirklich, wenn du lächelst. Auch wenn der Tag nicht so gut war, kann ein echtes Lächeln von dir ihn viel besser machen."
    }
  },
  {
    id: 7,
    vibe: "Yellow / Coldplay",
    note: {
      ru: "Знаешь, в тебе есть какой-то свой свет. Не такой, где надо всем доказывать, какая ты яркая. А тихий, который замечаешь и потом почему-то долго помнишь",
      en: "You know, you have your own kind of light. Not the kind that tries to prove anything. A quiet one, the kind you notice and remember for a long time.",
      de: "Weißt du, du hast dein eigenes Licht. Nicht so eins, das allen etwas beweisen will. Eher ein ruhiges, das man bemerkt und lange im Kopf behält."
    }
  },
  {
    id: 8,
    vibe: "Can't Help Falling in Love / Elvis Presley",
    note: {
      ru: "Иногда я сам не сразу понимаю, что чувствую. Просто замечаю, что думаю о тебе чаще, чем планировал, улыбаюсь с переписки и жду, когда ты снова что-то напишешь",
      en: "Sometimes I do not understand my feelings right away. I just notice that I think about you more than planned, smile at our chat, and wait for you to write again.",
      de: "Manchmal verstehe ich selbst nicht sofort, was ich fühle. Ich merke nur, dass ich öfter an dich denke als geplant, bei unserem Chat lächle und warte, bis du wieder schreibst."
    }
  },
  {
    id: 9,
    vibe: "Make You Feel My Love / Adele",
    note: {
      ru: "Мне хочется, чтобы рядом со мной тебе не приходилось делать вид, что всё нормально, если внутри не нормально. Я не идеальный в словах, но я правда хочу быть тем, кому ты можешь сказать честно",
      en: "I want you to feel that with me, you do not have to pretend everything is fine when it is not. I am not perfect with words, but I really want to be someone you can be honest with.",
      de: "Ich möchte, dass du neben mir nicht so tun musst, als wäre alles gut, wenn es innen nicht gut ist. Ich bin nicht perfekt mit Worten, aber ich möchte wirklich jemand sein, bei dem du ehrlich sein kannst."
    }
  },
  {
    id: 10,
    vibe: "Best Part / Daniel Caesar & H.E.R.",
    note: {
      ru: "Иногда лучшая часть дня это не что-то большое. Иногда это просто твоё сообщение, твоя фотка или то, что ты вдруг рассказываешь какую-то мелочь, а мне почему-то становится приятно",
      en: "Sometimes the best part of the day is not something big. Sometimes it is just your message, your photo, or you telling me some small thing, and for some reason it makes me happy.",
      de: "Manchmal ist der beste Teil des Tages nichts Großes. Manchmal ist es einfach deine Nachricht, dein Foto oder eine kleine Sache, die du erzählst, und irgendwie macht mich das froh."
    }
  },
  {
    id: 11,
    vibe: "Lover / Taylor Swift",
    note: {
      ru: "Мне нравится мысль, что любовь это не только громкие признания. Иногда это просто хотеть быть рядом, спрашивать как день, волноваться, если ты грустная, и радоваться твоим маленьким радостям",
      en: "I like the thought that love is not only big confessions. Sometimes it is just wanting to be close, asking about your day, worrying when you are sad, and being happy for your little joys.",
      de: "Ich mag den Gedanken, dass Liebe nicht nur große Geständnisse sind. Manchmal heißt es einfach, nah sein zu wollen, nach deinem Tag zu fragen, sich Sorgen zu machen und sich über deine kleinen Freuden zu freuen."
    }
  },
  {
    id: 12,
    vibe: "Photograph / Ed Sheeran",
    note: {
      ru: "Некоторые твои фото я сохраняю не потому, что они “самые идеальные”. А потому что в них есть ты, твой взгляд, твоя мимика, твой момент. И мне хочется это оставить у себя",
      en: "I save some of your photos not because they are “the most perfect”. I save them because they have you in them, your look, your expression, your moment. And I want to keep that.",
      de: "Manche Fotos von dir speichere ich nicht, weil sie “perfekt” sind. Ich speichere sie, weil du darin bist, dein Blick, dein Ausdruck, dein Moment. Und das möchte ich behalten."
    }
  }
];
