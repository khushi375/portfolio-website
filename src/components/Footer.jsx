import { ArrowUp } from 'lucide-react'
import { FaGithub, FaLinkedinIn } from 'react-icons/fa'
import { SiLeetcode } from 'react-icons/si'

const footerLinks = [
  { label: 'Home', href: '#home' },
  { label: 'About', href: '#about' },
  { label: 'Projects', href: '#projects' },
  { label: 'Contact', href: '#contact' },
]

export default function Footer() {
  const year = new Date().getFullYear()

  return (
    <footer className="relative border-t border-white/10 bg-slate-950/80">
      <div className="mx-auto max-w-7xl px-4 py-10 sm:px-6 lg:px-8">
        <div className="flex flex-col gap-8 md:flex-row md:items-center md:justify-between">
          <div>
            <div className="flex items-center gap-3">
              <span className="flex h-10 w-10 items-center justify-center rounded-full border border-violet-400/40 bg-gradient-to-br from-violet-500/40 to-cyan-400/30 text-sm font-bold text-white">
                KJ
              </span>
              <div>
                <p className="text-lg font-semibold text-white">Khushi Jain</p>
                <p className="text-sm text-slate-400">Full Stack Developer • AI Enthusiast</p>
              </div>
            </div>
          </div>

          <div className="flex flex-wrap items-center gap-4 text-sm text-slate-300">
            {footerLinks.map((link) => (
              <a key={link.label} href={link.href} className="transition hover:text-white">
                {link.label}
              </a>
            ))}
          </div>

          <div className="flex items-center gap-3">
            <a
              href="https://github.com/khushi375"
              target="_blank"
              rel="noreferrer"
              className="rounded-full border border-white/10 bg-white/5 p-2.5 text-slate-200 transition hover:border-violet-400/50 hover:text-white"
              aria-label="GitHub profile"
            >
              <FaGithub size={16} />
            </a>
            <a
              href="https://leetcode.com/u/30khushi/"
              target="_blank"
              rel="noreferrer"
              className="rounded-full border border-white/10 bg-white/5 p-2.5 text-slate-200 transition hover:border-orange-400/50 hover:text-white"
              aria-label="LeetCode profile"
            >
              <SiLeetcode size={16} />
            </a>
            <a
              href="https://www.linkedin.com/in/khushi-jain-b28789323/"
              target="_blank"
              rel="noreferrer"
              className="rounded-full border border-white/10 bg-white/5 p-2.5 text-slate-200 transition hover:border-cyan-400/50 hover:text-white"
              aria-label="LinkedIn profile"
            >
              <FaLinkedinIn size={16} />
            </a>
          </div>
        </div>

        <div className="mt-8 flex flex-col gap-4 border-t border-white/10 pt-6 text-sm text-slate-400 md:flex-row md:items-center md:justify-between">
          <p>© {year} Khushi Jain. All rights reserved.</p>
          <a href="#home" className="inline-flex items-center gap-2 text-slate-200 transition hover:text-white">
            Back to top
            <ArrowUp size={15} />
          </a>
        </div>
      </div>
    </footer>
  )
}
