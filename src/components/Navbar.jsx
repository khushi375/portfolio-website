import { useEffect, useState } from 'react'
import { Menu, X } from 'lucide-react'
import Button from './Button'

const navItems = [
  { label: 'Home', href: '#home' },
  { label: 'About', href: '#about' },
  { label: 'Skills', href: '#skills' },
  { label: 'Experience', href: '#experience' },
  { label: 'Projects', href: '#projects' },
  { label: 'Contact', href: '#contact' },
]

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const [active, setActive] = useState('home')

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 18)

      const sections = navItems
        .map((item) => ({ ...item, element: document.querySelector(item.href) }))
        .filter((item) => item.element)

      let current = 'home'
      for (const item of sections) {
        const top = item.element.getBoundingClientRect().top
        if (top <= 120) {
          current = item.label.toLowerCase()
        }
      }

      setActive(current)
    }

    handleScroll()
    window.addEventListener('scroll', handleScroll, { passive: true })
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <header className="fixed inset-x-0 top-0 z-50">
      <div className="mx-auto max-w-7xl px-3 pt-3 sm:px-6 sm:pt-4 lg:px-8">
        <nav
          className={`rounded-full border px-3 py-2.5 backdrop-blur-xl transition-all duration-300 sm:px-4 sm:py-3 ${
            scrolled
              ? 'border-white/10 bg-slate-950/75 shadow-[0_20px_60px_rgba(2,6,23,0.72)]'
              : 'border-white/10 bg-white/5 shadow-[0_10px_30px_rgba(15,23,42,0.18)]'
          }`}
          aria-label="Main navigation"
        >
          <div className="flex items-center justify-between gap-4">
            <a href="#home" className="flex items-center gap-3" aria-label="Go to home section">
              <span className="flex h-9 w-9 items-center justify-center rounded-full border border-violet-300/50 bg-gradient-to-br from-violet-500/55 to-cyan-400/40 text-sm font-bold text-white shadow-[0_0_20px_rgba(139,92,246,0.42)]">
                KJ
              </span>
              <span className="text-sm font-semibold tracking-[0.18em] text-white uppercase">Khushi</span>
            </a>

            <div className="hidden items-center gap-1 rounded-full border border-white/10 bg-slate-950/40 px-2 py-1 md:flex">
              {navItems.map((item) => (
                <a
                  key={item.label}
                  href={item.href}
                  className={`rounded-full px-3 py-2 text-sm transition-all ${
                    active === item.label.toLowerCase()
                      ? 'bg-white/10 text-white shadow-[inset_0_1px_0_rgba(255,255,255,0.08)]'
                      : 'text-slate-300 hover:text-white'
                  }`}
                >
                  {item.label}
                </a>
              ))}
            </div>

            <div className="hidden md:block">
              <Button href="/resume.pdf" variant="secondary" target="_blank" rel="noreferrer" className="px-4 py-2 text-[11px] uppercase tracking-[0.14em]">
                Resume
              </Button>
            </div>

            <button
              type="button"
              className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-white/10 bg-white/5 text-slate-100 md:hidden"
              onClick={() => setIsOpen(!isOpen)}
              aria-label={isOpen ? 'Close menu' : 'Open menu'}
            >
              {isOpen ? <X size={18} /> : <Menu size={18} />}
            </button>
          </div>

          {isOpen ? (
            <div className="mt-4 space-y-2 border-t border-white/10 pt-4 md:hidden">
              {navItems.map((item) => (
                <a
                  key={item.label}
                  href={item.href}
                  onClick={() => setIsOpen(false)}
                  className={`block rounded-2xl px-3 py-2 text-sm ${
                    active === item.label.toLowerCase() ? 'bg-white/10 text-white' : 'text-slate-300'
                  }`}
                >
                  {item.label}
                </a>
              ))}
              <div className="pt-2">
                <Button href="/resume.pdf" variant="secondary" target="_blank" rel="noreferrer" className="w-full">
                  Resume
                </Button>
              </div>
            </div>
          ) : null}
        </nav>
      </div>
    </header>
  )
}
