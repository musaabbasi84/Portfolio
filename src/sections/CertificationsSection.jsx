import { motion } from 'framer-motion'
import SectionHeader from '../components/SectionHeader'
import { certifications } from '../utils/certificationsData'

export default function CertificationsSection() {
  return (
    <section
      id="certifications"
      className="py-20 bg-black/20 border-t border-b border-[rgba(0,245,255,0.08)]"
    >
      <div className="max-w-[1100px] mx-auto px-6">
        <SectionHeader label="06 · Credentials" title="Certifications" />

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {certifications.map((cert, i) => (
            <motion.div
              key={cert.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: i * 0.1 }}
              className="glass-card rounded-2xl p-5 flex items-start gap-4"
            >
              <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-[rgba(0,245,255,0.15)] to-[rgba(59,130,246,0.15)] border border-[rgba(0,245,255,0.15)] flex items-center justify-center text-2xl flex-shrink-0">
                {cert.icon}
              </div>
              <div>
                <h3 className="font-semibold text-white text-sm leading-snug mb-1">
                  {cert.title}
                </h3>
                <p className="font-mono-custom text-xs text-[#00f5ff]">{cert.issuer}</p>
                <p className="font-mono-custom text-xs text-slate-500 mt-1">{cert.year}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
