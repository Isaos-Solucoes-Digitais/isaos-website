'use client'

import { motion } from 'framer-motion'
import SectionWrapper from '@/components/ui/SectionWrapper'
import CtaSection from '@/components/sections/CtaSection'
import { Heart, Rocket, Eye, Users } from 'lucide-react'

const values = [
  {
    icon: Heart,
    title: 'Integridade',
    description: 'Transparência e honestidade em cada interacção, com clientes, parceiros e colaboradores.',
  },
  {
    icon: Rocket,
    title: 'Inovação',
    description: 'Adoptamos continuamente novas tecnologias para manter os nossos clientes na vanguarda.',
  },
  {
    icon: Users,
    title: 'Colaboração',
    description: 'Trabalho em equipa e co-criação com os clientes para soluções verdadeiramente personalizadas.',
  },
  {
    icon: Eye,
    title: 'Excelência',
    description: 'Comprometimento com os mais altos padrões de qualidade em tudo o que fazemos.',
  },
]

const team = [
  { name: 'Isaac Sebastião', role: 'CEO & Co-fundador', initial: 'IS', color: 'from-brand-500 to-brand-700' },
  { name: 'Ana Oliveira', role: 'CTO', initial: 'AO', color: 'from-accent-500 to-accent-700' },
  { name: 'Carlos Neto', role: 'Lead Designer', initial: 'CN', color: 'from-purple-500 to-purple-700' },
  { name: 'Beatriz Sousa', role: 'Head of Engineering', initial: 'BS', color: 'from-amber-500 to-amber-700' },
]

export default function AboutContent() {
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
              Sobre a ISAOS
            </span>
            <h1 className="font-sans font-800 text-5xl sm:text-6xl md:text-7xl text-white tracking-tight mb-6 leading-tight">
              A história por trás
              <br />
              <span className="gradient-text">da tecnologia</span>
            </h1>
            <p className="text-slate-400 text-xl font-body leading-relaxed">
              Nascemos em Luanda com uma missão clara: democratizar o acesso a soluções digitais de qualidade internacional para empresas angolanas e africanas.
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
              A nossa história
            </span>
            <h2 className="font-sans font-800 text-3xl sm:text-4xl text-white tracking-tight mb-6">
              Do sonho à realidade digital
            </h2>
            <div className="space-y-4 text-slate-400 font-body leading-relaxed">
              <p>
                A ISAOS foi fundada em 2019 por um grupo de engenheiros angolanos que partilhavam uma visão: criar uma empresa de tecnologia de classe mundial em solo africano.
              </p>
              <p>
                Começámos com pequenos projectos para startups locais, mas rapidamente crescemos para servir empresas de médio e grande porte em Angola e além-fronteiras.
              </p>
              <p>
                Hoje, somos reconhecidos como uma das empresas de desenvolvimento de software mais inovadoras de Angola, com um portfólio diversificado que inclui plataformas fintech, sistemas de saúde, e-commerce e soluções empresariais.
              </p>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="grid grid-cols-2 gap-4"
          >
            {[
              { number: '2019', label: 'Ano de fundação' },
              { number: '50+', label: 'Projectos entregues' },
              { number: '20+', label: 'Clientes activos' },
              { number: '15+', label: 'Especialistas na equipa' },
            ].map(({ number, label }) => (
              <div
                key={label}
                className="p-6 rounded-2xl border border-white/5 bg-dark-800 text-center"
              >
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
            <h3 className="font-sans font-700 text-white text-2xl mb-4">Missão</h3>
            <p className="text-slate-400 font-body leading-relaxed">
              Desenvolver soluções digitais inovadoras e acessíveis que permitam às empresas angolanas e africanas competir a nível global, utilizando tecnologia como alavanca de crescimento sustentável.
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
            <h3 className="font-sans font-700 text-white text-2xl mb-4">Visão</h3>
            <p className="text-slate-400 font-body leading-relaxed">
              Ser reconhecida até 2030 como a empresa de tecnologia de referência em África, criando um ecossistema digital robusto que contribua para a transformação económica e social do continente.
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
            Os nossos valores
          </span>
          <h2 className="font-sans font-800 text-4xl text-white tracking-tight mb-4">
            O que nos guia todos os dias
          </h2>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {values.map(({ icon: Icon, title, description }, i) => (
            <motion.div
              key={title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="p-6 rounded-2xl border border-white/5 bg-dark-800 text-center group hover:border-brand-500/20 transition-colors"
            >
              <div className="w-12 h-12 rounded-xl bg-brand-500/10 flex items-center justify-center text-brand-400 mx-auto mb-5 group-hover:scale-110 transition-transform">
                <Icon size={22} />
              </div>
              <h3 className="font-sans font-700 text-white text-lg mb-3">{title}</h3>
              <p className="text-slate-500 text-sm font-body leading-relaxed">{description}</p>
            </motion.div>
          ))}
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
            A nossa equipa
          </span>
          <h2 className="font-sans font-800 text-4xl text-white tracking-tight">
            As pessoas por trás da ISAOS
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
