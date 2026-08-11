import { LocalizedString } from "./translations";

export type PhotoItem = {
  src: string;
  alt: LocalizedString;
  caption: LocalizedString;
  objectPosition: string;
  mediaType?: "image" | "video";
};

const l = (ru: string, en: string, de: string): LocalizedString => ({ ru, en, de });

export const photoCount = 73;

const defaultAlt = l("Твоя фотография", "Your photo", "Dein Foto");
const defaultCaption = l(
  "Твоё фото, которое мне особенно понравилось",
  "Your photo that I especially liked",
  "Dein Foto, das mir besonders gefällt"
);

const specialPhotos: Record<number, Partial<PhotoItem>> = {
  1: {
    alt: l("Ты с Nefeli и забавным фильтром", "You with Nefeli and a funny filter", "Du mit Nefeli und einem lustigen Filter"),
    caption: l("Ты с Nefeli в смешном кадре, который сразу запоминается", "You and Nefeli in a funny photo that is hard to forget", "Du und Nefeli auf einem lustigen Foto, das sofort im Kopf bleibt"),
    objectPosition: "center 30%"
  },
  2: {
    alt: l("Ты с Юлей в красивом зале", "You with Julia in a beautiful hall", "Du mit Julia in einem schönen Saal"),
    caption: l("Ты с Юлей в красивом зале, где кадр получился очень живым", "You with Julia in a beautiful hall, and the photo feels really alive", "Du mit Julia in einem schönen Saal, und das Bild wirkt richtig lebendig"),
    objectPosition: "center 30%"
  },
  5: {
    alt: l("Ты с Юлей на солнце", "You with Julia in the sun", "Du mit Julia in der Sonne"),
    caption: l("Солнечный смешной кадр с Юлей, который хочется оставить", "A sunny funny photo with Julia that I want to keep", "Ein sonniges lustiges Foto mit Julia, das man behalten möchte"),
    objectPosition: "center 30%"
  },
  7: {
    alt: l("Зеркальное фото с Юлей", "Mirror photo with Julia", "Spiegelfoto mit Julia"),
    caption: l("Вы с Юлей в зеркале, спокойные и немного дерзкие", "You and Julia in the mirror, calm and a little bold", "Du und Julia im Spiegel, ruhig und ein bisschen frech")
  },
  8: {
    alt: l("Ты с Юлей и смешным фильтром", "You with Julia and a funny filter", "Du mit Julia und einem lustigen Filter"),
    caption: l("Солнечный кадр с Юлей, где всё выглядит легко и по-настоящему", "A sunny photo with Julia where everything feels easy and real", "Ein sonniges Foto mit Julia, in dem alles leicht und echt wirkt"),
    objectPosition: "center 30%"
  },
  9: {
    alt: l("Светлое фото с Юлей", "Bright photo with Julia", "Helles Foto mit Julia"),
    caption: l("Светлый кадр с Юлей, улыбкой и спокойным настроением", "A bright photo with Julia, a smile, and a calm mood", "Ein helles Foto mit Julia, einem Lächeln und ruhiger Stimmung"),
    objectPosition: "center 25%"
  },
  3: {
    alt: l("Ты с Nefeli на прогулке", "You with Nefeli on a walk", "Du mit Nefeli bei einem Spaziergang"),
    caption: l("Спокойный кадр с Nefeli, в котором вы обе выглядите очень естественно", "A calm photo with Nefeli where you both look completely natural", "Ein ruhiges Foto mit Nefeli, auf dem ihr beide ganz natürlich wirkt")
  },
  13: {
    alt: l("Ты с Nefeli и хорошим настроением", "You with Nefeli and a good mood", "Du mit Nefeli und guter Laune"),
    caption: l("Живой кадр с Nefeli, улыбкой и лёгким настроением", "A lively photo with Nefeli, a smile, and an easy mood", "Ein lebendiges Foto mit Nefeli, einem Lächeln und leichter Stimmung")
  },
  15: {
    alt: l("Зеркало, очки и Юля", "Mirror, sunglasses, and Julia", "Spiegel, Sonnenbrillen und Julia"),
    caption: l("Зеркало, очки и Юля рядом — кадр с характером", "A mirror, sunglasses, and Julia beside you — a photo with character", "Spiegel, Sonnenbrillen und Julia neben dir — ein Bild mit Charakter")
  },
  16: {
    alt: l("Смешной фильтр с Nefeli", "Funny filter with Nefeli", "Lustiger Filter mit Nefeli"),
    caption: l("Смешной фильтр с Nefeli, где вы просто поймали настроение", "A funny filter with Nefeli where you simply caught the mood", "Ein lustiger Filter mit Nefeli, bei dem ihr einfach die Stimmung erwischt habt")
  },
  17: {
    alt: l("Фотолента с Юлей", "Photo strip with Julia", "Fotostreifen mit Julia"),
    caption: l("Маленькая фотолента с Юлей и разными кусочками момента", "A little photo strip with Julia and different pieces of the moment", "Ein kleiner Fotostreifen mit Julia und verschiedenen kleinen Momenten")
  },
  19: {
    alt: l("Ты, Юля и Nefeli", "You, Julia, and Nefeli", "Du, Julia und Nefeli"),
    caption: l("Летний живой кадр, где вы втроём: ты, Юля и Nefeli", "A lively summer photo of the three of you: you, Julia, and Nefeli", "Ein lebendiges Sommerfoto mit euch dreien: dir, Julia und Nefeli")
  },
  24: {
    alt: l("Фото сирени", "Photo of lilacs", "Foto von Flieder"),
    caption: l("Красивый кадр с цветами, который тоже хочется сохранить", "A beautiful flower shot worth keeping too", "Ein schönes Blumenfoto, das man auch behalten möchte")
  },
  25: {
    alt: l("Лера с папой Виталием и Мирусей", "Valeriia with her father Vitalii and Mirusya", "Valeriia mit ihrem Vater Vitalii und Mirusya"),
    caption: l("Ты с папой Виталием и Мирусей на фоне гор и воды", "You with your father Vitalii and Mirusya, with mountains and water behind you", "Du mit deinem Vater Vitalii und Mirusya vor Bergen und Wasser"),
    objectPosition: "center 38%"
  },
  27: {
    alt: l("Ты с Юлей в магазине", "You with Julia in a store", "Du mit Julia in einem Laden"),
    caption: l("Кадр с Юлей в магазине — обычный момент, но очень живой", "A photo with Julia in a store — an ordinary but very lively moment", "Ein Foto mit Julia in einem Laden — ein normaler, aber sehr lebendiger Moment")
  },
  29: {
    alt: l("Мама Елена среди цветов", "Mom Elena among flowers", "Mama Elena zwischen Blüten"),
    caption: l("Твоя мама Елена среди белых цветов", "Your mom Elena among white flowers", "Deine Mama Elena zwischen weißen Blüten"),
    objectPosition: "center 38%"
  },
  30: {
    alt: l("Цветущие ветки", "Blossoming branches", "Blühende Zweige"),
    caption: l("Тихий кадр с цветущими ветками", "A quiet shot with blossoming branches", "Ein ruhiges Bild mit blühenden Zweigen")
  },
  32: {
    alt: l("Ты, Юля и Nefeli", "You, Julia, and Nefeli", "Du, Julia und Nefeli"),
    caption: l("Кадр с Юлей и Nefeli, где у каждой своё настроение", "A photo with Julia and Nefeli where each of you has her own mood", "Ein Foto mit Julia und Nefeli, auf dem jede ihre eigene Stimmung hat")
  },
  33: {
    alt: l("Кадр из дороги с Юлей", "Road photo with Julia", "Foto von unterwegs mit Julia"),
    caption: l("Дорожный кадр с Юлей, фильтром и обычным живым настроением", "A photo from the road with Julia, a filter, and a relaxed, natural mood", "Ein Foto von unterwegs mit Julia, einem Filter und einer lockeren, natürlichen Stimmung")
  },
  34: {
    alt: l("Прогулка с Юлей и Nefeli", "A walk with Julia and Nefeli", "Ein Spaziergang mit Julia und Nefeli"),
    caption: l("Обычная прогулка с Юлей и Nefeli, пойманная прямо в движении", "A normal walk with Julia and Nefeli, caught right in the middle of it", "Ein normaler Spaziergang mit Julia und Nefeli, direkt in Bewegung festgehalten")
  },
  36: {
    alt: l("Детское фото Леры", "Childhood photo of Valeriia", "Kinderfoto von Valeriia"),
    caption: l("Маленькая Леруся за пианино", "Little Valeriia at the piano", "Kleine Valeriia am Klavier"),
    objectPosition: "center 28%"
  },
  37: {
    alt: l("Мируся, сестрёнка Леры", "Mirusya, Valeriia's little sister", "Mirusya, Valeriias kleine Schwester"),
    caption: l("Мируся — маленькое солнышко", "Mirusya, a little sunshine", "Mirusya, kleiner Sonnenschein"),
    objectPosition: "center 18%"
  },
  40: {
    alt: l("Зеркальное фото с Юлей", "Mirror photo with Julia", "Spiegelfoto mit Julia"),
    caption: l("Зеркальный кадр с Юлей, простой и тёплый", "A mirror photo with Julia, simple and warm", "Ein Spiegelfoto mit Julia, einfach und warm")
  },
  49: {
    alt: l("Зеркальный кадр с Юлей", "Mirror shot with Julia", "Spiegelbild mit Julia"),
    caption: l("Ты с Юлей в зеркале — обычный кадр, который всё равно цепляет", "You with Julia in the mirror — a simple photo that still stays with me", "Du mit Julia im Spiegel — ein einfaches Bild, das trotzdem hängen bleibt"),
    objectPosition: "center 25%"
  },
  50: {
    alt: l("Солнечный фильтр с Юлей", "Sunny filter photo with Julia", "Sonniges Filterfoto mit Julia"),
    caption: l("Смешной солнечный кадр с Юлей, в котором много живого настроения", "A funny sunny photo with Julia, full of real mood", "Ein lustiges sonniges Foto mit Julia, voller echter Stimmung")
  },
  52: {
    alt: l("Тень с телефоном", "Shadow with a phone", "Schatten mit Handy"),
    caption: l("Даже такой маленький кадр может стать памятью", "Even such a small shot can become a memory", "Sogar so ein kleines Bild kann zu einer Erinnerung werden")
  },
  54: {
    alt: l("Мягкое зеркало с Юлей", "Soft mirror photo with Julia", "Weiches Spiegelfoto mit Julia"),
    caption: l("Мягкий зеркальный кадр с Юлей и спокойным светом", "A soft mirror photo with Julia and calm light", "Ein weiches Spiegelfoto mit Julia und ruhigem Licht")
  },
  55: {
    alt: l("Ты с Юлей на траве", "You with Julia on the grass", "Du mit Julia auf der Wiese"),
    caption: l("Солнечный кадр с Юлей, где вы просто в моменте", "A sunny photo with Julia where you are just in the moment", "Ein sonniges Foto mit Julia, in dem ihr einfach im Moment seid"),
    objectPosition: "center 25%"
  },
  56: {
    alt: l("Ты с Юлей в конце весны", "You with Julia in late spring", "Du mit Julia im späten Frühling"),
    caption: l("Ты, Юля и настроение конца весны, которое сразу видно", "You, Julia, and that late-spring mood you can see right away", "Du, Julia und diese Spätfrühlingsstimmung, die man sofort sieht")
  },
  58: {
    alt: l("Мама Елена под цветущим деревом", "Mom Elena under a blossoming tree", "Mama Elena unter einem blühenden Baum"),
    caption: l("Твоя мама Елена под белыми цветами", "Your mom Elena under white flowers", "Deine Mama Elena unter weißen Blüten"),
    objectPosition: "center 42%"
  },
  59: {
    src: "/photos/59.jpg",
    alt: l("Лера в бассейне", "Valeriia in the pool", "Valeriia im Schwimmbad"),
    caption: l(
      "Ты у бассейна, солнечный свет и тот спокойный взгляд, из-за которого мне и понравился этот кадр",
      "You by the pool, warm sunlight, and that calm look that made me like this photo so much",
      "Du am Becken, warmes Sonnenlicht und dieser ruhige Blick, weshalb mir das Foto so gut gefällt"
    ),
    objectPosition: "center 32%"
  },
  60: {
    src: "/photos/60.jpg",
    alt: l("Лера отдыхает у воды", "Valeriia relaxing by the water", "Valeriia entspannt am Wasser"),
    caption: l(
      "Мне нравится, как здесь всё спокойно: ты у воды, солнце, и никакой лишней постановки",
      "I like how calm everything feels here: you by the water, sunlight, and nothing staged",
      "Ich mag, wie ruhig hier alles wirkt: du am Wasser, Sonne und nichts ist gestellt"
    ),
    objectPosition: "center 40%"
  },
  61: {
    src: "/photos/61.jpg",
    alt: l("Смешной крупный кадр Леры", "A funny close-up of Valeriia", "Eine lustige Nahaufnahme von Valeriia"),
    caption: l(
      "Эта фотография просто смешная и живая. Именно такие кадры почему-то запоминаются сильнее идеальных 😅",
      "This photo is simply funny and real. Somehow, pictures like this stay with me longer than perfect ones 😅",
      "Dieses Foto ist einfach lustig und echt. Solche Bilder bleiben mir irgendwie länger im Kopf als perfekte 😅"
    ),
    objectPosition: "center 34%"
  },
  62: {
    src: "/photos/62.jpg",
    alt: l("Лера сидит у бассейна", "Valeriia sitting by the pool", "Valeriia sitzt am Becken"),
    caption: l(
      "Тихий летний кадр у воды, где ты просто сидишь и никуда не спешишь",
      "A quiet summer photo by the water, where you are simply sitting and not rushing anywhere",
      "Ein ruhiges Sommerfoto am Wasser, auf dem du einfach sitzt und nirgendwohin eilst"
    ),
    objectPosition: "center 38%"
  },
  63: {
    src: "/photos/63.jpg",
    alt: l("Наша совместная фотография", "Our photo together", "Unser gemeinsames Foto"),
    caption: l(
      "Наша совместная фотка, которая мне правда очень нравится 🧸💜",
      "Our photo together, which I genuinely like so much 🧸💜",
      "Unser gemeinsames Foto, das mir wirklich sehr gefällt 🧸💜"
    ),
    objectPosition: "center 42%"
  },
  64: {
    src: "/photos/64.jpg",
    alt: l("Лера с Мирусей на скамейке", "Valeriia with Mirusya on a bench", "Valeriia mit Mirusya auf einer Bank"),
    caption: l(
      "Вы с Мирусей под деревьями, а сердечко руками делает этот кадр особенно тёплым 💜",
      "You and Mirusya under the trees, and the heart made with your hands makes this photo especially warm 💜",
      "Du und Mirusya unter den Bäumen, und das Herz mit deinen Händen macht dieses Foto besonders warm 💜"
    ),
    objectPosition: "center 42%"
  },
  65: {
    src: "/photos/65.jpg",
    alt: l("Лера на камне с видом на долину", "Valeriia on a rock overlooking the valley", "Valeriia auf einem Felsen mit Blick ins Tal"),
    caption: l(
      "Мне нравится, как ты обернулась к камере, а за тобой осталось всё огромное летнее пространство",
      "I love how you turned toward the camera while the whole wide summer landscape stretches out behind you",
      "Ich mag, wie du dich zur Kamera umdrehst, während sich hinter dir die ganze weite Sommerlandschaft öffnet"
    ),
    objectPosition: "center 44%"
  },
  66: {
    src: "/photos/66.jpg",
    alt: l("Лера любуется видом с высоты", "Valeriia enjoying the view from above", "Valeriia genießt die Aussicht von oben"),
    caption: l(
      "Ты смотришь на долину, а Виталий на заднем плане добавил фотографии немного настроения 😄",
      "You are looking over the valley, while Vitalii adds a little extra personality in the background 😄",
      "Du schaust über das Tal, während Vitalii dem Foto im Hintergrund noch etwas Stimmung gibt 😄"
    ),
    objectPosition: "center 44%"
  },
  67: {
    src: "/photos/67.jpg",
    alt: l("Лера на деревянной лестнице", "Valeriia on a wooden ladder", "Valeriia auf einer Holzleiter"),
    caption: l(
      "Красивый летний кадр: ты сидишь на деревянной лестнице среди зелени, а яркое солнце и синее небо делают фотографию особенно лёгкой и живой ☀️",
      "A beautiful summer photo: you are sitting on a wooden ladder surrounded by greenery, while the bright sun and blue sky make the whole picture feel light and lively ☀️",
      "Ein schönes Sommerfoto: Du sitzt auf einer Holzleiter mitten im Grünen, und die helle Sonne und der blaue Himmel lassen das ganze Bild leicht und lebendig wirken ☀️"
    ),
    objectPosition: "center 36%"
  },
  68: {
    src: "/photos/68.jpg",
    alt: l("Лера сидит на камне среди виноградников", "Valeriia sitting on a rock among vineyards", "Valeriia sitzt auf einem Felsen zwischen Weinbergen"),
    caption: l(
      "Солнце, зелёные склоны и твой взгляд через плечо — фотография получилась очень красивой и спокойной",
      "Sunlight, green hills, and your look over your shoulder make this photo feel both beautiful and calm",
      "Sonne, grüne Hügel und dein Blick über die Schulter machen dieses Foto gleichzeitig schön und ruhig"
    ),
    objectPosition: "center 45%"
  },
  69: {
    src: "/photos/69.jpg",
    alt: l("Лера с Еленой, Виталием и Мирусей", "Valeriia with Elena, Vitalii, and Mirusya", "Valeriia mit Elena, Vitalii und Mirusya"),
    caption: l(
      "Тёплая семейная фотография с Еленой, Виталием и Мирусей на фоне красивого летнего вида 💜",
      "A warm family photo with Elena, Vitalii, and Mirusya against a beautiful summer view 💜",
      "Ein warmes Familienfoto mit Elena, Vitalii und Mirusya vor einer wunderschönen Sommerlandschaft 💜"
    ),
    objectPosition: "center 42%"
  },
  70: {
    src: "/photos/70.jpg",
    alt: l("Летний портрет Леры на камне", "A summer portrait of Valeriia on a rock", "Ein Sommerporträt von Valeriia auf einem Felsen"),
    caption: l(
      "Здесь особенно нравится твой спокойный взгляд и то, как красиво вокруг тебя уходят вдаль виноградники",
      "I especially like your calm look here and how beautifully the vineyards stretch into the distance around you",
      "Hier mag ich besonders deinen ruhigen Blick und wie schön sich die Weinberge um dich herum in die Ferne ziehen"
    ),
    objectPosition: "center 45%"
  },
  71: {
    src: "/photos/71.jpg",
    alt: l("Лера отдыхает на тёплом камне", "Valeriia resting on a sun-warmed rock", "Valeriia ruht sich auf einem sonnenwarmen Felsen aus"),
    caption: l(
      "Тихий кадр сверху, в котором ты просто сидишь и отдыхаешь среди солнца, камней и зелени",
      "A quiet photo from above, where you are simply sitting and resting among sunlight, rocks, and greenery",
      "Ein ruhiges Foto von oben, auf dem du einfach zwischen Sonne, Felsen und Grün sitzt und dich ausruhst"
    ),
    objectPosition: "center 42%"
  },
  72: {
    src: "/photos/72.jpg",
    alt: l("Солнечное селфи Леры у бассейна", "Valeriia's sunny selfie by the pool", "Valeriias sonniges Selfie am Schwimmbad"),
    caption: l(
      "Солнечное селфи у бассейна: большие очки, лёгкое настроение и ты, которая снова получилась шикарно ☀️",
      "A sunny poolside selfie: big sunglasses, an easy mood, and you looking wonderful again ☀️",
      "Ein sonniges Selfie am Schwimmbad: große Sonnenbrille, lockere Stimmung und du siehst wieder wunderschön aus ☀️"
    ),
    objectPosition: "center 34%"
  },
  73: {
    src: "/photos/73.jpg",
    alt: l("Зеркальное фото Леры в движении", "A mirror photo of Valeriia in motion", "Ein Spiegelfoto von Valeriia in Bewegung"),
    caption: l(
      "Немного размытый кадр в движении, но именно поэтому он выглядит живым и совсем не постановочным",
      "A slightly blurred photo in motion, which is exactly why it feels alive and completely unstaged",
      "Ein leicht verschwommenes Foto in Bewegung, das gerade deshalb lebendig und überhaupt nicht gestellt wirkt"
    ),
    objectPosition: "center 38%"
  }
};

const photoOrder = [
  63,
  ...Array.from({ length: photoCount }, (_, index) => index + 1).filter((id) => id !== 63)
];

// Наша первая совместная фотография открывает альбом, остальные сохраняют прежний порядок.
const originalPhotos: PhotoItem[] = photoOrder.map((id, index) => {
  const special = specialPhotos[id];

  return {
    src: special?.src ?? `/photos/${String(id).padStart(2, "0")}.jpg`,
    alt: special?.alt ?? defaultAlt,
    caption: special?.caption ?? defaultCaption,
    objectPosition: special?.objectPosition ?? (index % 3 === 0 ? "center 30%" : "center")
  };
});

const augustMemories: PhotoItem[] = [
  {
    src: "/photos/august-2026/lera-japanese-garden-sun.jpg",
    alt: l("Лера в солнечном японском саду", "Lera in a sunny Japanese garden", "Lera in einem sonnigen japanischen Garten"),
    caption: l("Солнечный день, японский сад и ты — очень красивый момент этого лета", "A sunny day, a Japanese garden, and you — such a beautiful summer moment", "Ein sonniger Tag, ein japanischer Garten und du – ein wunderschöner Sommermoment"),
    objectPosition: "center 40%"
  },
  {
    src: "/photos/august-2026/lera-greenhouse-flowers.jpg",
    alt: l("Лера среди цветов в оранжерее", "Lera among flowers in the greenhouse", "Lera zwischen Blumen im Gewächshaus"),
    caption: l("Ты среди цветов — спокойная, красивая и настоящая", "You among the flowers — calm, beautiful, and completely yourself", "Du zwischen den Blumen – ruhig, wunderschön und ganz du selbst"),
    objectPosition: "center 36%"
  },
  {
    src: "/photos/august-2026/lera-japanese-garden-gate.jpg",
    alt: l("Лера у ворот японского сада", "Lera by the Japanese garden gate", "Lera am Tor des japanischen Gartens"),
    caption: l("Тихий кадр у ворот сада, который хочется сохранить в нашей фотоленте", "A quiet moment by the garden gate that belongs in our photo reel", "Ein ruhiger Moment am Gartentor, der in unsere Fotoreihe gehört"),
    objectPosition: "center 42%"
  },
  {
    src: "/photos/august-2026/lera-with-elena-greenhouse.jpg",
    alt: l("Лера с мамой Еленой в оранжерее", "Lera with her mom Elena in the greenhouse", "Lera mit ihrer Mama Elena im Gewächshaus"),
    caption: l("Тёплая фотография с мамой Еленой среди цветов и летнего света", "A warm photo with mom Elena among flowers and summer light", "Ein warmes Foto mit Mama Elena zwischen Blumen und Sommerlicht"),
    objectPosition: "center 34%"
  },
  {
    src: "/photos/august-2026/lera-mirror-selfie.jpg",
    alt: l("Зеркальное селфи Леры", "Lera's mirror selfie", "Leras Spiegel-Selfie"),
    caption: l("Ещё один живой кадр обычного дня, который теперь стал воспоминанием", "One more real moment from an ordinary day that has now become a memory", "Noch ein echter Moment aus einem gewöhnlichen Tag, der jetzt eine Erinnerung ist"),
    objectPosition: "center 40%"
  },
  {
    src: "/photos/august-2026/lera-japanese-garden-video.mp4",
    alt: l("Летнее видео с Лерой", "A summer video with Lera", "Ein Sommervideo mit Lera"),
    caption: l("Маленький живой фрагмент этого летнего дня 💜", "A little living piece of this summer day 💜", "Ein kleiner lebendiger Ausschnitt aus diesem Sommertag 💜"),
    objectPosition: "center",
    mediaType: "video"
  }
];

function shuffleWithSeed<T>(items: T[], seed: number) {
  const shuffled = [...items];
  let state = seed >>> 0;

  for (let index = shuffled.length - 1; index > 0; index -= 1) {
    state = (Math.imul(state, 1664525) + 1013904223) >>> 0;
    const swapIndex = Math.floor((state / 4294967296) * (index + 1));
    [shuffled[index], shuffled[swapIndex]] = [shuffled[swapIndex], shuffled[index]];
  }

  return shuffled;
}

// Общая фотография всегда открывает альбом, остальные воспоминания перемешаны в постоянном порядке.
export const photos: PhotoItem[] = [
  originalPhotos[0],
  ...shuffleWithSeed([...originalPhotos.slice(1), ...augustMemories], 12082026)
];
