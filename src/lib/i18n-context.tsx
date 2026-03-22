import {
  createContext, useContext, useState,
  useEffect, useCallback, ReactNode
} from "react"
import { useLocation } from "wouter"
import { translations, LANGUAGES, ROUTES } from "./i18n/index"
import type { Language, Translation } from "./i18n/index"

// ─────────────────────────────────────────────
// HELPERS
// ─────────────────────────────────────────────

/** Extrait la langue depuis le pathname : "/en/about" → "en" */
export function getLangFromPath(path: string): Language {
  const segment = path.split("/")[1] as Language
  return LANGUAGES.find(l => l.code === segment) ? segment : "fr"
}

/** Remplace le préfixe de langue dans un chemin */
export function switchLangInPath(path: string, newLang: Language): string {
  const segments = path.split("/")
  segments[1] = newLang
  return segments.join("/")
}

// ─────────────────────────────────────────────
// CONTEXT
// ─────────────────────────────────────────────

interface I18nContextType {
  lang:       Language
  t:          Translation
  routes:     typeof ROUTES["fr"]
  setLang:    (lang: Language) => void
  switchLang: (lang: Language) => void  // change la langue ET navigue
}

const I18nContext = createContext<I18nContextType | null>(null)

// ─────────────────────────────────────────────
// PROVIDER
// ─────────────────────────────────────────────

export function I18nProvider({ children }: { children: ReactNode }) {
  const [location, navigate] = useLocation()

  // Détecter la langue depuis l'URL
  const [lang, setLangState] = useState<Language>(() => {
    const fromUrl = getLangFromPath(location)
    return fromUrl
  })

  // Mettre à jour la langue si l'URL change (navigation interne)
  useEffect(() => {
    const fromUrl = getLangFromPath(location)
    if (fromUrl !== lang) setLangState(fromUrl)
  }, [location])

  // Redirect "/" → "/fr/"
  useEffect(() => {
    if (location === "/" || location === "") {
      const saved = localStorage.getItem("fabfinance_lang") as Language | null
      const target = saved && LANGUAGES.find(l => l.code === saved) ? saved : "fr"
      navigate(`/${target}`, { replace: true })
    }
  }, [])

  // Persister en localStorage
  useEffect(() => {
    localStorage.setItem("fabfinance_lang", lang)
  }, [lang])

  const setLang = useCallback((newLang: Language) => {
    setLangState(newLang)
  }, [])

  // Change la langue ET met à jour l'URL
  const switchLang = useCallback((newLang: Language) => {
    setLangState(newLang)
    const newPath = switchLangInPath(location, newLang)
    navigate(newPath, { replace: true })
  }, [location, navigate])

  const value: I18nContextType = {
    lang,
    t:       translations[lang] as Translation,
    routes:  ROUTES[lang],
    setLang,
    switchLang,
  }

  return (
    <I18nContext.Provider value={value}>
      {children}
    </I18nContext.Provider>
  )
}

// ─────────────────────────────────────────────
// HOOK
// ─────────────────────────────────────────────

export function useI18n() {
  const ctx = useContext(I18nContext)
  if (!ctx) throw new Error("useI18n must be used inside <I18nProvider>")
  return ctx
}