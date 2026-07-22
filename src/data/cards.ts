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
    category: "moments",
    title: l("Половинка кадра, но вся ты", "Half a frame, still so you", "Halber Bildausschnitt, trotzdem ganz du"),
    text: l(
      "Мне нравится этот кадр именно своей странной милотой: половина лица, смешной персонаж рядом, и всё равно сразу видно тебя. В нём есть лёгкость, будто ты просто поймала момент и не пыталась быть идеальной.",
      "I like this photo because it is oddly sweet: half of your face, a funny character beside you, and still it feels completely like you. It has that easy, unforced charm.",
      "Ich mag dieses Foto gerade wegen seiner süßen Seltsamkeit: nur ein halbes Gesicht, eine lustige Figur daneben, und trotzdem bist es ganz du. Es wirkt leicht und ungezwungen."
    ),
    objectPosition: "center 30%"
  },
  {
    id: 2,
    category: "moments",
    title: l("Ты с Юлей в красивом зале", "You and Yulia in a beautiful hall", "Du und Yulia in einem schönen Saal"),
    text: l(
      "Здесь вы с Юлей выглядите очень красиво и по-дружески тепло. Мне нравится, что кадр не перегруженный: красивое место, ваши жесты, улыбка — и сразу чувствуется хороший момент.",
      "You and Yulia look beautiful and warmly close here. I like that the photo is not overloaded: a beautiful place, your gestures, a smile, and the moment already feels good.",
      "Du und Yulia seht hier sehr schön und freundschaftlich warm aus. Ich mag, dass das Foto nicht überladen ist: ein schöner Ort, eure Gesten, ein Lächeln — und der Moment fühlt sich sofort gut an."
    ),
    objectPosition: "center 30%"
  },
  {
    id: 3,
    category: "moments",
    title: l("Тёплый кадр с подругой", "A warm photo with a friend", "Ein warmes Foto mit einer Freundin"),
    text: l(
      "Этот снимок приятный тем, что он настоящий. Вы рядом, без лишней постановки, и у тебя здесь очень мягкий, спокойный взгляд. Такие фото хочется оставлять, потому что в них есть жизнь.",
      "This photo feels nice because it is real. You are next to your friend, without trying too hard, and your look is soft and calm.",
      "Dieses Bild ist angenehm, weil es echt wirkt. Du bist neben deiner Freundin, ohne große Pose, und dein Blick ist weich und ruhig."
    )
  },
  {
    id: 4,
    category: "secret",
    title: l("Смешная, но всё равно красивая", "Funny, but still beautiful", "Lustig und trotzdem schön"),
    text: l(
      "Фильтр смешной, но он не забирает главное. Ты тут дурачишься, и именно поэтому кадр живой. Мне нравится, что ты можешь быть милой, смешной и красивой одновременно.",
      "The filter is funny, but it does not take away the main thing. You are being playful here, and that makes the photo feel alive.",
      "Der Filter ist lustig, aber er nimmt dem Bild nicht das Wichtigste. Du bist hier verspielt, und genau das macht es lebendig."
    ),
    objectPosition: "center 24%"
  },
  {
    id: 5,
    category: "moments",
    title: l("Когда кадр сам поднимает настроение", "A photo that lifts the mood", "Ein Foto, das die Stimmung hebt"),
    text: l(
      "Тут очень классная энергия: солнце, подруга рядом, смешной фильтр и твой лёгкий вайб. Это не пафосное фото, зато оно живое — и от этого оно мне нравится ещё больше.",
      "This has such good energy: sun, a friend beside you, a funny filter, and your easy vibe. It is not dramatic, it is alive.",
      "Das Foto hat eine schöne Energie: Sonne, eine Freundin neben dir, ein lustiger Filter und deine leichte Art. Es ist nicht gestellt, sondern lebendig."
    )
  },
  {
    id: 6,
    category: "secret",
    title: l("Домашняя милота", "Cozy sweetness", "Gemütliche Süße"),
    text: l(
      "Мне нравятся такие простые кадры. Тут нет позы, нет попытки выглядеть как-то особенно — просто ты рядом с мягкой игрушкой, и всё выглядит очень уютно и по-настоящему.",
      "I like simple photos like this. No posing, no trying to look special — just you, a soft toy, and a cozy real feeling.",
      "Ich mag solche einfachen Bilder. Keine Pose, kein Versuch besonders zu wirken — einfach du, ein Kuscheltier und ein gemütliches echtes Gefühl."
    ),
    objectPosition: "center 24%"
  },
  {
    id: 7,
    category: "moments",
    title: l("Зеркало, подруга и ваш вайб", "Mirror, friend, and your vibe", "Spiegel, Freundin und euer Vibe"),
    text: l(
      "Обычное зеркало, но кадр всё равно цепляет. Вы выглядите уверенно, немного дерзко и очень естественно. Мне нравится, что в таких фото есть настоящая подростковая энергия.",
      "Just a mirror photo, but it still catches the eye. You look confident, a little bold, and natural.",
      "Nur ein Spiegelbild, aber es bleibt trotzdem hängen. Ihr wirkt selbstbewusst, ein bisschen frech und natürlich."
    )
  },
  {
    id: 8,
    category: "moments",
    title: l("Две смешные красотки", "Two funny beauties", "Zwei lustige Hübsche"),
    text: l(
      "Вот это как раз тот кадр, где видно: вы просто смеётесь, ловите момент и не усложняете. Ты здесь очень милая, а рядом с подругой фото становится ещё теплее.",
      "This is one of those photos where you are just having fun and keeping the moment simple. You look sweet, and the friend energy makes it warmer.",
      "Das ist genau so ein Bild, auf dem ihr einfach Spaß habt. Du wirkst süß, und die Freundinnen-Energie macht es noch wärmer."
    )
  },
  {
    id: 9,
    category: "moments",
    title: l("Светлый кадр с Юлей", "A bright photo with Yulia", "Ein helles Foto mit Yulia"),
    text: l(
      "Мне нравится, как тут всё выглядит легко: ты рядом с Юлей, дневной свет, спокойная улыбка и мирный знак. Фото простое, но очень тёплое и настоящее.",
      "I like how light this feels: you beside Yulia, daylight, a calm smile, and a peace sign. The photo is simple, but very warm and real.",
      "Ich mag, wie leicht das hier wirkt: du neben Yulia, Tageslicht, ein ruhiges Lächeln und ein Peace-Zeichen. Das Foto ist einfach, aber sehr warm und echt."
    ),
    objectPosition: "center 25%"
  },
  {
    id: 10,
    category: "love",
    title: l("Сердечки тебе очень идут", "Hearts suit you", "Herzchen stehen dir"),
    text: l(
      "Да, фильтр милый, но твои глаза тут всё равно главнее. В этом фото есть такая мягкость, что его невозможно быстро пролистать. Ты здесь очень нежная и красивая.",
      "Yes, the filter is cute, but your eyes are still the main thing here. This photo has such softness that I cannot scroll past it quickly.",
      "Ja, der Filter ist süß, aber deine Augen sind hier trotzdem das Wichtigste. Dieses Foto hat so viel Weichheit, dass man nicht schnell daran vorbeiscrollt."
    ),
    objectPosition: "center 22%"
  },
  {
    id: 11,
    category: "love",
    title: l("Спокойная и стильная", "Calm and stylish", "Ruhig und stilvoll"),
    text: l(
      "Тут ты выглядишь очень аккуратно и красиво. Простое зеркало, обычный момент, но у тебя есть свой стиль — даже без какой-то сложной постановки.",
      "You look neat and beautiful here. Just a mirror, just a simple moment, but you have your own style without trying too hard.",
      "Du wirkst hier ordentlich und schön. Nur ein Spiegel, ein einfacher Moment, aber du hast deinen eigenen Stil, ohne dich anzustrengen."
    ),
    objectPosition: "center 22%"
  },
  {
    id: 12,
    category: "secret",
    title: l("Детское фото с котиком", "Childhood photo with a cat", "Kinderfoto mit Katze"),
    text: l(
      "Это детское фото очень тёплое. Ты маленькая, рядом котик, и в кадре есть та самая милая простота, от которой сразу становится спокойнее.",
      "This childhood photo is very warm. Little you, a cat beside you, and that sweet simplicity that instantly feels gentle.",
      "Dieses Kinderfoto ist sehr warm. Du als kleines Mädchen, eine Katze neben dir und diese süße Einfachheit, die sofort sanft wirkt."
    ),
    objectPosition: "center 30%"
  },
  {
    id: 13,
    category: "moments",
    title: l("Фото, где хочется улыбнуться", "A photo that makes me smile", "Ein Foto, bei dem man lächeln muss"),
    text: l(
      "Вы с подругой здесь выглядите очень живо. У кадра есть движение, улыбка и ощущение, будто он был сделан в хороший момент. Мне такие фото правда нравятся.",
      "You and your friend look very alive here. The photo has movement, a smile, and the feeling of a good moment.",
      "Du und deine Freundin wirkt hier sehr lebendig. Das Foto hat Bewegung, ein Lächeln und das Gefühl eines guten Moments."
    )
  },
  {
    id: 14,
    category: "love",
    title: l("Мягкий портрет", "A soft portrait", "Ein weiches Porträt"),
    text: l(
      "Тут в тебе есть что-то очень спокойное. Фильтр делает кадр нежнее, но главное — твой взгляд. Он тихий, красивый и немного загадочный.",
      "There is something very calm about you here. The filter makes the photo softer, but the main thing is your look.",
      "Hier ist etwas sehr Ruhiges an dir. Der Filter macht das Bild weicher, aber das Wichtigste ist dein Blick."
    ),
    objectPosition: "center 25%"
  },
  {
    id: 15,
    category: "moments",
    title: l("Очки, зеркало и характер", "Glasses, mirror, and attitude", "Brillen, Spiegel und Charakter"),
    text: l(
      "Этот кадр смешной и стильный одновременно. Вы с подругой выглядите так, будто точно знаете, что фото получится классным. И да, получилось.",
      "This photo is funny and stylish at the same time. You and your friend look like you knew it would turn out cool. And it did.",
      "Dieses Foto ist lustig und stilvoll zugleich. Du und deine Freundin seht aus, als wüsstet ihr genau, dass es cool wird. Und das wurde es."
    )
  },
  {
    id: 16,
    category: "moments",
    title: l("Двойной фильтр, двойная милота", "Double filter, double cuteness", "Doppelter Filter, doppelte Süße"),
    text: l(
      "Тут всё очень по-доброму: смешной фильтр, подруга рядом и твоя живая мимика. Фото простое, но с хорошей энергией.",
      "This is sweet in a very simple way: a funny filter, a friend beside you, and your lively expression.",
      "Das ist auf eine einfache Art süß: ein lustiger Filter, eine Freundin neben dir und dein lebendiger Ausdruck."
    )
  },
  {
    id: 17,
    category: "secret",
    title: l("Маленькая фотолента", "A little photo strip", "Ein kleiner Fotostreifen"),
    text: l(
      "Мне нравится, что это фото похоже на маленькую историю из нескольких кадров. Не одно настроение, а сразу несколько — и в каждом есть что-то живое.",
      "I like that this feels like a small story made of several frames. Not one mood, but a few of them at once.",
      "Ich mag, dass dieses Bild wie eine kleine Geschichte aus mehreren Momenten wirkt. Nicht nur eine Stimmung, sondern gleich mehrere."
    )
  },
  {
    id: 18,
    category: "love",
    title: l("Кудрявая Леруся", "Curly Valeriia", "Lockige Valeriia"),
    text: l(
      "Ты тут выглядишь очень красиво: кудри, спокойный взгляд, чуть более серьёзный образ. Есть в этом кадре такая аккуратная уверенность, которая тебе очень идёт.",
      "You look beautiful here: curls, a calm look, a slightly more serious style. This photo has a neat confidence that suits you.",
      "Du siehst hier wunderschön aus: Locken, ein ruhiger Blick, ein etwas ernsterer Stil. Dieses Foto hat eine feine Sicherheit, die dir sehr steht."
    ),
    objectPosition: "center 25%"
  },
  {
    id: 19,
    category: "moments",
    title: l("Ты, Юля и ещё одна подруга", "You, Yulia, and another friend", "Du, Yulia und noch eine Freundin"),
    text: l(
      "Это очень летний кадр: ты, Юля и ещё одна подруга рядом, солнце, люди вокруг и ощущение обычного хорошего дня. Фото живое, дружеское и без лишней постановки.",
      "This is such a summer photo: you, Yulia, another friend beside you, sun, people around, and the feeling of an ordinary good day.",
      "Das ist ein richtig sommerliches Foto: du, Yulia und noch eine Freundin, Sonne, Menschen drumherum und das Gefühl eines normalen schönen Tages."
    )
  },
  {
    id: 20,
    category: "secret",
    title: l("Зеркало без лишнего", "A simple mirror photo", "Ein schlichtes Spiegelbild"),
    text: l(
      "Обычный кадр в зеркале, но в нём есть твоя естественность. Ты не пытаешься делать из фото что-то огромное, и именно поэтому оно приятное.",
      "A simple mirror photo, but it has your naturalness. You are not trying to make it huge, and that is exactly why it feels nice.",
      "Ein einfaches Spiegelbild, aber es hat deine Natürlichkeit. Du versuchst nicht, daraus etwas Großes zu machen, und genau deshalb ist es angenehm."
    ),
    objectPosition: "center 20%"
  },
  {
    id: 21,
    category: "secret",
    title: l("Солнечный кадр из машины", "Sunny car photo", "Sonniges Autofoto"),
    text: l(
      "Тут мне нравится свет и твой спокойный вид. Даже с фильтром фото не теряет ощущения настоящего момента — просто ты, солнце и хорошее настроение.",
      "I like the light here and your calm look. Even with the filter, it still feels like a real moment.",
      "Ich mag hier das Licht und deinen ruhigen Ausdruck. Auch mit Filter wirkt es wie ein echter Moment."
    ),
    objectPosition: "center 25%"
  },
  {
    id: 22,
    category: "secret",
    title: l("Hello Kitty настроение", "Hello Kitty mood", "Hello-Kitty-Stimmung"),
    text: l(
      "Это фото смешное и милое. В нём есть твоя игривая сторона — та, где ты можешь просто быть забавной, не думая, как это выглядит со стороны.",
      "This photo is funny and sweet. It shows your playful side, where you can just be silly without worrying how it looks.",
      "Dieses Foto ist lustig und süß. Es zeigt deine verspielte Seite, in der du einfach witzig sein kannst, ohne darüber nachzudenken."
    ),
    objectPosition: "center 20%"
  },
  {
    id: 23,
    category: "moments",
    title: l("Горы, вода и твой силуэт", "Mountains, water, and you", "Berge, Wasser und du"),
    text: l(
      "Очень красивый кадр: горы, озеро, яркая футболка и ты, которая спокойно смотрит вдаль. В нём есть ощущение свободы и летнего воздуха.",
      "A very beautiful shot: mountains, water, your bright shirt, and you calmly looking into the distance.",
      "Ein sehr schönes Bild: Berge, Wasser, dein helles Shirt und du, die ruhig in die Ferne schaut."
    ),
    objectPosition: "center 35%"
  },
  {
    id: 24,
    category: "secret",
    title: l("Ты замечаешь красивое", "You notice beautiful things", "Du bemerkst schöne Dinge"),
    text: l(
      "На этом фото нет тебя, но мне оно всё равно нравится. Оно будто показывает, что ты умеешь замечать маленькую красоту вокруг — цветы, свет, детали.",
      "You are not in this photo, but I still like it. It feels like proof that you notice small beautiful things around you.",
      "Du bist nicht auf diesem Foto, aber ich mag es trotzdem. Es zeigt irgendwie, dass du kleine schöne Dinge um dich herum bemerkst."
    )
  },
  {
    id: 25,
    category: "family",
    title: l("Ты с папой и Мирусей", "You with your dad and Mirusya", "Du mit deinem Papa und Mirusya"),
    text: l(
      "Лерусь, это отдельный тёплый кадр: ты рядом с папой Виталием и Мирусей, а вокруг такие горы и вода, что фото выглядит почти как открытка. В нём очень чувствуется семья, защита и что-то по-настоящему родное.",
      "Valeriia, this is a special warm photo: you are with your dad Vitalii and Mirusya, surrounded by mountains and water. It feels like family, safety, and something truly close.",
      "Valeriia, das ist ein besonders warmes Bild: du bist mit deinem Papa Vitalii und Mirusya da, umgeben von Bergen und Wasser. Es fühlt sich nach Familie, Schutz und etwas wirklich Vertrautem an."
    ),
    objectPosition: "center 38%"
  },
  {
    id: 26,
    category: "love",
    title: l("Примерочная, но красиво", "Changing room, but beautiful", "Umkleidekabine, aber schön"),
    text: l(
      "Даже в обычной примерочной ты умудряешься выглядеть красиво. Кадр простой, но в нём есть твоя фигура, твой стиль и эта спокойная уверенность.",
      "Even in a simple changing room, you manage to look beautiful. It is a simple photo, but it has your style and calm confidence.",
      "Sogar in einer einfachen Umkleide siehst du schön aus. Das Foto ist schlicht, aber es hat deinen Stil und deine ruhige Sicherheit."
    ),
    objectPosition: "center 18%"
  },
  {
    id: 27,
    category: "moments",
    title: l("Подруга рядом, ты в кадре", "A friend beside you, you in the frame", "Eine Freundin neben dir, du im Bild"),
    text: l(
      "Это фото приятное своей обычностью. Магазин, зеркало, подруга рядом — и ты, которая всё равно делает кадр красивее просто своим присутствием.",
      "This photo is nice because it is ordinary. A shop, a mirror, a friend beside you — and you still make it prettier just by being there.",
      "Dieses Foto ist schön, weil es alltäglich ist. Ein Laden, ein Spiegel, eine Freundin neben dir — und du machst es allein durch deine Anwesenheit schöner."
    )
  },
  {
    id: 28,
    category: "secret",
    title: l("Тихое чёрно-белое зеркало", "Quiet black-and-white mirror", "Ruhiger Schwarz-Weiß-Spiegel"),
    text: l(
      "В этом кадре есть тишина. Он не яркий, не громкий, но именно поэтому выглядит атмосферно. Ты здесь будто оставила маленький секретный след.",
      "This photo has quietness. It is not bright or loud, and that makes it atmospheric. It feels like a small secret trace from you.",
      "Dieses Bild hat Stille. Es ist nicht hell oder laut, und genau deshalb wirkt es atmosphärisch. Wie eine kleine geheime Spur von dir."
    )
  },
  {
    id: 29,
    category: "family",
    title: l("Елена среди цветов", "Elena among flowers", "Elena zwischen Blüten"),
    text: l(
      "Это твоя мама Елена, и кадр правда очень красивый. Белые цветы вокруг делают фото нежным, а в ней самой чувствуется спокойная красота. Видно, откуда у тебя столько света и женственности.",
      "This is your mom Elena, and the photo is truly beautiful. The white flowers make it gentle, and she has such calm beauty. It is easy to see where your light comes from.",
      "Das ist deine Mama Elena, und das Foto ist wirklich schön. Die weißen Blüten machen es zart, und sie selbst hat eine ruhige Schönheit. Man sieht, woher dein Licht kommt."
    ),
    objectPosition: "center 38%"
  },
  {
    id: 30,
    category: "secret",
    title: l("Цветы и тишина", "Flowers and quietness", "Blüten und Stille"),
    text: l(
      "Этот кадр без лица, но в нём есть настроение. Цветущие ветки, тень, немного загадочности — будто маленькая пауза между всеми яркими фотографиями.",
      "This photo has no face in it, but it has a mood: blossoms, shadow, and a little mystery.",
      "Dieses Foto zeigt kein Gesicht, aber es hat Stimmung: Blüten, Schatten und ein bisschen Geheimnis."
    )
  },
  {
    id: 31,
    category: "love",
    title: l("Образ, который тебе идёт", "A look that suits you", "Ein Look, der dir steht"),
    text: l(
      "Тут у тебя очень красивый образ. Он чуть яркий, чуть дерзкий, но всё равно аккуратный. Мне нравится, что ты можешь выглядеть по-разному и в каждом варианте оставаться собой.",
      "This look really suits you. A little bright, a little bold, but still neat. I like that you can look different and still stay yourself.",
      "Dieser Look steht dir wirklich. Ein bisschen auffällig, ein bisschen frech, aber trotzdem ordentlich. Ich mag, dass du verschieden aussehen kannst und trotzdem du bleibst."
    ),
    objectPosition: "center 20%"
  },
  {
    id: 32,
    category: "moments",
    title: l("Ты, Юля и подруга на одном кадре", "You, Yulia, and a friend in one photo", "Du, Yulia und eine Freundin auf einem Bild"),
    text: l(
      "В этом фото классная дружеская энергия. Ты, Юля и ещё одна подруга выглядите легко, уверенно и весело. Мне нравится, что кадр солнечный и совсем не искусственный.",
      "This photo has great friend energy. You, Yulia, and another friend look light, confident, and fun. I like that it feels sunny and completely unforced.",
      "Dieses Foto hat eine schöne Freundinnen-Energie. Zusammen wirkt ihr leicht, selbstbewusst und fröhlich. Ich mag, dass es sonnig und gar nicht gestellt wirkt."
    )
  },
  {
    id: 33,
    category: "moments",
    title: l("Маленькая поездка, большой вайб", "Small ride, big vibe", "Kleine Fahrt, großer Vibe"),
    text: l(
      "Кадр из машины, подруга рядом, фильтры и ваша лёгкость. Он не про идеальность, а про момент — и именно поэтому он живой.",
      "A car photo, a friend beside you, filters, and your easy mood. It is not about perfection, it is about the moment.",
      "Ein Foto aus dem Auto, eine Freundin neben dir, Filter und eure Leichtigkeit. Es geht nicht um Perfektion, sondern um den Moment."
    )
  },
  {
    id: 34,
    category: "moments",
    title: l("Прогулка с Юлей и подругой", "A walk with Yulia and a friend", "Ein Spaziergang mit Yulia und einer Freundin"),
    text: l(
      "Тут всё выглядит очень естественно: ты впереди, рядом Юля и ещё одна подруга, обычная прогулка и летний свет. В таких фото есть честность — не поза, а настоящий момент.",
      "Everything feels very natural here: you in front, Yulia and another friend nearby, a normal walk, and summer light. It is not a pose, it is a real moment.",
      "Hier wirkt alles sehr natürlich: du vorne, Yulia und noch eine Freundin in der Nähe, ein normaler Spaziergang und Sommerlicht. Keine Pose, sondern ein echter Moment."
    )
  },
  {
    id: 35,
    category: "secret",
    title: l("Солнце прямо в кадре", "Sun right in the frame", "Sonne direkt im Bild"),
    text: l(
      "Фото немного случайное, но мне нравится его свет. Очки, солнце, половина улыбки — всё выглядит как маленький кусочек лета.",
      "The photo is a bit accidental, but I like its light. Glasses, sun, half a smile — like a small piece of summer.",
      "Das Foto ist ein bisschen zufällig, aber ich mag sein Licht. Brille, Sonne, ein halbes Lächeln — wie ein kleines Stück Sommer."
    ),
    objectPosition: "center 25%"
  },
  {
    id: 36,
    category: "secret",
    title: l("Маленькая Леруся за пианино", "Little Valeriia at the piano", "Kleine Valeriia am Klavier"),
    text: l(
      "Это детское фото очень милое. Ты маленькая, рядом подарки и пианино, и в кадре есть такое домашнее тепло, которое хочется беречь.",
      "This childhood photo is very sweet. Little you, presents, and a piano — it has a cozy warmth worth keeping.",
      "Dieses Kinderfoto ist sehr süß. Du als kleines Mädchen, Geschenke und ein Klavier — es hat eine gemütliche Wärme, die man behalten möchte."
    ),
    objectPosition: "center 28%"
  },
  {
    id: 37,
    category: "family",
    title: l("Мируся — маленькое солнышко", "Mirusya, a little sunshine", "Mirusya, kleiner Sonnenschein"),
    text: l(
      "Это Мируся, твоя сестрёнка. Фото очень милое: большие глаза, розовая шапка и такой детский взгляд, что сразу становится тепло. У тебя правда очень красивая и светлая семья.",
      "This is Mirusya, your little sister. The photo is so sweet: big eyes, a pink hat, and that childlike look that instantly feels warm.",
      "Das ist Mirusya, deine kleine Schwester. Das Foto ist sehr süß: große Augen, eine rosa Mütze und dieser Kinderblick, der sofort warm wirkt."
    ),
    objectPosition: "center 18%"
  },
  {
    id: 38,
    category: "moments",
    title: l("Как кадр из открытки", "Like a postcard", "Wie eine Postkarte"),
    text: l(
      "Ты со спины на фоне замка и гор — и фото выглядит очень красиво. В нём есть ощущение путешествия, воздуха и того самого момента, который хочется запомнить.",
      "You from behind with a castle and mountains in the background — it looks beautiful. It has the feeling of travel, air, and a moment worth remembering.",
      "Du von hinten vor Schloss und Bergen — das sieht wunderschön aus. Es hat das Gefühl von Reise, Luft und einem Moment, den man behalten möchte."
    ),
    objectPosition: "center 38%"
  },
  {
    id: 39,
    category: "moments",
    title: l("Горы делают кадр большим", "The mountains make it grand", "Die Berge machen es groß"),
    text: l(
      "Тут очень красивый вид, но мне всё равно больше всего нравится, что в нём есть ты. Красная футболка, зелень, горы — всё вместе выглядит ярко и спокойно.",
      "The view is beautiful here, but I still like most that you are in it. Red shirt, greenery, mountains — bright and calm together.",
      "Die Aussicht ist hier wunderschön, aber am meisten mag ich trotzdem, dass du darin bist. Rotes Shirt, Grün, Berge — hell und ruhig zugleich."
    ),
    objectPosition: "center 35%"
  },
  {
    id: 40,
    category: "moments",
    title: l("Зеркало с подругой", "Mirror with a friend", "Spiegel mit einer Freundin"),
    text: l(
      "Этот кадр простой, но приятный. Вы с подругой рядом, и в фото есть ощущение обычного дня, который всё равно хочется сохранить.",
      "This is simple but nice. You and your friend are together, and it feels like an ordinary day still worth keeping.",
      "Das ist schlicht, aber angenehm. Du und deine Freundin seid zusammen, und es fühlt sich wie ein normaler Tag an, den man trotzdem behalten möchte."
    )
  },
  {
    id: 41,
    category: "love",
    title: l("Уверенная и красивая", "Confident and beautiful", "Selbstbewusst und schön"),
    text: l(
      "Мне нравится твой вид на этом фото. Ты тут собранная, уверенная и очень красивая. Такой кадр, где сразу чувствуется характер.",
      "I like your look in this photo. You seem collected, confident, and very beautiful. It shows character.",
      "Ich mag deinen Ausdruck auf diesem Foto. Du wirkst gesammelt, selbstbewusst und sehr schön. Man spürt Charakter."
    ),
    objectPosition: "center 22%"
  },
  {
    id: 42,
    category: "love",
    title: l("Спокойный взгляд", "A calm look", "Ein ruhiger Blick"),
    text: l(
      "Ты здесь выглядишь спокойно и аккуратно. Кадр без лишнего, но в твоём взгляде есть мягкость, из-за которой фото хочется сохранить.",
      "You look calm and neat here. The photo is simple, but your look has a softness that makes it worth keeping.",
      "Du wirkst hier ruhig und ordentlich. Das Foto ist schlicht, aber dein Blick hat eine Weichheit, die man behalten möchte."
    ),
    objectPosition: "center 25%"
  },
  {
    id: 43,
    category: "love",
    title: l("Очень аккуратная Леруся", "Very neat Valeriia", "Sehr feine Valeriia"),
    text: l(
      "Тут мне нравится твоя аккуратность: волосы, очки, спокойная поза. Всё выглядит мягко и красиво, без попытки сделать фото слишком идеальным.",
      "I like how neat you look here: hair, glasses, calm pose. Everything feels soft and beautiful without trying too hard.",
      "Ich mag, wie fein du hier wirkst: Haare, Brille, ruhige Pose. Alles ist weich und schön, ohne zu gewollt zu sein."
    ),
    objectPosition: "center 22%"
  },
  {
    id: 44,
    category: "secret",
    title: l("Чёрно-белая нежность", "Black-and-white softness", "Schwarz-weiße Sanftheit"),
    text: l(
      "В чёрно-белом варианте твой взгляд становится ещё заметнее. Фото тихое, немного загадочное и очень красивое.",
      "In black and white, your look becomes even stronger. The photo is quiet, a little mysterious, and very beautiful.",
      "In Schwarz-Weiß wirkt dein Blick noch stärker. Das Foto ist ruhig, ein bisschen geheimnisvoll und sehr schön."
    ),
    objectPosition: "center 25%"
  },
  {
    id: 45,
    category: "moments",
    title: l("Кадр с подругой в дороге", "A photo with a friend on the way", "Ein Foto mit Freundin unterwegs"),
    text: l(
      "Мне нравится этот простой кадр: вы сидите рядом, и всё выглядит спокойно. В нём нет постановки, зато есть настоящая близость обычного момента.",
      "I like this simple photo: you sit beside your friend and everything feels calm. No posing, just a real little moment.",
      "Ich mag dieses einfache Bild: du sitzt neben deiner Freundin und alles wirkt ruhig. Keine Pose, nur ein echter kleiner Moment."
    )
  },
  {
    id: 46,
    category: "love",
    title: l("Солнце и твои глаза", "Sun and your eyes", "Sonne und deine Augen"),
    text: l(
      "Тут у тебя очень красивый взгляд. Солнце делает кадр ярче, но всё равно главное — твои глаза и эта чуть дерзкая, живая энергия.",
      "Your eyes look beautiful here. The sun makes the photo brighter, but the main thing is still your look and that lively energy.",
      "Deine Augen sehen hier wunderschön aus. Die Sonne macht das Bild heller, aber das Wichtigste ist dein Blick und diese lebendige Energie."
    ),
    objectPosition: "center 24%"
  },
  {
    id: 47,
    category: "love",
    title: l("Живой профиль", "A lively profile", "Ein lebendiges Profil"),
    text: l(
      "Этот кадр мне нравится своей естественностью. Ты не смотришь прямо в камеру, и из-за этого фото кажется ещё более живым и настоящим.",
      "I like this photo for its naturalness. You are not looking straight at the camera, and that makes it feel even more alive.",
      "Ich mag dieses Bild wegen seiner Natürlichkeit. Du schaust nicht direkt in die Kamera, und dadurch wirkt es noch lebendiger."
    ),
    objectPosition: "center 24%"
  },
  {
    id: 48,
    category: "love",
    title: l("Твои глаза крупным планом", "Your eyes up close", "Deine Augen ganz nah"),
    text: l(
      "Это фото невозможно описать без слов про глаза. Они здесь очень красивые: тёплые, внимательные и такие настоящие, что кадр сразу цепляет.",
      "This photo is all about your eyes. They are beautiful here: warm, attentive, and so real that the photo catches you immediately.",
      "Dieses Foto dreht sich ganz um deine Augen. Sie sind hier wunderschön: warm, aufmerksam und so echt, dass das Bild sofort hängen bleibt."
    ),
    objectPosition: "center 28%"
  },
  {
    id: 49,
    category: "moments",
    title: l("Подруга рядом, ты спокойная", "Friend beside you, you calm", "Freundin neben dir, du ruhig"),
    text: l(
      "Ты здесь с подругой в обычном зеркальном кадре, но мне нравится, как спокойно и красиво ты выглядишь. Ничего лишнего — просто приятный настоящий момент.",
      "You are with a friend in a simple mirror shot, and I like how calm and beautiful you look. Nothing extra — just a nice real moment.",
      "Du bist hier mit einer Freundin in einem einfachen Spiegelbild, und ich mag, wie ruhig und schön du wirkst. Nichts Überflüssiges — einfach ein schöner echter Moment."
    ),
    objectPosition: "center 25%"
  },
  {
    id: 50,
    category: "moments",
    title: l("Смешной кадр с подругой", "Funny photo with a friend", "Lustiges Foto mit Freundin"),
    text: l(
      "Кадр с фильтром, подругой и хорошим настроением. Он простой, но очень живой: такие фото не выглядят идеальными, зато они честные и тёплые.",
      "A filter, a friend, and good mood. It is simple but very alive: not perfect, but honest and warm.",
      "Ein Filter, eine Freundin und gute Stimmung. Es ist einfach, aber sehr lebendig: nicht perfekt, dafür ehrlich und warm."
    )
  },
  {
    id: 51,
    category: "secret",
    title: l("Зеркало в коридоре", "Mirror in the hallway", "Spiegel im Flur"),
    text: l(
      "Этот кадр спокойный и немного загадочный. Ты почти в тени, но всё равно видно твой стиль и настроение. В этом есть своя атмосфера.",
      "This photo is calm and a little mysterious. You are almost in the shadow, but your style and mood still show.",
      "Dieses Foto ist ruhig und ein bisschen geheimnisvoll. Du bist fast im Schatten, aber dein Stil und deine Stimmung sind trotzdem da."
    )
  },
  {
    id: 52,
    category: "secret",
    title: l("Даже тень может быть памятью", "Even a shadow can be a memory", "Sogar ein Schatten kann Erinnerung sein"),
    text: l(
      "Это не обычная открытка, но мне нравится идея кадра. Даже тень с телефоном может стать маленькой памятью о тебе и о моменте, который ты заметила.",
      "It is not a usual postcard photo, but I like the idea. Even a shadow with a phone can become a small memory of you noticing a moment.",
      "Es ist kein gewöhnliches Postkartenbild, aber ich mag die Idee. Sogar ein Schatten mit Handy kann zu einer kleinen Erinnerung werden."
    )
  },
  {
    id: 53,
    category: "moments",
    title: l("Близкий кадр с подругой", "A close photo with a friend", "Ein nahes Foto mit Freundin"),
    text: l(
      "Фото близкое, простое и немного смешное. Вы с подругой здесь без лишнего пафоса, и именно поэтому кадр выглядит живым.",
      "This photo is close, simple, and a little funny. You and your friend are not trying too hard, and that makes it alive.",
      "Dieses Foto ist nah, einfach und ein bisschen lustig. Du und deine Freundin versucht nicht zu viel, und genau das macht es lebendig."
    ),
    objectPosition: "center 25%"
  },
  {
    id: 54,
    category: "moments",
    title: l("Зеркальное фото с подругой", "Mirror photo with a friend", "Spiegelbild mit Freundin"),
    text: l(
      "Тут очень мягкая атмосфера: зеркало, подруга рядом, спокойный свет. Кадр немного размыт настроением, но из-за этого он кажется ещё теплее.",
      "This has a soft atmosphere: mirror, friend beside you, calm light. It is a little blurred by the mood, and that makes it warmer.",
      "Das hat eine weiche Atmosphäre: Spiegel, Freundin neben dir, ruhiges Licht. Es ist ein wenig von Stimmung verschwommen, und dadurch wärmer."
    )
  },
  {
    id: 55,
    category: "moments",
    title: l("Ты с Юлей на солнце", "You and Yulia in the sun", "Du und Yulia in der Sonne"),
    text: l(
      "Этот снимок очень живой. Вы с Юлей смотрите вверх, солнце делает кадр ярким, и в нём есть такая лёгкая летняя энергия, что фото сразу кажется хорошим.",
      "This photo is very alive. You and Yulia are looking up, the sun makes it bright, and it has that easy summer energy.",
      "Dieses Foto ist sehr lebendig. Du und Yulia schaut beide nach oben, die Sonne macht das Bild hell, und es hat diese leichte Sommerenergie."
    ),
    objectPosition: "center 25%"
  },
  {
    id: 56,
    category: "moments",
    title: l("Ты с Юлей и лето", "You, Yulia, and summer", "Du, Yulia und Sommer"),
    text: l(
      "Кадр смешной, солнечный и очень настоящий. Вы с Юлей стоите на траве, свет яркий, эмоции живые — и всё вместе выглядит легко, по-доброму и очень по-летнему.",
      "This photo is funny, sunny, and very real. You and Yulia are standing on the grass, the light is bright, the expressions are alive, and everything feels easy and summery.",
      "Dieses Foto ist lustig, sonnig und sehr echt. Du und Yulia steht beide auf dem Gras, das Licht ist hell, eure Gesichter sind lebendig, und alles wirkt leicht und sommerlich."
    )
  },
  {
    id: 57,
    category: "love",
    title: l("Нежный образ", "A gentle look", "Ein zarter Look"),
    text: l(
      "Ты здесь выглядишь очень нежно и красиво. Свет мягкий, образ спокойный, и весь кадр будто про твою аккуратную, женственную сторону.",
      "You look very gentle and beautiful here. The light is soft, the look is calm, and the whole photo shows your elegant side.",
      "Du wirkst hier sehr zart und schön. Das Licht ist weich, der Look ruhig, und das ganze Bild zeigt deine feine Seite."
    ),
    objectPosition: "center 25%"
  },
  {
    id: 58,
    category: "family",
    title: l("Елена — очень красивая мама", "Elena, a very beautiful mom", "Elena, eine sehr schöne Mama"),
    text: l(
      "На этом фото твоя мама Елена выглядит очень красиво: белые цветы, светлая одежда, спокойный взгляд. Хочется сказать честно — у тебя великолепная мама, и в тебе правда чувствуется часть её тепла и красоты.",
      "In this photo, your mom Elena looks very beautiful: white flowers, light clothes, a calm look. Honestly, you have a wonderful mom, and I can feel part of her warmth and beauty in you.",
      "Auf diesem Foto sieht deine Mama Elena sehr schön aus: weiße Blüten, helle Kleidung, ein ruhiger Blick. Ehrlich: du hast eine wundervolle Mama, und ein Teil ihrer Wärme und Schönheit ist auch in dir."
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
