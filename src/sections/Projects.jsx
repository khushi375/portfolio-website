import SectionHeading from '../components/SectionHeading'
import ProjectCard from '../components/ProjectCard'
import { projects } from '../data/projects'

export default function Projects() {
  return (
    <section id="projects" className="py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <SectionHeading
          eyebrow="Projects"
          title="Things I've Built."
          description="Selected work combining product thinking, AI-assisted experiences, and modern full-stack engineering."
        />

        <div className="mt-12 overflow-x-auto pb-4">
          <div className="grid auto-cols-[minmax(280px,1fr)] grid-flow-col gap-8 xl:auto-cols-auto xl:grid-cols-4">
            {projects.map((project, index) => (
              <ProjectCard key={project.title} project={project} index={index} />
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
