'use client'

import { motion } from 'framer-motion'
import { SectionWrapper } from '@/components/common/SectionWrapper'
import { Star, Quote } from 'lucide-react'

const testimonials = [
  {
    name: 'Maria João Santos',
    role: 'CEO, Grupo MJS',
    initial: 'MJ',
    color: 'from-brand-500 to-brand-700',
    rating: 5,
    text: 'A ISAOS transformou completamente a nossa presença digital. Entregaram uma plataforma e-commerce robusta que aumentou as nossas vendas em 40% nos primeiros três meses.',
  },
  {
    name: 'António Carvalho',
    role: 'Director de TI, BancAO',
    initial: 'AC',
    color: 'from-accent-500 to-accent-700',
    rating: 5,
    text: 'Profissionalismo exemplar e código de altíssima qualidade. A aplicação mobile que desenvolveram para os nossos clientes superou todas as expectativas em desempenho e usabilidade.',
  },
  {
    name: 'Filipa Mendes',
    role: 'Fundadora, FreshMarket',
    initial: 'FM',
    color: 'from-purple-500 to-purple-700',
    rating: 5,
    text: 'Desde o primeiro contacto até ao lançamento, a equipa da ISAOS foi absolutamente excepcional. Cumpriram o prazo, respeitaram o orçamento e o resultado ficou fantástico.',
  },
]

const clients = ['Grupo MJS', 'BancAO', 'FreshMarket', 'TelcoAO', 'HealthPlus', 'EduTech Angola']

export default function SocialProofSection() {
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
          Prova Social
        </span>
        <h2 className="font-sans font-800 text-4xl sm:text-5xl text-white tracking-tight mb-5">
          O que dizem
          <br />
          <span className="gradient-text-blue">os nossos clientes</span>
        </h2>
        <p className="max-w-lg mx-auto text-slate-500 font-body text-lg">
          A satisfação dos nossos clientes é o melhor indicador do nosso trabalho.
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
        className="border-t border-white/5 pt-12"
      >
        <p className="text-center text-slate-600 text-xs font-sans font-600 uppercase tracking-[0.2em] mb-8">
          Empresas que confiam em nós
        </p>
        <div className="flex flex-wrap items-center justify-center gap-6 md:gap-10">
          {clients.map((client, i) => (
            <motion.div
              key={client}
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.05 }}
              className="font-sans font-700 text-slate-600 hover:text-slate-400 text-lg tracking-tight transition-colors duration-200 cursor-default"
            >
              {client}
            </motion.div>
          ))}
        </div>
      </motion.div>
    </SectionWrapper>
  )
}
