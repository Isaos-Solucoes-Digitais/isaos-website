'use client'

import { useState } from 'react'
import { motion } from 'framer-motion'
import { Button } from '@/components/ui/Button'
import { Send, CheckCircle } from 'lucide-react'
import { useI18n } from '@/i18n'

interface FormState {
  name: string
  email: string
  phone: string
  service: string
  message: string
}

const initialState: FormState = {
  name: '',
  email: '',
  phone: '',
  service: '',
  message: '',
}



export default function ContactForm() {
  const [form, setForm] = useState<FormState>(initialState)
  const [submitted, setSubmitted] = useState(false)
  const [loading, setLoading] = useState(false)
  const { t } = useI18n()
  const services = [
    t.services.items[0].title,
    t.services.items[1].title,
    t.services.items[2].title,
    t.services.items[3].title,
    t.services.items[4].title,
    t.services.items[5].title,
  ]

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }))
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setLoading(true)
    // Simulate async submission
    await new Promise((r) => setTimeout(r, 1500))
    setLoading(false)
    setSubmitted(true)
  }

  const inputClass =
    'w-full bg-dark-700 border border-white/10 rounded-xl px-4 py-3 text-sm text-white placeholder-slate-600 font-body focus:border-brand-500/50 focus:bg-dark-600 transition-all duration-200 outline-none'

  if (submitted) {
    return (
      <motion.div
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        className="flex flex-col items-center justify-center py-16 text-center"
      >
        <div className="w-16 h-16 rounded-full bg-accent-500/10 border border-accent-500/30 flex items-center justify-center mb-6">
          <CheckCircle size={32} className="text-accent-400" />
        </div>
        <h3 className="font-sans font-700 text-white text-2xl mb-3">
          {t.contact.successTitle}
        </h3>
        <p className="text-slate-400 font-body max-w-sm">
          {t.contact.successSub}
        </p>
        <button
          onClick={() => { setSubmitted(false); setForm(initialState) }}
          className="mt-8 text-brand-400 hover:text-brand-300 text-sm font-sans font-600 transition-colors"
        >
          {t.contact.successBack}
        </button>
      </motion.div>
    )
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-5">
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
        <div>
          <label className="block text-xs font-sans font-600 text-slate-400 uppercase tracking-wider mb-2">
            {t.contact.name} *
          </label>
          <input
            type="text"
            name="name"
            required
            value={form.name}
            onChange={handleChange}
            placeholder={t.contact.namePlaceholder}
            className={inputClass}
          />
        </div>
        <div>
          <label className="block text-xs font-sans font-600 text-slate-400 uppercase tracking-wider mb-2">
            {t.contact.email} *
          </label>
          <input
            type="email"
            name="email"
            required
            value={form.email}
            onChange={handleChange}
            placeholder="email@empresa.com"
            className={inputClass}
          />
        </div>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
        <div>
          <label className="block text-xs font-sans font-600 text-slate-400 uppercase tracking-wider mb-2">
            {t.contact.phone}
          </label>
          <input
            type="tel"
            name="phone"
            value={form.phone}
            onChange={handleChange}
            placeholder="+244 9xx xxx xxx"
            className={inputClass}
          />
        </div>
        <div>
          <label className="block text-xs font-sans font-600 text-slate-400 uppercase tracking-wider mb-2">
            {t.contact.service}
          </label>
          <select
            name="service"
            value={form.service}
            onChange={handleChange}
            className={inputClass}
          >
            <option value="" disabled>{t.contact.servicePlaceholder}</option>
            {services.map((s) => (
              <option key={s} value={s}>{s}</option>
            ))}
          </select>
        </div>
      </div>

      <div>
        <label className="block text-xs font-sans font-600 text-slate-400 uppercase tracking-wider mb-2">
          {t.contact.message} *
        </label>
        <textarea
          name="message"
          required
          value={form.message}
          onChange={handleChange}
          rows={5}
          placeholder={t.contact.messagePlaceholder}
          className={inputClass}
        />
      </div>

      <Button
        type="submit"
        disabled={loading}
        size="lg"
        className="w-full"
      >
        {loading ? (
          <>
            <div className="w-4 h-4 border-2 border-white/30 border-t-white rounded-full animate-spin" />
            {t.contact.sending}
          </>
        ) : (
          <>
            <Send size={18} />
            {t.contact.send}
          </>
        )}
      </Button>

      <p className="text-xs text-slate-600 text-center font-body">
        {t.contact.privacy}
      </p>
    </form>
  )
}
