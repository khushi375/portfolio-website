import SectionHeading from '../components/SectionHeading'
import SkillCard from '../components/SkillCard'
import { skillGroups } from '../data/skills'

export default function Skills() {
  return (
    <section id="skills" className="py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <SectionHeading
          eyebrow="Technical Skills"
          title="Tools, frameworks and systems I build with."
          description="A practical stack focused on scalable product development, polished interfaces, and AI-enhanced experiences."
          align="center"
        />

        <div className="mt-12 grid gap-5 md:grid-cols-2 xl:grid-cols-3">
          {skillGroups.map((group, index) => (
            <SkillCard key={group.title} title={group.title} items={group.items} index={index} />
          ))}
        </div>
      </div>
    </section>
  )
}
