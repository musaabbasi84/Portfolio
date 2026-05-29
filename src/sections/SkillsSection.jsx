import { motion } from 'framer-motion'
import SectionHeader from '../components/SectionHeader'
import { skillGroups } from '../utils/skillsData'

const badgeStyles = {
  'badge-cyan': 'bg-[rgba(0,245,255,0.1)] border border-[rgba(0,245,255,0.25)] text-[#00f5ff]',
  'badge-blue': 'bg-[rgba(59,130,246,0.12)] border border-[rgba(59,130,246,0.3)] text-blue-300',
  'badge-purple': 'bg-[rgba(168,85,247,0.12)] border border-[rgba(168,85,247,0.3)] text-purple-300',
  'badge-green': 'bg-[rgba(34,197,94,0.1)] border border-[rgba(34,197,94,0.25)] text-green-300',
}

export default function SkillsSection() {
  return (
    <section
      id="skills"
      className="py-20 bg-black/20 border-t border-b border-[rgba(0,245,255,0.08)]"
    >
      <div className="max-w-[1100px] mx-auto px-6">
        <SectionHeader label="02 · Capabilities" title="Skills & Tech Stack" />

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {skillGroups.map((group, i) => (
            <motion.div
              key={group.id}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: i * 0.1 }}
              className="glass-card rounded-2xl p-5"
            >
              <h3 className="font-head text-sm font-bold text-white mb-4 flex items-center gap-2">
                <span>{group.icon}</span>
                {group.title}
              </h3>
              <div className="flex flex-wrap gap-2">
                {group.skills.map((skill) => (
                  <span
                    key={skill}
                    className={`font-mono-custom text-[0.7rem] px-3 py-1 rounded-full font-medium ${badgeStyles[group.badgeClass]}`}
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
