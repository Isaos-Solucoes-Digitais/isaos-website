import type { Metadata } from 'next'
import { Services } from '@/components/Service'

export const metadata: Metadata = {
  title: 'Serviços',
  description: 'Conheça todos os serviços da ISAOS: desenvolvimento web, apps mobile, automação com IA, cybersegurança, segurança electrônica e software de gestão.',
}

export default function ServicesPage() {
  return <Services />
}
