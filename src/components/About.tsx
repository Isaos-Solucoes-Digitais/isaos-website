'use client'

import { motion } from 'framer-motion'
import { SectionWrapper } from '@/components/common/SectionWrapper'
import CtaSection from '@/components/sections/CtaSection'
import { Heart, Rocket, Eye, Users } from 'lucide-react'
import { useI18n } from '@/i18n'


const valueIcons = [Heart, Rocket, Users, Eye]

const team = [
  { name: 'Osvaldo João', role: 'CEO & Co-fundador', initial: 'OJ', color: 'from-brand-500 to-brand-700' },
  { name: 'Dedaldino Daniel', role: 'CTO & Tech Lead', initial: 'DD', color: 'from-accent-500 to-accent-700' },
  { name: 'Samuel Kieto', role: 'Head of Electronic Security', initial: 'SK', color: 'from-amber-500 to-amber-700' },
  { name: 'Rossana Francisco', role: 'Assistente Comercial', initial: 'RF', color: 'from-purple-500 to-purple-700' },
]

export const About = () => {
  const { t } = useI18n()
  const a = t.about

  return (
    <>
      {/* Hero */}
      <section className="relative pt-40 pb-24 overflow-hidden bg-dark-900">
        <div className="absolute inset-0 bg-grid opacity-50" />
        <div className="absolute inset-0 bg-hero-glow" />
        <div className="absolute top-20 right-1/4 w-64 h-64 bg-brand-500/10 rounded-full blur-[80px]" />

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
            className="max-w-3xl"
          >
            <span className="inline-block text-brand-400 text-xs font-sans font-700 uppercase tracking-[0.2em] mb-6">
              {a.tag}
            </span>
            <h1 className="font-sans font-800 text-5xl sm:text-6xl md:text-7xl text-white tracking-tight mb-6 leading-tight">
              {a.title1}
              <br />
              <span className="gradient-text">{a.title2}</span>
            </h1>
            <p className="text-slate-400 text-xl font-body leading-relaxed">
              {a.intro}
            </p>
          </motion.div>
        </div>
      </section>

      {/* Story */}
      <SectionWrapper className="border-t border-white/5">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <span className="inline-block text-brand-400 text-xs font-sans font-700 uppercase tracking-[0.2em] mb-5">
              {a.storyTag}
            </span>
            <h2 className="font-sans font-800 text-3xl sm:text-4xl text-white tracking-tight mb-6">
              {a.storyTitle}
            </h2>
            <div className="space-y-4 text-slate-400 font-body leading-relaxed">
              <p>{a.story1}</p><p>{a.story2}</p><p>{a.story3}</p>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="grid grid-cols-2 gap-4"
          >
            {a.stats.map(({ number, label }) => (
              <div key={label} className="p-6 rounded-2xl border border-white/5 bg-dark-800 text-center">
                <div className="font-sans font-800 text-4xl text-white mb-2">{number}</div>
                <div className="text-slate-500 text-sm font-body">{label}</div>
              </div>
            ))}
          </motion.div>
        </div>
      </SectionWrapper>

      {/* Mission / Vision */}
      <SectionWrapper className="border-t border-white/5 bg-dark-800/30">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="p-8 rounded-2xl border border-brand-500/20 bg-brand-500/5"
          >
            <div className="w-10 h-10 rounded-xl bg-brand-500/20 flex items-center justify-center mb-5">
              <Rocket size={20} className="text-brand-400" />
            </div>
            <h3 className="font-sans font-700 text-white text-2xl mb-4">{a.missionTitle}</h3>
            <p className="text-slate-400 font-body leading-relaxed">
              {a.missionText}
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="p-8 rounded-2xl border border-accent-500/20 bg-accent-500/5"
          >
            <div className="w-10 h-10 rounded-xl bg-accent-500/20 flex items-center justify-center mb-5">
              <Eye size={20} className="text-accent-400" />
            </div>
            <h3 className="font-sans font-700 text-white text-2xl mb-4">{a.visionTitle}</h3>
            <p className="text-slate-400 font-body leading-relaxed">
              {a.visionText}
            </p>
          </motion.div>
        </div>
      </SectionWrapper>

      {/* Values */}
      <SectionWrapper className="border-t border-white/5">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <span className="inline-block text-brand-400 text-xs font-sans font-700 uppercase tracking-[0.2em] mb-4">
            {a.valuesTag}
          </span>
          <h2 className="font-sans font-800 text-4xl text-white tracking-tight mb-4">
            {a.valuesTitle}
          </h2>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {a.values.map(({ title, description }, i) => {
            const Icon = valueIcons[i]
            return (
              <motion.div key={title} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.1 }}
                className="p-6 rounded-2xl border border-white/5 bg-dark-800 text-center group hover:border-brand-500/20 transition-colors">
                <div className="w-12 h-12 rounded-xl bg-brand-500/10 flex items-center justify-center text-brand-400 mx-auto mb-5 group-hover:scale-110 transition-transform">
                  <Icon size={22} />
                </div>
                <h3 className="font-sans font-700 text-white text-lg mb-3">{title}</h3>
                <p className="text-slate-500 text-sm font-body leading-relaxed">{description}</p>
              </motion.div>
            )
          })}
        </div>
      </SectionWrapper>

      {/* Team */}
      <SectionWrapper className="border-t border-white/5 bg-dark-800/30">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <span className="inline-block text-brand-400 text-xs font-sans font-700 uppercase tracking-[0.2em] mb-4">
          {a.teamTag}
          </span>
          <h2 className="font-sans font-800 text-4xl text-white tracking-tight">
          {a.teamTitle}
          </h2>
        </motion.div>

        <div className="grid grid-cols-2 lg:grid-cols-4 gap-6">
          {team.map(({ name, role, initial, color }, i) => (
            <motion.div
              key={name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="text-center group"
            >
              <div className={`w-20 h-20 rounded-2xl bg-gradient-to-br ${color} flex items-center justify-center text-white font-sans font-800 text-2xl mx-auto mb-4 group-hover:scale-105 transition-transform`}>
                {initial}
              </div>
              <h3 className="font-sans font-700 text-white mb-1">{name}</h3>
              <p className="text-slate-500 text-sm font-body">{role}</p>
            </motion.div>
          ))}
        </div>
      </SectionWrapper>

      <CtaSection />
    </>
  )
}
