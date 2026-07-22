import { LocalizedString } from "./translations";

export type CardCategory = "birthday" | "love" | "moments" | "secret" | "family";

export type FeelingCard = {
  id: number;
  category: CardCategory;
  title: LocalizedString;
  text: LocalizedString;
  image: string;
  objectPosition: string;
  signature: LocalizedString;
  shape: "postcard" | "envelope" | "book" | "photo";
};

type PhotoCardSeed = {
  id: number;
  category: CardCategory;
  title: LocalizedString;
  text: LocalizedString;
  objectPosition?: string;
};

const l = (ru: string, en: string, de: string): LocalizedString => ({ ru, en, de });

const signature = l("Твой Давид 💜", "Your Davyd 💜", "Dein Davyd 💜");
const shapes: FeelingCard["shape"][] = ["photo", "postcard", "envelope", "book"];

// EDIT HERE: здесь можно заменить любой текст под конкретную фотографию Леры.
// Важно: 29 и 58 — мама Елена, 25 — Лера с папой Виталием и Мирусей, 37 — Мируся.
const photoCardSeeds: PhotoCardSeed[] = [
  {
    id: 1,
    category: "birthday",
    title: l("Начну с самого простого", "Let me start simply", "Ich fange ganz einfach an"),
    text: l(
      `Лерусь, с 15-летием тебя 💜

Не знаю, почему именно это фото хочется поставить первым. Наверное, потому что оно немного смешное, живое и совсем не пытается быть идеальным.

А мне как раз очень нравится настоящая ты. Даже если в кадре половинка лица и какая-то странная милота рядом 😅`,
      `Happy 15th Birthday, Valeriia 💜

I do not really know why I want to start with this photo. Maybe because it is a little funny, alive, and not trying to be perfect.

And honestly, I really like the real you. Even with half a face in the frame and some silly cuteness next to you 😅`,
      `Alles Gute zum 15. Geburtstag, Valeriia 💜

Ich weiß nicht genau, warum ich mit diesem Foto anfangen möchte. Vielleicht, weil es ein bisschen lustig, echt und gar nicht perfekt ist.

Und ehrlich, ich mag genau diese echte Seite an dir. Auch mit halbem Gesicht im Bild und dieser kleinen lustigen Süße daneben 😅`
    ),
    objectPosition: "center 30%"
  },
  {
    id: 2,
    category: "moments",
    title: l("Ты с Юлей в красивом зале", "You and Yulia in that hall", "Du und Yulia in diesem Saal"),
    text: l(
      `Мне правда нравится этот кадр.

Вы с Юлей тут выглядите не как “мы специально сделали идеальное фото”, а просто как две подруги, которым хорошо рядом.

Красивый зал, ваши жесты, улыбки. И в этом есть что-то очень лёгкое, будто момент сам получился нормальным и тёплым`,
      `I really like this photo.

You and Yulia do not look like you were trying to make a perfect picture. You just look like two friends who feel good together.

The hall, your gestures, the smiles. It all feels easy, like the moment just happened naturally.`,
      `Ich mag dieses Foto wirklich.

Du und Yulia wirkt nicht so, als wolltet ihr ein perfektes Bild machen. Ihr wirkt einfach wie zwei Freundinnen, denen es zusammen gut geht.

Der Saal, eure Gesten, das Lächeln. Das fühlt sich leicht an, als wäre der Moment einfach von selbst schön geworden.`
    ),
    objectPosition: "center 30%"
  },
  {
    id: 3,
    category: "moments",
    title: l("Просто хороший кадр", "Just a good little photo", "Einfach ein gutes Bild"),
    text: l(
      `Не знаю почему, но такие спокойные фото с подругами мне нравятся больше, чем слишком постановочные.

Тут нет ничего лишнего. Вы рядом, ты смотришь спокойно, и фото выглядит как кусочек обычного дня.

Может, для тебя это мелочь, но мне такие моменты почему-то хочется сохранять`,
      `I do not know why, but I like calm photos with friends more than very staged ones.

There is nothing extra here. You are together, your look is calm, and the photo feels like a small piece of a normal day.

Maybe it is a little thing for you, but I like keeping moments like this.`,
      `Ich weiß nicht warum, aber ruhige Fotos mit Freundinnen mag ich oft mehr als sehr gestellte Bilder.

Hier ist nichts zu viel. Ihr seid zusammen, dein Blick ist ruhig, und das Foto fühlt sich wie ein kleiner Teil eines normalen Tages an.

Vielleicht ist das für dich nur eine Kleinigkeit, aber solche Momente möchte ich gern behalten.`
    )
  },
  {
    id: 4,
    category: "secret",
    title: l("Да, даже такое фото", "Yes, even this photo", "Ja, sogar dieses Foto"),
    text: l(
      `Наверное, это прозвучит немного странно, но мне нравится, когда ты можешь просто дурачиться.

Не быть “идеальной”, не держать лицо, не думать, как это выглядит. Просто сделать смешное фото и всё.

В такие моменты ты какая-то особенно живая. И мне это очень по-доброму нравится 🙈`,
      `This may sound a little strange, but I like when you can just be silly.

Not perfect, not serious, not thinking too much about how it looks. Just a funny photo, and that is it.

In moments like this, you feel especially real to me. And I like that a lot 🙈`,
      `Vielleicht klingt das ein bisschen komisch, aber ich mag es, wenn du einfach albern sein kannst.

Nicht perfekt, nicht ernst, nicht zu viel darüber nachdenken, wie es aussieht. Einfach ein lustiges Foto.

In solchen Momenten wirkst du für mich besonders echt. Und ich mag das sehr 🙈`
    ),
    objectPosition: "center 24%"
  },
  {
    id: 5,
    category: "birthday",
    title: l("Пожелание на сегодня", "A wish for today", "Ein Wunsch für heute"),
    text: l(
      `Я хочу, чтобы сегодня ты как можно чаще улыбалась.

Чтобы хотя бы на один день стало меньше всяких мыслей, которые утомляют, и больше того, от чего внутри спокойно.

Ты правда заслуживаешь день, где всё чуть мягче, теплее и именно так, как хочется тебе 🧸`,
      `I want you to smile as much as possible today.

I hope that, at least for one day, there are fewer heavy thoughts and more things that make you feel calm inside.

You really deserve a day that feels softer, warmer, and exactly the way you want it 🧸`,
      `Ich wünsche mir, dass du heute so oft wie möglich lächelst.

Dass es wenigstens für einen Tag weniger schwere Gedanken gibt und mehr Dinge, die dich innerlich ruhig machen.

Du verdienst wirklich einen Tag, der weicher, wärmer und genau so ist, wie du ihn brauchst 🧸`
    )
  },
  {
    id: 6,
    category: "love",
    title: l("За твою уютную сторону", "For your cozy side", "Für deine gemütliche Seite"),
    text: l(
      `Я люблю в тебе эту мягкую, домашнюю сторону.

Когда ты можешь быть просто собой, без позы и без попытки что-то доказать. На этом фото это очень чувствуется.

Просто рядом с такой тобой мне почему-то становится спокойнее`,
      `I love this soft, cozy side of you.

The side where you can just be yourself, without posing and without proving anything. I can feel it in this photo.

For some reason, this version of you makes me feel calmer.`,
      `Ich liebe diese weiche, gemütliche Seite an dir.

Die Seite, in der du einfach du selbst bist, ohne Pose und ohne etwas beweisen zu müssen. Auf diesem Foto spürt man das.

Neben dieser Seite von dir werde ich irgendwie ruhiger.`
    ),
    objectPosition: "center 24%"
  },
  {
    id: 7,
    category: "moments",
    title: l("Зеркало и характер", "Mirror and attitude", "Spiegel und Charakter"),
    text: l(
      `Тут мне нравится не только само фото, а настроение.

Вы с подругой выглядите уверенно, немного дерзко, но всё равно очень естественно. Никакого “смотрите, какие мы серьёзные”.

Просто кадр, в котором есть характер. И у тебя он тут прям виден 😌`,
      `What I like here is not only the photo, but the mood.

You and your friend look confident, a little bold, but still very natural. Not too serious, not too forced.

It is a photo with character. And yours shows clearly here 😌`,
      `Ich mag hier nicht nur das Foto, sondern die Stimmung.

Du und deine Freundin wirkt selbstbewusst, ein bisschen frech, aber trotzdem sehr natürlich. Nicht zu ernst und nicht gestellt.

Es ist ein Bild mit Charakter. Und deiner ist hier wirklich zu sehen 😌`
    )
  },
  {
    id: 8,
    category: "moments",
    title: l("Солнце и смешной момент", "Sun and a funny moment", "Sonne und ein lustiger Moment"),
    text: l(
      `Это фото просто доброе.

Солнце, подруга рядом, смешные лица, и всё выглядит так, будто вы поймали момент без лишних стараний.

Мне нравится, что у тебя есть люди, с которыми ты можешь быть такой живой`,
      `This photo just feels kind.

Sun, a friend beside you, funny faces, and everything looks like you caught the moment without trying too hard.

I like that you have people around you with whom you can be this alive.`,
      `Dieses Foto fühlt sich einfach gut an.

Sonne, eine Freundin neben dir, lustige Gesichter, und alles wirkt so, als hättet ihr den Moment einfach erwischt.

Ich mag, dass du Menschen hast, bei denen du so lebendig sein kannst.`
    )
  },
  {
    id: 9,
    category: "moments",
    title: l("Светлый кадр с Юлей", "A bright photo with Yulia", "Ein helles Foto mit Yulia"),
    text: l(
      `Здесь мне нравится именно простота.

Ты рядом с Юлей, дневной свет, спокойная улыбка, мирный знак. Никакой лишней драмы, просто хороший кадр.

И почему-то от него прям ощущается, что день был нормальный и тёплый`,
      `I like the simplicity here.

You beside Yulia, daylight, a calm smile, a peace sign. No extra drama, just a good photo.

For some reason, it feels like the day was simple and warm.`,
      `Ich mag hier gerade die Einfachheit.

Du neben Yulia, Tageslicht, ein ruhiges Lächeln, ein Peace-Zeichen. Kein Drama, einfach ein gutes Foto.

Irgendwie fühlt es sich an, als wäre der Tag ruhig und warm gewesen.`
    ),
    objectPosition: "center 25%"
  },
  {
    id: 10,
    category: "love",
    title: l("За твой взгляд", "For your look", "Für deinen Blick"),
    text: l(
      `Я люблю твой взгляд.

Иногда он может быть очень мягким, иногда чуть хитрым, иногда спокойным. На этом фото он именно такой, из-за которого я зависаю на пару секунд.

Да, сердечки тоже милые. Но глаза всё равно главные 🥹`,
      `I love your look.

Sometimes it is very soft, sometimes a little playful, sometimes calm. In this photo, it is the kind of look that makes me stop for a few seconds.

The little hearts are cute too, yes. But your eyes are still the main thing 🥹`,
      `Ich liebe deinen Blick.

Manchmal ist er sehr weich, manchmal ein bisschen verspielt, manchmal ruhig. Auf diesem Foto ist es genau dieser Blick, bei dem ich kurz hängen bleibe.

Die kleinen Herzchen sind auch süß, ja. Aber deine Augen sind trotzdem das Wichtigste 🥹`
    ),
    objectPosition: "center 22%"
  },
  {
    id: 11,
    category: "love",
    title: l("За твой стиль без шума", "For your quiet style", "Für deinen ruhigen Stil"),
    text: l(
      `Мне нравится, что ты умеешь выглядеть красиво без ощущения, будто слишком старалась.

Простое зеркало, обычный кадр, но всё равно видно твой стиль. В этом есть какая-то аккуратность, которая тебе очень идёт.

Не знаю, как объяснить нормально, но вот да. Мне правда нравится`,
      `I like that you can look beautiful without making it feel like you tried too hard.

A simple mirror, a simple photo, but your style is still there. There is a neatness in it that suits you.

I do not know how to explain it perfectly, but yes. I really like it.`,
      `Ich mag, dass du schön aussehen kannst, ohne dass es zu gewollt wirkt.

Ein einfacher Spiegel, ein einfaches Foto, aber dein Stil ist trotzdem da. Es hat etwas Feines, das dir sehr steht.

Ich weiß nicht, wie ich es perfekt erklären soll, aber ja. Ich mag das wirklich.`
    ),
    objectPosition: "center 22%"
  },
  {
    id: 12,
    category: "secret",
    title: l("Маленькая ты и котик", "Little you and the cat", "Kleine du und die Katze"),
    text: l(
      `Это фото меня почему-то очень трогает.

Ты маленькая, рядом котик, и всё такое простое, что даже смешно писать большой текст. Но оно правда тёплое.

Наверное, мне нравится видеть такие кусочки тебя, которые были ещё до меня. Как будто я чуть лучше понимаю, какой ты росла 🧸`,
      `This photo touches me for some reason.

Little you, a cat beside you, and everything is so simple that writing a big text almost feels funny. But it really is warm.

I think I like seeing these small pieces of you from before I knew you. It makes me feel like I understand you a little more 🧸`,
      `Dieses Foto berührt mich irgendwie.

Du als kleines Mädchen, eine Katze neben dir, und alles ist so einfach, dass ein großer Text fast lustig wäre. Aber es ist wirklich warm.

Ich mag solche kleinen Teile von dir, die es schon vor mir gab. So habe ich das Gefühl, dich ein bisschen besser zu verstehen 🧸`
    ),
    objectPosition: "center 30%"
  },
  {
    id: 13,
    category: "birthday",
    title: l("Хочу тебе таких моментов", "I wish you moments like this", "Ich wünsche dir solche Momente"),
    text: l(
      `В твой день рождения я хочу пожелать тебе не каких-то огромных слов.

А вот таких моментов: когда рядом хорошие люди, когда можно улыбнуться без причины, когда день не давит, а просто идёт нормально.

Пусть таких маленьких хороших моментов у тебя будет больше ✨`,
      `For your birthday, I do not want to wish you some huge perfect words.

I want to wish you moments like this: good people nearby, a smile for no big reason, and a day that does not feel heavy.

I hope you get many more of these small good moments ✨`,
      `Zu deinem Geburtstag möchte ich dir keine riesigen perfekten Worte wünschen.

Ich wünsche dir eher solche Momente: gute Menschen in der Nähe, ein Lächeln ohne großen Grund und einen Tag, der sich nicht schwer anfühlt.

Ich hoffe, du bekommst noch viele von diesen kleinen guten Momenten ✨`
    )
  },
  {
    id: 14,
    category: "love",
    title: l("За твою мягкость", "For your softness", "Für deine weiche Art"),
    text: l(
      `Я люблю в тебе мягкость.

Не такую показную, а нормальную, настоящую. Она иногда видна даже просто в лице, во взгляде, в том, как ты смотришь.

На этом фото она почему-то очень заметна. И мне от этого тепло`,
      `I love your softness.

Not the fake kind, but the real, normal kind. Sometimes I can see it just in your face, in your eyes, in the way you look.

For some reason, it is very clear in this photo. And it makes me feel warm.`,
      `Ich liebe deine weiche Art.

Nicht so eine gespielte, sondern eine echte, normale. Manchmal sieht man sie einfach in deinem Gesicht, in deinen Augen, in deinem Blick.

Auf diesem Foto sieht man das besonders. Und es fühlt sich warm an.`
    ),
    objectPosition: "center 25%"
  },
  {
    id: 15,
    category: "moments",
    title: l("Очки, зеркало и настроение", "Glasses, mirror, and mood", "Brille, Spiegel und Stimmung"),
    text: l(
      `Этот кадр немного смешной, но в хорошем смысле.

Вы с подругой выглядите так, будто заранее знали, что получится нормально. Очки, зеркало, поза, всё на месте.

И да, получилось правда классно 😅`,
      `This photo is a little funny, but in a good way.

You and your friend look like you already knew it would turn out well. Glasses, mirror, pose, everything is there.

And yes, it really did turn out cool 😅`,
      `Dieses Foto ist ein bisschen lustig, aber auf eine gute Art.

Du und deine Freundin wirkt so, als hättet ihr schon gewusst, dass es gut wird. Brille, Spiegel, Pose, alles passt.

Und ja, es ist wirklich cool geworden 😅`
    )
  },
  {
    id: 16,
    category: "moments",
    title: l("Две собачки и вы", "Two dog filters and you", "Zwei Hundefilter und ihr"),
    text: l(
      `Да, это максимально обычный смешной фильтр.

Но мне нравится, что фото не пытается быть серьёзным. Вы с подругой просто поймали настроение, и от этого кадр кажется честнее.

Такие фото потом почему-то вспоминаются лучше, чем “идеальные”`,
      `Yes, it is a very simple funny filter.

But I like that the photo is not trying to be serious. You and your friend just caught a mood, and that makes it feel more honest.

Photos like this often stay in memory better than “perfect” ones.`,
      `Ja, es ist ein ganz einfacher lustiger Filter.

Aber ich mag, dass das Foto nicht ernst sein will. Du und deine Freundin habt einfach eine Stimmung erwischt, und dadurch wirkt es ehrlicher.

Solche Fotos bleiben oft besser im Kopf als perfekte.`
    )
  },
  {
    id: 17,
    category: "secret",
    title: l("Маленькая фотолента", "A little photo strip", "Ein kleiner Fotostreifen"),
    text: l(
      `Знаешь, мне нравится сама идея этого фото.

Будто не один кадр, а маленькая лента с разными кусочками тебя. И каждый кусочек как будто говорит: вот она, разная, настоящая, живая.

Я не всегда умею красиво объяснять такие вещи, но мне правда приятно смотреть на это`,
      `You know, I like the idea of this photo.

It feels less like one picture and more like a little strip of different pieces of you. Every piece says something like: here she is, different, real, alive.

I am not always good at explaining things like this, but I really like looking at it.`,
      `Weißt du, ich mag die Idee von diesem Foto.

Es wirkt nicht wie nur ein Bild, sondern wie ein kleiner Streifen mit verschiedenen Teilen von dir. Jeder Teil sagt irgendwie: da ist sie, verschieden, echt, lebendig.

Ich kann sowas nicht immer schön erklären, aber ich schaue es wirklich gern an.`
    )
  },
  {
    id: 18,
    category: "love",
    title: l("За твою уверенность", "For your confidence", "Für deine Sicherheit"),
    text: l(
      `Я люблю, когда в тебе видно уверенность.

Не громкую, не такую “я лучше всех”, а спокойную. Когда ты просто выглядишь так, будто знаешь, какая ты.

На этом фото с кудрями это очень чувствуется. И тебе это правда идёт`,
      `I love when I can see confidence in you.

Not loud confidence, not “I am better than everyone”, but calm confidence. When you simply look like you know who you are.

In this curly-haired photo, I can really feel it. And it suits you a lot.`,
      `Ich liebe es, wenn man deine Sicherheit sieht.

Nicht laut, nicht so “ich bin besser als alle”, sondern ruhig. Wenn du einfach wirkst, als wüsstest du, wer du bist.

Auf diesem Foto mit den Locken spürt man das sehr. Und es steht dir wirklich.`
    ),
    objectPosition: "center 25%"
  },
  {
    id: 19,
    category: "moments",
    title: l("Ты, Юля и ещё одна подруга", "You, Yulia, and another friend", "Du, Yulia und noch eine Freundin"),
    text: l(
      `Это фото прям летнее.

Ты, Юля и ещё одна подруга рядом, вокруг люди, солнце, движение. Ничего специально романтичного, но всё живое.

Мне нравится, что у тебя есть такие кадры, где видно не только внешность, а твоя жизнь вокруг тебя`,
      `This photo feels very summery.

You, Yulia, and another friend nearby, people around, sun, movement. Nothing overly romantic, but everything feels alive.

I like that you have photos where I can see not just how you look, but a little bit of your life around you.`,
      `Dieses Foto fühlt sich sehr nach Sommer an.

Du, Yulia und noch eine Freundin, Menschen um euch herum, Sonne, Bewegung. Nichts extra Romantisches, aber alles wirkt lebendig.

Ich mag Fotos, auf denen man nicht nur sieht, wie du aussiehst, sondern auch ein bisschen dein Leben um dich herum.`
    )
  },
  {
    id: 20,
    category: "secret",
    title: l("Обычное зеркало", "A simple mirror", "Ein einfacher Spiegel"),
    text: l(
      `Не знаю почему, но мне нравятся и такие обычные фото.

Ты просто стоишь перед зеркалом, без какого-то большого смысла, а я всё равно смотрю и думаю: да, это Лера.

Может, именно в таких простых кадрах человек почему-то кажется ближе`,
      `I do not know why, but I like simple photos like this too.

You are just standing in front of a mirror, without any big meaning, and I still look at it and think: yes, that is Valeriia.

Maybe in simple photos, a person somehow feels closer.`,
      `Ich weiß nicht warum, aber ich mag auch solche einfachen Fotos.

Du stehst einfach vor dem Spiegel, ohne große Bedeutung, und ich schaue es trotzdem an und denke: ja, das ist Valeriia.

Vielleicht wirkt ein Mensch gerade auf solchen einfachen Bildern näher.`
    ),
    objectPosition: "center 20%"
  },
  {
    id: 21,
    category: "birthday",
    title: l("Пусть будет больше лёгкости", "More easy moments", "Mehr leichte Momente"),
    text: l(
      `Я хочу, чтобы в твоём новом году было больше лёгкости.

Не только больших радостей, а ещё обычных нормальных дней: солнце в машине, спокойная музыка, смешной фильтр, хорошее настроение.

Пусть тебе чаще будет просто хорошо. Без причины, без объяснений, просто хорошо`,
      `I want your new year of life to have more lightness.

Not only big happy moments, but also normal good days: sun in the car, calm music, a funny filter, a good mood.

I hope you feel good more often. Without a reason, without explaining it, just good.`,
      `Ich wünsche dir für dein neues Lebensjahr mehr Leichtigkeit.

Nicht nur große schöne Momente, sondern auch normale gute Tage: Sonne im Auto, ruhige Musik, ein lustiger Filter, gute Stimmung.

Ich hoffe, dass es dir öfter einfach gut geht. Ohne Grund, ohne Erklärung, einfach gut.`
    ),
    objectPosition: "center 25%"
  },
  {
    id: 22,
    category: "secret",
    title: l("Hello Kitty и ты", "Hello Kitty and you", "Hello Kitty und du"),
    text: l(
      `Это фото смешное, но я его всё равно люблю.

В нём есть та твоя сторона, где ты можешь быть милой и немного глупенькой в хорошем смысле. И знаешь, это очень подкупает.

Потому что рядом с человеком, который не боится быть смешным, становится легче самому`,
      `This photo is funny, but I still love it.

It shows the side of you that can be cute and a little silly in a good way. And honestly, that is very charming.

Because when someone is not afraid to be funny, it also makes me feel lighter.`,
      `Dieses Foto ist lustig, aber ich mag es trotzdem sehr.

Es zeigt die Seite an dir, die süß und ein bisschen albern sein kann, auf eine gute Art. Und ehrlich, das ist sehr charmant.

Neben einem Menschen, der keine Angst hat lustig zu sein, wird man selbst auch leichter.`
    ),
    objectPosition: "center 20%"
  },
  {
    id: 23,
    category: "moments",
    title: l("Горы, вода и ты", "Mountains, water, and you", "Berge, Wasser und du"),
    text: l(
      `Этот кадр я бы сохранил даже просто из-за вида.

Но там есть ты, и поэтому он ощущается совсем иначе. Красная футболка, горы, вода, и ты смотришь куда-то вдаль.

В нём есть спокойствие. Такое, которое хочется не объяснять, а просто оставить`,
      `I would save this photo even just for the view.

But you are in it, and that makes it feel completely different. The red shirt, the mountains, the water, and you looking into the distance.

There is calmness in it. The kind I do not want to explain, just keep.`,
      `Ich würde dieses Foto schon nur wegen der Aussicht behalten.

Aber du bist darin, und dadurch fühlt es sich ganz anders an. Das rote Shirt, die Berge, das Wasser, und du schaust in die Ferne.

Es hat eine Ruhe. Eine, die ich nicht erklären, sondern einfach behalten möchte.`
    ),
    objectPosition: "center 35%"
  },
  {
    id: 24,
    category: "secret",
    title: l("Ты замечаешь красоту", "You notice beauty", "Du bemerkst Schönheit"),
    text: l(
      `На этом фото нет тебя, но мне оно всё равно подходит для этой библиотеки.

Потому что оно как будто про то, что ты замечаешь детали. Цветы, свет, маленькие красивые штуки вокруг.

Мне правда нравится эта черта. Не всё в жизни надо делать громким, иногда достаточно просто заметить`,
      `You are not in this photo, but it still belongs in this library for me.

Because it feels like it says something about you: you notice details. Flowers, light, small beautiful things around you.

I really like that. Not everything in life has to be loud, sometimes it is enough to notice.`,
      `Du bist nicht auf diesem Foto, aber für mich passt es trotzdem in diese Bibliothek.

Denn es erzählt irgendwie etwas über dich: du bemerkst Details. Blumen, Licht, kleine schöne Dinge um dich herum.

Ich mag diese Eigenschaft sehr. Nicht alles im Leben muss laut sein, manchmal reicht es, etwas zu bemerken.`
    )
  },
  {
    id: 25,
    category: "family",
    title: l("Ты с Виталием и Мирусей", "You with Vitalii and Mirusya", "Du mit Vitalii und Mirusya"),
    text: l(
      `Лерусь, это очень тёплый семейный кадр.

Ты рядом с папой Виталием и Мирусей, вокруг горы и вода, а в фото есть ощущение защиты и чего-то родного.

Мне приятно видеть, что рядом с тобой есть такая семья. И честно, по тебе видно, что тебя растили с теплом`,
      `Valeriia, this is a very warm family photo.

You are with your dad Vitalii and Mirusya, with mountains and water around you. The photo feels protective and close.

It is nice for me to see that you have a family like this. And honestly, I can tell that you were raised with warmth.`,
      `Valeriia, das ist ein sehr warmes Familienfoto.

Du bist mit deinem Papa Vitalii und Mirusya zusammen, um euch herum Berge und Wasser. Das Foto fühlt sich nach Schutz und Nähe an.

Es ist schön für mich zu sehen, dass du so eine Familie hast. Und ehrlich, man merkt dir an, dass du mit Wärme groß geworden bist.`
    ),
    objectPosition: "center 35%"
  },
  {
    id: 26,
    category: "love",
    title: l("За то, как тебе идут простые кадры", "For how simple photos suit you", "Dafür, wie dir einfache Fotos stehen"),
    text: l(
      `Я люблю, что тебе не обязательно делать что-то особенное, чтобы фото получилось красивым.

Вот вроде обычное зеркало, примерочная, никакой “магии”. А ты всё равно выглядишь так, что хочется сохранить.

Мне нравится эта твоя естественная красота, без лишнего шума`,
      `I love that you do not need to do anything special for a photo to look beautiful.

It is just a mirror, a changing room, nothing magical. And still, you look like someone I want to keep in a photo.

I like your natural beauty without all the extra noise.`,
      `Ich liebe, dass du nichts Besonderes machen musst, damit ein Foto schön wird.

Nur ein Spiegel, eine Umkleide, keine Magie. Und trotzdem siehst du so aus, dass man das Bild behalten möchte.

Ich mag deine natürliche Schönheit ohne zu viel drumherum.`
    ),
    objectPosition: "center 20%"
  },
  {
    id: 27,
    category: "moments",
    title: l("Подруга рядом, ты в кадре", "A friend beside you", "Eine Freundin neben dir"),
    text: l(
      `Этот кадр немного шумный, но живой.

Вы где-то рядом, вокруг люди, лица, движение, и всё выглядит как настоящий день, а не как специально сделанная картинка.

Мне нравится, когда фото оставляет ощущение момента, а не только внешности`,
      `This photo is a little busy, but alive.

You are with a friend, there are people around, faces, movement, and it feels like a real day, not a staged picture.

I like when a photo keeps the feeling of a moment, not just how someone looks.`,
      `Dieses Foto ist ein bisschen unruhig, aber lebendig.

Du bist mit einer Freundin, Menschen um euch herum, Gesichter, Bewegung. Es fühlt sich wie ein echter Tag an, nicht wie ein gestelltes Bild.

Ich mag es, wenn ein Foto nicht nur Aussehen zeigt, sondern einen Moment.`
    )
  },
  {
    id: 28,
    category: "secret",
    title: l("Тихое зеркало", "A quiet mirror photo", "Ein ruhiges Spiegelbild"),
    text: l(
      `Если честно, это фото почему-то кажется мне очень личным.

Не потому что там что-то особенное, а наоборот: всё тихо, чёрно-белое, спокойно. Ты будто в своём маленьком мире.

И мне нравится, что у тебя есть не только смешная и яркая сторона, но и такая тихая тоже`,
      `Honestly, this photo feels very personal to me for some reason.

Not because something big is happening, but the opposite: it is quiet, black and white, calm. You look like you are in your own little world.

I like that you are not only funny and bright, but also quiet like this.`,
      `Ehrlich gesagt wirkt dieses Foto für mich irgendwie sehr persönlich.

Nicht weil etwas Großes passiert, sondern genau andersherum: es ist ruhig, schwarz-weiß, still. Du wirkst wie in deiner eigenen kleinen Welt.

Ich mag, dass du nicht nur lustig und hell bist, sondern auch so ruhig sein kannst.`
    )
  },
  {
    id: 29,
    category: "family",
    title: l("Елена среди цветов", "Elena among flowers", "Elena zwischen Blüten"),
    text: l(
      `На этом фото твоя мама Елена выглядит очень красиво.

Белые цветы, светлая одежда, спокойный взгляд. В кадре есть такая взрослая мягкость, которую сложно объяснить.

И знаешь, мне правда приятно думать, что у тебя такая великолепная мама. В тебе тоже чувствуется часть этого тепла`,
      `In this photo, your mom Elena looks very beautiful.

White flowers, light clothes, a calm look. There is a mature softness in the photo that is hard to explain.

And you know, it is really nice to think that you have such a wonderful mom. I can feel part of that warmth in you too.`,
      `Auf diesem Foto sieht deine Mama Elena sehr schön aus.

Weiße Blüten, helle Kleidung, ein ruhiger Blick. Das Foto hat eine erwachsene Weichheit, die schwer zu erklären ist.

Und weißt du, ich finde es wirklich schön, dass du so eine wundervolle Mama hast. Ein Teil dieser Wärme ist auch in dir.`
    ),
    objectPosition: "center 42%"
  },
  {
    id: 30,
    category: "secret",
    title: l("Цветы без тебя, но про тебя", "Flowers, still somehow about you", "Blüten, trotzdem irgendwie über dich"),
    text: l(
      `Это фото вроде просто про цветы.

Но мне нравится, что оно стоит рядом с твоими снимками. Как будто среди всех лиц, фильтров и улыбок есть маленькая пауза.

Иногда ты сама похожа на такую паузу: не шумную, а нужную`,
      `This photo is just flowers, at first.

But I like that it stands next to your photos. Among all the faces, filters, and smiles, it feels like a small pause.

Sometimes you feel like that kind of pause too: not loud, but needed.`,
      `Dieses Foto zeigt eigentlich nur Blüten.

Aber ich mag, dass es neben deinen Fotos steht. Zwischen all den Gesichtern, Filtern und Lächeln ist es wie eine kleine Pause.

Manchmal wirkst du für mich auch wie so eine Pause: nicht laut, aber wichtig.`
    )
  },
  {
    id: 31,
    category: "love",
    title: l("За твою женственность", "For your feminine side", "Für deine feminine Seite"),
    text: l(
      `Мне нравится этот образ на тебе.

Он спокойный, аккуратный и взрослый, но без какой-то лишней строгости. Просто красиво, уверенно и очень по-твоему.

Я сам не сразу понял, почему сохранил это фото. Потом понял: мне нравится, как ты тут держишься`,
      `I like this look on you.

It is calm, neat, and a little grown-up, but not too strict. Just beautiful, confident, and very much you.

I did not understand right away why I saved this photo. Then I realized: I like the way you carry yourself here.`,
      `Ich mag diesen Look an dir.

Er ist ruhig, ordentlich und ein bisschen erwachsen, aber nicht zu streng. Einfach schön, sicher und sehr du.

Ich habe nicht sofort verstanden, warum ich dieses Foto gespeichert habe. Dann wusste ich es: Ich mag, wie du dich hier hältst.`
    ),
    objectPosition: "center 24%"
  },
  {
    id: 32,
    category: "moments",
    title: l("Ты, Юля и подруга", "You, Yulia, and a friend", "Du, Yulia und eine Freundin"),
    text: l(
      `Здесь очень заметна дружеская энергия.

Вы все разные в кадре, но вместе смотритесь легко. Мне нравится, что ты не одна, а среди людей, с которыми тебе, кажется, комфортно.

Такие фото показывают не только тебя, а ещё то, как тебе бывает хорошо рядом с другими`,
      `The friend energy is very clear here.

You all look different in the frame, but together it feels easy. I like that you are not alone here, but with people you seem comfortable with.

Photos like this show not only you, but also how good you can feel around others.`,
      `Die Freundinnen-Energie sieht man hier sehr klar.

Ihr seid alle unterschiedlich im Bild, aber zusammen wirkt es leicht. Ich mag, dass du hier nicht allein bist, sondern mit Menschen, bei denen du dich wohl fühlst.

Solche Fotos zeigen nicht nur dich, sondern auch, wie gut es dir neben anderen gehen kann.`
    )
  },
  {
    id: 33,
    category: "moments",
    title: l("Кадр из дороги", "A photo from the road", "Ein Foto von unterwegs"),
    text: l(
      `Фото из машины всегда немного странные, но в этом есть свой вайб.

Фильтр, дорога, подруга рядом, и у тебя такой вид, будто день просто идёт своим ходом.

Мне нравится эта обычность. Она честная`,
      `Car photos are always a little strange, but this one has its own vibe.

A filter, the road, a friend beside you, and you look like the day is just moving on naturally.

I like that ordinary feeling. It is honest.`,
      `Fotos aus dem Auto sind immer ein bisschen komisch, aber dieses hat seinen eigenen Vibe.

Ein Filter, die Fahrt, eine Freundin neben dir, und du wirkst, als würde der Tag einfach normal weitergehen.

Ich mag diese Alltäglichkeit. Sie ist ehrlich.`
    )
  },
  {
    id: 34,
    category: "moments",
    title: l("Прогулка с Юлей и подругой", "A walk with Yulia and a friend", "Ein Spaziergang mit Yulia und einer Freundin"),
    text: l(
      `Тут всё выглядит очень по-настоящему.

Ты впереди, рядом Юля и ещё одна подруга, обычная прогулка, летний свет. Не идеальный кадр, зато живой.

Мне нравится, что в нём есть движение, будто фото не остановило момент, а просто чуть-чуть его поймало`,
      `Everything here feels very real.

You in front, Yulia and another friend nearby, a normal walk, summer light. Not a perfect photo, but a living one.

I like that it has movement, like the photo did not stop the moment, only caught a small part of it.`,
      `Hier wirkt alles sehr echt.

Du vorne, Yulia und noch eine Freundin in der Nähe, ein normaler Spaziergang, Sommerlicht. Kein perfektes Foto, aber ein lebendiges.

Ich mag, dass Bewegung darin ist, als hätte das Foto den Moment nicht gestoppt, sondern nur kurz erwischt.`
    )
  },
  {
    id: 35,
    category: "birthday",
    title: l("Пусть будет больше солнца", "More sunlight for you", "Mehr Sonne für dich"),
    text: l(
      `Хочу пожелать тебе больше таких солнечных кусочков.

Когда всё не идеально, где-то засвет, где-то половина улыбки, но настроение всё равно хорошее.

Пусть в 15 у тебя будет побольше дней, которые потом хочется вспоминать именно из-за ощущения, а не из-за идеальности`,
      `I want to wish you more little pieces of sunlight like this.

When nothing is perfect, maybe the light is too bright, maybe only half a smile is visible, but the mood is still good.

I hope at 15 you have more days you want to remember because of the feeling, not because they were perfect.`,
      `Ich wünsche dir mehr solche kleinen Sonnenmomente.

Wenn nicht alles perfekt ist, vielleicht ist das Licht zu hell, vielleicht sieht man nur ein halbes Lächeln, aber die Stimmung ist trotzdem gut.

Ich hoffe, dass du mit 15 mehr Tage hast, an die du dich wegen des Gefühls erinnerst, nicht wegen Perfektion.`
    ),
    objectPosition: "center 25%"
  },
  {
    id: 36,
    category: "birthday",
    title: l("Маленькая Леруся за пианино", "Little Valeriia at the piano", "Kleine Valeriia am Klavier"),
    text: l(
      `Это фото особенно милое, потому что на нём маленькая ты.

Подарки, пианино, домашний кадр. И сейчас тебе уже 15, а всё равно хочется сказать: береги в себе эту маленькую Леру, которая просто радуется моменту.

Пусть взросление не забирает у тебя эту искренность 🧸`,
      `This photo is especially sweet because it shows little you.

Presents, a piano, a home moment. And now you are already 15, but I still want to say: keep that little Valeriia inside you, the one who can simply enjoy a moment.

I hope growing up never takes away that honesty from you 🧸`,
      `Dieses Foto ist besonders süß, weil man darauf die kleine Valeriia sieht.

Geschenke, ein Klavier, ein Moment zu Hause. Und jetzt bist du schon 15, aber ich möchte trotzdem sagen: Bewahre diese kleine Valeriia in dir, die sich einfach über einen Moment freuen kann.

Ich hoffe, dass Erwachsenwerden dir diese Ehrlichkeit nie wegnimmt 🧸`
    ),
    objectPosition: "center 28%"
  },
  {
    id: 37,
    category: "family",
    title: l("Мируся, маленькая искорка", "Mirusya, a tiny spark", "Mirusya, ein kleiner Funke"),
    text: l(
      `Это Мируся, твоя сестрёнка.

Фото очень милое: большие глаза, розовая шапка и такой детский взгляд, что сразу становится тепло.

У тебя правда красивая семья. И мне нравится, что рядом с тобой есть такие родные люди`,
      `This is Mirusya, your little sister.

The photo is very sweet: big eyes, a pink hat, and that childlike look that instantly feels warm.

You really have a beautiful family. I like that you have people this close to you.`,
      `Das ist Mirusya, deine kleine Schwester.

Das Foto ist sehr süß: große Augen, eine rosa Mütze und dieser Kinderblick, der sofort warm wirkt.

Du hast wirklich eine schöne Familie. Ich mag, dass du solche nahen Menschen bei dir hast.`
    ),
    objectPosition: "center 18%"
  },
  {
    id: 38,
    category: "moments",
    title: l("Как кадр из поездки", "Like a travel photo", "Wie ein Reisefoto"),
    text: l(
      `Ты со спины, впереди замок и горы.

В этом фото есть ощущение, будто ты стоишь на границе какого-то красивого дня. Не обязательно знать, что было дальше, сам кадр уже работает.

Мне нравится, что он спокойный и немного сказочный, но без перебора`,
      `You from behind, a castle and mountains ahead.

This photo feels like you are standing at the edge of a beautiful day. I do not even need to know what happened next, the photo already works.

I like that it is calm and a little dreamy, but not too much.`,
      `Du von hinten, vor dir ein Schloss und Berge.

Dieses Foto fühlt sich an, als würdest du am Anfang eines schönen Tages stehen. Ich muss gar nicht wissen, was danach passiert ist, das Bild wirkt schon so.

Ich mag, dass es ruhig und ein bisschen märchenhaft ist, aber nicht zu viel.`
    ),
    objectPosition: "center 38%"
  },
  {
    id: 39,
    category: "moments",
    title: l("Красная футболка и горы", "Red shirt and mountains", "Rotes Shirt und Berge"),
    text: l(
      `На этом фото очень красивый фон.

Но я всё равно сначала замечаю тебя. Красная футболка, спокойная поза, горы за спиной, и всё вместе выглядит ярко, но не шумно.

Такие кадры хочется сохранять не потому что они идеальные, а потому что в них приятно возвращаться`,
      `The background is very beautiful here.

But I still notice you first. The red shirt, the calm pose, the mountains behind you, everything looks bright but not loud.

Photos like this are worth keeping not because they are perfect, but because they are nice to return to.`,
      `Der Hintergrund ist hier sehr schön.

Aber ich sehe trotzdem zuerst dich. Das rote Shirt, die ruhige Haltung, die Berge hinter dir, alles wirkt hell, aber nicht laut.

Solche Bilder behält man nicht, weil sie perfekt sind, sondern weil man gern zu ihnen zurückkommt.`
    ),
    objectPosition: "center 35%"
  },
  {
    id: 40,
    category: "moments",
    title: l("Зеркало с подругой", "Mirror with a friend", "Spiegel mit einer Freundin"),
    text: l(
      `Это простой кадр, но он мне нравится.

Ты с подругой рядом, обычное зеркало, обычный день. И в этом как раз есть что-то хорошее.

Не каждое приятное воспоминание обязано выглядеть как кино`,
      `This is a simple photo, but I like it.

You are with a friend, a normal mirror, a normal day. And that is exactly what feels good about it.

Not every good memory has to look like a movie.`,
      `Das ist ein einfaches Foto, aber ich mag es.

Du bist mit einer Freundin zusammen, ein normaler Spiegel, ein normaler Tag. Genau das fühlt sich daran gut an.

Nicht jede schöne Erinnerung muss wie ein Film aussehen.`
    )
  },
  {
    id: 41,
    category: "love",
    title: l("За твой характер в кадре", "For your character in the photo", "Für deinen Charakter im Bild"),
    text: l(
      `Я люблю, когда на фото видно не только “красивая”, а ещё и характер.

Тут ты выглядишь собранно, уверенно, будто в тебе есть своё “я знаю, что делаю”.

Мне это правда нравится. В тебе есть сила, даже когда ты просто стоишь на фото`,
      `I love when a photo shows not only beauty, but character too.

Here you look collected and confident, like there is a quiet “I know what I am doing” in you.

I really like that. You have strength, even when you are simply standing in a photo.`,
      `Ich liebe es, wenn ein Foto nicht nur Schönheit zeigt, sondern auch Charakter.

Hier wirkst du gesammelt und sicher, als gäbe es in dir ein ruhiges “ich weiß, was ich tue”.

Ich mag das wirklich. Du hast Stärke, sogar wenn du einfach nur auf einem Foto stehst.`
    ),
    objectPosition: "center 22%"
  },
  {
    id: 42,
    category: "love",
    title: l("За спокойный взгляд", "For your calm look", "Für deinen ruhigen Blick"),
    text: l(
      `Мне нравится твой спокойный взгляд на этом фото.

В нём нет попытки выглядеть как-то специально. Ты просто смотришь, и почему-то от этого кадр кажется ближе.

Может, для тебя это обычное фото, но для меня в нём есть что-то очень мягкое`,
      `I like your calm look in this photo.

There is no attempt to look special. You are just looking, and for some reason that makes the photo feel closer.

Maybe it is just a normal photo for you, but for me it has something very soft in it.`,
      `Ich mag deinen ruhigen Blick auf diesem Foto.

Es wirkt nicht so, als wolltest du besonders aussehen. Du schaust einfach, und dadurch fühlt sich das Bild irgendwie näher an.

Vielleicht ist es für dich nur ein normales Foto, aber für mich hat es etwas sehr Weiches.`
    ),
    objectPosition: "center 25%"
  },
  {
    id: 43,
    category: "love",
    title: l("За аккуратность", "For your neatness", "Für deine Feinheit"),
    text: l(
      `Я люблю твою аккуратность.

Она бывает в мелочах: волосы, очки, поза, то, как ты держишься. На этом фото всё это очень видно.

И мне нравится, что эта аккуратность не холодная. Она у тебя мягкая`,
      `I love your neatness.

It is in small things: your hair, your glasses, your pose, the way you hold yourself. In this photo, I can really see it.

And I like that this neatness does not feel cold. With you, it feels soft.`,
      `Ich liebe diese Feinheit an dir.

Sie zeigt sich in kleinen Dingen: Haare, Brille, Haltung, wie du dich gibst. Auf diesem Foto sieht man das sehr.

Und ich mag, dass diese Feinheit nicht kalt wirkt. Bei dir ist sie weich.`
    ),
    objectPosition: "center 22%"
  },
  {
    id: 44,
    category: "secret",
    title: l("Чёрно-белая тишина", "Black-and-white quiet", "Schwarz-weiße Ruhe"),
    text: l(
      `Если честно, в чёрно-белых фото ты иногда выглядишь ещё более настоящей.

Тут нет цвета, фильтрового шума, ничего лишнего. Остаётся лицо, взгляд и настроение.

И мне нравится, что это настроение не громкое. Оно тихое, но почему-то сильное`,
      `Honestly, in black-and-white photos you sometimes look even more real.

There is no color, no loud filter feeling, nothing extra. Only your face, your look, and the mood.

And I like that the mood is not loud. It is quiet, but somehow strong.`,
      `Ehrlich gesagt wirkst du auf Schwarz-Weiß-Fotos manchmal noch echter.

Keine Farbe, kein lauter Filter, nichts zu viel. Nur dein Gesicht, dein Blick und die Stimmung.

Ich mag, dass diese Stimmung nicht laut ist. Sie ist ruhig, aber irgendwie stark.`
    ),
    objectPosition: "center 25%"
  },
  {
    id: 45,
    category: "moments",
    title: l("Рядом в дороге", "Beside a friend on the way", "Neben einer Freundin unterwegs"),
    text: l(
      `Этот кадр выглядит как маленькая пауза где-то в дороге.

Вы просто сидите рядом, без позы и без попытки сделать что-то вау. И в этом есть спокойная близость.

Мне нравятся такие фото, потому что они честные`,
      `This photo feels like a small pause somewhere on the way.

You are just sitting beside each other, without posing or trying to make it wow. And there is a calm closeness in that.

I like photos like this because they are honest.`,
      `Dieses Foto wirkt wie eine kleine Pause irgendwo unterwegs.

Ihr sitzt einfach nebeneinander, ohne Pose und ohne etwas Besonderes daraus machen zu wollen. Darin liegt eine ruhige Nähe.

Ich mag solche Fotos, weil sie ehrlich sind.`
    )
  },
  {
    id: 46,
    category: "love",
    title: l("За живую энергию", "For your lively energy", "Für deine lebendige Energie"),
    text: l(
      `Я люблю, что в тебе есть живая энергия.

На этом фото солнце, взгляд, немного дерзости, и всё вместе работает. Ты не просто “милая на фото”, ты тут с характером.

И мне это очень нравится`,
      `I love that you have a lively energy.

In this photo, there is sun, your look, a little boldness, and it all works together. You are not just “cute in a photo”, you have character here.

And I like that a lot.`,
      `Ich liebe, dass du so eine lebendige Energie hast.

Auf diesem Foto sind Sonne, dein Blick, ein bisschen Frechheit, und alles passt zusammen. Du bist hier nicht nur “süß auf einem Foto”, du hast Charakter.

Und das mag ich sehr.`
    ),
    objectPosition: "center 24%"
  },
  {
    id: 47,
    category: "love",
    title: l("За естественность", "For your naturalness", "Für deine Natürlichkeit"),
    text: l(
      `Я люблю твою естественность.

Особенно на таких кадрах, где ты не смотришь прямо в камеру и не пытаешься поймать “правильное” лицо.

Фото получается живым, потому что ты в нём не играешь роль`,
      `I love your naturalness.

Especially in photos like this, where you are not looking straight into the camera and not trying to make the “right” face.

The photo feels alive because you are not playing a role in it.`,
      `Ich liebe deine Natürlichkeit.

Besonders auf solchen Fotos, wo du nicht direkt in die Kamera schaust und nicht versuchst, das “richtige” Gesicht zu machen.

Das Foto wirkt lebendig, weil du darin keine Rolle spielst.`
    ),
    objectPosition: "center 24%"
  },
  {
    id: 48,
    category: "love",
    title: l("За глаза, которые цепляют", "For eyes that stay with me", "Für Augen, die hängen bleiben"),
    text: l(
      `Да, это буквально открытка про твои глаза.

Не знаю, как по-другому, потому что на этом фото они правда забирают всё внимание. Тёплые, внимательные, немного хитрые.

Я могу сколько угодно пытаться написать красиво, но проще сказать честно: мне очень нравится твой взгляд`,
      `Yes, this is literally a card about your eyes.

I do not know how else to say it, because in this photo they really take all the attention. Warm, attentive, a little playful.

I could try to write something pretty, but honestly it is simpler: I really like your look.`,
      `Ja, das ist wirklich eine Karte über deine Augen.

Ich weiß nicht, wie ich es anders sagen soll, weil sie auf diesem Foto wirklich alles an Aufmerksamkeit nehmen. Warm, aufmerksam, ein bisschen verspielt.

Ich könnte versuchen, es schön zu formulieren, aber ehrlich ist es einfacher: Ich mag deinen Blick sehr.`
    ),
    objectPosition: "center 28%"
  },
  {
    id: 49,
    category: "moments",
    title: l("Обычное зеркало, хороший кадр", "Simple mirror, good photo", "Einfacher Spiegel, gutes Foto"),
    text: l(
      `Ты здесь с подругой, и фото очень обычное.

Но именно поэтому оно мне нравится. В нём нет желания сделать из момента что-то огромное. Просто вы рядом, и всё нормально.

Иногда этого достаточно, чтобы кадр был тёплым`,
      `You are with a friend here, and the photo is very simple.

But that is exactly why I like it. It does not try to make the moment bigger than it is. You are just together, and it feels good.

Sometimes that is enough for a photo to feel warm.`,
      `Du bist hier mit einer Freundin, und das Foto ist sehr einfach.

Aber genau deshalb mag ich es. Es versucht nicht, den Moment größer zu machen. Ihr seid einfach zusammen, und es fühlt sich gut an.

Manchmal reicht das, damit ein Foto warm wirkt.`
    ),
    objectPosition: "center 25%"
  },
  {
    id: 50,
    category: "moments",
    title: l("Смешной фильтр, хорошее настроение", "Funny filter, good mood", "Lustiger Filter, gute Stimmung"),
    text: l(
      `Мне нравится, что это фото не стесняется быть смешным.

Фильтр, подруга, лица, настроение. Всё немного хаотично, но зато живое.

И честно, такие кадры часто самые родные, потому что в них нет попытки выглядеть идеально`,
      `I like that this photo is not afraid to be funny.

The filter, your friend, faces, mood. Everything is a little chaotic, but alive.

And honestly, photos like this often feel the closest, because they are not trying to be perfect.`,
      `Ich mag, dass dieses Foto keine Angst hat lustig zu sein.

Der Filter, deine Freundin, Gesichter, Stimmung. Alles ist ein bisschen chaotisch, aber lebendig.

Und ehrlich, solche Fotos fühlen sich oft am nächsten an, weil sie nicht perfekt sein wollen.`
    )
  },
  {
    id: 51,
    category: "secret",
    title: l("Ты почти в тени", "Almost in the shadow", "Fast im Schatten"),
    text: l(
      `Это фото тихое.

Ты почти в тени, зеркало, коридор, и нет ощущения, что кадр пытается понравиться. Он просто есть.

Мне иногда нравятся именно такие снимки. В них человек не показывает всё, но от этого хочется смотреть внимательнее`,
      `This photo is quiet.

You are almost in the shadow, a mirror, a hallway, and it does not feel like the photo is trying to be liked. It simply exists.

Sometimes I like exactly these kinds of photos. A person does not show everything, and that makes me look more carefully.`,
      `Dieses Foto ist ruhig.

Du bist fast im Schatten, ein Spiegel, ein Flur, und es wirkt nicht so, als wollte das Bild gefallen. Es ist einfach da.

Manchmal mag ich genau solche Bilder. Ein Mensch zeigt nicht alles, und gerade deshalb schaut man genauer hin.`
    )
  },
  {
    id: 52,
    category: "secret",
    title: l("Даже тень запомнилась", "Even the shadow stayed with me", "Sogar der Schatten blieb"),
    text: l(
      `Наверное, это самая странная открытка в библиотеке.

Но мне нравится, что здесь не лицо, не поза, не фильтр, а просто тень. Маленький знак того, что ты была в каком-то моменте и заметила его.

Не знаю почему, но такие детали иногда цепляют сильнее, чем идеальные фото`,
      `This is probably the strangest card in the library.

But I like that it is not a face, not a pose, not a filter, just a shadow. A small sign that you were in a moment and noticed it.

I do not know why, but details like this sometimes stay with me more than perfect photos.`,
      `Das ist wahrscheinlich die seltsamste Karte in der Bibliothek.

Aber ich mag, dass es kein Gesicht ist, keine Pose, kein Filter, sondern nur ein Schatten. Ein kleines Zeichen, dass du in einem Moment warst und ihn bemerkt hast.

Ich weiß nicht warum, aber solche Details bleiben manchmal stärker als perfekte Fotos.`
    )
  },
  {
    id: 53,
    category: "moments",
    title: l("Близко и по-настоящему", "Close and real", "Nah und echt"),
    text: l(
      `Это близкий кадр с подругой, немного смешной и очень настоящий.

Вы не пытаетесь выглядеть “как надо”, и от этого фото становится живым. Мне нравится такая честность.

В таких снимках будто слышно не картинку, а сам момент`,
      `This is a close photo with a friend, a little funny and very real.

You are not trying to look “right”, and that makes the photo alive. I like that honesty.

In photos like this, I almost feel the moment, not just the picture.`,
      `Das ist ein nahes Foto mit einer Freundin, ein bisschen lustig und sehr echt.

Ihr versucht nicht, “richtig” auszusehen, und dadurch wird das Foto lebendig. Ich mag diese Ehrlichkeit.

Bei solchen Bildern fühlt man fast den Moment, nicht nur das Foto.`
    ),
    objectPosition: "center 25%"
  },
  {
    id: 54,
    category: "moments",
    title: l("Мягкое зеркало", "A soft mirror photo", "Ein weiches Spiegelbild"),
    text: l(
      `Тут мне нравится атмосфера.

Зеркало, подруга рядом, спокойный свет, и весь кадр как будто немного мягкий. Не резкий, не громкий.

Просто приятная фотография, к которой не хочется придираться`,
      `I like the atmosphere here.

A mirror, a friend beside you, calm light, and the whole photo feels a little soft. Not sharp, not loud.

Just a nice photo that I do not want to overthink.`,
      `Ich mag hier die Atmosphäre.

Ein Spiegel, eine Freundin neben dir, ruhiges Licht, und das ganze Foto wirkt etwas weich. Nicht hart, nicht laut.

Einfach ein angenehmes Foto, bei dem man nichts zerdenken will.`
    )
  },
  {
    id: 55,
    category: "moments",
    title: l("Ты с Юлей на солнце", "You and Yulia in the sun", "Du und Yulia in der Sonne"),
    text: l(
      `Этот кадр очень живой.

Вы с Юлей смотрите вверх, свет яркий, и в фото есть ощущение лета, которое не надо объяснять.

Мне нравится, что ты здесь не позируешь идеально, а просто находишься в моменте`,
      `This photo is very alive.

You and Yulia are looking up, the light is bright, and the photo has a summer feeling that does not need explanation.

I like that you are not posing perfectly here, you are just in the moment.`,
      `Dieses Foto ist sehr lebendig.

Du und Yulia schaut nach oben, das Licht ist hell, und das Bild hat ein Sommergefühl, das man nicht erklären muss.

Ich mag, dass du hier nicht perfekt posierst, sondern einfach im Moment bist.`
    ),
    objectPosition: "center 25%"
  },
  {
    id: 56,
    category: "moments",
    title: l("Ты, Юля и лето", "You, Yulia, and summer", "Du, Yulia und Sommer"),
    text: l(
      `Вот это фото смешное и солнечное.

Вы с Юлей стоите на траве, эмоции живые, свет яркий, и всё выглядит так, будто настроение само выскочило в кадр.

Мне нравится, когда фото не идеально ровное, зато в нём есть настоящая радость`,
      `This photo is funny and sunny.

You and Yulia are standing on the grass, the expressions are alive, the light is bright, and it feels like the mood jumped into the frame by itself.

I like when a photo is not perfectly polished, but has real joy in it.`,
      `Dieses Foto ist lustig und sonnig.

Du und Yulia steht auf dem Gras, eure Gesichter sind lebendig, das Licht ist hell, und es wirkt, als wäre die Stimmung einfach ins Bild gesprungen.

Ich mag es, wenn ein Foto nicht perfekt glatt ist, aber echte Freude hat.`
    )
  },
  {
    id: 57,
    category: "birthday",
    title: l("Моя хорошая, с 15-летием", "My sweet Valeriia, happy 15th", "Meine liebe Valeriia, alles Gute zum 15."),
    text: l(
      `Моя хорошая, с 15-летием тебя.

Хочу, чтобы ты в этом году чаще чувствовала себя красивой не только на фото, но и просто внутри. Чтобы было меньше сомнений и больше спокойной уверенности в себе.

Ты правда очень особенная для меня. Не идеально-открыточно, а по-настоящему, со своим характером, настроением и этими маленькими деталями, из-за которых ты именно ты 💜`,
      `My sweet Valeriia, happy 15th Birthday.

I hope this year you feel beautiful not only in photos, but also inside yourself. I hope there are fewer doubts and more calm confidence.

You really are very special to me. Not in a perfect postcard way, but in a real way, with your character, your moods, and all those small details that make you you 💜`,
      `Meine liebe Valeriia, alles Gute zum 15. Geburtstag.

Ich hoffe, dass du dich in diesem Jahr nicht nur auf Fotos schön fühlst, sondern auch in dir selbst. Mit weniger Zweifeln und mehr ruhiger Sicherheit.

Du bist mir wirklich sehr besonders. Nicht perfekt wie eine Postkarte, sondern echt, mit deinem Charakter, deinen Stimmungen und all den kleinen Details, die dich zu dir machen 💜`
    ),
    objectPosition: "center 25%"
  },
  {
    id: 58,
    category: "family",
    title: l("Елена, у тебя великолепная мама", "Elena, your wonderful mom", "Elena, deine wundervolle Mama"),
    text: l(
      `Здесь снова твоя мама Елена, и фото очень красивое.

Цветущие ветки, белый образ, спокойный взгляд. Оно выглядит так, будто в нём много женственности и тепла.

И я хочу сказать без пафоса: у тебя великолепная мама и папа. Видно, что в твоей семье есть любовь, забота и характер. И, наверное, поэтому в тебе столько хорошего`,
      `Here is your mom Elena again, and the photo is very beautiful.

The blooming branches, the light outfit, the calm look. It feels full of warmth and femininity.

And I want to say this simply: you have a wonderful mom and dad. I can see that your family has love, care, and character. Maybe that is why there is so much good in you.`,
      `Hier ist wieder deine Mama Elena, und das Foto ist sehr schön.

Die blühenden Zweige, das helle Outfit, der ruhige Blick. Es wirkt voller Wärme und Weiblichkeit.

Und ich möchte es einfach sagen: du hast eine wundervolle Mama und einen wundervollen Papa. Man sieht, dass es in deiner Familie Liebe, Fürsorge und Charakter gibt. Vielleicht ist deshalb so viel Gutes in dir.`
    ),
    objectPosition: "center 42%"
  }
];

export const cards: FeelingCard[] = photoCardSeeds.map((card, index) => ({
  id: card.id,
  category: card.category,
  title: card.title,
  text: card.text,
  image: `/photos/${String(card.id).padStart(2, "0")}.jpg`,
  objectPosition: card.objectPosition ?? (card.id % 3 === 0 ? "center 30%" : "center"),
  signature,
  shape: shapes[index % shapes.length]
}));
