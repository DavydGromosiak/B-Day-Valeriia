import { languages, Language } from "../../data/translations";

type Props = {
  language: Language;
  setLanguage: (language: Language) => void;
};

export function LanguageSwitcher({ language, setLanguage }: Props) {
  return (
    <div className="language-switcher" aria-label="Language switcher">
      {languages.map((item) => (
        <button
          key={item.code}
          className={item.code === language ? "active" : ""}
          onClick={() => setLanguage(item.code)}
          aria-pressed={item.code === language}
        >
          {item.label}
        </button>
      ))}
    </div>
  );
}
