'use client'

import { motion } from 'framer-motion'
import { ServiceCard } from '@/components/ui/ServiceCard'
import { Code2, Smartphone, Brain, Cctv, ShieldCheck, MonitorCheck } from 'lucide-react'
import { Button } from '@/components/ui/Button'
import { SectionWrapper } from '@/components/common/SectionWrapper'
import { useI18n } from '@/i18n'


const icons = [Code2, Smartphone, Brain, Cctv, ShieldCheck, MonitorCheck]

export default function ServicesSection() {
  const { t } = useI18n()

  return (
    <SectionWrapper id="services" className="border-t border-white/5">
      {/* Header */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="text-center mb-16"
      >
        <span className="inline-block text-brand-400 text-xs font-sans font-700 uppercase tracking-[0.2em] mb-4">
          {t.services.tag}
        </span>
        <h2 className="font-sans font-800 text-4xl sm:text-5xl text-white tracking-tight mb-5">
          {t.services.title1}
          <br />
          <span className="gradient-text-blue">{t.services.title2}</span>
        </h2>
        <p className="max-w-xl mx-auto text-slate-500 font-body text-lg leading-relaxed">
          {t.services.sub}
        </p>
      </motion.div>

      {/* Cards grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 mb-12">
        {t.services.items.map(({ title, description }, index) => {
          const Icon = icons[index];

          return (
            <ServiceCard
              key={title}
              title={title}
              description={description}
              icon={icons[index] ? <Icon size={22} /> : null}
              index={index} />
          )
        }


        )}
      </div>

      {/* CTA */}
      <div className="text-center">
        <Button href="/services" variant="secondary" size="lg">
          {t.services.cta}
        </Button>
      </div>
    </SectionWrapper>
  )
}
