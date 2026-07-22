import { useMemo } from "react";
import { siteConfig } from "../config/siteConfig";
import { Language, LocalizedString, t } from "../data/translations";
import { useLocalStorage } from "./useLocalStorage";

const supported: Language[] = ["ru", "en", "de"];

function detectLanguage(): Language {
  const browser = navigator.language.slice(0, 2).toLowerCase();
  return supported.includes(browser as Language) ? (browser as Language) : siteConfig.defaultLanguage;
}

export function useLanguage() {
  const [language, setLanguage] = useLocalStorage<Language>("birthday-language", detectLanguage());

  const translate = useMemo(() => {
    return (value: LocalizedString) => value[language] ?? value.ru;
  }, [language]);

  return { language, setLanguage, translate, ui: t };
}
