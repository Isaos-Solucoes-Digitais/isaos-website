"use client"
import Link from 'next/link'
import Image from 'next/image'
import { Mail, MapPin, Phone, Linkedin, Twitter, Instagram } from 'lucide-react'
import { useI18n } from '@/i18n'


const socials = [
  { icon: Linkedin, href: '#', label: 'LinkedIn' },
  { icon: Twitter, href: '#', label: 'Twitter' },
  { icon: Instagram, href: '#', label: 'Instagram' },
]

export default function Footer() {
  const { t } = useI18n()

  const services = [
    { label: t.services.items[0].title, href: '/services#web' },
    { label: t.services.items[1].title, href: '/services#mobile' },
    { label: t.services.items[2].title, href: '/services#ai' },
    { label: t.services.items[3].title, href: '/services#cybersecurity' },
    { label: t.services.items[4].title, href: '/services#seurity' },
    { label: t.services.items[5].title, href: '/services#software' },
  ]

  const company = [
    { label: t.nav.about, href: '/about' },
    { label: t.nav.portfolio, href: '/portfolio' },
    { label: t.nav.contact, href: '/contact' },
  ]

  return (
    <footer className="relative border-t border-white/5 bg-dark-800 overflow-hidden">
      {/* Glow */}
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[600px] h-[200px] bg-brand-500/10 blur-[100px] pointer-events-none" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-16 pb-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 mb-12">
          {/* Brand */}
          <div className="lg:col-span-1">
            <Link href="/" className="flex items-center gap-3 mb-2 group">
              <Image
                src="/logos/logo-vertical.png"
                alt="ISAOS Soluções Digitais"
                width={150}
                height={50}
                className="object-contain group-hover:scale-105 transition-transform duration-300"
              />
            </Link>
            <p className="text-slate-500 text-sm leading-relaxed mb-6 font-body">
              {t.footer.description}
            </p>
            <div className="flex items-center gap-3">
              {socials.map(({ icon: Icon, href, label }) => (
                <a
                  key={label}
                  href={href}
                  aria-label={label}
                  className="w-9 h-9 flex items-center justify-center rounded-lg border border-white/10 text-slate-500 hover:text-white hover:border-brand-500/40 hover:bg-brand-500/10 transition-all duration-200"
                >
                  <Icon size={16} />
                </a>
              ))}
            </div>
          </div>

          {/* Services */}
          <div>
            <h4 className="font-sans font-700 text-white text-sm mb-5 tracking-wide uppercase">
              {t.footer.servicesTitle}
            </h4>
            <ul className="space-y-3">
              {services.map((item) => (
                <li key={item.label}>
                  <Link
                    href={item.href}
                    className="text-slate-500 hover:text-brand-300 text-sm font-body transition-colors duration-200"
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Company */}
          <div>
            <h4 className="font-sans font-700 text-white text-sm mb-5 tracking-wide uppercase">
              {t.footer.companyTitle}
            </h4>
            <ul className="space-y-3">
              {company.map((item) => (
                <li key={item.label}>
                  <Link
                    href={item.href}
                    className="text-slate-500 hover:text-brand-300 text-sm font-body transition-colors duration-200"
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-sans font-700 text-white text-sm mb-5 tracking-wide uppercase">
              {t.footer.contactTitle}
            </h4>
            <ul className="space-y-4">
              <li className="flex items-start gap-3">
                <MapPin size={16} className="text-brand-400 mt-0.5 flex-shrink-0" />
                <span className="text-slate-500 text-sm font-body">
                  {t.footer.address}
                </span>
              </li>
              <li className="flex items-center gap-3">
                <Mail size={16} className="text-brand-400 flex-shrink-0" />
                <a
                  href="mailto:info@isaos.ao"
                  className="text-slate-500 hover:text-brand-300 text-sm font-body transition-colors"
                >
                  info@isaos.ao
                </a>
              </li>
              <li className="flex items-center gap-3">
                <Phone size={16} className="text-brand-400 flex-shrink-0" />
                <a
                  href="tel:+244923000000"
                  className="text-slate-500 hover:text-brand-300 text-sm font-body transition-colors"
                >
                  +244 923 000 000
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="border-t border-white/5 pt-8 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-slate-600 text-xs font-body">
            © {new Date().getFullYear()} ISAOS Soluções Digitais. {t.footer.rights}
          </p>
          <div className="flex items-center gap-6">
            <Link href="#" className="text-slate-600 hover:text-slate-400 text-xs font-body transition-colors">
              {t.footer.privacy}
            </Link>
            <Link href="#" className="text-slate-600 hover:text-slate-400 text-xs font-body transition-colors">
              {t.footer.terms}
            </Link>
          </div>
        </div>
      </div>
    </footer>
  )
}
