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
  24: {
    alt: l("Фото сирени", "Photo of lilacs", "Foto von Flieder"),
    caption: l("Красивый кадр с цветами, который тоже хочется сохранить", "A beautiful flower shot worth keeping too", "Ein schönes Blumenfoto, das man auch behalten möchte")
  },
  25: {
    alt: l("Лера с папой Виталием и Мирусей", "Valeriia with her dad Vitalii and Mirusya", "Valeriia mit ihrem Papa Vitalii und Mirusya"),
    caption: l("Ты с папой Виталием и Мирусей на фоне гор и воды", "You with your dad Vitalii and Mirusya, with mountains and water behind you", "Du mit deinem Papa Vitalii und Mirusya vor Bergen und Wasser"),
    objectPosition: "center 38%"
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
  52: {
    alt: l("Тень с телефоном", "Shadow with a phone", "Schatten mit Handy"),
    caption: l("Даже такой маленький кадр может стать памятью", "Even such a small shot can become a memory", "Sogar so ein kleines Bild kann Erinnerung werden")
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
