import { motion } from 'framer-motion'

export default function SectionHeader({ label, title }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5 }}
      className="mb-10"
    >
      <p className="font-mono-custom text-xs text-[#00f5ff] tracking-[0.15em] uppercase mb-2">
        {label}
      </p>
      <h2 className="font-head text-3xl md:text-4xl font-bold text-white mb-3">
        {title}
      </h2>
      <div className="w-12 h-0.5 bg-gradient-to-r from-[#00f5ff] to-purple-500" />
    </motion.div>
  )
}
