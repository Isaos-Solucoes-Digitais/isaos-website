'use client'

import { motion } from 'framer-motion'
import { SectionWrapper } from '@/components/common/SectionWrapper'
import { Target, Clock, Users, Award, Lightbulb, HeartHandshake } from 'lucide-react'
import { useI18n } from '@/i18n'

const icons = [Target, Clock, Users, Award, Lightbulb, HeartHandshake]


export default function DifferentialsSection() {
  const { t } = useI18n()

  return (
    <SectionWrapper className="relative overflow-hidden">
      {/* Background accent */}
      <div className="absolute inset-0 bg-gradient-to-b from-dark-800/50 to-transparent pointer-events-none" />
      <div className="absolute right-0 top-0 w-[500px] h-[500px] bg-brand-500/5 rounded-full blur-[120px]" />

      <div className="relative z-10">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="max-w-xl mb-16"
        >
          <span className="inline-block text-accent-400 text-xs font-sans font-700 uppercase tracking-[0.2em] mb-4">
            {t.differentials.tag}
          </span>
          <h2 className="font-sans font-800 text-4xl sm:text-5xl text-white tracking-tight mb-5">
            {t.differentials.title1}
            <br />
            <span className="gradient-text">{t.differentials.title2}</span>
          </h2>
          <p className="text-slate-500 font-body text-lg leading-relaxed">
            {t.differentials.sub}
          </p>
        </motion.div>

        {/* Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {t.differentials.items.map(({ title, description }, i) => {
            const Icon = icons[i]
            return (
              <motion.div
                key={title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.08 }}
                className="group flex gap-5 p-6 rounded-2xl border border-white/5 bg-dark-800/50 hover:border-brand-500/20 hover:bg-dark-700/50 transition-all duration-300"
              >
                <div className="flex-shrink-0 w-10 h-10 rounded-xl bg-brand-500/10 flex items-center justify-center text-brand-400 group-hover:scale-110 transition-transform duration-300">
                  <Icon size={20} />
                </div>
                <div>
                  <h3 className="font-sans font-700 text-white mb-2">{title}</h3>
                  <p className="text-slate-500 text-sm font-body leading-relaxed">{description}</p>
                </div>
              </motion.div>
            )

          }
          )}
        </div>
      </div>
    </SectionWrapper>
  )
}
