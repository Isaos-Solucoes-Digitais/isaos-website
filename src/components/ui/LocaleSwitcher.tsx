'use client'

import { useState, useRef, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Sun, Moon, ChevronDown, Globe } from 'lucide-react'
import { useI18n, locales } from '@/i18n'
import { useTheme } from '@/hooks/useTheme'


export function LocaleSwitcher() {
  const { locale, setLocale, t } = useI18n()
  const { theme, toggleTheme } = useTheme()
  const [open, setOpen] = useState(false)
  const ref = useRef<HTMLDivElement>(null)

  const current = locales.find((l) => l.code === locale)!

  useEffect(() => {
    const handleClick = (e: MouseEvent) => {
      if (ref.current && !ref.current.contains(e.target as Node)) setOpen(false)
    }
    document.addEventListener('mousedown', handleClick)
    return () => document.removeEventListener('mousedown', handleClick)
  }, [])

  return (
    <div className="flex items-center gap-2">

      {/* Theme toggle */}
      {/* <button
        onClick={toggleTheme}
        aria-label={theme === 'dark' ? t.theme.light : t.theme.dark}
        className="
          w-9 h-9 flex items-center justify-center rounded-lg
          border border-white/10 dark:border-white/10 light:border-black/10
          text-slate-400 dark:text-slate-400 light:text-slate-600
          hover:text-white dark:hover:text-white
          hover:bg-white/5 dark:hover:bg-white/5 light:hover:bg-black/5
          transition-all duration-200
        "
      >
        {theme === 'dark' ? <Sun size={16} /> : <Moon size={16} />}
      </button> */}

       {/* Language dropdown */}
       <div ref={ref} className="relative">
        <button
          onClick={() => setOpen(!open)}
          className="
            flex items-center gap-1.5 px-3 py-2 rounded-lg text-sm
            border border-white/10 dark:border-white/10
            text-slate-400 dark:text-slate-400
            hover:text-white dark:hover:text-white
            hover:bg-white/5 dark:hover:bg-white/5
            transition-all duration-200
          "
          aria-label={t.lang}
        >
          <Globe size={14} />
          <span className="font-sans font-600 text-xs hidden sm:inline">{current.flag} {current.code.toUpperCase()}</span>
          <span className="font-sans font-600 text-xs sm:hidden">{current.flag}</span>
          <ChevronDown
            size={12}
            className={`transition-transform duration-200 ${open ? 'rotate-180' : ''}`}
          />
        </button>

        <AnimatePresence>
          {open && (
            <motion.div
              initial={{ opacity: 0, y: 8, scale: 0.95 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: 8, scale: 0.95 }}
              transition={{ duration: 0.15 }}
              className="
                absolute right-0 top-full mt-2 w-44 z-50
                rounded-xl border border-white/10 dark:border-white/10
                bg-dark-800/95 dark:bg-dark-800/95
                light:bg-white/95 light:border-black/10
                backdrop-blur-xl shadow-2xl shadow-black/30
                overflow-hidden
              "
            >
              {locales.map(({ code, label, flag }) => (
                <button
                  key={code}
                  onClick={() => { setLocale(code); setOpen(false) }}
                  className={`
                    w-full flex items-center gap-3 px-4 py-2.5 text-sm text-left
                    transition-colors duration-150
                    ${locale === code
                      ? 'bg-brand-500/20 text-brand-300'
                      : 'text-slate-400 hover:bg-white/5 hover:text-white dark:hover:bg-white/5 dark:hover:text-white'}
                  `}
                >
                  <span className="text-base leading-none">{flag}</span>
                  <span className="font-body">{label}</span>
                  {locale === code && (
                    <span className="ml-auto w-1.5 h-1.5 rounded-full bg-brand-400" />
                  )}
                </button>
              ))}
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </div>
  )
}
