import type { Metadata } from 'next'
import ContactContent from './ContactContent'

export const metadata: Metadata = {
  title: 'Contacto',
  description: 'Entre em contacto com a ISAOS Soluções Digitais. Solicite um orçamento gratuito ou fale connosco pelo WhatsApp.',
}

export default function ContactPage() {
  return <ContactContent />
}
