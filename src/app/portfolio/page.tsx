import type { Metadata } from 'next'
import PortfolioContent from './PortfolioContent'

export const metadata: Metadata = {
  title: 'Portfólio',
  description: 'Conheça os projectos desenvolvidos pela ISAOS — soluções web, mobile e empresariais que transformaram negócios angolanos.',
}

export default function PortfolioPage() {
  return <PortfolioContent />
}
