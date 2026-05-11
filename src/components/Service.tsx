'use client'

import { motion } from 'framer-motion'
import { SectionWrapper } from '@/components/common/SectionWrapper'
import { Button } from '@/components/ui/Button'
import CtaSection from '@/components/sections/CtaSection'

import { CheckCircle, ArrowRight } from 'lucide-react'
import {
  Code2, Smartphone, Brain, MonitorCheck, ShieldCheck, Cctv
} from 'lucide-react'
import { useI18n } from '@/i18n'


const icons = [Code2, Smartphone, Brain, ShieldCheck, Cctv, MonitorCheck]
const ids = ['web', 'mobile', 'ai', 'cybersecurity', 'security', 'software']
const colors = [
  { bg: 'from-brand-500/20 to-brand-600/5', accent: 'text-brand-400', border: 'border-brand-500/20' },
  { bg: 'from-purple-500/20 to-purple-600/5', accent: 'text-purple-400', border: 'border-purple-500/20' },
  { bg: 'from-accent-500/20 to-accent-600/5', accent: 'text-accent-400', border: 'border-accent-500/20' },
  { bg: 'from-sky-500/20 to-sky-600/5', accent: 'text-sky-400', border: 'border-sky-500/20' },
  { bg: 'from-amber-500/20 to-amber-600/5', accent: 'text-amber-400', border: 'border-amber-500/20' },
  { bg: 'from-rose-500/20 to-rose-600/5', accent: 'text-rose-400', border: 'border-rose-500/20' },
]


export const Services = () => {
  const { t } = useI18n()

  return (
    <>
      {/* Hero */}
      <section className="relative pt-40 pb-24 overflow-hidden bg-dark-900">
        <div className="absolute inset-0 bg-grid opacity-50" />
        <div className="absolute inset-0 bg-hero-glow" />
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
          >
            <span className="inline-block text-brand-400 text-xs font-sans font-700 uppercase tracking-[0.2em] mb-6">
              {t.services.tag}
            </span>
            <h1 className="font-sans font-800 text-5xl sm:text-6xl md:text-7xl text-white tracking-tight mb-6">
              {t.services.title1}<br /><span className="gradient-text">{t.services.title2}</span>
            </h1>
            <p className="max-w-2xl mx-auto text-slate-400 text-xl font-body leading-relaxed">
              {t.services.sub}
            </p>
          </motion.div>
        </div>
      </section>

      {/* Services list */}
      <SectionWrapper className="border-t border-white/5">
        <div className="space-y-12">
          {t.serviceContent.services.map((service, i) => {
            const Icon = icons[i]
            const { bg, accent, border } = colors[i]
            return (
              <motion.div
                key={service.title}
                id={ids[i]}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5 }}
                className={`relative p-8 rounded-3xl border ${border} bg-gradient-to-br ${bg} overflow-hidden`}
              >
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-start">
                  <div>
                    <div className={`inline-flex items-center gap-2 mb-5 ${accent}`}>
                      <Icon size={20} />
                      <span className="text-xs font-sans font-700 uppercase tracking-widest">{service.title}</span>
                    </div>
                    <h2 className="font-sans font-800 text-3xl text-white mb-5">{service.title}</h2>
                    <p className="text-slate-400 font-body leading-relaxed mb-8">{service.description}</p>
                    <Button href="/contact" size="md">
                      {t.cta.btn1} <ArrowRight size={16} />
                    </Button>
                  </div>
                  <div>
                    <h3 className="font-sans font-700 text-white text-sm uppercase tracking-wider mb-5 opacity-60">
                      Incluído
                    </h3>
                    <ul className="space-y-3">
                      {service.benefits.map((b) => (
                        <li key={b} className={`flex items-center gap-3 text-slate-300 font-body text-sm`}>
                          <CheckCircle size={16} className={`${accent} flex-shrink-0`} />
                          {b}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </motion.div>
            )
          })}
        </div>
      </SectionWrapper>

      <CtaSection />
    </>
  )
}
