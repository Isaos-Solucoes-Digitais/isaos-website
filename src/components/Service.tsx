'use client'

import { motion } from 'framer-motion'
import { SectionWrapper } from '@/components/common/SectionWrapper'
import { Button } from '@/components/ui/Button'
import CtaSection from '@/components/sections/CtaSection'

import { CheckCircle, ArrowRight } from 'lucide-react'
import {
  Code2, Smartphone, Brain, MonitorCheck, ShieldCheck, Cctv
} from 'lucide-react'


export const servicesData = [
  {
    id: 'web',
    icon: Code2,
    title: 'Desenvolvimento Web',
    subtitle: 'Presença digital de alto impacto',
    color: 'from-brand-500/20 to-brand-600/5',
    accentColor: 'text-brand-400',
    borderColor: 'border-brand-500/20',
    description:
      'Criamos websites e plataformas web de alto desempenho que não apenas impressionam visualmente, mas convertem visitantes em clientes. Utilizamos as tecnologias mais modernas como Next.js, React e Node.js para garantir performance, escalabilidade e segurança.',
    benefits: [
      'Design responsivo e mobile-first',
      'Optimização SEO avançada',
      'Velocidade de carregamento ultrarrápida',
      'Integração com sistemas existentes',
      'Painel de administração intuitivo',
      'Manutenção e suporte contínuos',
    ],
  },
  {
    id: 'mobile',
    icon: Smartphone,
    title: 'Aplicações Mobile',
    subtitle: 'iOS & Android de excelência',
    color: 'from-purple-500/20 to-purple-600/5',
    accentColor: 'text-purple-400',
    borderColor: 'border-purple-500/20',
    description:
      'Desenvolvemos aplicações mobile nativas e híbridas que proporcionam experiências excepcionais. Da ideia ao lançamento nas stores, tratamos de todo o processo com foco na usabilidade e performance.',
    benefits: [
      'Apps nativas iOS e Android',
      'React Native e Flutter',
      'UX/UI focado na experiência do utilizador',
      'Integração com APIs e backends',
      'Publicação nas app stores',
      'Actualizações e melhorias contínuas',
    ],
  },
  {
    id: 'ai',
    icon: Brain,
    title: 'Automação & IA',
    subtitle: 'Inteligência ao serviço do negócio',
    color: 'from-accent-500/20 to-accent-600/5',
    accentColor: 'text-accent-400',
    borderColor: 'border-accent-500/20',
    description:
      'Integramos inteligência artificial e automação de processos para eliminar tarefas repetitivas, reduzir erros humanos e liberar a sua equipa para trabalho de maior valor. Desde chatbots a sistemas de recomendação personalizados.',
    benefits: [
      'Chatbots e assistentes virtuais',
      'Processamento de linguagem natural',
      'Automação de processos (RPA)',
      'Análise preditiva e machine learning',
      'Integração com modelos de IA existentes',
      'Soluções personalizadas ao contexto africano',
    ],
  },
  {
    id: 'cybersecurity',
    icon: ShieldCheck,
    title: 'CyberSegurança',
    subtitle: 'Segurança digital',
    color: 'from-sky-500/20 to-sky-600/5',
    accentColor: 'text-sky-400',
    borderColor: 'border-sky-500/20',
    description:
      'Fornecemos e implementamos soluções de segurança digital através de licenças de software, incluindo antivírus corporativo, sistemas de backup e ferramentas de proteção contra ameaças cibernéticas.',
    benefits: [
      'Proteção contra vírus, malware e ataques',
      'Segurança de dados com backup confiável',
      'Continuidade do negócio em caso de falhas',
      'Redução de riscos e perdas digitais',
      'Conformidade com normas e boas práticas de segurança',
      'Aumento da confiança de clientes e parceiros'
    ],
  },
  {
    id: 'security',
    icon: Cctv,
    title: 'Segurança Electrônica',
    subtitle: 'Protecção de seus bens',
    color: 'from-amber-500/20 to-amber-600/5',
    accentColor: 'text-amber-400',
    borderColor: 'border-amber-500/20',
    description:
      'Fornecemos e implementamos soluções completas de segurança eletrônica, incluindo sistemas de CCTV, cercas elétricas e rastreamento por GPS, garantindo proteção para residências, empresas e patrimônios.',
    benefits: [
      'Monitoramento 24/7 de ambientes físicos',
      'Maior proteção contra invasões e roubos',
      'Controle e rastreamento em tempo real',
      'Registro de imagens para auditoria e investigação',
      'Resposta rápida a incidentes de segurança',
      'Tranquilidade e segurança para o seu espaço',
    ],
  },
  {
    id: 'software',
    icon: MonitorCheck,
    title: 'Software de Gestão',
    subtitle: 'Automação de processos',
    color: 'from-rose-500/20 to-rose-600/5',
    accentColor: 'text-rose-400',
    borderColor: 'border-rose-500/20',
    description:
      'Fornecemos e implementamos sistemas de gestão através de licenças de software, ajudando empresas a automatizar processos, controlar operações e melhorar a eficiência.',
    benefits: [
      'Controle total de vendas e estoque',
      'Automação de processos operacionais e administrativos',
      'Aumento da produtividade e eficiência da equipe',
      'Melhoria na tomada de decisões com dados em tempo real',
      'Redução de erros humanos e retrabalho',
      'Escalabilidade para crescimento do negócio',
    ],
  },
]


export const Services = () => {

  return (
    <>
      {/* Hero */}
      <section className="relative pt-40 pb-24 overflow-hidden bg-dark-900">
        <div className="absolute inset-0 bg-grid opacity-50" />
        <div className="absolute inset-0 bg-hero-glow" />
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
          >
            <span className="inline-block text-brand-400 text-xs font-sans font-700 uppercase tracking-[0.2em] mb-6">
              Os nossos serviços
            </span>
            <h1 className="font-sans font-800 text-5xl sm:text-6xl md:text-7xl text-white tracking-tight mb-6">
              Soluções digitais
              <br />
              <span className="gradient-text">para cada necessidade</span>
            </h1>
            <p className="max-w-2xl mx-auto text-slate-400 text-xl font-body leading-relaxed">
              Do desenvolvimento à estratégia, cobrimos todo o espectro tecnológico para que a sua empresa possa focar no que realmente importa: crescer.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Services list */}
      <SectionWrapper className="border-t border-white/5">
        <div className="space-y-12">
          {servicesData.map(({ id, icon: Icon, title, subtitle, color, accentColor, borderColor, description, benefits }, i) => (
            <motion.div
              key={id}
              id={id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className={`relative p-8 rounded-3xl border ${borderColor} bg-gradient-to-br ${color} overflow-hidden`}
            >
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-start">
                {/* Left */}
                <div>
                  <div className={`inline-flex items-center gap-2 mb-5 ${accentColor}`}>
                    <Icon size={20} />
                    <span className="text-xs font-sans font-700 uppercase tracking-widest">{subtitle}</span>
                  </div>
                  <h2 className="font-sans font-800 text-3xl text-white mb-5">{title}</h2>
                  <p className="text-slate-400 font-body leading-relaxed mb-8">{description}</p>
                  <Button href="/contact" size="md">
                    Solicitar este serviço
                    <ArrowRight size={16} />
                  </Button>
                </div>

                {/* Right - Benefits */}
                <div>
                  <h3 className="font-sans font-700 text-white text-sm uppercase tracking-wider mb-5 opacity-60">
                    Incluído no serviço
                  </h3>
                  <ul className="space-y-3">
                    {benefits.map((benefit) => (
                      <li key={benefit} className="flex items-center gap-3 text-slate-300 font-body text-sm">
                        <CheckCircle size={16} className={`${accentColor} flex-shrink-0`} />
                        {benefit}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </SectionWrapper>

      <CtaSection />
    </>
  )
}
