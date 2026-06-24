import { buildMetadata } from '@/lib/seo'
import { JsonLd, breadcrumbSchema, serviceSchema } from '@/lib/jsonld'
import { Services } from '@/components/Service'

export const metadata = buildMetadata({
  title: 'Serviços — Desenvolvimento Web, Aplicações Mobile, Automação & IA, Cybersercurity',
  description:
    'Desenvolvimento web, apps mobile, automação com IA, cybersercurity, segurança electrônica e software de gestão. Soluções tecnológicas completas para empresas em Angola.',
  path: '/services',
  keywords: [
    'desenvolvimento de aplicações Angola',
    'segurança electrônica em Luanda',
    'cybersercurity em Angola',
    'sofware de gestão em Angola',
  ],
})

const servicesForSchema = [
  { name: 'Desenvolvimento Web', description: 'Criamos websites e plataformas web de alto desempenho que não apenas impressionam visualmente, mas convertem visitantes em clientes. Utilizamos as tecnologias mais modernas como Next.js, React e Node.js para garantir performance, escalabilidade e segurança.' },
  { name: 'Apps Mobile', description: 'Desenvolvemos aplicações mobile nativas e híbridas que proporcionam experiências excepcionais. Da ideia ao lançamento nas stores, tratamos de todo o processo com foco na usabilidade e performance.' },
  { name: 'Automação & IA', description: 'Integramos inteligência artificial e automação de processos para eliminar tarefas repetitivas, reduzir erros humanos e liberar a sua equipa para trabalho de maior valor. Desde chatbots a sistemas de recomendação personalizados.' },
  { name: 'Cybersecurity', description: 'Fornecemos e implementamos soluções de segurança digital através de licenças de software, incluindo antivírus corporativo, sistemas de backup e ferramentas de proteção contra ameaças cibernéticas.' },
  { name: 'Segurança Electrônica', description: 'Fornecemos e implementamos soluções completas de segurança eletrônica, incluindo sistemas de CCTV, cercas elétricas e rastreamento por GPS, garantindo proteção para residências, empresas e patrimônios.' },
  { name: 'Software de Gestão', description: 'Fornecemos e implementamos sistemas de gestão através de licenças de software, ajudando empresas a automatizar processos, controlar operações e melhorar a eficiência.' },
]

export default function ServicesPage() {
  return (
    <>
      <JsonLd
        data={breadcrumbSchema([
          { name: 'Início', path: '' },
          { name: 'Serviços', path: '/services' },
        ])}
      />
      <JsonLd data={serviceSchema(servicesForSchema)} />
      <Services />
    </>
  )

}
