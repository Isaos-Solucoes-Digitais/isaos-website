'use client'

import { motion } from 'framer-motion'
import { Button } from '@/components/ui/Button'
import { ArrowRight } from 'lucide-react'

export default function CtaSection() {
  return (
    <section className="relative py-32 overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-brand-900/40 via-dark-800 to-dark-900" />
      <div className="absolute inset-0 bg-grid opacity-50" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[400px] bg-brand-500/15 rounded-full blur-[100px]" />

      {/* Border lines */}
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-brand-500/40 to-transparent" />
      <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-brand-500/20 to-transparent" />

      <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
        >
          <span className="inline-block text-brand-400 text-xs font-sans font-700 uppercase tracking-[0.2em] mb-6">
            Pronto para começar?
          </span>

          <h2 className="font-sans font-800 text-4xl sm:text-5xl md:text-6xl text-white tracking-tight mb-6 leading-tight">
            Vamos construir o futuro
            <br />
            <span className="gradient-text">do seu negócio juntos</span>
          </h2>

          <p className="text-slate-400 text-xl font-body leading-relaxed mb-10 max-w-2xl mx-auto">
            Agende uma consulta gratuita com a nossa equipa e descubra como a tecnologia certa pode acelerar o crescimento da sua empresa.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Button href="/contact" size="lg">
              Iniciar Projecto Agora
              <ArrowRight size={18} />
            </Button>
            <Button
              href="https://wa.me/244923000000"
              variant="secondary"
              size="lg"
              external
            >
              Falar com um especialista
            </Button>
          </div>

          <p className="mt-8 text-slate-600 text-sm font-body">
            Consulta inicial gratuita · Sem compromisso · Resposta em 24h
          </p>
        </motion.div>
      </div>
    </section>
  )
}
