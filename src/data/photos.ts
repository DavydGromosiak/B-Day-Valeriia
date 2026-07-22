import { LocalizedString } from "./translations";

export type PhotoItem = {
  src: string;
  alt: LocalizedString;
  caption: LocalizedString;
  objectPosition: string;
};

const l = (ru: string, en: string, de: string): LocalizedString => ({ ru, en, de });

export const photoCount = 58;

const defaultAlt = l("Твоя фотография", "Your photo", "Dein Foto");
const defaultCaption = l(
  "Твоё фото, которое мне особенно понравилось",
  "Your photo that I especially loved",
  "Dein Foto, das mir besonders gefällt"
);

const specialPhotos: Record<number, Partial<PhotoItem>> = {
  2: {
    alt: l("Ты с Юлей в красивом зале", "You with Yulia in a beautiful hall", "Du mit Yulia in einem schönen Saal"),
    caption: l("Ты с Юлей в красивом зале, где кадр получился очень живым", "You with Yulia in a beautiful hall, and the photo feels really alive", "Du mit Yulia in einem schönen Saal, und das Bild wirkt richtig lebendig"),
    objectPosition: "center 30%"
  },
  5: {
    alt: l("Ты с Юлей на солнце", "You with Yulia in the sun", "Du mit Yulia in der Sonne"),
    caption: l("Солнечный смешной кадр с Юлей, который хочется оставить", "A sunny funny photo with Yulia that I want to keep", "Ein sonniges lustiges Foto mit Yulia, das man behalten möchte"),
    objectPosition: "center 30%"
  },
  7: {
    alt: l("Зеркальное фото с Юлей", "Mirror photo with Yulia", "Spiegelfoto mit Yulia"),
    caption: l("Вы с Юлей в зеркале, спокойные и немного дерзкие", "You and Yulia in the mirror, calm and a little bold", "Du und Yulia im Spiegel, ruhig und ein bisschen frech")
  },
  8: {
    alt: l("Ты с Юлей и смешным фильтром", "You with Yulia and a funny filter", "Du mit Yulia und einem lustigen Filter"),
    caption: l("Солнечный кадр с Юлей, где всё выглядит легко и по-настоящему", "A sunny photo with Yulia where everything feels easy and real", "Ein sonniges Foto mit Yulia, in dem alles leicht und echt wirkt"),
    objectPosition: "center 30%"
  },
  9: {
    alt: l("Светлое фото с Юлей", "Bright photo with Yulia", "Helles Foto mit Yulia"),
    caption: l("Светлый кадр с Юлей, улыбкой и спокойным настроением", "A bright photo with Yulia, a smile, and a calm mood", "Ein helles Foto mit Yulia, einem Lächeln und ruhiger Stimmung"),
    objectPosition: "center 25%"
  },
  15: {
    alt: l("Зеркало, очки и Юля", "Mirror, sunglasses, and Yulia", "Spiegel, Sonnenbrillen und Yulia"),
    caption: l("Зеркало, очки и Юля рядом — кадр с характером", "A mirror, sunglasses, and Yulia beside you — a photo with character", "Spiegel, Sonnenbrillen und Yulia neben dir — ein Bild mit Charakter")
  },
  16: {
    alt: l("Смешной фильтр с Юлей", "Funny filter with Yulia", "Lustiger Filter mit Yulia"),
    caption: l("Смешной фильтр с Юлей, где вы просто поймали настроение", "A funny filter with Yulia where you simply caught the mood", "Ein lustiger Filter mit Yulia, bei dem ihr einfach die Stimmung erwischt habt")
  },
  17: {
    alt: l("Фотолента с Юлей", "Photo strip with Yulia", "Fotostreifen mit Yulia"),
    caption: l("Маленькая фотолента с Юлей и разными кусочками момента", "A little photo strip with Yulia and different pieces of the moment", "Ein kleiner Fotostreifen mit Yulia und verschiedenen Momentstücken")
  },
  19: {
    alt: l("Ты, Юля и ещё одна подруга", "You, Yulia, and another friend", "Du, Yulia und noch eine Freundin"),
    caption: l("Летний живой кадр с Юлей и ещё одной подругой", "A lively summer photo with Yulia and another friend", "Ein lebendiges Sommerfoto mit Yulia und noch einer Freundin")
  },
  24: {
    alt: l("Фото сирени", "Photo of lilacs", "Foto von Flieder"),
    caption: l("Красивый кадр с цветами, который тоже хочется сохранить", "A beautiful flower shot worth keeping too", "Ein schönes Blumenfoto, das man auch behalten möchte")
  },
  25: {
    alt: l("Лера с папой Виталием и Мирусей", "Valeriia with her dad Vitalii and Mirusya", "Valeriia mit ihrem Papa Vitalii und Mirusya"),
    caption: l("Ты с папой Виталием и Мирусей на фоне гор и воды", "You with your dad Vitalii and Mirusya, with mountains and water behind you", "Du mit deinem Papa Vitalii und Mirusya vor Bergen und Wasser"),
    objectPosition: "center 38%"
  },
  27: {
    alt: l("Ты с Юлей в магазине", "You with Yulia in a store", "Du mit Yulia in einem Laden"),
    caption: l("Кадр с Юлей в магазине — обычный момент, но очень живой", "A photo with Yulia in a store — an ordinary moment, but very alive", "Ein Foto mit Yulia in einem Laden — ein normaler Moment, aber sehr lebendig")
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
    alt: l("Ты, Юля и подруга", "You, Yulia, and a friend", "Du, Yulia und eine Freundin"),
    caption: l("Кадр, где рядом Юля и ещё одна подруга, а настроение очень лёгкое", "A photo with Yulia and another friend beside you, with a very easy mood", "Ein Foto mit Yulia und noch einer Freundin neben dir, mit einer sehr leichten Stimmung")
  },
  33: {
    alt: l("Кадр из дороги с Юлей", "Road photo with Yulia", "Foto von unterwegs mit Yulia"),
    caption: l("Дорожный кадр с Юлей, фильтром и обычным живым настроением", "A road photo with Yulia, a filter, and a simple real mood", "Ein Foto von unterwegs mit Yulia, Filter und echter normaler Stimmung")
  },
  34: {
    alt: l("Прогулка с Юлей и подругой", "Walk with Yulia and a friend", "Spaziergang mit Yulia und einer Freundin"),
    caption: l("Обычная прогулка с Юлей и ещё одной подругой, но кадр получился живой", "A normal walk with Yulia and another friend, but the photo feels alive", "Ein normaler Spaziergang mit Yulia und noch einer Freundin, aber das Bild wirkt lebendig")
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
    alt: l("Зеркальное фото с Юлей", "Mirror photo with Yulia", "Spiegelfoto mit Yulia"),
    caption: l("Зеркальный кадр с Юлей, простой и тёплый", "A mirror photo with Yulia, simple and warm", "Ein Spiegelfoto mit Yulia, einfach und warm")
  },
  49: {
    alt: l("Зеркальный кадр с Юлей", "Mirror shot with Yulia", "Spiegelbild mit Yulia"),
    caption: l("Ты с Юлей в зеркале — обычный кадр, который всё равно цепляет", "You with Yulia in the mirror — a simple photo that still stays with me", "Du mit Yulia im Spiegel — ein einfaches Bild, das trotzdem hängen bleibt"),
    objectPosition: "center 25%"
  },
  50: {
    alt: l("Солнечный фильтр с Юлей", "Sunny filter photo with Yulia", "Sonniges Filterfoto mit Yulia"),
    caption: l("Смешной солнечный кадр с Юлей, в котором много живого настроения", "A funny sunny photo with Yulia, full of real mood", "Ein lustiges sonniges Foto mit Yulia, voller echter Stimmung")
  },
  52: {
    alt: l("Тень с телефоном", "Shadow with a phone", "Schatten mit Handy"),
    caption: l("Даже такой маленький кадр может стать памятью", "Even such a small shot can become a memory", "Sogar so ein kleines Bild kann Erinnerung werden")
  },
  54: {
    alt: l("Мягкое зеркало с Юлей", "Soft mirror photo with Yulia", "Weiches Spiegelfoto mit Yulia"),
    caption: l("Мягкий зеркальный кадр с Юлей и спокойным светом", "A soft mirror photo with Yulia and calm light", "Ein weiches Spiegelfoto mit Yulia und ruhigem Licht")
  },
  55: {
    alt: l("Ты с Юлей на траве", "You with Yulia on the grass", "Du mit Yulia auf der Wiese"),
    caption: l("Солнечный кадр с Юлей, где вы просто в моменте", "A sunny photo with Yulia where you are just in the moment", "Ein sonniges Foto mit Yulia, in dem ihr einfach im Moment seid"),
    objectPosition: "center 25%"
  },
  56: {
    alt: l("Ты с Юлей летом", "You with Yulia in summer", "Du mit Yulia im Sommer"),
    caption: l("Ты, Юля и летнее настроение, которое сразу видно", "You, Yulia, and a summer mood you can see right away", "Du, Yulia und Sommerstimmung, die man sofort sieht")
  },
  58: {
    alt: l("Мама Елена под цветущим деревом", "Mom Elena under a blossoming tree", "Mama Elena unter einem blühenden Baum"),
    caption: l("Твоя мама Елена под белыми цветами", "Your mom Elena under white flowers", "Deine Mama Elena unter weißen Blüten"),
    objectPosition: "center 42%"
  }
};

export const photos: PhotoItem[] = Array.from({ length: photoCount }, (_, index) => {
  const id = index + 1;
  const special = specialPhotos[id];

  return {
    src: `/photos/${String(id).padStart(2, "0")}.jpg`,
    alt: special?.alt ?? defaultAlt,
    caption: special?.caption ?? defaultCaption,
    objectPosition: special?.objectPosition ?? (index % 3 === 0 ? "center 30%" : "center")
  };
});
