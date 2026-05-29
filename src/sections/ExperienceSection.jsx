import { motion } from 'framer-motion'
import SectionHeader from '../components/SectionHeader'
import { experiences } from '../utils/experienceData'

export default function ExperienceSection() {
  return (
    <section id="experience" className="py-20">
      <div className="max-w-[1100px] mx-auto px-6">
        <SectionHeader label="03 · Work History" title="Experience" />

        <div className="relative pl-8 timeline-line">
          {experiences.map((exp, i) => {
            const dotColor =
              exp.dotColor === 'purple'
                ? 'border-purple-400 shadow-[0_0_12px_rgba(168,85,247,0.6)]'
                : 'border-[#00f5ff] shadow-[0_0_12px_rgba(0,245,255,0.6)]'

            return (
              <motion.div
                key={exp.id}
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.15 }}
                className="relative mb-10 last:mb-0"
              >
                {/* Timeline dot */}
                <span
                  className={`absolute -left-[2.35rem] top-1 w-3.5 h-3.5 rounded-full bg-[#020817] border-2 ${dotColor}`}
                />

                <div className="glass-card rounded-2xl p-6">
                  <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-2 mb-4">
                    <div>
                      <h3 className="font-head text-lg font-bold text-white leading-tight">
                        {exp.role}
                      </h3>
                      <p className="text-[#00f5ff] text-sm font-medium mt-0.5">{exp.company}</p>
                    </div>
                    <span className="font-mono-custom text-[0.7rem] text-slate-500 bg-[rgba(255,255,255,0.05)] border border-[rgba(255,255,255,0.08)] px-3 py-1 rounded-full self-start whitespace-nowrap">
                      {exp.period}
                    </span>
                  </div>

                  <ul className="space-y-1.5">
                    {exp.bullets.map((b, j) => (
                      <li
                        key={j}
                        className="text-sm text-slate-400 pl-4 relative before:content-['▸'] before:absolute before:left-0 before:text-[#00f5ff] before:text-[0.65rem] before:top-[3px]"
                      >
                        {b}
                      </li>
                    ))}
                  </ul>
                </div>
              </motion.div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
