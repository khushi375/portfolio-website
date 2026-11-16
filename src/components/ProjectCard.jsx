import { motion } from 'framer-motion'
import { ArrowUpRight, ExternalLink } from 'lucide-react'
import { FaGithub } from 'react-icons/fa'

export default function ProjectCard({ project, index }) {
  return (
    <motion.article
      initial={{ opacity: 0, y: 28 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.25 }}
      transition={{ duration: 0.55, delay: index * 0.08, ease: 'easeOut' }}
      whileHover={{ y: -8, scale: 1.015 }}
      className="group relative overflow-hidden rounded-[26px] border border-white/10 bg-slate-800/70 p-4 shadow-[0_20px_70px_rgba(15,23,42,0.45)]"
    >
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,_rgba(139,92,246,0.12),transparent_38%),radial-gradient(circle_at_bottom_right,_rgba(34,211,238,0.12),transparent_40%)] opacity-90" />
      <div className="relative z-10">
        <div className="mb-4 flex items-center justify-between gap-3">
          <span className="rounded-full border border-cyan-400/30 bg-cyan-500/10 px-2.5 py-2 text-[9px] font-medium uppercase tracking-[0.18em] text-cyan-200">
            {project.status}
          </span>
          <div className="flex items-center gap-2 text-slate-300">
            {project.github ? (
              <a
                href={project.github}
                target="_blank"
                rel="noreferrer"
                aria-label={`GitHub repository for ${project.title}`}
                className="rounded-full border border-white/10 bg-white/5 p-2 transition hover:border-violet-400/50 hover:text-white"
              >
                <FaGithub size={14} />
              </a>
            ) : null}
            {project.live ? (
              <a
                href={project.live}
                target="_blank"
                rel="noreferrer"
                aria-label={`Live demo for ${project.title}`}
                className="rounded-full border border-white/10 bg-white/5 p-2 transition hover:border-cyan-400/50 hover:text-white"
              >
                <ExternalLink size={14} />
              </a>
            ) : null}
          </div>
        </div>

        <div className="mb-4 overflow-hidden rounded-[20px] border border-white/10 bg-slate-950/50">
          <img
            src={project.image}
            alt={`${project.title} preview`}
            className="h-40 w-full object-cover transition duration-500 group-hover:scale-105"
          />
        </div>

        <h3 className="text-xl font-semibold tracking-[-0.05em] text-white">{project.title}</h3>
        <p className="mt-2 text-sm leading-6 text-slate-300">{project.summary}</p>

        <div className="mt-4 flex flex-wrap gap-2">
          {project.technologies.map((tech) => (
            <span
              key={tech}
              className="rounded-full border border-white/10 bg-white/5 px-2 py-1 text-[10px] text-slate-200"
            >
              {tech}
            </span>
          ))}
        </div>

        <div className="mt-5 flex items-center gap-2">
          {project.github ? (
            <a
              href={project.github}
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-2 rounded-full border border-violet-500/50 bg-violet-500/10 px-3 py-2 text-xs font-medium text-violet-100 transition hover:border-violet-300 hover:bg-violet-500/20"
            >
              <FaGithub size={13} />
              Code
            </a>
          ) : null}
          {project.live ? (
            <a
              href={project.live}
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-2 rounded-full border border-cyan-500/50 bg-cyan-500/10 px-3 py-2 text-xs font-medium text-cyan-100 transition hover:border-cyan-300 hover:bg-cyan-500/20"
            >
              Live
              <ArrowUpRight size={13} />
            </a>
          ) : null}
        </div>
      </div>
    </motion.article>
  )
}
