import HeroSection from '@/components/sections/HeroSection'
import ServicesSection from '@/components/sections/ServicesSection'
import DifferentialsSection from '@/components/sections/DifferentialsSection'
import SocialProofSection from '@/components/sections/SocialProofSection'
import CtaSection from '@/components/sections/CtaSection'
import { buildMetadata } from '@/lib/seo'

export const metadata = buildMetadata({
  title: 'ISAOS Soluções Digitais — Soluções digitais que Transformam Negócios',
  description:
    'Desenvolvemos desde soluções inovadoras à proteção contra ameaças digitais que impulsionam o crescimento da sua empresa. Nós entregamos inovação, segurança e eficiência com resultados que superam expectativas. Orçamento gratuito.',
  path: '',
  keywords: ['ISAOS Angola', 'desenvolvimento de software Luanda'],
})

export default function HomePage() {
  return (
    <>
      <HeroSection />
      <ServicesSection />
      <DifferentialsSection />
      <SocialProofSection />
      <CtaSection />
    </>
  )
}
