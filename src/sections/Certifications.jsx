import { Award, BookOpenText, Cloud, Sparkles } from 'lucide-react'
import SectionHeading from '../components/SectionHeading'
import { certifications } from '../data/certifications'

const icons = [Cloud, BookOpenText, Sparkles, Award, Sparkles, BookOpenText]

export default function Certifications() {
  return (
    <section className="py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <SectionHeading
          eyebrow="Learning"
          title="Certifications and continuous growth."
          description="A focused path of technical learning across cloud, full-stack development, and AI-driven workflows."
        />

        <div className="mt-12 grid gap-5 md:grid-cols-2 xl:grid-cols-3">
          {certifications.map((item, index) => {
            const Icon = icons[index] || Sparkles
            return (
              <div
                key={item.title}
                className="rounded-[26px] border border-white/10 bg-slate-900/75 p-5 shadow-[0_18px_56px_rgba(15,23,42,0.45)]"
              >
                <div className="mb-4 inline-flex rounded-2xl border border-cyan-400/30 bg-cyan-500/10 p-3 text-cyan-200">
                  <Icon size={20} />
                </div>
                <h3 className="text-xl font-semibold text-white">{item.title}</h3>
                <p className="mt-2 text-sm uppercase tracking-[0.14em] text-violet-200">{item.provider}</p>
                <p className="mt-4 text-sm leading-6 text-slate-300">{item.description}</p>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
