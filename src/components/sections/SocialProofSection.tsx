'use client'

import { motion } from 'framer-motion'
import { SectionWrapper } from '@/components/common/SectionWrapper'
import { Star, Quote } from 'lucide-react'
import { useI18n } from '@/i18n'
import { LogoAlfa ,LogoTitanium } from '@/assets/logos'
import type { Testimonial } from '@/types'



const testimonials: Testimonial [] = []

const clientLogos = [
  { name: 'Titanium AO', Logo: LogoTitanium },
  { name: 'Águia Alfa', Logo: LogoAlfa },
]

const ticker = [...clientLogos]


export default function SocialProofSection() {
  const { t } = useI18n()

  return (
    <SectionWrapper className="border-t border-white/5">
      {/* Header */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="text-center mb-16"
      >
        <span className="inline-block text-brand-400 text-xs font-sans font-700 uppercase tracking-[0.2em] mb-4">
          {t.social.tag}
        </span>
        <h2 className="font-sans font-800 text-4xl sm:text-5xl text-white tracking-tight mb-5">
          {t.social.title1}
          <br />
          <span className="gradient-text-blue">{t.social.title2}</span>
        </h2>
        <p className="max-w-lg mx-auto text-slate-500 font-body text-lg">
          {t.social.sub}
        </p>
      </motion.div>

      {/* Testimonials */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-16">
        {testimonials.map(({ name, role, initial, color, rating, text }, i) => (
          <motion.div
            key={name}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.1 }}
            className="relative p-6 rounded-2xl border border-white/5 bg-dark-800 card-hover"
          >
            {/* Quote icon */}
            <Quote size={24} className="text-brand-500/30 mb-4" />

            {/* Stars */}
            <div className="flex gap-1 mb-4">
              {Array.from({ length: rating }).map((_, j) => (
                <Star key={j} size={14} fill="currentColor" className="text-amber-400" />
              ))}
            </div>

            {/* Text */}
            <p className="text-slate-400 text-sm font-body leading-relaxed mb-6">
              "{text}"
            </p>

            {/* Author */}
            <div className="flex items-center gap-3">
              <div className={`w-10 h-10 rounded-xl bg-gradient-to-br ${color} flex items-center justify-center text-white font-sans font-700 text-sm`}>
                {initial}
              </div>
              <div>
                <div className="font-sans font-700 text-white text-sm">{name}</div>
                <div className="text-slate-500 text-xs font-body">{role}</div>
              </div>
            </div>
          </motion.div>
        ))}
      </div>

      {/* Client logos strip */}
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="border-t border-white/5 pt-12"
      >
        <p className="text-center text-slate-600 text-xs font-sans font-600 uppercase tracking-[0.2em] mb-10">
          {t.social.clientsLabel}
        </p>
        <div className="flex flex-wrap items-center justify-center gap-6 md:gap-10">
          {clientLogos.map(({ Logo, name }, i) => (
            <motion.div
              key={name}
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.05 }}
              className="font-sans font-700 text-slate-600 hover:text-slate-400 text-lg tracking-tight transition-colors duration-200 cursor-default"
            >
              <Logo />
            </motion.div>
          ))}
        </div>
        {/* Fade mask nas bordas */}
        {/* <div
          className="relative overflow-hidden"
          style={{
            maskImage:
              'linear-gradient(to right, transparent 0%, black 8%, black 92%, transparent 100%)',
            WebkitMaskImage:
              'linear-gradient(to right, transparent 0%, black 8%, black 92%, transparent 100%)',
          }}
        >
          <motion.div
            className="flex items-center w-max"
            animate={{ x: ['0px', '-50%'] }}
            transition={{
              repeat: Infinity,
              repeatType: 'loop',
              duration: 36,
              ease: 'linear',
            }}
            style={{ willChange: 'transform' }}
          >
            {ticker.map(({ name, Logo }, i) => (
              <div
                key={`${name}-${i}`}
                className="
                  flex-shrink-0 flex items-center justify-center
                  px-10 h-18 mx-2
                  text-slate-600
                  hover:text-slate-300
                  transition-colors duration-300
                  cursor-default
                "
                title={name}
              >
                <Logo />
              </div>
            ))}
          </motion.div>
        </div> */}
      </motion.div>
    </SectionWrapper>
  )
}
