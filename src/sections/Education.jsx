import { GraduationCap } from 'lucide-react'

export default function Education() {
  return (
    <section className="py-24">
      <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
        <div className="rounded-[32px] border border-white/10 bg-[radial-gradient(circle_at_top_left,_rgba(139,92,246,0.16),transparent_28%),radial-gradient(circle_at_bottom_right,_rgba(34,211,238,0.12),transparent_26%),linear-gradient(180deg,rgba(15,23,42,0.88),rgba(15,23,42,0.65))] p-6 shadow-[0_24px_80px_rgba(15,23,42,0.5)] md:p-8">
          <div className="flex flex-col gap-6 md:flex-row md:items-center md:justify-between">
            <div className="flex items-start gap-4">
              <div className="flex h-12 w-12 items-center justify-center rounded-2xl border border-violet-400/30 bg-violet-500/10 text-violet-200">
                <GraduationCap size={22} />
              </div>
              <div>
                <p className="text-xs uppercase tracking-[0.2em] text-cyan-200">Education</p>
                <h3 className="mt-2 text-2xl font-semibold text-white">Geeta University</h3>
                <p className="mt-2 text-base text-slate-300">Bachelor of Technology – Computer Science and Engineering</p>
              </div>
            </div>

            <div className="rounded-2xl border border-violet-400/30 bg-violet-500/10 px-5 py-3 text-left md:text-right">
              <p className="text-[10px] uppercase tracking-[0.18em] text-violet-200">CGPA</p>
              <p className="mt-1 text-2xl font-semibold text-white">8.5 / 10</p>
            </div>
          </div>

          <div className="mt-8 grid gap-4 md:grid-cols-2">
            <div className="rounded-[24px] border border-white/10 bg-slate-900/60 p-5">
              <p className="text-xs uppercase tracking-[0.18em] text-slate-400">Schooling</p>
              <div className="mt-4 space-y-3 text-sm text-slate-300">
                <div className="rounded-2xl border border-white/10 bg-white/5 p-3">
                  <p className="font-medium text-white">Arya Bal Bharti Public School</p>
                  <p className="mt-1">Class XII: 85% • Class X: 88%</p>
                </div>
                <div className="rounded-2xl border border-white/10 bg-white/5 p-3">
                  <p className="font-medium text-white">Panipat, Haryana</p>
                  <p className="mt-1">Focused academic foundation in science and problem-solving.</p>
                </div>
              </div>
            </div>

            <div className="rounded-[24px] border border-white/10 bg-slate-900/60 p-5">
              <p className="text-xs uppercase tracking-[0.18em] text-slate-400">Relevant Subjects</p>
              <div className="mt-4 flex flex-wrap gap-2">
                {['Data Structures', 'Algorithms', 'DBMS', 'Software Engineering', 'Computer Networks', 'Operating Systems'].map((subject) => (
                  <span
                    key={subject}
                    className="rounded-full border border-white/10 bg-white/5 px-3 py-1.5 text-sm text-slate-200"
                  >
                    {subject}
                  </span>
                ))}
              </div>

              <p className="mt-5 text-sm leading-6 text-slate-300">
                Deepening fundamentals in core computer science concepts and applying them to practical software engineering and product development.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
