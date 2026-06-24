import { buildMetadata } from '@/lib/seo'
import { JsonLd, breadcrumbSchema, localBusinessSchema } from '@/lib/jsonld'
import { Contact } from '@/components/Contact'

export const metadata = buildMetadata({
  title: 'Contacto — Solicite o Seu Orçamento',
  description:
    'Entre em contacto com a ISAOS Soluções Digitais em Belas, Luanda. Solicite um orçamento gratuito por formulário, WhatsApp, email ou telefone. Resposta em 24h.',
  path: '/contact',
  keywords: ['contacto ISAOS', 'orçamento desenvolvimento web Angola', 'empresa tecnologia Belas'],
})

export default function ContactPage() {
  return (
    <>
      <JsonLd
        data={breadcrumbSchema([
          { name: 'Início', path: '' },
          { name: 'Contacto', path: '/contact' },
        ])}
      />
      <JsonLd data={localBusinessSchema()} />
      <Contact />
    </>
  )
}
