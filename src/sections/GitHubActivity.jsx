import { ArrowRight, Link2 } from 'lucide-react'
import { FaGithub } from 'react-icons/fa'
import SectionHeading from '../components/SectionHeading'

const repositories = [
  { name: 'InterviewIQ', href: 'https://github.com/khushi375/Interview' },
  { name: 'ATITHI', href: 'https://github.com/khushi375/atithi' },
  { name: 'ShopSphereX', href: 'https://github.com/khushi375/shopsphere-ecommerce' },
  { name: 'AI Study Planner', href: 'https://github.com/Sneha629/AI_Study_Planner' },
  { name: 'LeetCode: 400+ Problems Solved', href: 'https://leetcode.com/u/30khushi/' },
]

export default function GitHubActivity() {
  return (
    <section className="py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <SectionHeading
          eyebrow="GitHub"
          title="A builder exploring practical product ideas."
          description="The best way to understand the work is through the repositories and experiments themselves."
        />

        <div className="mt-12 grid gap-6 lg:grid-cols-[1.2fr_0.8fr]">
          <div className="rounded-[32px] border border-white/10 bg-[radial-gradient(circle_at_top,_rgba(139,92,246,0.15),transparent_30%),linear-gradient(180deg,#0f172a,#111827)] p-6 shadow-[0_18px_56px_rgba(15,23,42,0.5)]">
            <div className="flex items-center justify-between gap-4">
              <div className="flex items-center gap-3">
                <div className="flex h-12 w-12 items-center justify-center rounded-2xl border border-violet-400/30 bg-violet-500/10 text-violet-200">
                  <FaGithub size={22} />
                </div>
                <div>
                  <p className="text-xs uppercase tracking-[0.18em] text-slate-400">Profile</p>
                  <p className="text-xl font-semibold text-white">github.com/khushi375</p>
                </div>
              </div>
              <a
                href="https://github.com/khushi375"
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-2 rounded-full border border-cyan-400/40 bg-cyan-500/10 px-4 py-2 text-sm text-cyan-100 transition hover:border-cyan-300 hover:bg-cyan-500/20"
              >
                Explore Repositories
                <ArrowRight size={15} />
              </a>
            </div>

            <div className="mt-8 overflow-hidden rounded-[24px] border border-white/10 bg-slate-900/70">
              <img
                src="src/assets/profile-portrait.png"
                alt="Khushi Jain portrait"
                className="h-28 w-full max-w-full object-cover object-center"
              />
              <div className="p-4">
                <p className="text-xs uppercase tracking-[0.2em] text-slate-400">Focus</p>
                <p className="mt-3 text-sm leading-7 text-slate-300">
                  Portfolio work, learning projects, and product experiments centered around full-stack engineering, AI integrations, and user-focused web experiences.
                </p>
              </div>
            </div>
          </div>

          <div className="rounded-[32px] border border-white/10 bg-slate-900/75 p-6 shadow-[0_18px_56px_rgba(15,23,42,0.5)]">
            <p className="text-xs uppercase tracking-[0.2em] text-slate-400">Featured work & achievements</p>
            <div className="mt-5 space-y-3">
              {repositories.map((repo) => (
                <a
                  key={repo.name}
                  href={repo.href}
                  target="_blank"
                  rel="noreferrer"
                  className="flex items-center justify-between rounded-2xl border border-white/10 bg-white/5 p-3 text-slate-200 transition hover:border-violet-400/50 hover:text-white"
                >
                  <span className="font-medium">{repo.name}</span>
                  <Link2 size={16} />
                </a>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
