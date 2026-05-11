'use client'

import { createContext, useContext, useState, useEffect, ReactNode } from 'react'
import pt from './locales/pt'
import en from './locales/en'
import es from './locales/es'
import fr from './locales/fr'
import ja from './locales/ja'
import zh from './locales/zh'

export type Locale = 'pt' | 'en' | 'es' | 'fr' | 'ja' | 'zh'

export const locales: { code: Locale; label: string; flag: string }[] = [
  { code: 'pt', label: 'Português', flag: '🇦🇴' },
  { code: 'en', label: 'English',   flag: '🇬🇧' },
  { code: 'es', label: 'Español',   flag: '🇪🇸' },
  { code: 'fr', label: 'Français',  flag: '🇫🇷' },
  { code: 'ja', label: '日本語',    flag: '🇯🇵' },
  { code: 'zh', label: '中文',      flag: '🇨🇳' },
]

const translations = { pt, en, es, fr, ja, zh }

export type Translations = typeof pt

interface I18nContextType {
  locale: Locale
  t: Translations
  setLocale: (l: Locale) => void
}

const I18nContext = createContext<I18nContextType>({
  locale: 'pt',
  t: pt,
  setLocale: () => {},
})

export function I18nProvider({ children }: { children: ReactNode }) {
  const [locale, setLocaleState] = useState<Locale>('pt')

  useEffect(() => {
    const saved = localStorage.getItem('isaos-locale') as Locale | null
    if (saved && translations[saved]) setLocaleState(saved)
  }, [])

  const setLocale = (l: Locale) => {
    setLocaleState(l)
    localStorage.setItem('isaos-locale', l)
    // Update html lang attribute
    document.documentElement.lang = l
  }

  return (
    <I18nContext.Provider value={{ locale, t: translations[locale], setLocale }}>
      {children}
    </I18nContext.Provider>
  )
}

export function useI18n() {
  return useContext(I18nContext)
}
