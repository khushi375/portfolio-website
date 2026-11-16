import { Download, ExternalLink, FileText } from 'lucide-react'
import Button from '../components/Button'

export default function Resume() {
  return (
    <section id="resume" className="py-24">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <div className="rounded-[32px] border border-white/10 bg-[radial-gradient(circle_at_top_left,_rgba(139,92,246,0.18),transparent_32%),radial-gradient(circle_at_bottom_right,_rgba(34,211,238,0.12),transparent_36%),linear-gradient(180deg,#0f172a,#111827)] p-6 shadow-[0_22px_70px_rgba(15,23,42,0.5)] md:p-8">
          <div className="grid gap-8 lg:grid-cols-[1.2fr_0.8fr] lg:items-center">
            <div>
              <p className="text-xs uppercase tracking-[0.22em] text-violet-200">Resume</p>
              <h2 className="mt-4 text-3xl font-semibold tracking-[-0.06em] text-white sm:text-4xl">
                Profile snapshot and professional background.
              </h2>
              <p className="mt-5 max-w-xl text-base leading-7 text-slate-300">
                Computer Science undergraduate with hands-on experience in web development, problem solving, and user-focused digital product delivery. Skilled in full-stack engineering, data structures, cloud workflows, and practical product execution.
              </p>

              <div className="mt-6 flex flex-wrap gap-3">
                <Button href="/resume.pdf" target="_blank" rel="noreferrer"  className="px-5 py-3 text-sm uppercase tracking-[0.12em] text-white">
                  <ExternalLink size={16} />
                  View Resume
                </Button>
                <Button href="/resume.pdf" download variant="secondary" className="px-5 py-3 text-sm uppercase tracking-[0.12em]">
                  <Download size={16} />
                  Download
                </Button>
              </div>
            </div>

            <div className="rounded-[28px] border border-white/10 bg-slate-900/70 p-5">
              <div className="mb-5 flex items-center justify-between">
                <div className="inline-flex h-12 w-12 items-center justify-center rounded-2xl border border-violet-400/30 bg-violet-500/10 text-violet-200">
                  <FileText size={22} />
                </div>
                <span className="rounded-full border border-cyan-400/30 bg-cyan-500/10 px-2.5 py-1 text-[10px] font-medium uppercase tracking-[0.18em] text-cyan-200">
                  Updated
                </span>
              </div>

              <div className="space-y-3 text-sm text-slate-300">
                <div className="flex items-center justify-between rounded-2xl border border-white/10 bg-white/5 px-3 py-2">
                  <span>Name</span>
                  <span className="font-medium text-white">Khushi Jain</span>
                </div>
                <div className="flex items-center justify-between rounded-2xl border border-white/10 bg-white/5 px-3 py-2">
                  <span>Education</span>
                  <span className="font-medium text-white">B.Tech CSE</span>
                </div>
                <div className="flex items-center justify-between rounded-2xl border border-white/10 bg-white/5 px-3 py-2">
                  <span>Experience</span>
                  <span className="font-medium text-white">Internships</span>
                </div>
                <div className="flex items-center justify-between rounded-2xl border border-white/10 bg-white/5 px-3 py-2">
                  <span>Key Strength</span>
                  <span className="font-medium text-white">Full Stack</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
