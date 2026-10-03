import {
  Monitor, Code2, BrainCircuit, Sparkles,
  Server, Workflow, Cloud, MessageSquare,
  Target, ShieldCheck, Handshake, BarChart2
} from 'lucide-react'

const iconMap = {
  Monitor, Code2, BrainCircuit, Sparkles,
  Server, Workflow, Cloud, MessageSquare,
  Target, ShieldCheck, Handshake, BarChart2
}

export default function ServiceIcon({ name, size = 20, className = '' }) {
  const Icon = iconMap[name]
  if (!Icon) return null
  return <Icon size={size} className={className} strokeWidth={1.5} />
}
