import { motion } from 'framer-motion'

export default function SectionHeading({ eyebrow, title, description, align = 'left' }) {
  const alignment = align === 'center' ? 'mx-auto text-center' : 'text-left'

  return (
    <motion.div
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.3 }}
      transition={{ duration: 0.6, ease: 'easeOut' }}
      className={`max-w-2xl ${alignment}`}
    >
      {eyebrow ? (
        <span className="inline-flex items-center rounded-full border border-violet-400/30 bg-violet-500/10 px-3 py-1 text-[11px] font-medium uppercase tracking-[0.22em] text-violet-200">
          {eyebrow}
        </span>
      ) : null}
      <h2 className="mt-5 text-3xl font-semibold tracking-[-0.06em] text-white md:text-4xl">
        {title}
      </h2>
      {description ? <p className="mt-4 text-base text-slate-300 md:text-lg">{description}</p> : null}
    </motion.div>
  )
}
