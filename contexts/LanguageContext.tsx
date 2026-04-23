"use client";

import { createContext, useContext, useState, useEffect, useCallback } from "react";
import { translations, type Language, type Translations } from "@/lib/translations";

interface LanguageContextValue {
  lang: Language;
  toggle: () => void;
  t: Translations;
}

const LanguageContext = createContext<LanguageContextValue>({
  lang: "fr",
  toggle: () => {},
  t: translations.fr,
});

export function LanguageProvider({ children }: { children: React.ReactNode }) {
  const [lang, setLang] = useState<Language>("fr");

  useEffect(() => {
    const stored = localStorage.getItem("lang") as Language | null;
    if (stored === "fr" || stored === "en") setLang(stored);
  }, []);

  useEffect(() => {
    document.documentElement.lang = lang;
    localStorage.setItem("lang", lang);
  }, [lang]);

  const toggle = useCallback(() => {
    setLang((prev) => (prev === "fr" ? "en" : "fr"));
  }, []);

  return (
    <LanguageContext.Provider value={{ lang, toggle, t: translations[lang] }}>
      {children}
    </LanguageContext.Provider>
  );
}

export const useLanguage = () => useContext(LanguageContext);
