import Link from 'next/link'
import { Mail, MapPin, Phone, Linkedin, Twitter, Instagram } from 'lucide-react'

const services = [
  { label: 'Desenvolvimento Web', href: '/services#web' },
  { label: 'Apps Mobile', href: '/services#mobile' },
  { label: 'Automação & IA', href: '/services#ai' },
  { label: 'CyberSegurança', href: '/services#cloud' },
  { label: 'Segurança Electrônica', href: '/services#consulting' },
  { label: 'Software de Gestão', href: '/services#consulting' },
]
 
const company = [
  { label: 'Sobre Nós', href: '/about' },
  { label: 'Portfólio', href: '/portfolio' },
  { label: 'Carreiras', href: '#' },
  { label: 'Contacto', href: '/contact' },
]

const socials = [
  { icon: Linkedin, href: '#', label: 'LinkedIn' },
  { icon: Twitter, href: '#', label: 'Twitter' },
  { icon: Instagram, href: '#', label: 'Instagram' },
]

export default function Footer() {
  return (
    <footer className="relative border-t border-white/5 bg-dark-800 overflow-hidden">
      {/* Glow */}
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[600px] h-[200px] bg-brand-500/10 blur-[100px] pointer-events-none" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-16 pb-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 mb-12">
          {/* Brand */}
          <div className="lg:col-span-1">
            <Link href="/" className="flex items-center gap-3 mb-5">
              <div className="relative w-9 h-9 flex-shrink-0">
                <div className="absolute inset-0 bg-brand-500 rounded-lg rotate-45" />
                <div className="absolute inset-1 bg-accent-400 rounded-md rotate-12" />
                <span className="absolute inset-0 flex items-center justify-center text-white font-sans font-bold text-sm z-10">
                  IS
                </span>
              </div>
              <span className="font-sans font-700 text-white text-xl tracking-tight">
              ISAOS Cybersecurity Solutions
              </span>
            </Link>
            <p className="text-slate-500 text-sm leading-relaxed mb-6 font-body">
              Transformamos ideias em soluções digitais de alto impacto. A tecnologia ao serviço do crescimento do seu negócio.
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
              Serviços
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
              Empresa
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
              Contacto
            </h4>
            <ul className="space-y-4">
              <li className="flex items-start gap-3">
                <MapPin size={16} className="text-brand-400 mt-0.5 flex-shrink-0" />
                <span className="text-slate-500 text-sm font-body">
                  Luanda, Angola
                  <br />
                  Talatona, Sul do Kwanza
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
            © {new Date().getFullYear()} ISAOS Cybersecurity Solutions. Todos os direitos reservados.
          </p>
          <div className="flex items-center gap-6">
            <Link href="#" className="text-slate-600 hover:text-slate-400 text-xs font-body transition-colors">
              Privacidade
            </Link>
            <Link href="#" className="text-slate-600 hover:text-slate-400 text-xs font-body transition-colors">
              Termos de Uso
            </Link>
          </div>
        </div>
      </div>
    </footer>
  )
}
