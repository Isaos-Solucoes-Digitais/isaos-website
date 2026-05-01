'use client'

import { motion } from 'framer-motion'
import { ReactNode } from 'react'
import Link from 'next/link'
import { ArrowRight } from 'lucide-react'

interface ServiceCardProps {
  icon: ReactNode
  title: string
  description: string
  href?: string
  gradient?: string
  index?: number
}

export default function ServiceCard({
  icon,
  title,
  description,
  href = '/services',
  gradient = 'from-brand-500/20 to-brand-600/5',
  index = 0,
}: ServiceCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay: index * 0.1, duration: 0.5 }}
    >
      <Link href={href} className="group block h-full">
        <div className="relative h-full p-6 rounded-2xl border border-white/5 bg-dark-800 overflow-hidden card-hover">
          {/* Background gradient on hover */}
          <div
            className={`absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 bg-gradient-to-br ${gradient}`}
          />

          {/* Top accent line */}
          <div className="absolute top-0 left-6 right-6 h-px bg-gradient-to-r from-transparent via-brand-400/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

          <div className="relative z-10">
            {/* Icon */}
            <div className="w-12 h-12 rounded-xl bg-brand-500/10 border border-brand-500/20 flex items-center justify-center mb-5 text-brand-400 group-hover:scale-110 group-hover:bg-brand-500/20 transition-all duration-300">
              {icon}
            </div>

            {/* Title */}
            <h3 className="font-sans font-700 text-white text-lg mb-3 group-hover:text-brand-200 transition-colors">
              {title}
            </h3>

            {/* Description */}
            <p className="text-slate-500 text-sm font-body leading-relaxed mb-5">
              {description}
            </p>

            {/* CTA */}
            <span className="inline-flex items-center gap-2 text-brand-400 text-xs font-sans font-600 uppercase tracking-wider opacity-0 group-hover:opacity-100 translate-x-0 group-hover:translate-x-1 transition-all duration-300">
              Saiba mais <ArrowRight size={12} />
            </span>
          </div>
        </div>
      </Link>
    </motion.div>
  )
}
