import { motion } from 'framer-motion'

const stats = [
  { num: '2+', label: 'Internships' },
  { num: '5+', label: 'Projects Built' },
  { num: '129K+', label: 'Records Processed' },
  { num: '3', label: 'Certifications' },
]

const fadeUp = (delay = 0) => ({
  initial: { opacity: 0, y: 30 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.6, delay, ease: 'easeOut' },
})

export default function HeroSection() {
  const scrollTo = (id) => {
    document.querySelector(id)?.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <section className="relative min-h-screen flex items-center overflow-hidden px-6">
      {/* Background layers */}
      <div className="absolute inset-0 grid-bg pointer-events-none" />
      <div className="absolute top-[-10%] left-[-10%] w-[500px] h-[500px] rounded-full bg-blue-800/40 blur-[100px] pointer-events-none" />
      <div className="absolute bottom-[-10%] right-[-5%] w-[400px] h-[400px] rounded-full bg-violet-700/35 blur-[100px] pointer-events-none" />
      <div className="absolute top-[40%] left-[45%] w-[300px] h-[300px] rounded-full bg-cyan-700/25 blur-[80px] pointer-events-none" />

      <div className="max-w-[1100px] mx-auto w-full relative z-10 pt-20 pb-12">
        {/* Available tag */}
        <motion.div {...fadeUp(0.1)}>
          <div className="inline-flex items-center gap-2 bg-[rgba(255,255,255,0.06)] border border-[rgba(0,245,255,0.18)] rounded-full px-4 py-1.5 mb-6">
            <span className="w-2 h-2 rounded-full bg-[#00f5ff] animate-pulse2" />
            <span className="font-mono-custom text-xs text-[#00f5ff] tracking-wide">
              Available for Junior Developer Roles · Rawalpindi, Pakistan
            </span>
          </div>
        </motion.div>

        {/* Name */}
        <motion.h1
          {...fadeUp(0.2)}
          className="font-head font-extrabold leading-[1.05] mb-3"
          style={{ fontSize: 'clamp(2.8rem, 6vw, 5rem)' }}
        >
          Muhammad
          <br />
          <span className="gradient-text">Musa Abbasi</span>
        </motion.h1>

        {/* Roles */}
        <motion.p
          {...fadeUp(0.3)}
          className="font-mono-custom text-base text-slate-400 mb-5 tracking-wide"
        >
          <span className="text-[#00f5ff]">Frontend Developer</span>
          {' · '}Data Analyst{' · '}Software Engineer
        </motion.p>

        {/* Bio */}
        <motion.p
          {...fadeUp(0.4)}
          className="text-slate-400 max-w-[560px] leading-relaxed text-base mb-8"
        >
          I build clean, performant web applications and turn raw data into actionable
          insights. Passionate about React ecosystems, API integration, and crafting
          interfaces that feel genuinely good to use.
        </motion.p>

        {/* CTA Buttons */}
        <motion.div
          {...fadeUp(0.5)}
          className="flex flex-wrap gap-3 mb-12"
        >
          <a
  href="/Muhammad_Musa_Abbasi_CV.pdf"
  download="Muhammad_Musa_Abbasi_CV.pdf"
  className="inline-flex items-center gap-2 bg-gradient-to-r from-[#00f5ff] to-blue-500 text-[#020817] font-semibold px-6 py-3 rounded-lg text-sm hover:opacity-90 transition-opacity"
>
  📄 Download CV
</a>
          <button
            onClick={() => scrollTo('#projects')}
            className="inline-flex items-center gap-2 bg-[rgba(255,255,255,0.05)] border border-blue-500/30 text-slate-200 hover:border-[#00f5ff] hover:text-[#00f5ff] px-6 py-3 rounded-lg text-sm transition-all duration-200"
          >
            🚀 View Projects
          </button>
          <a
            href="https://github.com/musaabbasi84"
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center gap-2 bg-transparent border border-slate-600 text-slate-400 hover:border-slate-400 hover:text-white px-6 py-3 rounded-lg text-sm transition-all duration-200"
          >
            GitHub
          </a>
          <a
            href="https://www.linkedin.com/in/musa-abbasi3001b7204/"
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center gap-2 bg-transparent border border-slate-600 text-slate-400 hover:border-slate-400 hover:text-white px-6 py-3 rounded-lg text-sm transition-all duration-200"
          >
            LinkedIn
          </a>
        </motion.div>

        {/* Stats */}
        <motion.div
          {...fadeUp(0.6)}
          className="flex flex-wrap gap-8 pt-8 border-t border-[rgba(0,245,255,0.1)]"
        >
          {stats.map((s) => (
            <div key={s.label}>
              <div className="font-head text-2xl font-bold text-white">{s.num}</div>
              <div className="font-mono-custom text-xs text-slate-500 tracking-wide uppercase">
                {s.label}
              </div>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
