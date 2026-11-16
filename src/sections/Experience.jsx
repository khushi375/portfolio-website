import SectionHeading from '../components/SectionHeading'
import ExperienceCard from '../components/ExperienceCard'
import { experience } from '../data/experience'
import experienceImage from '../assets/Expimages.jpeg'

export default function Experience() {
  return (
    <section id="experience" className="relative overflow-hidden py-24">
      <div className="pointer-events-none absolute -left-40 top-24 h-80 w-80 rounded-full bg-violet-500/10 blur-[100px]" />
      <div className="relative mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <div>
          <SectionHeading
            eyebrow="Experience"
            title="Learning by building. Growing by doing."
            description="From shipping real product features to sharpening computer science fundamentals, every step has added a new layer to how I work."
          />
        </div>

        <div className="mt-12 grid gap-6 md:grid-cols-2 xl:grid-cols-[minmax(0,1fr)_280px_minmax(0,1fr)] xl:items-center">
          <div className="flex flex-col gap-8">
            {experience.slice(0, 2).map((item, index) => (
              <ExperienceCard key={`${item.company}-${index}`} item={item} index={index} side="left" />
            ))}
          </div>

          <div className="relative order-first mx-auto w-full max-w-[320px] md:col-span-2 xl:order-none xl:col-span-1">
            <div className="absolute -inset-5 rounded-[42px] bg-gradient-to-b from-violet-500/15 via-cyan-400/10 to-transparent blur-2xl" />
            <div className="relative overflow-hidden rounded-[32px] border border-white/15 bg-slate-950/80 p-2 shadow-[0_30px_90px_rgba(2,6,23,0.65)]">
              <img
                src={experienceImage}
                alt="Career growth and professional development"
                className="aspect-[16/9] w-full rounded-[25px] object-cover"
              />
              <div className="px-4 pb-3 pt-4">
                <p className="text-[10px] font-medium uppercase tracking-[0.22em] text-cyan-200">The journey</p>
                <p className="mt-1 text-lg font-semibold tracking-[-0.04em] text-white">Learn. Build. Evolve.</p>
              </div>
            </div>
            <div className="absolute -right-3 top-8 hidden rounded-full border border-cyan-300/25 bg-slate-950 px-3 py-2 text-[10px] font-medium uppercase tracking-[0.14em] text-cyan-100 shadow-lg sm:block">
              Always growing
            </div>
          </div>

          <div className="flex flex-col gap-8">
            {experience.slice(2).map((item, index) => (
              <ExperienceCard key={`${item.company}-${index + 2}`} item={item} index={index + 2} side="right" />
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
