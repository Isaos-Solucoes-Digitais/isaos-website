'use client'

import { motion } from 'framer-motion'
import { ServiceCard } from '@/components/ui/ServiceCard'
import { Code2, Smartphone, Brain, Cctv, ShieldCheck, MonitorCheck } from 'lucide-react'
import { Button } from '@/components/ui/Button'
import { SectionWrapper } from '@/components/common/SectionWrapper'

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
    icon: <Cctv size={22} />,
    title: 'Segurança Electrônica',
    description: 'Proteja o seu espaço com sistemas modernos de vigilância, incluindo câmeras (CCTV), cercas elétricas e monitoramento inteligente.',
  },
  {
    icon: <ShieldCheck size={22} />,
    title: 'Segurança Informática (Cybersecurity)',
    description: 'Proteja o seu negócio com soluções licenciadas de segurança: antivírus corporativo, backup automatizado e ferramentas avançadas contra ameaças digitais.',
  },
  {
    icon: <MonitorCheck size={22} />,
    title: 'Software de Gestão',
    description: 'Otimize a gestão do seu negócio com softwares licenciados para controle de vendas, estoque, finanças e operações.',
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
          Combinamos expertise técnica com pensamento estratégico para entregar soluções que fazem a diferença no mercado angolano.
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
