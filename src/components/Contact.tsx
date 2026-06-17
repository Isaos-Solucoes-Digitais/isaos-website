'use client'

import { motion } from 'framer-motion'
import { SectionWrapper } from '@/components/common/SectionWrapper'
import ContactForm from '@/components/ui/ContactForm'
import { MapPin, MessageCircle } from 'lucide-react'
import { Mail, Phone, Clock } from 'lucide-react'
import { useI18n } from '@/i18n'


export function Contact() {
  const { t } = useI18n()
  const c = t.contact

  const contactInfo = [
    { icon: MapPin, title: c.location, lines: t.footer.address.split('\n') },
    { icon: Mail, title: c.email, lines: ['info@isaos.ao', 'geral@isaos.ao'] },
    { icon: Phone, title: c.phone, lines: ['+244 945 036 927', '+91 87908 07784'] },
    { icon: Clock, title: c.hours, lines: c.hoursVal.split('\n') },
  ]

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
              {c.tag}
            </span>
            <h1 className="font-sans font-800 text-5xl sm:text-6xl md:text-7xl text-white tracking-tight mb-6">
              {c.title1}<br /><span className="gradient-text">{c.title2}</span>
            </h1>
            <p className="max-w-2xl mx-auto text-slate-400 text-xl font-body leading-relaxed">
              {c.sub}
            </p>
          </motion.div>
        </div>
      </section>

      {/* Contact section */}
      <SectionWrapper className="border-t border-white/5">
        <div className="grid grid-cols-1 lg:grid-cols-5 gap-10">
          {/* Info */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="lg:col-span-2 space-y-6"
          >
            <div>
              <h2 className="font-sans font-800 text-3xl text-white mb-3">{c.infoTitle}</h2>
              <p className="text-slate-500 font-body leading-relaxed">{c.infoSub}</p>
            </div>

            {contactInfo.map(({ icon: Icon, title, lines }) => (
              <div key={title} className="flex gap-4 p-5 rounded-2xl border border-white/5 bg-dark-800">
                <div className="flex-shrink-0 w-10 h-10 rounded-xl bg-brand-500/10 border border-brand-500/20 flex items-center justify-center text-brand-400">
                  <Icon size={18} />
                </div>
                <div>
                  <div className="font-sans font-700 text-white text-sm mb-1">{title}</div>
                  {lines.map((line) => (
                    <div key={line} className="text-slate-500 text-sm font-body">{line}</div>
                  ))}
                </div>
              </div>
            ))}

            {/* WhatsApp CTA */}
            <a
              href="https://wa.me/244945036927?text=Olá ISAOS! Gostaria de falar sobre um projecto."
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-4 p-5 rounded-2xl border border-green-500/20 bg-green-500/5 hover:bg-green-500/10 transition-colors group"
            >
              <div className="flex-shrink-0 w-10 h-10 rounded-xl bg-green-500/20 flex items-center justify-center">
                <MessageCircle size={18} className="text-green-400" />
              </div>
              <div>
                <div className="font-sans font-700 text-white text-sm group-hover:text-green-300 transition-colors">
                  {c.whatsappLabel}
                </div>
                <div className="text-slate-500 text-xs font-body">{c.whatsappSub} · +244 945 036 927</div>
              </div>
            </a>
          </motion.div>

          {/* Form */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="lg:col-span-3 p-8 rounded-3xl border border-white/5 bg-dark-800"
          >
            <h2 className="font-sans font-800 text-2xl text-white mb-2">
              {c.formTitle}
            </h2>
            <p className="text-slate-500 text-sm font-body mb-8">
              {c.formSub}
            </p>
            <ContactForm />
          </motion.div>
        </div>
      </SectionWrapper>

      {/* Map placeholder */}
      <SectionWrapper className="border-t border-white/5 bg-dark-800/30" id="location">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-10"
        >
          <h2 className="font-sans font-800 text-3xl text-white tracking-tight">{c.mapTitle}</h2>
          <p className="text-slate-500 font-body mt-2">{c.mapSub}</p>
        </motion.div>

        <div className="relative h-80 rounded-3xl overflow-hidden border border-white/5 bg-dark-800">
          <div className="absolute inset-0 bg-grid opacity-30" />
          <div className="absolute inset-0 flex flex-col items-center justify-center gap-4">
            <div className="w-16 h-16 rounded-full bg-brand-500/20 border border-brand-500/30 flex items-center justify-center">
              <MapPin size={28} className="text-brand-400" />
            </div>
            <div className="text-center">
              <div className="font-sans font-700 text-white mb-1">ISAOS Soluções Digitais</div>
              <div className="text-slate-500 text-sm font-body">{c.mapSub}</div>
            </div>
            <a
              href="https://maps.google.com/?q=Viana,Luanda,Angola"
              target="_blank"
              rel="noopener noreferrer"
              className="mt-2 px-5 py-2 rounded-xl border border-brand-500/30 text-brand-400 text-sm font-sans font-600 hover:bg-brand-500/10 transition-colors"
            >
              {c.mapBtn}
            </a>
          </div>
        </div>
      </SectionWrapper>
    </>
  )
}
