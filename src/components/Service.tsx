'use client'

import { motion } from 'framer-motion'
import { SectionWrapper } from '@/components/common/SectionWrapper'
import { Button } from '@/components/ui/Button'
import CtaSection from '@/components/sections/CtaSection'

import { CheckCircle, ArrowRight } from 'lucide-react'
import { servicesData } from '@/data/services'

export const Services = () => {

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
              Os nossos serviços
            </span>
            <h1 className="font-sans font-800 text-5xl sm:text-6xl md:text-7xl text-white tracking-tight mb-6">
              Soluções digitais
              <br />
              <span className="gradient-text">para cada necessidade</span>
            </h1>
            <p className="max-w-2xl mx-auto text-slate-400 text-xl font-body leading-relaxed">
              Do desenvolvimento à estratégia, cobrimos todo o espectro tecnológico para que a sua empresa possa focar no que realmente importa: crescer.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Services list */}
      <SectionWrapper className="border-t border-white/5">
        <div className="space-y-12">
          {servicesData.map(({ id, icon: Icon, title, subtitle, color, accentColor, borderColor, description, benefits }, i) => (
            <motion.div
              key={id}
              id={id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className={`relative p-8 rounded-3xl border ${borderColor} bg-gradient-to-br ${color} overflow-hidden`}
            >
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-start">
                {/* Left */}
                <div>
                  <div className={`inline-flex items-center gap-2 mb-5 ${accentColor}`}>
                    <Icon size={20} />
                    <span className="text-xs font-sans font-700 uppercase tracking-widest">{subtitle}</span>
                  </div>
                  <h2 className="font-sans font-800 text-3xl text-white mb-5">{title}</h2>
                  <p className="text-slate-400 font-body leading-relaxed mb-8">{description}</p>
                  <Button href="/contact" size="md">
                    Solicitar este serviço
                    <ArrowRight size={16} />
                  </Button>
                </div>

                {/* Right - Benefits */}
                <div>
                  <h3 className="font-sans font-700 text-white text-sm uppercase tracking-wider mb-5 opacity-60">
                    Incluído no serviço
                  </h3>
                  <ul className="space-y-3">
                    {benefits.map((benefit) => (
                      <li key={benefit} className="flex items-center gap-3 text-slate-300 font-body text-sm">
                        <CheckCircle size={16} className={`${accentColor} flex-shrink-0`} />
                        {benefit}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </SectionWrapper>

      <CtaSection />
    </>
  )
}
