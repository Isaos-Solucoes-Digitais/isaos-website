import type { Metadata } from 'next'
import { Contact } from '@/components/Contact'

export const metadata: Metadata = {
  title: 'Contacto',
  description: 'Entre em contacto com a ISAOS Soluções Digitais. Solicite um orçamento gratuito ou fale connosco pelo WhatsApp.',
}

export default function ContactPage() {
  return <Contact />
}
