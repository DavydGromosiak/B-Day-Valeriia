import { LocalizedString } from "./translations";
import { russianCardWishCopy } from "./cardRussianWishCopy";
import { cardPersonalNotes } from "./cardPersonalNotes";

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
// Фото с Юлей: 2, 5, 7, 8, 9, 15, 17, 27, 33, 40, 49, 50, 54, 55, 56.
// Фото с Nefeli: 1, 3, 13, 16. Фото с Юлей и Nefeli: 19, 32, 34.
const photoCardSeeds: PhotoCardSeed[] = [
  {
    id: 1,
    category: "birthday",
    title: l("Начну с самого простого", "Let me start simply", "Ich fange ganz einfach an"),
    text: l(
      `Лерусь, с 15-летием тебя 💜

Не знаю, почему именно это фото хочется поставить первым. Наверное, потому что вы с Nefeli тут немного смешные, живые и совсем не пытаетесь сделать идеальный кадр.

А мне как раз очень нравится настоящая ты. Даже если в кадре половинка лица и половинка диснеевской принцессы 😅`,
      `Happy 15th Birthday, Valeriia 💜

I do not really know why I want to start with this photo. Maybe because you and Nefeli look funny, lively, and are not trying to make a perfect picture.

And honestly, I really like the real you. Even with half your face and half a Disney princess in the frame 😅`,
      `Alles Gute zum 15. Geburtstag, Valeriia 💜

Ich weiß nicht genau, warum ich mit diesem Foto anfangen möchte. Vielleicht, weil du und Nefeli hier lustig und echt seid und gar kein perfektes Bild machen wollt.

Und ehrlich, ich mag genau diese echte Seite an dir. Auch mit deinem halben Gesicht und einer halben Disney-Prinzessin im Bild 😅`
    ),
    objectPosition: "center 30%"
  },
  {
    id: 2,
    category: "moments",
    title: l("Ты с Юлей в красивом зале", "You and Julia in that hall", "Du und Julia in diesem Saal"),
    text: l(
      `Если честно, я сначала посмотрел на тебя, а уже потом заметил, какой вокруг красивый зал 😅

Вы с Юлей тут просто обнялись и показали свои фирменные пальцы, без попытки сделать суперидеальное фото.

Наверное, поэтому оно мне и понравилось. Смотришь и сразу понятно: вам вместе весело`,
      `I really like this photo.

You and Julia do not look like you were trying to make a perfect picture. You just look like two friends who feel good together.

The hall, your gestures, the smiles. It all feels easy, like the moment just happened naturally.`,
      `Ich mag dieses Foto wirklich.

Ihr beide wirkt nicht so, als wolltet ihr ein perfektes Bild machen. Ihr wirkt einfach wie zwei Freundinnen, denen es zusammen gut geht.

Der Saal, eure Gesten, das Lächeln. Das fühlt sich leicht an, als wäre der Moment einfach von selbst schön geworden.`
    ),
    objectPosition: "center 30%"
  },
  {
    id: 3,
    category: "moments",
    title: l("Спокойный кадр с Nefeli", "A calm photo with Nefeli", "Ein ruhiges Foto mit Nefeli"),
    text: l(
      `Не знаю почему, но именно такие спокойные фото с Nefeli мне нравятся больше, чем слишком постановочные.

Тут нет ничего лишнего. Вы рядом, ты смотришь спокойно, и фото выглядит как кусочек обычного дня.

Может, для тебя это мелочь, но мне такие моменты почему-то хочется сохранять`,
      `I do not know why, but I like calm photos with Nefeli more than very staged ones.

There is nothing extra here. You are together, your look is calm, and the photo feels like a small piece of a normal day.

Maybe it is a little thing for you, but I like keeping moments like this.`,
      `Ich weiß nicht warum, aber ruhige Fotos mit Nefeli mag ich oft mehr als sehr gestellte Bilder.

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

Die Seite, auf der du einfach du selbst bist, ohne Pose und ohne etwas beweisen zu müssen. Auf diesem Foto spürt man das.

Bei dieser Seite von dir werde ich irgendwie ruhiger.`
    ),
    objectPosition: "center 24%"
  },
  {
    id: 7,
    category: "moments",
    title: l("Зеркало с Юлей и характер", "Mirror with Julia and attitude", "Spiegel mit Julia und Charakter"),
    text: l(
      `У вас с Юлей здесь такой вид, будто вы обе точно знаете, что фотография получится классной.

Особенно ты с телефоном и этим серьёзным лицом 😅

Не знаю, специально так вышло или нет, но характер у этого фото точно есть. И твой тоже сразу видно`,
      `What I like here is not only the photo, but the mood.

You and Julia look confident, a little bold, but still very natural. Not too serious, not too forced.

It is a photo with character. And yours shows clearly here 😌`,
      `Ich mag hier nicht nur das Foto, sondern die Stimmung.

Ihr beide wirkt zusammen selbstbewusst, ein bisschen frech, aber trotzdem sehr natürlich. Nicht zu ernst und nicht gestellt.

Es ist ein Bild mit Charakter. Und deiner ist hier wirklich zu sehen 😌`
    )
  },
  {
    id: 8,
    category: "moments",
    title: l("Солнце, Юля и смешной момент", "Sun, Julia, and a funny moment", "Sonne, Julia und ein lustiger Moment"),
    text: l(
      `Вот тут вы с Юлей вообще не пытались быть серьёзными, и правильно сделали 😅

Фильтр, солнце, пальцы перед камерой — обычная смешная фотка, которую потом почему-то приятно пересматривать.

Ты здесь не позируешь, а просто веселишься. Такой ты мне очень нравишься`,
      `This photo just feels warm.

Sun, Julia beside you, funny faces, and everything looks like you caught the moment without trying too hard.

I like that you have people around you with whom you can be this alive.`,
      `Dieses Foto fühlt sich einfach gut an.

Sonne, Julia neben dir, lustige Gesichter, und alles wirkt so, als hättet ihr den Moment einfach erwischt.

Ich mag, dass du Menschen hast, bei denen du so lebendig sein kannst.`
    )
  },
  {
    id: 9,
    category: "moments",
    title: l("Светлый кадр с Юлей", "A bright photo with Julia", "Ein helles Foto mit Julia"),
    text: l(
      `Не знаю почему, но на этой фотографии у тебя особенно добрая улыбка.

Вы с Юлей просто стоите рядом, показываете пальцами мир, и больше ничего для хорошего кадра не понадобилось.

Я бы точно сохранил её хотя бы из-за твоего выражения лица 🫶🏻`,
      `I like the simplicity here.

You beside Julia, daylight, a calm smile, a peace sign. No extra drama, just a good photo.

For some reason, it feels like the day was simple and warm.`,
      `Ich mag hier gerade die Einfachheit.

Du neben Julia, Tageslicht, ein ruhiges Lächeln, ein Peace-Zeichen. Kein Drama, einfach ein gutes Foto.

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
    title: l("Такие моменты с Nefeli", "Moments like this with Nefeli", "Solche Momente mit Nefeli"),
    text: l(
      `Я не хочу желать тебе что-то огромное и непонятное.

Хочу, чтобы рядом почаще были Nefeli и другие люди, с которыми тебе легко. Чтобы можно было вот так сфоткаться, посмеяться и хотя бы ненадолго ни о чём тяжёлом не думать.

Пусть обычных хороших дней у тебя станет намного больше ✨`,
      `For your birthday, I do not want to wish you some huge perfect words.

I want to wish you moments like this: Nefeli and other good people nearby, a smile for no big reason, and a day that does not feel heavy.

I hope you get many more of these small good moments ✨`,
      `Zu deinem Geburtstag möchte ich dir keine riesigen perfekten Worte wünschen.

Ich wünsche dir eher solche Momente: Nefeli und andere gute Menschen in der Nähe, ein Lächeln ohne großen Grund und einen Tag, der sich nicht schwer anfühlt.

Ich hoffe, du bekommst noch viele von diesen kleinen guten Momenten ✨`
    )
  },
  {
    id: 14,
    category: "love",
    title: l("За твою мягкость", "For your softness", "Für deine weiche Art"),
    text: l(
      `На этом фото ты выглядишь такой спокойной, что мне самому хочется немного выдохнуть.

Я не всегда умею нормально объяснять такие вещи, но у тебя бывает очень мягкий взгляд. Без позы и без попытки кому-то понравиться.

Вот именно его я тут и заметил`,
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
    title: l("Очки, Юля и зеркало", "Glasses, Julia, and the mirror", "Brille, Julia und Spiegel"),
    text: l(
      `Эти огромные очки должны были сделать фото смешным, но вы с Юлей всё равно умудрились выглядеть круто 😅

Особенно мне нравится, как вы смотрите в маленькое зеркало и обе делаете максимально серьёзный вид.

Короче, задумка сработала. Я бы тоже сохранил этот кадр`,
      `This photo is a little funny, but in a good way.

You and Julia look like you already knew it would turn out well. Glasses, mirror, pose, everything is there.

And yes, it really did turn out cool 😅`,
      `Dieses Foto ist ein bisschen lustig, aber auf eine gute Art.

Ihr beide wirkt so, als hättet ihr schon gewusst, dass es gut wird. Brille, Spiegel, Pose, alles passt.

Und ja, es ist wirklich cool geworden 😅`
    )
  },
  {
    id: 16,
    category: "moments",
    title: l("Две собачки и Nefeli", "Two dog filters and Nefeli", "Zwei Hundefilter und Nefeli"),
    text: l(
      `Вы с Nefeli здесь две собачки, и на этом серьёзный разбор фотографии можно закончить 😅

Мне просто нравится, что вы обе дурачитесь и вообще не переживаете, насколько «красиво» это выглядит.

Такие фото обычно и остаются самыми весёлыми`,
      `Yes, it is a very simple funny filter.

But I like that the photo is not trying to be serious. You and Nefeli just caught a mood, and that makes it feel more honest.

Photos like this often stay in memory better than “perfect” ones.`,
      `Ja, es ist ein ganz einfacher lustiger Filter.

Aber ich mag, dass das Foto nicht ernst sein will. Du und Nefeli habt einfach eine Stimmung erwischt, und dadurch wirkt es ehrlicher.

Solche Fotos bleiben oft besser im Kopf als perfekte.`
    )
  },
  {
    id: 17,
    category: "secret",
    title: l("Маленькая фотолента с Юлей", "A little photo strip with Julia", "Ein kleiner Fotostreifen mit Julia"),
    text: l(
      `Знаешь, мне нравится сама идея этого фото.

Будто не один кадр, а маленькая лента с разными кусочками: ты, Юля, смешные фильтры и такие моменты, которые не нужно делать идеальными. Они и так живые.

Я не всегда умею красиво объяснять такие вещи, но мне правда приятно смотреть на это`,
      `You know, I like the idea of this photo.

It feels less like one picture and more like a little strip of small pieces: you, Julia, funny filters, and moments that do not need to be perfect. They are already alive.

I am not always good at explaining things like this, but I really like looking at it.`,
      `Weißt du, ich mag die Idee von diesem Foto.

Es wirkt nicht wie nur ein Bild, sondern wie ein kleiner Streifen mit kleinen Teilen: du, Julia, lustige Filter und Momente, die gar nicht perfekt sein müssen. Sie sind schon echt.

Ich kann sowas nicht immer schön erklären, aber ich schaue es wirklich gern an.`
    )
  },
  {
    id: 18,
    category: "love",
    title: l("За твою уверенность", "For your confidence", "Für dein Selbstvertrauen"),
    text: l(
      `На этой фотографии ты прям уверенная в себе. Не напоказ, а как будто просто знаешь, что выглядишь хорошо.

И да, кудри тебе здесь очень идут.

Я даже не знаю, что ещё добавить. Посмотрел, завис на пару секунд, сохранил 🙈`,
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
    title: l("Ты, Юля и Nefeli", "You, Julia, and Nefeli", "Du, Julia und Nefeli"),
    text: l(
      `Тут вы втроём такие разные: ты строишь губки, Юля спокойно смотрит в камеру, а Nefeli улыбается в бандане 😅

Вокруг люди, солнце и полный летний движ. Фото получилось немного хаотичным, но как раз поэтому прикольным.

Мне приятно видеть тебя рядом с людьми, с которыми тебе хорошо`,
      `This photo feels very summery.

You, Julia, and Nefeli together, with people, sun, and movement around you. Nothing staged, but everything feels alive.

I like that you have photos where I can see not just how you look, but a little bit of your life around you.`,
      `Dieses Foto fühlt sich sehr nach Sommer an.

Du, Julia und Nefeli zusammen, Menschen um euch herum, Sonne und Bewegung. Nichts gestellt, aber alles wirkt lebendig.

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

Neben einem Menschen, der keine Angst hat, lustig zu sein, fühlt man sich selbst auch leichter.`
    ),
    objectPosition: "center 20%"
  },
  {
    id: 23,
    category: "moments",
    title: l("Горы, вода и ты", "Mountains, water, and you", "Berge, Wasser und du"),
    text: l(
      `Даже без тебя вид здесь был бы красивым, но с тобой фотография стала намного интереснее.

Ты в красной футболке смотришь куда-то в сторону, а сзади горы и вода. Получилось спокойно и очень ярко.

Я бы точно остановился на этом фото, даже если бы быстро листал альбом`,
      `I would save this photo even just for the view.

But you are in it, and that makes it feel completely different. The red shirt, the mountains, the water, and you looking into the distance.

There is calmness in it. The kind I do not want to explain, just keep.`,
      `Ich würde dieses Foto schon nur wegen der Aussicht behalten.

Aber du bist darin, und dadurch fühlt es sich ganz anders an. Das rote Shirt, die Berge, das Wasser, und du schaust in die Ferne.

Es strahlt eine Ruhe aus, die ich nicht erklären, sondern einfach behalten möchte.`
    ),
    objectPosition: "center 35%"
  },
  {
    id: 24,
    category: "secret",
    title: l("Ты замечаешь красоту", "You notice beauty", "Du bemerkst Schönheit"),
    text: l(
      `Да, здесь просто сирень. Но ты зачем-то решила её сфотографировать, а я решил оставить это фото здесь 😅

Мне нравится, когда человек замечает что-то красивое и не проходит мимо.

Может, для тебя это вообще мелочь, но по таким мелочам я тоже понемногу узнаю тебя`,
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
      `Лерусь, здесь ты с папой Виталием и Мирусей, и на эту фотографию правда приятно смотреть.

Папа целует тебя в голову, Мируся прижалась рядом, а за вами вообще невероятный вид.

Не хочу писать слишком громко. Просто скажу, что у тебя замечательные папа и мама, и мне очень приятно видеть вас вместе`,
      `Valeriia, this is a very warm family photo.

You are with your father, Vitalii, and Mirusya, with mountains and water around you. The photo feels safe and close.

It is nice for me to see that you have a family like this. And honestly, I can tell that you were raised with warmth.`,
      `Valeriia, das ist ein sehr warmes Familienfoto.

Du bist mit deinem Vater Vitalii und Mirusya zusammen, um euch herum Berge und Wasser. Das Foto strahlt Geborgenheit und Nähe aus.

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

It is just a mirror and a changing room, nothing magical. And still, it is a photo I want to keep.

I like your natural beauty without all the extra noise.`,
      `Ich liebe, dass du nichts Besonderes machen musst, damit ein Foto schön wird.

Nur ein Spiegel und eine Umkleide, nichts Besonderes. Und trotzdem ist es ein Bild, das ich behalten möchte.

Ich mag deine natürliche Schönheit ohne zu viel drumherum.`
    ),
    objectPosition: "center 20%"
  },
  {
    id: 27,
    category: "moments",
    title: l("Ты с Юлей в магазине", "You with Julia in the store", "Du mit Julia im Laden"),
    text: l(
      `Вы с Юлей здесь просто зашли в магазин и по дороге сделали фото. Никакого особого события, но мне оно всё равно запомнилось.

Ты показываешь пальцами мир и немного смешно поджимаешь губы 😅

Наверное, мне и нравятся такие фотографии: обычный день, но ты на нём настоящая`,
      `This photo is a little busy, but alive.

You are with Julia, there are people around, faces, movement, and it feels like a real day, not a staged picture.

I like when a photo keeps the feeling of a moment, not just how someone looks.`,
      `Dieses Foto ist ein bisschen unruhig, aber lebendig.

Du bist mit Julia, Menschen um euch herum, Gesichter, Bewegung. Es fühlt sich wie ein echter Tag an, nicht wie ein gestelltes Bild.

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
      `Твоя мама Елена здесь очень красивая. Белая одежда, цветущее дерево и спокойный взгляд — всё так хорошо совпало.

И я сейчас не пытаюсь написать какой-то идеальный комплимент.

Просто у тебя правда замечательная мама. А ещё замечательный папа. Думаю, ты и сама знаешь, как тебе с ними повезло 💜`,
      `In this photo, your mom Elena looks very beautiful.

White flowers, light clothes, and a calm look. The photo has a gentle elegance that is hard to explain.

And you know, it is really nice to think that you have such a wonderful mom. I can feel part of that warmth in you too.`,
      `Auf diesem Foto sieht deine Mama Elena sehr schön aus.

Weiße Blüten, helle Kleidung und ein ruhiger Blick. Das Foto hat eine sanfte Eleganz, die schwer zu erklären ist.

Und weißt du, ich finde es wirklich schön, dass du so eine wundervolle Mama hast. Ein Teil dieser Wärme ist auch in dir.`
    ),
    objectPosition: "center 42%"
  },
  {
    id: 30,
    category: "secret",
    title: l("Цветы без тебя, но про тебя", "Flowers, still somehow about you", "Blüten, trotzdem irgendwie über dich"),
    text: l(
      `Ещё одна фотография, где тебя нет, зато цветов примерно миллион 😅

Я оставил её, потому что она красиво смотрится рядом с остальными и немного напоминает тот кадр с твоей мамой.

Не буду искать здесь скрытый смысл. Просто красиво, и всё`,
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
      `Это платье тебе правда идёт.

Я сначала подумал, что мне понравился сам образ, а потом понял, что дело ещё и в том, как уверенно ты здесь стоишь.

Короче, сохранил бы без долгих раздумий. Ты здесь очень красивая 🙈`,
      `I like this look on you.

It is calm, polished, and a little grown-up, but not too strict. Just beautiful, confident, and very much you.

I did not understand right away why I saved this photo. Then I realized: I like the way you carry yourself here.`,
      `Ich mag diesen Look an dir.

Er ist ruhig, stilvoll und ein bisschen erwachsen, aber nicht zu streng. Einfach schön, selbstbewusst und ganz du.

Ich habe nicht sofort verstanden, warum ich dieses Foto gespeichert habe. Dann wusste ich es: Ich mag, wie selbstbewusst du hier wirkst.`
    ),
    objectPosition: "center 24%"
  },
  {
    id: 32,
    category: "moments",
    title: l("Ты, Юля и Nefeli", "You, Julia, and Nefeli", "Du, Julia und Nefeli"),
    text: l(
      `Здесь у каждой из вас своё выражение лица, и это почему-то очень смешно 😅

Ты слева, Юля посередине, Nefeli в бандане справа — и все одновременно показываете пальцами мир.

Смотришь и сразу видно, что вы просто хорошо проводили время. Мне приятно видеть тебя такой`,
      `The friend energy is very clear here.

You, Julia, and Nefeli all look different in the frame, but together it feels easy. I like seeing you with people you seem comfortable with.

Photos like this show not only you, but also how good you can feel around others.`,
      `Die Freundinnen-Energie sieht man hier sehr klar.

Du, Julia und Nefeli seid alle unterschiedlich im Bild, aber zusammen wirkt es leicht. Ich mag es, dich mit Menschen zu sehen, bei denen du dich wohl fühlst.

Solche Fotos zeigen nicht nur dich, sondern auch, wie gut es dir neben anderen gehen kann.`
    )
  },
  {
    id: 33,
    category: "moments",
    title: l("Кадр из дороги с Юлей", "A road photo with Julia", "Ein Foto von unterwegs mit Julia"),
    text: l(
      `Фото из машины всегда немного странные, но в этом есть свой вайб.

Фильтр, дорога, Юля рядом, и у тебя такой вид, будто день просто идёт своим ходом.

Мне нравится эта обычность. Она честная`,
      `Car photos are always a little strange, but this one has its own vibe.

A filter, the road, Julia beside you, and you look like the day is just moving on naturally.

I like that ordinary feeling. It is honest.`,
      `Fotos aus dem Auto sind immer ein bisschen komisch, aber dieses hat seinen eigenen Vibe.

Ein Filter, die Fahrt, Julia neben dir, und du wirkst, als würde der Tag einfach normal weitergehen.

Ich mag diese Alltäglichkeit. Sie ist ehrlich.`
    )
  },
  {
    id: 34,
    category: "moments",
    title: l("Прогулка с Юлей и Nefeli", "A walk with Julia and Nefeli", "Ein Spaziergang mit Julia und Nefeli"),
    text: l(
      `Мне смешно, что ты решила сделать селфи прямо на ходу, а Юля и Nefeli просто попали в кадр сзади 😅

Получилось не идеально ровно, зато видно сам момент: вы куда-то идёте, светит солнце, никто специально не позирует.

Вот за это я бы её и оставил`,
      `Everything here feels very real.

You in front, Julia and Nefeli nearby, a normal walk, summer light. Not a perfect photo, but a lively one.

I like that it has movement, like the photo did not stop the moment, only caught a small part of it.`,
      `Hier wirkt alles sehr echt.

Du vorne, Julia und Nefeli in der Nähe, ein normaler Spaziergang, Sommerlicht. Kein perfektes Foto, aber ein lebendiges Bild.

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
    title: l("Мируся в розовой шапке", "Mirusya in her pink hat", "Mirusya mit ihrer rosa Mütze"),
    text: l(
      `Это Мируся, твоя сестрёнка, которая решила посмотреть в камеру с максимально близкого расстояния 😅

Розовая шапка, огромные глаза и очень серьёзное выражение лица. Фото правда милое.

Здорово, что у тебя есть такая младшая сестрёнка 🧸`,
      `This is Mirusya, your little sister.

The photo is very sweet: big eyes, a pink hat, and that childlike look that instantly feels warm.

You really have a beautiful family. I like that you have people this close to you.`,
      `Das ist Mirusya, deine kleine Schwester.

Das Foto ist sehr süß: große Augen, eine rosa Mütze und dieser Kinderblick, der sofort warm wirkt.

Du hast wirklich eine schöne Familie. Ich mag, dass du Menschen hast, die dir so nahestehen.`
    ),
    objectPosition: "center 18%"
  },
  {
    id: 38,
    category: "moments",
    title: l("Как кадр из поездки", "Like a travel photo", "Wie ein Reisefoto"),
    text: l(
      `Ты здесь стоишь спиной, поэтому я сначала рассматривал замок и горы, а потом всё равно вернулся взглядом к тебе.

Жёлтый цветок в волосах вообще идеально попал в этот кадр.

Выглядит как фотография, которую потом находишь через несколько лет и долго рассматриваешь`,
      `You from behind, a castle and mountains ahead.

This photo feels like you are standing at the beginning of a beautiful day. I do not even need to know what happened next; the moment already feels complete.

I like that it is calm and a little dreamy, but not too much.`,
      `Du von hinten, vor dir ein Schloss und Berge.

Dieses Foto fühlt sich an, als würdest du am Anfang eines schönen Tages stehen. Ich muss gar nicht wissen, was danach passiert ist; der Moment wirkt schon vollständig.

Ich mag, dass es ruhig und ein bisschen märchenhaft ist, aber nicht zu viel.`
    ),
    objectPosition: "center 38%"
  },
  {
    id: 39,
    category: "moments",
    title: l("Красная футболка и горы", "Red shirt and mountains", "Rotes Shirt und Berge"),
    text: l(
      `Здесь фон пытается перетянуть всё внимание на себя: горы, лес, яркое небо.

Но у него не получилось, потому что я всё равно сначала заметил тебя в красной футболке 🙈

Очень красивое фото. Из тех, к которым хочется потом ещё раз вернуться`,
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
    title: l("Зеркало с Юлей", "Mirror with Julia", "Spiegel mit Julia"),
    text: l(
      `Вы с Юлей просто встали перед зеркалом и сделали фото. Всё.

И знаешь, мне как раз нравится, что здесь нечего долго объяснять. Вы рядом, ты спокойно смотришь в телефон, день идёт своим ходом.

Не каждой хорошей фотографии нужен какой-то великий смысл`,
      `This is a simple photo, but I like it.

You are with Julia, a normal mirror, a normal day. And that is exactly what feels good about it.

Not every good memory has to look like a movie.`,
      `Das ist ein einfaches Foto, aber ich mag es.

Du bist mit Julia zusammen, ein normaler Spiegel, ein normaler Tag. Genau das fühlt sich daran gut an.

Nicht jede schöne Erinnerung muss wie ein Film aussehen.`
    )
  },
  {
    id: 41,
    category: "love",
    title: l("За твой характер в кадре", "For your character in the photo", "Für deinen Charakter im Bild"),
    text: l(
      `У тебя здесь такой вид, будто ты сейчас сама решишь все вопросы и ещё успеешь красиво сфоткаться 😅

Мне правда нравится эта твоя сторона. Когда ты собранная, уверенная и не пытаешься казаться тише, чем ты есть.

Короче, характер на фото поместился полностью`,
      `I love when a photo shows not only beauty, but character too.

Here you look composed and confident, like there is a quiet “I know what I am doing” in you.

I really like that. You have strength, even when you are simply standing in a photo.`,
      `Ich liebe es, wenn ein Foto nicht nur Schönheit zeigt, sondern auch Charakter.

Hier wirkst du ruhig und selbstbewusst, als gäbe es in dir ein leises „Ich weiß, was ich tue“.

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

Es wirkt nicht so, als wolltest du besonders aussehen. Du schaust einfach, und dadurch wirkt das Bild irgendwie persönlicher.

Vielleicht ist es für dich nur ein normales Foto, aber für mich hat es etwas sehr Weiches.`
    ),
    objectPosition: "center 25%"
  },
  {
    id: 43,
    category: "love",
    title: l("За аккуратность", "For your attention to detail", "Für deine gepflegte Art"),
    text: l(
      `Не знаю, замечаешь ли ты сама, но у тебя часто всё очень аккуратно: волосы, очки, одежда, даже то, как ты держишь телефон.

Я почему-то всегда цепляюсь взглядом за такие мелочи.

Может, звучит странно, но именно из них и складывается то, что мне в тебе нравится`,
      `I love your attention to detail.

It is in small things: your hair, your glasses, your pose, the way you hold yourself. In this photo, I can really see it.

And I like that it never feels cold or forced. With you, it feels soft.`,
      `Ich liebe diese gepflegte, aufmerksame Art an dir.

Sie zeigt sich in kleinen Dingen: Haare, Brille, Haltung, wie du dich gibst. Auf diesem Foto sieht man das sehr.

Und ich mag, dass sie nicht kalt oder gezwungen wirkt. Bei dir wirkt sie weich.`
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
    title: l("Рядом в школе", "Beside a friend at school", "Neben einer Freundin in der Schule"),
    text: l(
      `Обычная пауза в школе: вы с одноклассницей сидите рядом и решили быстро сфоткаться.

Ты немного поджала губы, она смотрит спокойнее, и никто особо не старался сделать «вау».

Но я бы всё равно сохранил. Иногда именно такие случайные фото потом лучше всего напоминают обычный день`,
      `This photo feels like a small normal pause at school.

You are just sitting beside each other, without posing or trying to make it look wow. And that is exactly what makes it feel real.

I like photos like this because they are honest. Like a small piece of an ordinary day that somehow feels nice to keep.`,
      `Dieses Foto wirkt wie eine ganz normale kleine Pause in der Schule.

Ihr sitzt einfach nebeneinander, ohne Pose und ohne daraus etwas Besonderes machen zu wollen. Genau dadurch fühlt es sich echt an.

Ich mag solche Fotos, weil sie ehrlich sind. Wie ein kleines Stück von einem normalen Tag, das man trotzdem gern behalten möchte.`
    )
  },
  {
    id: 46,
    category: "love",
    title: l("За живую энергию", "For your lively energy", "Für deine lebendige Energie"),
    text: l(
      `Ты здесь смотришь снизу вверх так, будто сейчас либо улыбнёшься, либо скажешь что-нибудь с характером 😅

Солнце яркое, ракурс немного странный, зато фотография получилась очень твоей.

Не просто милой. Живой`,
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
      `Мне очень нравится, когда тебя фотографируют не в тот момент, когда ты уже приготовила лицо для камеры.

Здесь ты смотришь куда-то в сторону и вообще будто занята своими мыслями.

Именно поэтому я задержался на этой фотографии дольше обычного`,
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
    title: l("За глаза, которые цепляют", "For eyes that stay with me", "Für deinen unvergesslichen Blick"),
    text: l(
      `Да, это буквально открытка про твои глаза.

Не знаю, как по-другому, потому что на этом фото они правда забирают всё внимание. Тёплые, внимательные, немного хитрые.

Я могу сколько угодно пытаться написать красиво, но проще сказать честно: мне очень нравится твой взгляд`,
      `Yes, this is literally a card about your eyes.

I do not know how else to say it, because in this photo they really take all the attention. Warm, attentive, a little playful.

I could try to write something pretty, but honestly it is simpler: I really like your look.`,
      `Ja, das ist wirklich eine Karte über deine Augen.

Ich weiß nicht, wie ich es anders sagen soll, weil sie auf diesem Foto wirklich alle Aufmerksamkeit auf sich ziehen. Warm, aufmerksam, ein bisschen verspielt.

Ich könnte versuchen, es schön zu formulieren, aber ehrlich ist es einfacher: Ich mag deinen Blick sehr.`
    ),
    objectPosition: "center 28%"
  },
  {
    id: 49,
    category: "moments",
    title: l("Обычное зеркало с Юлей", "Simple mirror with Julia", "Einfacher Spiegel mit Julia"),
    text: l(
      `Вы с Юлей зашли в туалет, увидели зеркало и, конечно, не могли просто пройти мимо 😅

Мне нравится, что у вас здесь совершенно разные выражения лица: Юля серьёзная, а ты снова строишь губки.

Обычная фотка, но очень узнаваемая`,
      `You are with Julia here, and the photo is very simple.

But that is exactly why I like it. It does not try to make the moment bigger than it is. You are just together, and it feels good.

Sometimes that is enough for a photo to feel warm.`,
      `Du bist hier mit Julia, und das Foto ist sehr einfach.

Aber genau deshalb mag ich es. Es versucht nicht, den Moment größer zu machen. Ihr seid einfach zusammen, und es fühlt sich gut an.

Manchmal reicht das, damit ein Foto warm wirkt.`
    ),
    objectPosition: "center 25%"
  },
  {
    id: 50,
    category: "moments",
    title: l("Смешной фильтр с Юлей", "Funny filter with Julia", "Lustiger Filter mit Julia"),
    text: l(
      `Вы с Юлей снова нашли собачий фильтр и решили, что одной фотографии точно недостаточно 😅

Тут мне особенно смешно с ваших одинаково серьёзных лиц, хотя на вас буквально собачьи ушки и носы.

Такие фотографии и не должны быть идеальными. Они нужны, чтобы потом посмеяться ещё раз`,
      `I like that this photo is not afraid to be funny.

The filter, Julia beside you, faces, mood. Everything is a little chaotic, but alive.

And honestly, photos like this often feel the closest, because they are not trying to be perfect.`,
      `Ich mag, dass dieses Foto keine Angst hat, lustig zu sein.

Der Filter, Julia neben dir, Gesichter, Stimmung. Alles ist ein bisschen chaotisch, aber lebendig.

Und ehrlich, solche Fotos fühlen sich oft besonders nah an, weil sie nicht perfekt sein wollen.`
    )
  },
  {
    id: 51,
    category: "secret",
    title: l("Ты почти в тени", "Almost in the shadow", "Fast im Schatten"),
    text: l(
      `Сначала я вообще не сразу понял, где здесь ты 😅

Потом заметил отражение в зеркале и почему-то продолжил рассматривать фото. Оно тёмное, немного странное и совсем не похоже на остальные.

Пусть будет. Мне нравится, что у тебя есть и такие кадры тоже`,
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

But I like that it is not a face, not a pose, not a filter, just a shadow. A small sign that you were there and noticed the moment.

I do not know why, but details like this sometimes stay with me more than perfect photos.`,
      `Das ist wahrscheinlich die seltsamste Karte in der Bibliothek.

Aber ich mag, dass es kein Gesicht ist, keine Pose, kein Filter, sondern nur ein Schatten. Ein kleines Zeichen dafür, dass du dort warst und den Moment bemerkt hast.

Ich weiß nicht warum, aber solche Details bleiben manchmal stärker als perfekte Fotos.`
    )
  },
  {
    id: 53,
    category: "moments",
    title: l("Близко и по-настоящему", "Close and real", "Nah und echt"),
    text: l(
      `Вы с подругой здесь так близко к камере, что она почти не успела нормально сфокусироваться 😅

Но в этом и прикол. Вы просто быстро сделали фото и не пытались выстроить идеальный ракурс.

Смотришь — и кажется, будто это произошло буквально секунду назад`,
      `This photo with a friend was taken up close. It is a little funny and very real.

You are not trying to look “right”, and that makes the photo alive. I like that honesty.

In photos like this, I almost feel the moment, not just the picture.`,
      `Dieses Foto mit einer Freundin wurde ganz aus der Nähe aufgenommen. Es ist ein bisschen lustig und sehr echt.

Ihr versucht nicht, “richtig” auszusehen, und dadurch wird das Foto lebendig. Ich mag diese Ehrlichkeit.

Bei solchen Bildern fühlt man fast den Moment, nicht nur das Foto.`
    ),
    objectPosition: "center 25%"
  },
  {
    id: 54,
    category: "moments",
    title: l("Мягкое зеркало с Юлей", "A soft mirror photo with Julia", "Ein weiches Spiegelbild mit Julia"),
    text: l(
      `Это фото немного размытое, зеркало не самое чистое, свет странный — а мне всё равно нравится 😅

Ты стоишь с телефоном, Юля рядом, и всё выглядит как обычный домашний момент.

Наверное, именно поэтому оно кажется таким знакомым и тёплым`,
      `I like the atmosphere here.

A mirror, Julia beside you, calm light, and the whole photo feels a little soft. Not sharp, not loud.

Just a nice photo that I do not want to overthink.`,
      `Ich mag hier die Atmosphäre.

Ein Spiegel, Julia neben dir, ruhiges Licht, und das ganze Foto wirkt etwas weich. Nicht hart, nicht laut.

Einfach ein angenehmes Foto, bei dem man nichts zerdenken will.`
    )
  },
  {
    id: 55,
    category: "moments",
    title: l("Ты с Юлей на солнце", "You and Julia in the sun", "Du und Julia in der Sonne"),
    text: l(
      `Не знаю, что Юля сказала перед этой фотографией, но выражения лиц у вас получились просто отличные 😅

Солнце светит прямо сверху, вы обе смотрите в камеру, и фотография получилась немного смешной.

Твоя косичка с ромашками здесь вообще отдельная причина её сохранить`,
      `This photo is very alive.

You and Julia are looking up, the light is bright, and the photo has a summer feeling that does not need explanation.

I like that you are not posing perfectly here, you are just in the moment.`,
      `Dieses Foto ist sehr lebendig.

Ihr beide schaut nach oben, das Licht ist hell, und das Bild hat ein Sommergefühl, das man nicht erklären muss.

Ich mag, dass du hier nicht perfekt posierst, sondern einfach im Moment bist.`
    ),
    objectPosition: "center 25%"
  },
  {
    id: 56,
    category: "moments",
    title: l("Ты, Юля и конец весны", "You, Julia, and late spring", "Du, Julia und der späte Frühling"),
    text: l(
      `Вот тут уже прям видно конец весны: яркое солнце, зелёная трава и вы с Юлей без курток.

Ты открыла рот от удивления, Юля смотрит серьёзнее, и вместе это выглядит очень смешно 😅

Фото кривоватое, зато настроение в него попало идеально`,
      `This photo is funny and sunny.

You and Julia are standing on the grass, the light is bright, and the photo really feels like late spring. Almost summer already, but still fresh and easy.

I like when a photo is not perfectly polished but still captures real joy. Here, the good mood feels as if it jumped into the frame with you.`,
      `Dieses Foto ist lustig und sonnig.

Ihr steht mit Julia auf dem Gras, das Licht ist hell, und das Bild fühlt sich richtig nach spätem Frühling an. Fast schon Sommer, aber noch frisch und leicht.

Ich mag es, wenn ein Foto nicht perfekt inszeniert ist, aber echte Freude ausstrahlt. Hier wirkt es, als wäre die gute Stimmung einfach mit euch ins Bild gesprungen.`
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

I hope this year you feel beautiful not only in photos, but also when there is no camera around. I hope you have fewer doubts and more quiet confidence.

You really are very special to me. Not in a perfect postcard way, but in a real way, with your character, your moods, and all those small details that make you you 💜`,
      `Meine liebe Valeriia, alles Gute zum 15. Geburtstag.

Ich hoffe, dass du dich in diesem Jahr nicht nur auf Fotos schön fühlst, sondern auch dann, wenn keine Kamera da ist. Mit weniger Zweifeln und mehr ruhigem Selbstvertrauen.

Du bist für mich wirklich etwas ganz Besonderes. Nicht perfekt wie eine Postkarte, sondern echt, mit deinem Charakter, deinen Stimmungen und all den kleinen Details, die dich ausmachen 💜`
    ),
    objectPosition: "center 25%"
  },
  {
    id: 58,
    category: "family",
    title: l("Елена, у тебя великолепная мама", "Elena, your wonderful mom", "Elena, deine wundervolle Mama"),
    text: l(
      `Это ещё одна фотография твоей мамы Елены среди цветущих веток.

Она здесь выглядит очень красиво и спокойно. И теперь я понимаю, от кого тебе достались некоторые черты.

Скажу просто: у тебя замечательные мама и папа. Спасибо им за то, что они воспитали такую дочь 💜`,
      `Here is your mom Elena again, and the photo is very beautiful.

The blooming branches, the light outfit, the calm look. It feels full of warmth and femininity.

And I want to say this simply: Elena and Vitalii are wonderful parents. I can see how much love, care, and strength there is in your family. Maybe that is why there is so much good in you.`,
      `Hier ist wieder deine Mama Elena, und das Foto ist sehr schön.

Die blühenden Zweige, das helle Outfit, der ruhige Blick. Es wirkt voller Wärme und Weiblichkeit.

Und ich möchte es einfach sagen: Elena und Vitalii sind wundervolle Eltern. Man sieht, wie viel Liebe, Fürsorge und Stärke es in deiner Familie gibt. Vielleicht ist deshalb so viel Gutes in dir.`
    ),
    objectPosition: "center 42%"
  },
  {
    id: 59,
    category: "moments",
    title: l("Солнечный день у воды", "A sunny day by the water", "Ein sonniger Tag am Wasser"),
    text: l(
      `Мне нравится, какой спокойной ты получилась на этой фотографии.

Вокруг солнце и яркая вода, но взгляд всё равно сразу останавливается на тебе. Ты просто смотришь в сторону, и в этом кадре нет ничего лишнего.

Мне хочется, чтобы таких спокойных и солнечных моментов у тебя было как можно больше`,
      `I like how calm you look in this photo.

There is sunlight and bright water all around you, but my eyes still go straight to you. You are simply looking away, and nothing in this picture feels unnecessary.

I hope you have many more calm and sunny moments like this one.`,
      `Ich mag, wie ruhig du auf diesem Foto wirkst.

Um dich herum sind Sonne und leuchtendes Wasser, aber mein Blick geht trotzdem sofort zu dir. Du schaust einfach zur Seite, und auf diesem Bild wirkt nichts überflüssig.

Ich wünsche dir noch ganz viele solche ruhigen und sonnigen Momente.`
    ),
    objectPosition: "center 36%"
  },
  {
    id: 60,
    category: "moments",
    title: l("Поймала немного солнца", "Catching a little sunlight", "Ein bisschen Sonne eingefangen"),
    text: l(
      `Мне здесь нравится, как солнце отражается в воде рядом с тобой.

Ты просто сидишь на краю бассейна и смотришь в сторону. Ничего специально не делаешь, а фотография всё равно получилась такой, что я остановился её рассмотреть.

Наверное, этого уже достаточно`,
      `I like how the sunlight reflects in the water beside you here.

You are just sitting by the pool and looking away. You are not doing anything special, yet I still stopped to look at this photo for a while.

I think that already says enough.`,
      `Ich mag, wie sich das Sonnenlicht hier neben dir im Wasser spiegelt.

Du sitzt einfach am Beckenrand und schaust zur Seite. Du machst nichts Besonderes, und trotzdem habe ich dieses Foto länger angesehen.

Ich glaube, das sagt schon genug.`
    ),
    objectPosition: "center 44%"
  },
  {
    id: 61,
    category: "secret",
    title: l("Самая серьёзная фотография", "The most serious photo", "Das ernsteste Foto"),
    text: l(
      `Да, именно для этой фотографии обязательно нужна была отдельная открытка 😅

Ты подошла к камере настолько близко, насколько вообще возможно, и выражение лица получилось просто незабываемым.

Я посмотрел и сразу улыбнулся. Значит, фото уже выполнило свою задачу`,
      `Yes, this photo absolutely needed its own card 😅

You came as close to the camera as humanly possible, and your expression turned out unforgettable.

I looked at it and smiled right away. So the photo already did its job.`,
      `Ja, genau dieses Foto brauchte unbedingt eine eigene Karte 😅

Du bist so nah an die Kamera gekommen, wie es überhaupt möglich war, und dein Gesichtsausdruck ist unvergesslich.

Ich habe es angesehen und sofort gelächelt. Damit hat das Foto seine Aufgabe schon erfüllt.`
    ),
    objectPosition: "center 34%"
  },
  {
    id: 62,
    category: "secret",
    title: l("Спокойная у воды", "Quiet by the water", "Ruhig am Wasser"),
    text: l(
      `А здесь ты уже совсем другая: сидишь спиной, смотришь на воду и будто вообще забыла про камеру.

Мне нравится этот контраст с предыдущей фотографией. Там ты смешная и близко-близко, а тут всё спокойно.

И обе версии — всё равно ты`,
      `Here you look completely different: sitting with your back to the camera, watching the water as if you forgot the photo was being taken.

I like the contrast with the previous picture. There you are funny and extremely close; here everything is quiet.

And both versions are still you.`,
      `Hier wirkst du wieder ganz anders: Du sitzt mit dem Rücken zur Kamera und schaust aufs Wasser, als hättest du das Foto ganz vergessen.

Ich mag den Unterschied zum Bild davor. Dort bist du lustig und ganz nah, hier ist alles ruhig.

Und beides bist einfach du.`
    ),
    objectPosition: "center 42%"
  },
  {
    id: 63,
    category: "love",
    title: l(
      "Иногда жизнь удивительно возвращает нам людей, которые должны быть рядом 💜",
      "Sometimes life has a surprising way of bringing back the people who are meant to be close 💜",
      "Manchmal bringt das Leben uns auf erstaunliche Weise die Menschen zurück, die an unserer Seite sein sollen 💜"
    ),
    text: l(
      `После долгого времени, когда мы почти не общались, ты снова появилась в моей жизни

И вот уже чуть больше полугода мы снова разговариваем, смеёмся, делимся своими мыслями, переживаниями и разными моментами нашей жизни

За это время ты стала для меня не просто человеком, с которым мне приятно общаться
Ты стала моей любимой девушкой, самым дорогим, близким и по-настоящему родным человеком 🧸

Я очень ценю всё, что есть между нами
Наши разговоры, поддержку, доверие, заботу и то тепло, которое ты даришь мне каждый день

Иногда я думаю о том, как удивительно всё получилось
Мы так долго почти не общались, а потом снова нашли друг друга и стали намного ближе, чем были раньше

Я правда очень рад, что ты вернулась в мою жизнь
И ещё больше рад тому, что теперь могу называть тебя своей любимой девушкой

Спасибо тебе за все эти чуть больше полугода, за каждый наш разговор, каждую улыбку и каждый момент рядом

Люблю тебя, моя любимая Леруся 💜🫶🏻`,
      `After a long time when we barely talked, you came back into my life

And now, for a little over six months, we have been talking again, laughing, and sharing our thoughts, worries, and all kinds of moments from our lives

During this time, you became much more than someone I simply enjoy talking to
You became my beloved girlfriend, the person who feels closest, dearest, and truly like home to me 🧸

I value everything we have between us
Our conversations, support, trust, care, and the warmth you give me every day

Sometimes I think about how surprisingly everything worked out
We barely spoke for such a long time, then found each other again and became much closer than we had ever been before

I am truly happy that you came back into my life
And even happier that I can now call you my beloved girlfriend

Thank you for this little more than half a year, for every conversation, every smile, and every moment together

I love you, my beloved Valeriia 💜🫶🏻`,
      `Nachdem wir lange kaum Kontakt hatten, bist du wieder in mein Leben gekommen

Seit etwas mehr als einem halben Jahr reden wir nun wieder miteinander, lachen und teilen unsere Gedanken, Sorgen und die verschiedensten Momente aus unserem Leben

In dieser Zeit bist du für mich viel mehr geworden als nur ein Mensch, mit dem ich gern rede
Du bist meine geliebte Freundin geworden, der Mensch, der mir am nächsten steht, mir am meisten bedeutet und sich wirklich vertraut anfühlt 🧸

Ich schätze alles, was zwischen uns ist
Unsere Gespräche, unsere Unterstützung, unser Vertrauen, unsere Fürsorge und die Wärme, die du mir jeden Tag schenkst

Manchmal denke ich darüber nach, wie erstaunlich sich alles entwickelt hat
Wir hatten so lange kaum Kontakt, dann haben wir uns wiedergefunden und sind uns viel näher gekommen als früher

Ich bin wirklich froh, dass du wieder in mein Leben gekommen bist
Und noch glücklicher bin ich darüber, dass ich dich jetzt meine geliebte Freundin nennen darf

Danke für dieses etwas mehr als halbe Jahr, für jedes unserer Gespräche, jedes Lächeln und jeden gemeinsamen Moment

Ich liebe dich, meine geliebte Valeriia 💜🫶🏻`
    ),
    objectPosition: "center 34%"
  }
];

// Живые русские подписи. Они специально разные по длине и настроению,
// чтобы библиотека читалась как личные сообщения, а не как описание фотографий.
const naturalRussianCopy: Record<number, { title: string; text: string }> = {
  1: {
    title: "Начну вот с этой",
    text: `Лерусь, с 15-летием тебя 💜

Мне почему-то хочется начать именно с этой фотки. Вы с Nefeli тут вообще не пытались сделать что-то серьёзное, ещё и эта принцесса влезла ровно посередине 😅

Короче, она смешная. Но ты мне здесь нравишься именно такой — настоящей и без лишних попыток выглядеть идеально`
  },
  2: {
    title: "Вы с Юлей тут такие",
    text: `Я сначала посмотрел на тебя и Юлю, а уже потом заметил, насколько красивый вокруг зал 😅

Вы просто обнялись, показали свои фирменные пальцы и всё. Никаких сложных поз, зато сразу видно, что вам вместе хорошо`
  },
  3: {
    title: "Обычный день с Nefeli",
    text: `Не знаю почему, но спокойные фотки мне часто нравятся сильнее постановочных.

Вы с Nefeli просто рядом, ничего особенного не происходит. Но именно такие кадры потом и напоминают, каким был обычный день. Я бы эту точно не удалял`
  },
  4: {
    title: "Да, эту тоже оставлю",
    text: `Наверное, это немного странно, но мне нравится, когда ты просто дурачишься и не думаешь, насколько красиво сейчас получишься.

Ты здесь смешная. И да, мне правда нравится эта твоя сторона 🙈`
  },
  5: {
    title: "Чего я хочу для тебя сегодня",
    text: `Сегодня я хочу для тебя одного: чтобы ты поменьше обо всём переживала и побольше улыбалась.

Хотя бы сегодня не разбирай в голове каждую мелочь. Просто побудь именинницей, которой можно всё хорошее 🧸💜`
  },
  6: {
    title: "Когда ты просто ты",
    text: `Мне очень нравится твоя домашняя и спокойная сторона.

Когда не нужно никуда торопиться, что-то доказывать или специально позировать. Просто ты, обычный день и ощущение, что всё нормально.

Рядом с такой тобой мне самому как-то спокойнее`
  },
  7: {
    title: "Серьёзные девочки",
    text: `Вы с Юлей тут выглядите так, будто пришли решать очень важные вопросы. Хотя просто сделали фотку в зеркале 😅

Особенно мне нравится твоё максимально серьёзное лицо. Видно, что настрой был правильный`
  },
  8: {
    title: "Солнце и две собачки",
    text: `Тут даже придумывать ничего не надо: вы с Юлей, собачий фильтр, солнце и полный несерьёзный настрой 😅

Фотка смешная, и именно поэтому хорошая. Я посмотрел и тоже улыбнулся`
  },
  9: {
    title: "Вот эта улыбка",
    text: `Я на этой фотографии сразу заметил твою улыбку.

Она здесь не какая-то специально сделанная для камеры, а очень добрая и спокойная. Даже не знаю, как нормально объяснить, но я бы сохранил фотку уже только из-за неё 🫶🏻`
  },
  10: {
    title: "Я опять завис на твоих глазах",
    text: `Да, сердечки тут милые. Но я всё равно первым делом смотрю на твои глаза.

У тебя взгляд иногда мягкий, иногда хитрый, а здесь сразу оба. Вот и всё объяснение, почему эта фотография тут 🥹`
  },
  11: {
    title: "Тебе это очень идёт",
    text: `Здесь всё вроде бы просто: зеркало, одежда, обычная фотография.

Но мне правда нравится, как ты выглядишь. Без чего-то слишком яркого, просто аккуратно и очень по-твоему. Не знаю, как сказать лучше, поэтому скажу как есть: тебе идёт`
  },
  12: {
    title: "Маленькая ты и котик",
    text: `Это фото какое-то очень тёплое.

Маленькая ты, рядом котик, и больше ничего не нужно. Мне приятно видеть такие кусочки твоего детства — будто я понемногу узнаю тебя ещё до того времени, когда мы познакомились 🧸`
  },
  13: {
    title: "Пусть таких дней будет больше",
    text: `Я хочу, чтобы рядом с тобой почаще были Nefeli и другие люди, с которыми можно не напрягаться и быть собой.

Сфоткаться, посмеяться, поговорить о какой-нибудь ерунде и хотя бы ненадолго забыть обо всём тяжёлом. Вот таких обычных хороших дней я тебе и желаю ✨`
  },
  14: {
    title: "У тебя здесь очень мягкий взгляд",
    text: `На этой фотографии ты выглядишь такой спокойной, что я сам, пока смотрю, немного выдыхаю.

Мне трудно нормально объяснить, что именно цепляет. Наверное, твой взгляд. Он здесь очень тёплый и совсем не наигранный`
  },
  15: {
    title: "Очки были отличной идеей",
    text: `Эти огромные очки должны были сделать фотку просто смешной, но вы с Юлей всё равно умудрились выглядеть круто 😅

А ваши серьёзные лица делают её ещё лучше. Я бы тоже точно сохранил`
  },
  16: {
    title: "Вы с Nefeli — две собачки",
    text: `На этом можно было бы закончить всю подпись 😅

Мне просто нравится, что вы обе не пытаетесь быть серьёзными. Такие фотографии потом пересматриваешь и снова вспоминаешь настроение, а не то, насколько ровно всё получилось`
  },
  17: {
    title: "Маленькая лента с Юлей",
    text: `Тут будто не одна фотка, а сразу несколько маленьких воспоминаний.

Ты, Юля, смешные фильтры, разные лица. Всё немного хаотично, но в этом и есть прикол. Я бы долго её рассматривал`
  },
  18: {
    title: "Кудри и уверенный взгляд",
    text: `Здесь у тебя такой вид, будто ты и сама прекрасно знаешь, что хорошо получилась.

И правильно знаешь. Кудри тебе очень идут, а на этом месте я просто честно признаюсь: посмотрел, немного завис и сохранил бы 🙈`
  },
  19: {
    title: "Вы втроём — отдельный сюжет",
    text: `Мне смешно, насколько вы тут разные: ты строишь губки, Юля спокойно смотрит в камеру, а Nefeli улыбается в бандане 😅

Вокруг полный движ, и фотка получилась такой же. Зато сразу видно, что день был не скучный`
  },
  20: {
    title: "Просто ты в зеркале",
    text: `Тут нет никакой большой истории. Ты просто решила сфоткаться в зеркале.

Но мне и такие фотографии нравятся. Смотрю и думаю: вот она, моя Лера. Иногда этого уже достаточно`
  },
  21: {
    title: "Пусть тебе чаще будет легко",
    text: `Я не хочу желать тебе только каких-то огромных достижений.

Хочу ещё обычных хороших дней: любимая песня, солнце из окна, смешная фотка, нормальное настроение. Чтобы тебе почаще было хорошо просто так, без особой причины`
  },
  22: {
    title: "Мне нравится эта твоя сторона",
    text: `Мне нравится эта фотография не только потому, что ты здесь красивая.

Ты просто включила смешной фильтр и сфотографировалась, не пытаясь сделать идеальный кадр. Наверное, поэтому она и запомнилась: в ней есть та лёгкая и настоящая сторона тебя, которую мне очень приятно видеть`
  },
  23: {
    title: "Тут красиво вообще всё",
    text: `Горы, вода, яркое небо — фон, конечно, постарался.

Но я всё равно первым заметил тебя в красной футболке. Ты здесь такая спокойная, будто просто остановилась на секунду. Очень красивый кадр, правда`
  },
  24: {
    title: "Ты зачем-то сфоткала сирень",
    text: `И мне это почему-то понравилось 😅

Ты заметила красивое дерево и не прошла мимо. Может, для тебя это вообще ничего не значит, но мне приятно узнавать тебя и через такие маленькие вещи`
  },
  25: {
    title: "Вы здесь такие родные",
    text: `Лерусь, эта семейная фотография правда очень тёплая.

Папа целует тебя в голову, Мируся прижалась рядом, а вокруг такой вид, что можно долго рассматривать. Но главное всё равно не горы. Главное — как вы стоите вместе.

У тебя замечательные родители и сестрёнка. Это видно даже по одному кадру 💜`
  },
  26: {
    title: "Даже обычная примерочная",
    text: `Ты просто сфоткалась в зеркале, и вроде ничего особенного.

А я всё равно остановился бы и посмотрел ещё раз. Мне нравится, что тебе не нужны сложный свет и идеальное место, чтобы хорошо получиться`
  },
  27: {
    title: "Зашли с Юлей и сфоткались",
    text: `Обычный магазин, обычный день, вы с Юлей по пути сделали фотографию.

Ты снова показываешь пальцами мир и немного смешно поджимаешь губы 😅 Именно такие случайные кадры почему-то потом и запоминаются`
  },
  28: {
    title: "Тут ты совсем тихая",
    text: `Эта фотография будто сделана в момент, когда ты была где-то в своих мыслях.

Всё чёрно-белое, спокойное, без лишнего. Мне нравится, что ты бываешь разной. Не только смешной и громкой, но и вот такой`
  },
  29: {
    title: "Твоя мама среди цветов",
    text: `Твоя мама Елена здесь правда очень красивая. Белая одежда, цветущие ветки и такой спокойный взгляд — всё совпало.

И это не комплимент ради красивой подписи. У тебя действительно замечательные мама и папа. Думаю, ты и сама знаешь, как тебе с ними повезло 💜`
  },
  30: {
    title: "Небольшая пауза с цветами",
    text: `Да, тебя на этой фотографии нет. Зато цветов примерно миллион 😅

Пусть она просто побудет здесь между всеми лицами и историями. Не всё же обязательно объяснять — иногда красиво, и этого хватает`
  },
  31: {
    title: "Мне очень нравится этот образ",
    text: `Сначала я заметил платье, а потом понял, что дело не только в нём.

Ты здесь очень уверенно стоишь, и тебе это безумно идёт. Короче, долго объяснять не буду: ты красивая, фотка классная, я немного засмотрелся 🙈`
  },
  32: {
    title: "Три разных настроения",
    text: `Ты, Юля и Nefeli одновременно показываете мир, но лица у всех вообще про разное 😅

По-моему, в этом вся фотография. Никакой идеальной постановки, просто вы втроём и хорошее настроение`
  },
  33: {
    title: "Фотка по дороге с Юлей",
    text: `Фотографии в машине почти всегда немного странные. Эта не исключение 😅

Но у неё есть настроение: дорога, Юля рядом, фильтр, и вы просто куда-то едете. Мне нравится, что это обычный момент, а не специально придуманная история`
  },
  34: {
    title: "Селфи прямо на ходу",
    text: `Ты решила сфоткаться во время прогулки, а Юля и Nefeli просто попали в кадр сзади 😅

Получилось кривовато, зато живо. Солнце, движение и ощущение, будто фотография поймала буквально одну секунду вашего дня`
  },
  35: {
    title: "Больше таких солнечных дней",
    text: `Пусть в твои 15 будет побольше дней, после которых остаётся хорошее чувство.

Не обязательно идеальных. Можно с пересветом, странным ракурсом и половиной улыбки. Главное, чтобы тебе самой в них было хорошо`
  },
  36: {
    title: "Маленькая Леруся за пианино",
    text: `Смотрю на эту фотографию и немного не верится, что этой маленькой девочке уже 15.

Подарки, пианино и ты, которая просто радуется. Постарайся не потерять эту часть себя, ладно? Она очень настоящая 🧸`
  },
  37: {
    title: "Мируся решила проверить камеру",
    text: `Причём с максимально близкого расстояния 😅

Розовая шапка, огромные глаза и очень серьёзный взгляд. У тебя классная сестрёнка, тут даже спорить не о чем`
  },
  38: {
    title: "Как фотография из старого альбома",
    text: `Я сначала начал рассматривать замок и горы, а потом всё равно вернулся взглядом к тебе.

Ты стоишь спиной, и этот жёлтый цветок в волосах так хорошо попал в кадр. Есть ощущение, что такую фотографию находишь через несколько лет и сразу вспоминаешь целый день`
  },
  39: {
    title: "Фон старался, но не победил",
    text: `Там сзади горы, лес и яркое небо — всё очень красивое.

Но я всё равно сначала заметил тебя в красной футболке. Извини, пейзаж 😅`
  },
  40: {
    title: "Просто зеркало и вы с Юлей",
    text: `Вы встали перед зеркалом, сделали фотографию и пошли дальше.

Мне нравится, что тут нечего придумывать. Обычный день тоже заслуживает остаться в памяти`
  },
  41: {
    title: "Тут сразу видно твой характер",
    text: `У тебя здесь такой вид, будто ты уже всё решила и сейчас пойдёшь заниматься своими делами 😅

Мне нравится твоя уверенная сторона. Когда ты не стараешься быть удобнее или тише, а просто остаёшься собой`
  },
  42: {
    title: "Я задержался на этом взгляде",
    text: `Может, для тебя это самая обычная фотография.

А мне понравилось, как ты здесь смотришь. Спокойно, без специального выражения для камеры. Из-за этого кадр почему-то кажется очень близким`
  },
  43: {
    title: "Я замечаю такие мелочи",
    text: `Волосы, очки, одежда, то, как ты держишь телефон. У тебя часто всё очень аккуратно, но не скучно.

Может, ты сама этого вообще не замечаешь. А я замечаю. И мне нравится`
  },
  44: {
    title: "Без цвета, но с настроением",
    text: `В чёрно-белом варианте здесь ничего не отвлекает от твоего лица.

И фотография получается не громкой, а какой-то тихой. Я не знаю, о чём ты тогда думала, но мне хочется рассматривать этот взгляд чуть дольше`
  },
  45: {
    title: "Обычная пауза в школе",
    text: `Вы с одноклассницей просто сидели рядом и решили быстро сфоткаться.

Никто не готовился, не искал лучший ракурс и не пытался сделать «вау». Но именно поэтому фотка и нормальная — в ней остался настоящий кусочек школьного дня`
  },
  46: {
    title: "Сейчас что-нибудь скажешь",
    text: `У тебя здесь такой взгляд, будто ты через секунду либо улыбнёшься, либо скажешь что-нибудь с характером 😅

Ракурс странный, солнце яркое, но фотография получилась очень твоей. Живой, а не просто красивой`
  },
  47: {
    title: "Когда ты не готовилась к фото",
    text: `Мне особенно нравятся кадры, где ты не успела сделать специальное лицо для камеры.

Здесь ты смотришь куда-то в сторону и будто вообще занята своими мыслями. Именно поэтому я и задержался на этой фотографии`
  },
  48: {
    title: "Да, снова про твои глаза",
    text: `А что мне делать, если на этой фотографии они забирают всё внимание?

Тёплые, внимательные и немного хитрые. Я мог бы придумать красивую фразу, но честнее будет просто сказать: мне безумно нравится твой взгляд`
  },
  49: {
    title: "Мимо зеркала вы не прошли",
    text: `Вы с Юлей увидели зеркало и, конечно, сразу решили сфоткаться 😅

Мне особенно нравится разница: Юля серьёзная, а ты снова строишь губки. Очень обычная и очень ваша фотография`
  },
  50: {
    title: "Собачий фильтр, дубль ещё один",
    text: `Похоже, одной фотографии вам с Юлей было мало 😅

Самое смешное здесь — ваши совершенно серьёзные лица, пока на вас буквально собачьи ушки и носы. Вот за это и оставляем`
  },
  51: {
    title: "Я не сразу тебя нашёл",
    text: `Серьёзно, сначала пришлось присмотреться 😅

Потом я заметил тебя в отражении и почему-то продолжил разглядывать. Фотография тёмная и странная, но среди остальных именно поэтому выделяется`
  },
  52: {
    title: "Даже твоя тень попала сюда",
    text: `Наверное, это самая странная открытка во всей библиотеке.

Но мне нравится сам факт: ты увидела свою тень и решила её сфотографировать. Маленькая случайная деталь, которая почему-то осталась`
  },
  53: {
    title: "Камера была слишком близко",
    text: `Вы с подругой подошли настолько близко, что камера уже почти сдалась 😅

Зато фотография получилась настоящая. Быстро сделали, посмеялись и пошли дальше. Я прямо представляю этот момент`
  },
  54: {
    title: "Немного размыто, но хорошо",
    text: `Свет странный, зеркало не идеальное, фотография чуть размыта — и мне всё равно нравится.

Ты с телефоном, Юля рядом, обычный момент дома. В ней есть что-то очень знакомое и спокойное`
  },
  55: {
    title: "Вы с Юлей и ромашки",
    text: `Не знаю, что произошло прямо перед этой фотографией, но лица у вас получились отличные 😅

А твоя косичка с ромашками вообще забрала половину моего внимания. Очень солнечный кадр`
  },
  56: {
    title: "Конец весны в одной фотке",
    text: `Яркое солнце, зелёная трава, вы с Юлей уже без курток — сразу видно, что весна почти закончилась.

У тебя лицо максимально удивлённое, Юля смотрит серьёзнее, и вместе это очень смешно 😅 Фотка неровная, зато настроение поймала идеально`
  },
  57: {
    title: "Моя хорошая, тебе уже 15",
    text: `Я хочу, чтобы в этом году ты чаще смотрела на себя моими глазами.

Не искала сразу то, что тебе в себе не нравится, а замечала улыбку, глаза, характер и всё то, из-за чего я могу долго рассматривать даже самую обычную твою фотографию.

Ты для меня особенная не потому, что должна быть идеальной. А потому что ты — это ты 💜`
  },
  58: {
    title: "Ещё одна фотография твоей мамы",
    text: `Елена здесь опять среди цветущих веток, и фотография получилась очень красивой.

А ещё теперь понятно, откуда у тебя некоторые черты. Скажу без длинной речи: у тебя замечательные мама и папа. И я правда благодарен им за такую дочь 💜`
  },
  59: {
    title: "Солнечный день у воды",
    text: `Мне нравится, какой спокойной ты получилась на этой фотографии

Вокруг солнце и яркая вода, но взгляд всё равно сразу останавливается на тебе. Ты просто смотришь в сторону, и в этом кадре нет ничего лишнего`
  },
  60: {
    title: "Ты просто сидишь у воды",
    text: `Ты ничего специально не делаешь, просто сидишь на краю бассейна и смотришь в сторону.

А я всё равно остановился на этой фотографии и начал рассматривать, как рядом отражается солнце. Наверное, это уже достаточно хороший комплимент`
  },
  61: {
    title: "Очень серьёзная фотография",
    text: `Да, для неё точно нужна была отдельная открытка 😅

Ты подошла к камере настолько близко, насколько это вообще возможно. Я открыл фото и сразу улыбнулся, так что свою задачу оно выполнило идеально`
  },
  62: {
    title: "А тут ты уже совсем другая",
    text: `На предыдущей фотографии ты почти залезла в камеру, а здесь спокойно сидишь спиной и смотришь на воду.

Мне нравится этот контраст. Ты можешь быть очень смешной, а через минуту — тихой и задумчивой. И обе версии мне нравятся`
  },
  63: {
    title: "Ну и наконец мы",
    text: `Конечно, нашу совместную фотографию я тоже сюда добавил 🧸

Мы здесь прижались друг к другу и оба получились немного смешными. Но я всё равно очень рад, что этот кадр у нас есть.

Потому что здесь уже не просто твоя фотография. Здесь мы вместе. И это для меня важнее всего 💜`
  }
};

const reunionStory = {
  title: {
    ru: "Иногда жизнь удивительным образом возвращает нам людей, которые действительно должны быть рядом 💜",
    en: "Sometimes life has a remarkable way of bringing back the people who truly belong beside us 💜",
    de: "Manchmal bringt das Leben uns auf erstaunliche Weise die Menschen zurück, die wirklich an unsere Seite gehören 💜"
  },
  text: {
    ru: `## С чего всё началось заново

Я не случайно выбрал именно эту фотографию и поставил её первой.

Для меня это не просто милый снимок, где мы рядом. Когда я смотрю на него, я думаю о том, насколько неожиданно всё между нами изменилось. Ещё совсем недавно мы почти год не общались, а теперь у нас есть общие фотографии, воспоминания и целая история, которую хочется сохранить.

Эта фотография не обязана быть самой красивой или идеальной. Она важна для меня потому, что она настоящая и наша. Здесь мы просто рядом, и именно с этого мне хочется начать весь рассказ о нас 💜

Иногда жизнь удивительным образом возвращает нам людей, которые действительно должны быть рядом.

Весной прошлого года мы полностью перестали общаться.

Прошло лето, затем осень и почти вся зима… Со временем я уже перестал думать о том, что однажды наше общение может начаться снова.

Но в феврале ты неожиданно написала мне.

Тогда мы ещё не начали постоянно общаться, но спустя некоторое время я написал тебе сам — и именно после этого всё по-настоящему началось заново.

Помнишь, как мы переписывались почти до глубокой ночи?

После такого долгого молчания общаться с тобой снова было удивительно легко. Будто между нами и не было этого огромного перерыва, будто мы просто продолжили разговор, который когда-то остановился.

Примерно в то же время я снова начал читать книгу о японской мифологии и вспомнил одну легенду — о красной нити судьбы.

Согласно этой легенде, люди, которым суждено встретиться и сыграть важную роль в жизни друг друга, связаны невидимой красной нитью.

Она может растягиваться на огромное расстояние, запутываться и становиться почти незаметной. Люди могут разойтись разными дорогами, потерять друг друга и долго не общаться, но сама нить никогда не разрывается.

Рано или поздно она снова приводит их друг к другу.

Не знаю, существует ли что-то подобное на самом деле, но после того, как мы вернулись в жизнь друг друга, я часто вспоминал эту легенду и думал о нас.

Мы полностью перестали общаться, прошёл почти год, а потом нескольких сообщений оказалось достаточно, чтобы наша история началась заново.

Только теперь уже совсем по-другому.

Мы снова начали узнавать друг друга, всё больше разговаривать, смеяться, встречаться, делиться своими мыслями, переживаниями и обычными моментами из жизни.

Постепенно разговоры перестали быть просто разговорами.

Мне стало важно знать, как прошёл твой день, что тебя порадовало, что расстроило и как ты себя чувствуешь. Я начал ждать наших встреч, скучать по тебе и замечать, насколько сильно ты снова стала частью моей жизни.

А затем ты стала человеком, без которого мне теперь сложно представить свои обычные дни.

Иногда я думаю о том, насколько странно и красиво всё получилось.

Когда-то мы просто перестали общаться и могли навсегда остаться друг для друга людьми из прошлого. Но жизнь почему-то решила иначе.

Возможно, наша красная нить всё это время никуда не исчезала.

Она просто немного запуталась, на время развела нас по разным дорогам, а затем снова соединила — именно тогда, когда мы были готовы узнать друг друга заново.

Именно поэтому эта фотография идёт первой.

Она напоминает мне не только о моменте, когда мы были рядом, но и обо всём пути, который привёл нас к нему. О том, что ещё год назад такой снимок мог вообще не появиться, а теперь он стал частью нашей общей истории.

И кто знает…

Может быть, через 10, 20 или даже 50 лет мы снова откроем этот сайт, посмотрим на эту фотографию и вспомним, как когда-то всё началось заново с нескольких сообщений в феврале.

Вспомним, как после почти года тишины снова начали разговаривать, постепенно становились ближе и ещё даже не понимали, насколько важными станем друг для друга.

И тогда я посмотрю на тебя и скажу:

**«Получается, наша красная нить всё-таки никогда не разрывалась» ❤️**

Люблю тебя, моя Леруся 💜🫶🏻`,
    en: `## How everything began again

I did not choose this photograph by accident, and there is a reason I placed it first.

To me, it is not just a sweet picture of us together. When I look at it, I think about how unexpectedly everything between us changed. Not long ago, we had barely spoken for almost a year, and now we have photographs together, memories, and a whole story that I want to preserve.

This photograph does not have to be the most beautiful or perfect one. It matters to me because it is real and it is ours. Here we are simply together, and this is where I want to begin the whole story of us 💜

Sometimes life has a remarkable way of bringing back the people who truly belong beside us.

In spring last year, we completely stopped talking.

Summer passed, then autumn and almost the whole winter… With time, I stopped thinking that our conversations might ever begin again.

But in February, you unexpectedly wrote to me.

We did not start talking all the time immediately, but after a while I wrote to you myself, and that was when everything truly began again.

Do you remember how we messaged each other until almost the middle of the night?

After such a long silence, talking to you again felt surprisingly easy. It was as if that huge break between us had never happened, as if we had simply continued a conversation that had once paused.

Around the same time, I started reading a book about Japanese mythology again and remembered a legend about the red thread of fate.

According to this legend, people who are meant to meet and play an important part in each other's lives are connected by an invisible red thread.

It can stretch across an enormous distance, become tangled, and almost disappear from view. People can take different paths, lose each other, and go a long time without speaking, but the thread itself never breaks.

Sooner or later, it leads them back to each other.

I do not know whether anything like that truly exists, but after we returned to each other's lives, I often remembered this legend and thought about us.

We stopped talking completely, almost a year passed, and then only a few messages were enough for our story to begin again.

Only this time, everything was different.

We began learning about each other again, talking more, laughing, meeting, and sharing our thoughts, worries, and ordinary moments from life.

Slowly, our conversations became more than just conversations.

It became important to me to know how your day went, what made you happy, what upset you, and how you were feeling. I began waiting for our meetings, missing you, and noticing how deeply you had become part of my life again.

Then you became someone without whom it is now difficult for me to imagine my ordinary days.

Sometimes I think about how strange and beautiful everything turned out.

Once, we simply stopped talking and could have remained people from each other's past forever. But for some reason, life decided differently.

Perhaps our red thread never disappeared at all.

Maybe it only became a little tangled, led us along different paths for a while, and then connected us again exactly when we were ready to get to know each other all over again.

That is why this photograph comes first.

It reminds me not only of a moment when we were together, but of the whole path that brought us there. A year earlier, this photograph might never have existed, and now it has become part of our shared story.

And who knows…

Maybe in 10, 20, or even 50 years, we will open this website again, look at this photograph, and remember how everything once began again with a few messages in February.

We will remember how, after almost a year of silence, we started talking again, slowly grew closer, and did not yet understand how important we would become to each other.

Then I will look at you and say:

**“It turns out our red thread really never broke” ❤️**

I love you, my beloved Valeriia 💜🫶🏻`,
    de: `## Wie alles neu begann

Ich habe dieses Foto nicht zufällig ausgewählt und an die erste Stelle gesetzt.

Für mich ist es nicht nur ein süßes Bild, auf dem wir zusammen sind. Wenn ich es ansehe, denke ich daran, wie unerwartet sich alles zwischen uns verändert hat. Vor nicht allzu langer Zeit hatten wir fast ein Jahr kaum Kontakt, und jetzt haben wir gemeinsame Fotos, Erinnerungen und eine ganze Geschichte, die ich bewahren möchte.

Dieses Foto muss nicht das schönste oder perfekteste sein. Es ist mir wichtig, weil es echt ist und uns gehört. Hier sind wir einfach zusammen, und genau damit möchte ich unsere ganze Geschichte beginnen 💜

Manchmal bringt das Leben uns auf erstaunliche Weise die Menschen zurück, die wirklich an unsere Seite gehören.

Im Frühling des letzten Jahres haben wir ganz aufgehört, miteinander zu reden.

Der Sommer verging, dann der Herbst und fast der ganze Winter… Mit der Zeit dachte ich nicht mehr daran, dass unser Kontakt eines Tages wieder anfangen könnte.

Doch im Februar hast du mir ganz unerwartet geschrieben.

Damals haben wir noch nicht sofort ständig miteinander geredet. Aber einige Zeit später habe ich dir selbst geschrieben, und genau danach begann alles wirklich neu.

Erinnerst du dich daran, wie wir bis fast tief in die Nacht geschrieben haben?

Nach diesem langen Schweigen war es erstaunlich leicht, wieder mit dir zu reden. Als hätte es diese riesige Pause zwischen uns nie gegeben, als hätten wir einfach ein Gespräch fortgesetzt, das irgendwann stehen geblieben war.

Ungefähr zur gleichen Zeit begann ich wieder ein Buch über japanische Mythologie zu lesen und erinnerte mich an eine Legende über den roten Faden des Schicksals.

Nach dieser Legende sind Menschen, die sich begegnen und eine wichtige Rolle im Leben des anderen spielen sollen, durch einen unsichtbaren roten Faden verbunden.

Er kann sich über eine riesige Entfernung spannen, sich verknoten und fast unsichtbar werden. Menschen können verschiedene Wege gehen, einander verlieren und lange keinen Kontakt haben, aber der Faden selbst reißt niemals.

Früher oder später führt er sie wieder zueinander.

Ich weiß nicht, ob es so etwas wirklich gibt. Aber nachdem wir wieder in das Leben des anderen zurückgekehrt waren, musste ich oft an diese Legende und an uns denken.

Wir hatten ganz aufgehört zu reden, fast ein Jahr verging, und dann reichten ein paar Nachrichten aus, damit unsere Geschichte neu begann.

Nur war diesmal alles ganz anders.

Wir lernten einander wieder neu kennen, redeten immer mehr, lachten, trafen uns und teilten unsere Gedanken, Sorgen und normalen Momente aus dem Alltag.

Langsam waren unsere Gespräche nicht mehr nur Gespräche.

Es wurde mir wichtig zu wissen, wie dein Tag war, was dich gefreut oder traurig gemacht hat und wie du dich fühlst. Ich begann, auf unsere Treffen zu warten, dich zu vermissen und zu merken, wie sehr du wieder ein Teil meines Lebens geworden bist.

Dann wurdest du zu einem Menschen, ohne den ich mir meine normalen Tage heute nur schwer vorstellen kann.

Manchmal denke ich darüber nach, wie seltsam und schön sich alles entwickelt hat.

Früher hatten wir einfach aufgehört zu reden und hätten für immer Menschen aus der Vergangenheit des anderen bleiben können. Aber das Leben hat sich aus irgendeinem Grund anders entschieden.

Vielleicht ist unser roter Faden die ganze Zeit nie verschwunden.

Vielleicht hatte er sich nur ein wenig verknotet, führte uns eine Zeit lang auf verschiedene Wege und verband uns dann wieder genau in dem Moment, in dem wir bereit waren, einander neu kennenzulernen.

Genau deshalb steht dieses Foto an erster Stelle.

Es erinnert mich nicht nur an den Moment, in dem wir zusammen waren, sondern auch an den ganzen Weg, der uns dorthin geführt hat. Noch ein Jahr zuvor hätte dieses Bild vielleicht niemals entstehen können, und jetzt ist es ein Teil unserer gemeinsamen Geschichte.

Und wer weiß…

Vielleicht öffnen wir diese Website in 10, 20 oder sogar 50 Jahren wieder, sehen dieses Foto an und erinnern uns daran, wie damals mit ein paar Nachrichten im Februar alles neu begann.

Wir werden uns daran erinnern, wie wir nach fast einem Jahr Stille wieder miteinander redeten, uns langsam näherkamen und noch gar nicht wussten, wie wichtig wir füreinander werden würden.

Dann werde ich dich ansehen und sagen:

**„Es sieht so aus, als wäre unser roter Faden wirklich nie gerissen“ ❤️**

Ich liebe dich, meine geliebte Valeriia 💜🫶🏻`
  }
};

const builtCards: FeelingCard[] = photoCardSeeds.map((card, index) => ({
  id: card.id,
  category: card.category,
  title: {
    ...card.title,
    ru: russianCardWishCopy[card.id]?.title ?? card.title.ru,
    ...(card.id === 63 ? reunionStory.title : {})
  },
  text: {
    ...card.text,
    ...(cardPersonalNotes[card.id] ?? {}),
    ...(card.id === 63 ? reunionStory.text : {})
  },
  image: `/photos/${String(card.id).padStart(2, "0")}.jpg`,
  objectPosition: card.objectPosition ?? (card.id % 3 === 0 ? "center 30%" : "center"),
  signature,
  shape: shapes[index % shapes.length]
}));

// Наша первая совместная фотография открывает библиотеку, остальные идут в прежнем порядке.
export const cards: FeelingCard[] = [
  ...builtCards.filter((card) => card.id === 63),
  ...builtCards.filter((card) => card.id !== 63)
];
