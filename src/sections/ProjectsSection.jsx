import { motion } from 'framer-motion'
import SectionHeader from '../components/SectionHeader'
import { projects } from '../utils/projectsData'

function ProjectCard({ project, index }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 28 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.45, delay: index * 0.08 }}
      className="glass-card glass-card-hover rounded-2xl p-6 flex flex-col gap-4"
    >
      {/* Header row */}
      <div className="flex items-start justify-between gap-3">
        <div
          className={`w-12 h-12 rounded-xl bg-gradient-to-br ${project.colorClass} flex items-center justify-center text-2xl flex-shrink-0`}
        >
          {project.emoji}
        </div>
        <div className="flex gap-2">
          <a
            href={project.github}
            target="_blank"
            rel="noreferrer"
            className="w-8 h-8 rounded-lg bg-[rgba(255,255,255,0.05)] border border-[rgba(255,255,255,0.1)] flex items-center justify-center text-slate-400 hover:border-[#00f5ff] hover:text-[#00f5ff] transition-all duration-200 text-xs"
            title="GitHub"
          >
            ⌥
          </a>
          {project.live && (
            <a
              href={project.live}
              target="_blank"
              rel="noreferrer"
              className="w-8 h-8 rounded-lg bg-[rgba(255,255,255,0.05)] border border-[rgba(255,255,255,0.1)] flex items-center justify-center text-slate-400 hover:border-[#00f5ff] hover:text-[#00f5ff] transition-all duration-200 text-xs"
              title="Live Demo"
            >
              ↗
            </a>
          )}
        </div>
      </div>

      {/* Title + description */}
      <div>
        <h3 className="font-head text-base font-bold text-white mb-1.5">{project.title}</h3>
        <p className="text-sm text-slate-400 leading-relaxed">{project.description}</p>
      </div>

      {/* Features */}
      <ul className="flex flex-col gap-1">
        {project.features.map((f, i) => (
          <li
            key={i}
            className="text-[0.78rem] text-slate-500 pl-3 relative before:content-['·'] before:absolute before:left-0 before:text-[#00f5ff]"
          >
            {f}
          </li>
        ))}
      </ul>

      {/* Stack tags */}
      <div className="flex flex-wrap gap-1.5 mt-auto pt-2">
        {project.stack.map((tag) => (
          <span
            key={tag}
            className="font-mono-custom text-[0.67rem] px-2.5 py-0.5 rounded-full bg-[rgba(59,130,246,0.1)] border border-[rgba(59,130,246,0.2)] text-blue-300"
          >
            {tag}
          </span>
        ))}
      </div>
    </motion.div>
  )
}

export default function ProjectsSection() {
  return (
    <section
      id="projects"
      className="py-20 bg-black/20 border-t border-b border-[rgba(0,245,255,0.08)]"
    >
      <div className="max-w-[1100px] mx-auto px-6">
        <SectionHeader label="04 · Work Samples" title="Projects" />

        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-5">
          {projects.map((project, i) => (
            <ProjectCard key={project.id} project={project} index={i} />
          ))}
        </div>
      </div>
    </section>
  )
}
