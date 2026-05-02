import { ContactInfo } from '@/types/contact'
import { Mail, MapPin, Phone, Clock } from 'lucide-react'

export const contactInfoData: ContactInfo[] = [
  {
    icon: MapPin,
    title: 'Localização',
    lines: ['Viana, Luanda','Angola'],
  },
  {
    icon: Mail,
    title: 'Email',
    lines: ['info@isaos.ao', 'projetos@isaos.ao'],
  },
  {
    icon: Phone,
    title: 'Telefone',
    lines: ['+244 923 000 000', '+244 957 000 000'],
  },
  {
    icon: Clock,
    title: 'Horário',
    lines: ['Seg–Sex: 8h às 18h', 'Sáb: 9h às 13h'],
  },
]