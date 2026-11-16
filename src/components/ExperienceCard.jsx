import { motion } from 'framer-motion'

export default function ExperienceCard({ item, index, side }) {
  return (
    <motion.article
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.3 }}
      transition={{ duration: 0.5, delay: (index % 2) * 0.08 }}
      whileHover={{ y: -5 }}
      className="group relative flex min-h-[220px] flex-col overflow-visible rounded-[24px] border border-white/10 bg-slate-900/75 p-4 shadow-[0_18px_50px_rgba(2,6,23,0.3)] transition-colors duration-300 hover:border-violet-300/30 sm:p-5"
    >
      <div className="absolute inset-x-6 top-0 h-px bg-gradient-to-r from-violet-400/70 via-cyan-300/40 to-transparent" />
      <div className="absolute -right-6 -top-6 h-24 w-24 rounded-full bg-violet-500/10 blur-3xl transition-colors duration-300 group-hover:bg-violet-400/20" />
      <span
        aria-hidden="true"
        className={`pointer-events-none absolute top-1/2 hidden h-px w-6 bg-gradient-to-r from-violet-300/50 to-cyan-300/50 xl:block ${
          side === 'left' ? '-right-6' : '-left-6'
        }`}
      />

      <div className="relative flex items-center justify-between gap-4">
        <span className="rounded-full border border-cyan-300/20 bg-cyan-300/[0.06] px-2.5 py-1.5 text-[9px] font-medium uppercase tracking-[0.12em] text-cyan-100 sm:text-[10px]">
          {item.period}
        </span>
        <span className="font-mono text-xs text-slate-500">
          {String(index + 1).padStart(2, '0')}
        </span>
      </div>

      <div className="relative mt-4">
        <h3 className="text-base font-semibold leading-tight tracking-[-0.04em] text-white sm:text-lg">
          {item.role}
        </h3>
        <div className="mt-3 flex items-center gap-2.5">
          <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-lg border border-violet-300/20 bg-violet-300/[0.08] text-xs font-semibold text-violet-100">
            {item.company.charAt(0)}
          </span>
          <span className="text-xs font-medium text-slate-200">{item.company}</span>
        </div>
      </div>

      <p className="relative mt-auto pt-3 text-xs leading-5 text-slate-400">{item.description}</p>
    </motion.article>
  )
}
