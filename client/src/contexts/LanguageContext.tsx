import { createContext, useContext, useState, useCallback, type ReactNode } from "react";

type Language = "en" | "ru" | "de";

interface LanguageContextType {
  language: Language;
  setLanguage: (lang: Language) => void;
  cycleLanguage: () => void;
  t: (en: string, ru: string, de?: string) => string;
}

const LanguageContext = createContext<LanguageContextType | null>(null);

export function LanguageProvider({ children }: { children: ReactNode }) {
  const [language, setLanguage] = useState<Language>("en");

  const cycleLanguage = useCallback(() => {
    setLanguage(prev => {
      if (prev === "en") return "ru";
      if (prev === "ru") return "de";
      return "en";
    });
  }, []);

  const t = useCallback((en: string, ru: string, de?: string) => {
    if (language === "en") return en;
    if (language === "ru") return ru;
    if (language === "de") return de || en;
    return en;
  }, [language]);

  return (
    <LanguageContext.Provider value={{ language, setLanguage, cycleLanguage, t }}>
      {children}
    </LanguageContext.Provider>
  );
}

export function useLanguage() {
  const context = useContext(LanguageContext);
  if (!context) {
    throw new Error("useLanguage must be used within a LanguageProvider");
  }
  return context;
}
