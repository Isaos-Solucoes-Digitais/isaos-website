'use client'

import { motion } from 'framer-motion'
import { Button } from '@/components/ui/Button'
import { ArrowRight, Zap, Shield, Globe } from 'lucide-react'

const badges = [
  { icon: Zap, label: 'Alta Performance' },
  { icon: Shield, label: 'Seguro & Escalável' },
  { icon: Globe, label: 'Presença Global' },
]

const stats = [
  { value: '10+', label: 'Projectos entregues' },
  { value: '100%', label: 'Compromisso com Qualidade' },
  { value: '15+', label: 'Clientes satisfeitos' }, 
]

export default function HeroSection() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-dark-900">
      {/* Background grid */}
      <div className="absolute inset-0 bg-grid opacity-100" />

      {/* Hero glow */}
      <div className="absolute inset-0 bg-hero-glow" />

      {/* Animated orbs */}
      <div className="absolute top-1/4 left-1/4 w-72 h-72 bg-brand-500/20 rounded-full blur-[100px] animate-pulse-slow" />
      <div className="absolute bottom-1/3 right-1/4 w-96 h-96 bg-accent-500/10 rounded-full blur-[120px] animate-pulse-slow" style={{ animationDelay: '2s' }} />

      {/* Floating geometric shapes */}
      <div className="absolute top-20 right-20 w-2 h-2 bg-brand-400 rounded-full animate-float opacity-60" style={{ animationDelay: '0s' }} />
      <div className="absolute top-40 left-32 w-1 h-1 bg-accent-400 rounded-full animate-float opacity-40" style={{ animationDelay: '1s' }} />
      <div className="absolute bottom-32 right-32 w-3 h-3 border border-brand-500/40 rounded-full animate-float opacity-30" style={{ animationDelay: '2s' }} />
      <div className="absolute bottom-48 left-20 w-2 h-2 bg-brand-300 rounded-full animate-float opacity-20" style={{ animationDelay: '1.5s' }} />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-32 pb-20 text-center">
        {/* Badge */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="inline-flex items-center gap-2 mb-8 px-4 py-2 rounded-full border border-brand-500/30 bg-brand-500/10 text-brand-300 text-sm font-sans font-600"
        >
          <span className="w-2 h-2 bg-accent-400 rounded-full animate-pulse" />
          Startup de Tecnologia · Luanda, Angola
        </motion.div>

        {/* Headline */}
        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.1 }}
          className="font-sans font-800 text-5xl sm:text-6xl md:text-7xl lg:text-8xl tracking-tight leading-[0.95] mb-6"
        >
          <span className="text-white">Soluções digitais</span>
          <br />
          <span className="gradient-text">que Transformam</span>
          <br />
          <span className="text-white">Negócios</span>
        </motion.h1>

        {/* Subheadline */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.25 }}
          className="max-w-2xl mx-auto text-slate-400 text-lg sm:text-xl font-body leading-relaxed mb-10"
        >
          Desenvolvemos desde soluções inovadoras à proteção contra ameaças digitais que impulsionam o crescimento da sua empresa.
          Nós entregamos inovação, segurança e eficiência com resultados que superam expectativas.
        </motion.p>

        {/* CTA Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.35 }}
          className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-16"
        >
          <Button href="/contact" size="lg">
            Solicitar Orçamento
            <ArrowRight size={18} />
          </Button>
          <Button
            href="https://wa.me/244923000000?text=Olá ISAOS! Gostaria de falar sobre um projecto."
            variant="secondary"
            size="lg"
            external
          >
            <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
              <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
            </svg>
            Falar no WhatsApp
          </Button>
        </motion.div>

        {/* Stats */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.45 }}
          className="flex flex-col sm:flex-row items-center justify-center gap-8 sm:gap-12 mb-16"
        >
          {stats.map(({ value, label }) => (
            <div key={label} className="text-center">
              <div className="font-sans font-800 text-3xl text-white mb-1">{value}</div>
              <div className="text-slate-500 text-sm font-body">{label}</div>
            </div>
          ))}
        </motion.div>

        {/* Feature badges */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.55 }}
          className="flex flex-wrap items-center justify-center gap-3"
        >
          {badges.map(({ icon: Icon, label }) => (
            <div
              key={label}
              className="flex items-center gap-2 px-4 py-2 rounded-xl border border-white/5 bg-white/[0.03] text-slate-500 text-xs font-sans font-500"
            >
              <Icon size={14} className="text-brand-400" />
              {label}
            </div>
          ))}
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2"
      >
        
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ repeat: Infinity, duration: 1.5 }}
          className="w-px h-8 bg-gradient-to-b from-brand-500/50 to-transparent"
        />
      </motion.div>
    </section>
  )
}
