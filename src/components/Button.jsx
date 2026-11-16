const base =
  'inline-flex items-center justify-center gap-2 rounded-full border text-sm font-medium transition-all duration-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-violet-400/80 focus-visible:ring-offset-2 focus-visible:ring-offset-slate-950'

const variants = {
  primary:
    'border-violet-400/60 bg-gradient-to-r from-violet-500 via-violet-500 to-cyan-400 text-slate-950 shadow-[0_10px_30px_rgba(139,92,246,0.38)] hover:-translate-y-0.5 hover:shadow-[0_18px_40px_rgba(34,211,238,0.2)]',
  secondary:
    'border-white/10 bg-white/5 text-slate-100 backdrop-blur-md hover:border-violet-400/40 hover:bg-slate-700/80',
  ghost:
    'border-transparent bg-transparent text-slate-200 hover:bg-white/5',
}

export default function Button({ children, href, variant = 'primary', className = '', ...props }) {
  const classes = `${base} ${variants[variant]} ${className}`.trim()

  if (href) {
    return (
      <a href={href} className={classes} {...props}>
        {children}
      </a>
    )
  }

  return (
    <button type="button" className={classes} {...props}>
      {children}
    </button>
  )
}
