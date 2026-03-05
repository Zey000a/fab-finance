import React, { createContext, useContext, useState, useEffect } from 'react';
import { translations, Language } from './translations';

type I18nContextType = {
  lang: Language;
  setLang: (lang: Language) => void;
  t: (path: string) => string;
};

const I18nContext = createContext<I18nContextType | undefined>(undefined);

export function I18nProvider({ children }: { children: React.ReactNode }) {
  const [lang, setLangState] = useState<Language>('fr');

  useEffect(() => {
    const saved = localStorage.getItem('app-lang') as Language;
    if (saved && Object.keys(translations).includes(saved)) {
      setLangState(saved);
    }
  }, []);

  const setLang = (newLang: Language) => {
    setLangState(newLang);
    localStorage.setItem('app-lang', newLang);
  };

  const t = (path: string): string => {
    const keys = path.split('.');
    let current: any = translations[lang];
    
    for (const key of keys) {
      if (current[key] === undefined) {
        // Fallback to french if missing
        let fallback: any = translations['fr'];
        for (const fbKey of keys) {
          if (fallback[fbKey] === undefined) return path;
          fallback = fallback[fbKey];
        }
        return fallback;
      }
      current = current[key];
    }
    return current;
  };

  return (
    <I18nContext.Provider value={{ lang, setLang, t }}>
      {children}
    </I18nContext.Provider>
  );
}

export function useI18n() {
  const context = useContext(I18nContext);
  if (!context) throw new Error('useI18n must be used within I18nProvider');
  return context;
}
