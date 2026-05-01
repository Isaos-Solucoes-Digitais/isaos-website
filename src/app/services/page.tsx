import type { Metadata } from 'next'
import ServicesContent from './ServicesContent'

export const metadata: Metadata = {
  title: 'Serviços',
  description: 'Conheça todos os serviços da ISAOS: desenvolvimento web, apps mobile, automação com IA, cloud, Business Intelligence e consultoria digital.',
}

export default function ServicesPage() {
  return <ServicesContent />
}
