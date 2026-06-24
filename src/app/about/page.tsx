import { buildMetadata } from '@/lib/seo'
import { JsonLd, breadcrumbSchema } from '@/lib/jsonld'
import { About } from '@/components/About'

export const metadata = buildMetadata({
  title: 'Sobre Nós — A História da ISAOS',
  description:
    'Conheça a ISAOS Soluções Digitais: a nossa história desde 2026, missão, visão, valores e a equipa de especialistas que transforma negócios em Angola.',
  path: '/about',
  keywords: ['empresa de tecnologia Angola', 'sobre ISAOS', 'equipa de desenvolvedores Luanda'],
})

export default function AboutPage() {
  return (
    <>
      <JsonLd
        data={breadcrumbSchema([
          { name: 'Início', path: '' },
          { name: 'Sobre', path: '/about' },
        ])}
      />
      <About />
    </>
  )
}
