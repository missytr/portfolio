import React, { createContext, useContext, useState, useEffect } from "react";
import { translations } from "../locales/translations";

const LanguageContext = createContext();

export function LanguageProvider({ children }) {
  // Default to English as explicitly requested by the user
  const [language, setLanguageState] = useState(() => {
    try {
      const saved = localStorage.getItem("portfolio_lang");
      return saved === "vi" ? "vi" : "en";
    } catch {
      return "en";
    }
  });

  const setLanguage = (lang) => {
    const validLang = lang === "vi" ? "vi" : "en";
    setLanguageState(validLang);
    try {
      localStorage.setItem("portfolio_lang", validLang);
    } catch {
      // ignore
    }
  };

  const toggleLanguage = () => {
    setLanguage(language === "en" ? "vi" : "en");
  };

  useEffect(() => {
    // Update html lang attribute for accessibility & SEO
    document.documentElement.lang = language;
  }, [language]);

  const value = {
    language,
    setLanguage,
    toggleLanguage,
    t: translations[language] || translations.en
  };

  return (
    <LanguageContext.Provider value={value}>
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
