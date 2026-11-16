import { motion } from 'framer-motion'
import { BrainCircuit, Code2, Rocket, Sparkles, Target } from 'lucide-react'
import SectionHeading from '../components/SectionHeading'

const cards = [
  {
    icon: BrainCircuit,
    title: 'About Me',
    content:
      'I am Khushi Jain, a Computer Science Engineering student passionate about transforming ideas into functional and meaningful digital experiences.',
  },
  {
    icon: Code2,
    title: 'Full Stack Development',
    content:
      'I enjoy building user-centric applications that combine modern interfaces, scalable back-end architecture, and smooth product experiences.',
  },
  {
    icon: Sparkles,
    title: 'AI & Emerging Tech',
    content:
      'I am excited by AI-powered products and how intelligent systems can simplify work and improve decision-making.',
  },
  {
    icon: Target,
    title: 'Problem Solving',
    content:
      'I like turning ambiguous problems into clear systems, practical solutions, and maintainable code that performs reliably.',
  },
  {
    icon: Rocket,
    title: 'Continuous Learning',
    content:
      'I actively explore new tools, frameworks, and technologies to improve product quality, engineering depth, and experimentation.',
  },
  {
    icon: Target,
    title: 'Product Thinking',
    content:
      'I care about user value, product clarity, and building experiences that are both useful and elegant.',
  },
 
]

export default function About() {
  return (
    <section id="about" className="relative py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <SectionHeading
          eyebrow="About"
          title="Beyond Just Writing Code."
          description="I’m Khushi Jain, a Computer Science Engineering student passionate about transforming ideas into functional and meaningful digital experiences. I enjoy building full-stack applications, exploring artificial intelligence and solving real-world problems through technology."
        />

        <div className="mt-12 grid gap-5 md:grid-cols-2 xl:grid-cols-3">
          {cards.map(({ icon: Icon, title, content }, index) => (
            <motion.article
              key={title}
              initial={{ opacity: 0, y: 18 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.5, delay: index * 0.08, ease: 'easeOut' }}
              className="group relative overflow-hidden rounded-[28px] border border-white/10 bg-slate-800/65 p-6"
            >
              <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,_rgba(139,92,246,0.14),transparent_35%),radial-gradient(circle_at_bottom_right,_rgba(34,211,238,0.12),transparent_36%)] opacity-80" />
              <div className="relative z-10">
                <div className="mb-5 inline-flex rounded-2xl border border-violet-400/30 bg-violet-500/10 p-3 text-violet-200">
                  <Icon size={20} />
                </div>
                <h3 className="text-xl font-semibold text-white">{title}</h3>
                <p className="mt-3 text-sm leading-6 text-slate-300">{content}</p>
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  )
}
