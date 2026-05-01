'use client'

import { motion } from 'framer-motion'
import ServiceCard from '@/components/ui/ServiceCard'
import { Code2, Smartphone, Brain, Cloud, BarChart3, Layers } from 'lucide-react'
import Button from '@/components/ui/Button'
import SectionWrapper from '@/components/ui/SectionWrapper'

const services = [
  {
    icon: <Code2 size={22} />,
    title: 'Desenvolvimento Web',
    description: 'Websites e plataformas web de alta performance, desde landing pages a sistemas empresariais complexos, com as tecnologias mais modernas do mercado.',
  },
  {
    icon: <Smartphone size={22} />,
    title: 'Apps Mobile',
    description: 'Aplicações nativas e híbridas para iOS e Android que oferecem experiências excepcionais aos seus utilizadores, integrando com os seus sistemas existentes.',
  },
  {
    icon: <Brain size={22} />,
    title: 'Automação & IA',
    description: 'Soluções de inteligência artificial e automação de processos que reduzem custos operacionais e aumentam a eficiência do seu negócio.',
  },
  {
    icon: <Cloud size={22} />,
    title: 'Cloud & DevOps',
    description: 'Arquitectura de nuvem escalável, pipelines CI/CD e gestão de infraestrutura para garantir disponibilidade máxima e performance óptima.',
  },
  {
    icon: <BarChart3 size={22} />,
    title: 'Business Intelligence',
    description: 'Dashboards interactivos e relatórios avançados que transformam dados em decisões estratégicas para o crescimento do seu negócio.',
  },
  {
    icon: <Layers size={22} />,
    title: 'Consultoria Digital',
    description: 'Estratégia e consultoria tecnológica personalizada para alinhar a transformação digital da sua empresa com os seus objectivos de negócio.',
  },
]

export default function ServicesSection() {
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
          O que fazemos
        </span>
        <h2 className="font-sans font-800 text-4xl sm:text-5xl text-white tracking-tight mb-5">
          Soluções para cada
          <br />
          <span className="gradient-text-blue">desafio digital</span>
        </h2>
        <p className="max-w-xl mx-auto text-slate-500 font-body text-lg leading-relaxed">
          Combinamos expertise técnica com pensamento estratégico para entregar soluções que fazem a diferença no mercado angolano e africano.
        </p>
      </motion.div>

      {/* Cards grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 mb-12">
        {services.map((service, index) => (
          <ServiceCard key={service.title} {...service} index={index} />
        ))}
      </div>

      {/* CTA */}
      <div className="text-center">
        <Button href="/services" variant="secondary" size="lg">
          Ver todos os serviços
        </Button>
      </div>
    </SectionWrapper>
  )
}
