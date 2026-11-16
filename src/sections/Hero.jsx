import { useEffect, useState } from 'react'
import { ArrowRight, Download } from 'lucide-react'
import { motion } from 'framer-motion'
import { FaGithub, FaLinkedinIn } from 'react-icons/fa'
import { SiLeetcode } from 'react-icons/si'
import Button from '../components/Button'

const roles = ['Full Stack Developer', 'AI Enthusiast', 'Software Engineer', 'Problem Solver']

export default function Hero() {
  const [roleIndex, setRoleIndex] = useState(0)

  useEffect(() => {
    const interval = window.setInterval(() => {
      setRoleIndex((current) => (current + 1) % roles.length)
    }, 1800)

    return () => window.clearInterval(interval)
  }, [])

  return (
    <section id="home" className="relative overflow-hidden pb-20 pt-32 sm:pt-36">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,_rgba(139,92,246,0.16),transparent_30%),radial-gradient(circle_at_bottom_right,_rgba(34,211,238,0.12),transparent_32%)]" />
      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid items-center gap-16 lg:grid-cols-[1.08fr_0.92fr]">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, ease: 'easeOut' }}
            className="max-w-[640px]"
          >
            <div className="inline-flex items-center gap-2 rounded-full border border-emerald-400/30 bg-emerald-500/10 px-3 py-1.5 text-[10px] font-medium uppercase tracking-[0.2em] text-emerald-200 backdrop-blur-sm">
              <span className="h-2 w-2 rounded-full bg-emerald-400 shadow-[0_0_10px_rgba(52,211,153,0.8)]" />
              Open to internships & opportunities
            </div>

            <div className="mt-6 text-sm uppercase tracking-[0.24em] text-slate-400">Khushi Jain</div>

            <h1 className="mt-5 text-5xl font-semibold tracking-[-0.08em] text-white sm:text-6xl lg:text-7xl font-arial">
              Turning Engineering Ideas Into {'Code & Creativity '}
              <span className="bg-gradient-to-r from-violet-400 via-violet-300 to-cyan-300 bg-clip-text text-transparent">
                Digital Experiences.
              </span>
            </h1>

            <div className="mt-3 flex min-h-[3rem] items-center text-xl font-medium text-slate-200 sm:text-2xl">
              <span className="mr-2 text-slate-400">I am a Full Stack Developer</span>
              <motion.span
                key={roles[roleIndex]}
                initial={{ opacity: 0, y: 16 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -12 }}
                transition={{ duration: 0.4, ease: 'easeOut' }}
                className="bg-gradient-to-r from-violet-300 to-cyan-300 bg-clip-text text-transparent"
              >
                {roles[roleIndex]}
              </motion.span>
            </div>

            <p className="mt-6 max-w-xl text-lg leading-8 text-slate-300">
              Hey, I&apos;m Khushi Jain — a Computer Science Engineering student and Full Stack Developer passionate about building scalable web applications, intelligent systems and AI-powered digital products.
            </p>

            <div className="mt-8 flex flex-wrap items-center gap-4">
              <Button href="#projects" className="px-6 py-3 text-sm uppercase tracking-[0.12em] font-semibold text-white " >
                Explore My Work
                <ArrowRight size={16} />
              </Button>
              <Button href="/resume.pdf" variant="secondary" className="px-6 py-3 text-sm font-semibold uppercase tracking-[0.12em] text-slate-100" target="_blank" rel="noreferrer">
                <Download size={16} />
                Download Resume
              </Button>
            </div>

            <div className="mt-10 flex items-center gap-4">
              <a
                href="https://github.com/khushi375"
                target="_blank"
                rel="noreferrer"
                className="inline-flex h-11 w-11 items-center justify-center rounded-full border border-white/10 bg-white/5 text-slate-200 transition hover:border-violet-400/60 hover:text-white"
                aria-label="GitHub profile"
              >
                <FaGithub size={18} />
              </a>
              <a
                href="https://leetcode.com/u/30khushi/"
                target="_blank"
                rel="noreferrer"
                className="inline-flex h-11 w-11 items-center justify-center rounded-full border border-white/10 bg-white/5 text-slate-200 transition hover:border-orange-400/60 hover:text-white"
                aria-label="LeetCode profile"
              >
                <SiLeetcode size={18} />
              </a>
              <a
                href="https://www.linkedin.com/in/khushi-jain-b28789323/"
                target="_blank"
                rel="noreferrer"
                className="inline-flex h-11 w-11 items-center justify-center rounded-full border border-white/10 bg-white/5 text-slate-200 transition hover:border-cyan-400/60 hover:text-white"
                aria-label="LinkedIn profile"
              >
                <FaLinkedinIn size={18} />
              </a>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.96 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, ease: 'easeOut' }}
            className="relative flex justify-center lg:justify-end"
          >
            <div className="relative w-full max-w-[420px]">
              <div className="absolute inset-7 rounded-full bg-violet-500/20 blur-3xl" />
              <div className="absolute -left-8 top-10 h-16 w-16 rounded-full border border-cyan-400/40 bg-cyan-400/10 blur-sm" />
              <div className="absolute -right-4 bottom-8 h-20 w-20 rounded-full border border-violet-400/40 bg-violet-400/10 blur-sm" />

              <div className="relative mx-auto flex h-[320px] w-[320px] items-center justify-center rounded-full border border-white/15 bg-[radial-gradient(circle_at_30%_20%,rgba(147,197,253,0.25),transparent_18%),radial-gradient(circle_at_70%_30%,rgba(168,85,247,0.22),transparent_25%),linear-gradient(180deg,rgba(15,23,42,0.9),rgba(12,18,28,0.96))] p-4 shadow-[0_40px_90px_rgba(15,23,42,0.8)] sm:h-[360px] sm:w-[360px]">
                <div className="absolute inset-3 rounded-full border border-white/10" />
                <div className="absolute inset-8 rounded-full border border-violet-300/30" />
                <img
                  src="src/assets/Professional.png"
                  alt="Khushi Jain portrait"
                  className="h-full w-full rounded-full object-cover object-center ring-2 ring-violet-300/30 ring-offset-2 ring-offset-slate-950/70"
                />
              </div>
            </div>
          </motion.div>
        </div>

      </div>
    </section>
  )
}
