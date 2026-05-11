'use client'

import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { SectionWrapper } from '@/components/common/SectionWrapper'
import CtaSection from '@/components/sections/CtaSection'
import { ExternalLink, Code2, Smartphone, Brain, MonitorCheck } from 'lucide-react'
import { useI18n } from '@/i18n'


const projects = [
  { id: 1, title: 'BancAO Digital Banking', catKey: 'Web', description: 'Plataforma de banca digital completa com gestão de contas, transferências, pagamentos e relatórios em tempo real.', techs: ['Next.js', 'Node.js', 'PostgreSQL', 'Redis'], color: 'from-brand-600 to-brand-900', icon: Code2, result: 'Redução de 60% nas visitas às agências físicas' },
  { id: 2, title: 'FreshMarket App', catKey: 'Mobile', description: 'Marketplace para compra e entrega de produtos frescos, conectando produtores locais a consumidores.', techs: ['React Native', 'Firebase', 'Stripe', 'Google Maps'], color: 'from-accent-600 to-accent-900', icon: Smartphone, result: '+2.000 utilizadores activos no primeiro mês' },
  { id: 3, title: 'HealthPlus Patient AI', catKey: 'IA & Automação', description: 'Sistema de triagem inteligente para clínicas, utilizando IA para análise de sintomas.', techs: ['Python', 'TensorFlow', 'FastAPI', 'React'], color: 'from-purple-600 to-purple-900', icon: Brain, result: 'Redução de 40% no tempo médio de espera' },
  { id: 4, title: 'SellAO Digital', catKey: 'Software de Gestão', description: 'Sistema de de gestão com controle de vendas, estoque e relatórios para empresa de vendas de automóveis.', techs: ['C#', 'Go', 'Entity Framework', 'SAP'], color: 'from-amber-600 to-amber-900', icon: MonitorCheck, result: 'Controle eficiente de operações e mais produtividade.' },
  { id: 5, title: 'EduTech Angola LMS', catKey: 'Web', description: 'Plataforma de ensino online com cursos em vídeo, avaliações e certificados digitais.', techs: ['Next.js', 'Prisma', 'AWS S3', 'Stripe'], color: 'from-sky-600 to-sky-900', icon: Code2, result: 'Mais de 5.000 estudantes matriculados' },
  { id: 6, title: 'LogiAO Fleet Management', catKey: 'Mobile', description: 'Gestão de frotas com rastreamento GPS em tempo real, optimização de rotas e controlo de combustível.', techs: ['Flutter', 'Go', 'Google Maps', 'PostgreSQL'], color: 'from-rose-600 to-rose-900', icon: Smartphone, result: 'Redução de 25% nos custos de combustível' },
]


export const Portfolio = () => {
  const { t } = useI18n()
  const [activeCategory, setActiveCategory] = useState(t.portfolio.categories[0])

  // Map category keys for filtering
  const catMap: Record<string, string[]> = {
    'Todos': [], 'All': [], 'Tous': [], 'Todos ': [], 'すべて': [], '全部': [],
    'Web': ['Web'], 'Mobile': ['Mobile'],
  }

  const filtered = projects.filter((p) => {
    const active = activeCategory
    if (active === t.portfolio.categories[0]) return true // "All / Todos"
    if (active === t.portfolio.categories[1]) return p.catKey === 'Web'
    if (active === t.portfolio.categories[2]) return p.catKey === 'Mobile'
    if (active === t.portfolio.categories[4]) return p.catKey === 'IA & Automação'
    if (active === t.portfolio.categories[3]) return p.catKey === 'Software de Gestão'
    if (active === t.portfolio.categories[5]) return p.catKey === 'Segurança Electrônica'
    if (active === t.portfolio.categories[6]) return p.catKey === 'CyberSegurança'
    return true
  })

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
              {t.portfolio.tag}
            </span>
            <h1 className="font-sans font-800 text-5xl sm:text-6xl md:text-7xl text-white tracking-tight mb-6">
              {t.portfolio.title1}<br /><span className="gradient-text">{t.portfolio.title2}</span>
            </h1>
            <p className="max-w-2xl mx-auto text-slate-400 text-xl font-body leading-relaxed">
              {t.portfolio.sub}
            </p>
          </motion.div>
        </div>
      </section>

      {/* Portfolio grid */}
      <SectionWrapper className="border-t border-white/5">
        {/* Filter tabs */}
        <div className="flex flex-wrap gap-2 justify-center mb-12">
          {t.portfolio.categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setActiveCategory(cat)}
              className={`px-5 py-2 rounded-xl text-sm font-sans font-600 transition-all duration-200 ${activeCategory === cat
                ? 'bg-brand-500 text-white shadow-lg shadow-brand-500/20'
                : 'bg-dark-700 text-slate-400 hover:text-white hover:bg-dark-600 border border-white/5'
                }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Grid */}
        <motion.div layout className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          <AnimatePresence mode="popLayout">
            {filtered.map(({ id, title, catKey, description, techs, color, icon: Icon, result }) => (
              <motion.article
                key={id}
                layout
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ duration: 0.3 }}
                className="group relative rounded-2xl overflow-hidden border border-white/5 bg-dark-800 card-hover"
              >
                {/* Image placeholder */}
                <div className={`relative h-48 bg-gradient-to-br ${color} overflow-hidden`}>
                  <div className="absolute inset-0 bg-grid opacity-30" />
                  <div className="absolute inset-0 flex items-center justify-center">
                    <Icon size={48} className="text-white/20" />
                  </div>
                  <div
                    className="absolute top-4 left-4 px-3 py-1 rounded-full text-xs font-sans font-700 text-white"
                    style={{ background: 'rgba(0,0,0,0.3)', backdropFilter: 'blur(10px)' }}
                  >
                    {catKey}
                  </div>
                  <div className="absolute bottom-4 right-4 opacity-0 group-hover:opacity-100 transition-opacity">
                    <div className="w-9 h-9 rounded-xl bg-white/10 backdrop-blur-sm border border-white/20 flex items-center justify-center">
                      <ExternalLink size={16} className="text-white" />
                    </div>
                  </div>
                </div>

                {/* Content */}
                <div className="p-6">
                  <h3 className="font-sans font-700 text-white text-lg mb-2">{title}</h3>
                  <p className="text-slate-500 text-sm font-body leading-relaxed mb-5">{description}</p>

                  {/* Result badge */}
                  <div className="mb-5 px-3 py-2 rounded-xl bg-white/[0.03] border border-white/5 text-xs font-sans font-600 text-slate-400">
                    ✓ {result}
                  </div>

                  {/* Tech tags */}
                  <div className="flex flex-wrap gap-2">
                    {techs.map((tech) => (
                      <span
                        key={tech}
                        className="px-2.5 py-1 rounded-lg text-xs font-sans font-600 border border-white/5 bg-white/[0.03] text-slate-400"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              </motion.article>
            ))}
          </AnimatePresence>
        </motion.div>
      </SectionWrapper>

      {/* Process section */}
      <SectionWrapper className="border-t border-white/5 bg-dark-800/30">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <span className="inline-block text-brand-400 text-xs font-sans font-700 uppercase tracking-[0.2em] mb-4">
            {t.portfolio.processTag}
          </span>
          <h2 className="font-sans font-800 text-4xl text-white tracking-tight">
            {t.portfolio.processTitle}
          </h2>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {t.portfolio.process.map(({ step, title, desc }, i) => (
            <motion.div key={step} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.1 }}
              className="relative p-6 rounded-2xl border border-white/5 bg-dark-800">
              <div className="font-sans font-800 text-5xl text-brand-500/20 mb-4">{step}</div>
              <h3 className="font-sans font-700 text-white text-lg mb-2">{title}</h3>
              <p className="text-slate-500 text-sm font-body">{desc}</p>
            </motion.div>
          ))}
        </div>
      </SectionWrapper>

      <CtaSection />
    </>
  )
}
