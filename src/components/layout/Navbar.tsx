'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { usePathname } from 'next/navigation'
import { motion, AnimatePresence } from 'framer-motion'
import { Menu, X } from 'lucide-react'
import { useI18n } from '@/i18n'
import { useTheme } from '@/hooks/useTheme'

import { LocaleSwitcher } from '@/components/ui/LocaleSwitcher'
import { Button } from '@/components/ui/Button'


export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [mobileOpen, setMobileOpen] = useState(false)
  const pathname = usePathname()
  const { t } = useI18n()
  const { theme } = useTheme()

  const navLinks = [
    { label: t.nav.home, href: '/' },
    { label: t.nav.about, href: '/about' },
    { label: t.nav.services, href: '/services' },
    { label: t.nav.portfolio, href: '/portfolio' },
    { label: t.nav.contact, href: '/contact' },
  ]

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20)
    window.addEventListener('scroll', handleScroll, { passive: true })
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  useEffect(() => {
    setMobileOpen(false)
  }, [pathname])

  const isLight = theme === 'light'

  return (
    <>
      <motion.header
        initial={{ y: -100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${scrolled
          ? `glass border-b ${isLight ? 'border-black/8 shadow-lg shadow-black/5' : 'border-brand-500/20 shadow-2xl shadow-brand-900/20'}`
          : 'bg-transparent'
          }`}
      >
        <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-18 flex items-center justify-between py-4">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-3 group">
            <div className="relative overflow-visible">
              <Image
                src="/logos/logo-wthite-vertical-v22.png"
                alt="ISAOS Soluções Digitais"
                width={220}
                height={100}
                className="h-10 w-auto object-contain -my-2 group-hover:scale-105 transition-transform duration-300"
                priority
              />
            </div>
          </Link>

          {/* Desktop Nav */}
          <ul className="hidden md:flex items-center gap-1">
            {navLinks.map((link) => {
              const isActive = pathname === link.href
              return (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className={`relative px-4 py-2 text-sm font-body font-500 rounded-lg transition-all duration-200 group ${isActive
                      ? 'text-brand-400'
                      : isLight
                        ? 'text-slate-600 hover:text-slate-900'
                        : 'text-slate-400 hover:text-white'
                      }`}
                  >
                    {isActive && (
                      <motion.span
                        layoutId="nav-pill"
                        className="absolute inset-0 bg-brand-500/10 border border-brand-500/20 rounded-lg"
                        transition={{ type: 'spring', stiffness: 400, damping: 30 }}
                      />
                    )}
                    <span className="relative z-10">{link.label}</span>
                  </Link>
                </li>
              )
            })}
          </ul>

          {/* Right controls */}
          <div className="hidden md:flex items-center gap-3 flex-shrink-0">
            <LocaleSwitcher />
            <Button href="/contact" size="sm">{t.nav.cta}</Button>
          </div>

          {/* Mobile: switcher + hamburger */}
          <div className="md:hidden flex items-center gap-2">
            <LocaleSwitcher />
            <button
              onClick={() => setMobileOpen(!mobileOpen)}
              className={`p-2 rounded-lg transition-colors 
                ${isLight ? 'text-slate-600 hover:text-slate-900 hover:bg-black/5' : 'text-slate-400 hover:text-white hover:bg-white/5'
                }`}
              aria-label="Abrir menu"
            >
              {mobileOpen ? <X size={22} /> : <Menu size={22} />}
            </button>
          </div>
        </nav>
      </motion.header>

      {/* Mobile Menu */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.25 }}
            className="fixed inset-0 z-40 md:hidden"
          >
            <div
              className={`absolute inset-0 ${isLight ? 'bg-white/95' : 'bg-dark-900/95'} backdrop-blur-xl`}
              onClick={() => setMobileOpen(false)}
            />
            <div className="relative z-10 flex flex-col items-center justify-center h-full gap-2">
              {navLinks.map((link, i) => (
                <motion.div
                  key={link.href}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: i * 0.07 }}
                >
                  <Link
                    href={link.href}
                    className={`block px-8 py-4 text-2xl font-sans font-700 tracking-tight transition-colors ${pathname === link.href
                      ? 'text-brand-400'
                      : isLight ? 'text-slate-500 hover:text-slate-900' : 'text-slate-400 hover:text-white'
                      }`}
                  >
                    {link.label}
                  </Link>
                </motion.div>
              ))}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: navLinks.length * 0.07 }}
                className="mt-6"
              >
                <Button href="/contact">{t.nav.cta}</Button>
              </motion.div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  )
}
