import { buildMetadata } from '@/lib/seo'
import { JsonLd, breadcrumbSchema } from '@/lib/jsonld'
import { Portfolio } from '@/components/Portfolio'

export const metadata = buildMetadata({
  title: 'Portfólio — Projectos de Sucesso',
  description:
    'Conheça os projectos desenvolvidos pela ISAOS. Casos de sucesso em Angola.',
  path: '/portfolio',
  keywords: ['portfólio software house Angola', 'casos de sucesso tecnologia Angola', 'projectos web Luanda'],
})

export default function PortfolioPage() {
  return (
    <>
      <JsonLd
        data={breadcrumbSchema([
          { name: 'Início', path: '' },
          { name: 'Portfólio', path: '/portfolio' },
        ])}
      />
      <Portfolio />
    </>
  )
}
