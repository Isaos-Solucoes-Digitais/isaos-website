import { Service } from '@/types/service'
import {
  Code2, Smartphone, Brain, MonitorCheck, ShieldCheck, Cctv
} from 'lucide-react'


export const servicesData: Service[] = [
  {
    id: 'web',
    icon: Code2,
    title: 'Desenvolvimento Web',
    subtitle: 'Presença digital de alto impacto',
    color: 'from-brand-500/20 to-brand-600/5',
    accentColor: 'text-brand-400',
    borderColor: 'border-brand-500/20',
    description:
      'Criamos websites e plataformas web de alto desempenho que não apenas impressionam visualmente, mas convertem visitantes em clientes. Utilizamos as tecnologias mais modernas como Next.js, React e Node.js para garantir performance, escalabilidade e segurança.',
    benefits: [
      'Design responsivo e mobile-first',
      'Optimização SEO avançada',
      'Velocidade de carregamento ultrarrápida',
      'Integração com sistemas existentes',
      'Painel de administração intuitivo',
      'Manutenção e suporte contínuos',
    ],
  },
  {
    id: 'mobile',
    icon: Smartphone,
    title: 'Aplicações Mobile',
    subtitle: 'iOS & Android de excelência',
    color: 'from-purple-500/20 to-purple-600/5',
    accentColor: 'text-purple-400',
    borderColor: 'border-purple-500/20',
    description:
      'Desenvolvemos aplicações mobile nativas e híbridas que proporcionam experiências excepcionais. Da ideia ao lançamento nas stores, tratamos de todo o processo com foco na usabilidade e performance.',
    benefits: [
      'Apps nativas iOS e Android',
      'React Native e Flutter',
      'UX/UI focado na experiência do utilizador',
      'Integração com APIs e backends',
      'Publicação nas app stores',
      'Actualizações e melhorias contínuas',
    ],
  },
  {
    id: 'ai',
    icon: Brain,
    title: 'Automação & IA',
    subtitle: 'Inteligência ao serviço do negócio',
    color: 'from-accent-500/20 to-accent-600/5',
    accentColor: 'text-accent-400',
    borderColor: 'border-accent-500/20',
    description:
      'Integramos inteligência artificial e automação de processos para eliminar tarefas repetitivas, reduzir erros humanos e liberar a sua equipa para trabalho de maior valor. Desde chatbots a sistemas de recomendação personalizados.',
    benefits: [
      'Chatbots e assistentes virtuais',
      'Processamento de linguagem natural',
      'Automação de processos (RPA)',
      'Análise preditiva e machine learning',
      'Integração com modelos de IA existentes',
      'Soluções personalizadas ao contexto africano',
    ],
  },
  {
    id: 'cybersecurity',
    icon: ShieldCheck,
    title: 'CyberSegurança',
    subtitle: 'Segurança digital',
    color: 'from-sky-500/20 to-sky-600/5',
    accentColor: 'text-sky-400',
    borderColor: 'border-sky-500/20',
    description:
      'Fornecemos e implementamos soluções de segurança digital através de licenças de software, incluindo antivírus corporativo, sistemas de backup e ferramentas de proteção contra ameaças cibernéticas.',
    benefits: [
      'Proteção contra vírus, malware e ataques',
      'Segurança de dados com backup confiável',
      'Continuidade do negócio em caso de falhas',
      'Redução de riscos e perdas digitais',
      'Conformidade com normas e boas práticas de segurança',
      'Aumento da confiança de clientes e parceiros'
    ],
  },
  {
    id: 'security',
    icon: Cctv,
    title: 'Segurança Electrônica',
    subtitle: 'Protecção de seus bens',
    color: 'from-amber-500/20 to-amber-600/5',
    accentColor: 'text-amber-400',
    borderColor: 'border-amber-500/20',
    description:
      'Fornecemos e implementamos soluções completas de segurança eletrônica, incluindo sistemas de CCTV, cercas elétricas e rastreamento por GPS, garantindo proteção para residências, empresas e patrimônios.',
    benefits: [
      'Monitoramento 24/7 de ambientes físicos',
      'Maior proteção contra invasões e roubos',
      'Controle e rastreamento em tempo real',
      'Registro de imagens para auditoria e investigação',
      'Resposta rápida a incidentes de segurança',
      'Tranquilidade e segurança para o seu espaço',
    ],
  },
  {
    id: 'software',
    icon: MonitorCheck,
    title: 'Software de Gestão',
    subtitle: 'Automação de processos',
    color: 'from-rose-500/20 to-rose-600/5',
    accentColor: 'text-rose-400',
    borderColor: 'border-rose-500/20',
    description:
      'Fornecemos e implementamos sistemas de gestão através de licenças de software, ajudando empresas a automatizar processos, controlar operações e melhorar a eficiência.',
    benefits: [
      'Controle total de vendas e estoque',
      'Automação de processos operacionais e administrativos',
      'Aumento da produtividade e eficiência da equipe',
      'Melhoria na tomada de decisões com dados em tempo real',
      'Redução de erros humanos e retrabalho',
      'Escalabilidade para crescimento do negócio',
    ],
  },
]
