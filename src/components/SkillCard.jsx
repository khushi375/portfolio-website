import { motion } from 'framer-motion'
import {
  Blocks,
  Cloud,
  Code2,
  Database,
  Gauge,
  Layers3,
  Rocket,
  Server,
  Sparkles,
} from 'lucide-react'

const icons = {
  Frontend: Code2,
  Backend: Server,
  Database: Database,
  'Programming & CS': Layers3,
  'Tools & Cloud': Cloud,
  AI: Sparkles,
}

const iconStyles = {
  Frontend: 'border-cyan-400/40 bg-cyan-500/10 text-cyan-200',
  Backend: 'border-emerald-400/40 bg-emerald-500/10 text-emerald-200',
  Database: 'border-amber-400/40 bg-amber-500/10 text-amber-200',
  'Programming & CS': 'border-orange-400/40 bg-orange-500/10 text-orange-200',
  'Tools & Cloud': 'border-violet-400/40 bg-violet-500/10 text-violet-200',
  AI: 'border-pink-400/40 bg-pink-500/10 text-pink-200',
}

export default function SkillCard({ title, items, index }) {
  const Icon = icons[title] || Blocks
  const iconStyle = iconStyles[title] || 'border-violet-400/30 bg-violet-500/10 text-violet-200'

  return (
    <motion.div
      initial={{ opacity: 0, y: 18 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{ duration: 0.45, delay: index * 0.04 }}
      className="rounded-[28px] border border-white/10 bg-slate-900/75 p-5 shadow-[0_18px_50px_rgba(15,23,42,0.45)]"
    >
      <div className="flex items-center gap-3">
        <div className={`flex h-11 w-11 items-center justify-center rounded-2xl border ${iconStyle}`}>
          <Icon size={18} />
        </div>
        <h3 className="text-lg font-semibold text-white">{title}</h3>
      </div>

      <div className="mt-4 flex flex-wrap gap-2">
        {items.map((item) => (
          <span
            key={item}
            className="rounded-full border border-violet-400/20 bg-violet-500/10 px-3 py-1.5 text-sm text-slate-100"
          >
            {item}
          </span>
        ))}
      </div>
    </motion.div>
  )
}
