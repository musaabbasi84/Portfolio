import { motion } from 'framer-motion'
import SectionHeader from '../components/SectionHeader'

const meta = [
  { icon: '📍', iconClass: 'bg-[rgba(0,245,255,0.1)] border-[rgba(0,245,255,0.2)]', label: 'Location', value: 'Rawalpindi, Pakistan' },
  { icon: '📧', iconClass: 'bg-[rgba(59,130,246,0.1)] border-[rgba(59,130,246,0.2)]', label: 'Email', value: 'musaabbasi84@gmail.com' },
  { icon: '📞', iconClass: 'bg-[rgba(0,245,255,0.1)] border-[rgba(0,245,255,0.2)]', label: 'Phone', value: '+92 344 5717833' },
  { icon: '💼', iconClass: 'bg-[rgba(59,130,246,0.1)] border-[rgba(59,130,246,0.2)]', label: 'Status', value: 'Frontend Dev Intern (Present)' },
  { icon: '🎯', iconClass: 'bg-[rgba(0,245,255,0.1)] border-[rgba(0,245,255,0.2)]', label: 'Goal', value: 'Junior Frontend / Full-Stack Role' },
  { icon: '🛠️', iconClass: 'bg-[rgba(59,130,246,0.1)] border-[rgba(59,130,246,0.2)]', label: 'Primary Stack', value: 'React · Tailwind · Python · SQL' },
]

export default function AboutSection() {
  return (
    <section id="about" className="py-20">
      <div className="max-w-[1100px] mx-auto px-6">
        <SectionHeader label="01 · Who I Am" title="About Me" />

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
          {/* Text */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="space-y-4"
          >
            <p className="text-slate-400 leading-relaxed text-[0.95rem]">
              I'm a frontend-focused developer with a growing full-stack profile, currently interning at{' '}
              <strong className="text-slate-200">Seasonedly</strong> where I'm building a production-grade invoice
              management system using React, Tailwind CSS, and REST APIs with JWT authentication.
            </p>
            <p className="text-slate-400 leading-relaxed text-[0.95rem]">
              My background in <strong className="text-slate-200">data analytics</strong> gives me an edge — I've
              processed 129,000+ dataset records at Excelerate, building ETL pipelines in PostgreSQL, performing EDA,
              and delivering analytical dashboards that helped drive decisions.
            </p>
            <p className="text-slate-400 leading-relaxed text-[0.95rem]">
              On the backend side, I've worked with Flask and FastAPI for building lightweight APIs and understand
              how systems communicate end-to-end. I'm also comfortable in Python for scripting, data wrangling, and
              automation.
            </p>
            <p className="text-slate-400 leading-relaxed text-[0.95rem]">
              Right now I'm actively looking for <strong className="text-slate-200">junior frontend developer</strong>{' '}
              or full-stack roles where I can contribute real work from day one, grow fast, and collaborate with
              teams building meaningful products.
            </p>
            
          </motion.div>

          {/* Meta card */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="glass-card rounded-2xl p-6 space-y-3"
          >
            {meta.map((item) => (
              <div key={item.label} className="flex items-center gap-3">
                <div className={`w-10 h-10 rounded-xl border flex items-center justify-center text-lg flex-shrink-0 ${item.iconClass}`}>
                  {item.icon}
                </div>
                <div>
                  <p className="font-mono-custom text-[0.7rem] text-slate-500 uppercase tracking-widest">
                    {item.label}
                  </p>
                  <p className="text-slate-200 text-sm font-medium">{item.value}</p>
                </div>
              </div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  )
}
