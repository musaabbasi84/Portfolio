import { useEffect, useRef } from 'react'
import { motion } from 'framer-motion'
import SectionHeader from '../components/SectionHeader'

const ghStats = [
  { num: '5+', label: 'Repositories' },
  { num: '2', label: 'Languages' },
  { num: 'React', label: 'Top Language' },
  { num: 'Active', label: 'Commit Status' },
]

// Deterministic contribution level pattern (0-4)
const LEVELS = [
  0,0,1,1,2,2,3,4,3,2,1,0,1,2,3,4,3,2,1,2,
  3,4,4,3,2,1,0,1,2,3,3,4,3,2,1,0,0,1,2,3,
  4,3,2,1,2,3,3,2,1,0,1,2,3,4,
]

const COLORS = [
  '#1e293b',
  'rgba(0,245,255,0.20)',
  'rgba(0,245,255,0.42)',
  'rgba(0,245,255,0.68)',
  '#00f5ff',
]

function ContribGrid() {
  const cells = []
  for (let week = 0; week < 52; week++) {
    for (let day = 0; day < 7; day++) {
      const level = LEVELS[(week + day) % LEVELS.length]
      cells.push(
        <div
          key={`${week}-${day}`}
          className="w-3 h-3 rounded-sm flex-shrink-0"
          style={{ background: COLORS[level] }}
          title={`Level ${level}`}
        />
      )
    }
  }
  return (
    <div className="flex flex-wrap gap-[3px]">
      {cells}
    </div>
  )
}

export default function GitHubSection() {
  return (
    <section id="github" className="py-20">
      <div className="max-w-[1100px] mx-auto px-6">
        <SectionHeader label="05 · Activity" title="GitHub Stats" />

        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="glass-card rounded-2xl p-7"
        >
          {/* Header */}
          <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 mb-6">
            <div>
              <p className="font-head font-bold text-white mb-0.5">musaabbasi84</p>
              <p className="font-mono-custom text-sm text-[#00f5ff]">
                github.com/musaabbasi84
              </p>
            </div>
            <a
              href="https://github.com/musaabbasi84"
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-2 bg-[rgba(255,255,255,0.05)] border border-[rgba(0,245,255,0.18)] text-slate-200 hover:border-[#00f5ff] hover:text-[#00f5ff] px-4 py-2 rounded-lg text-sm transition-all duration-200 self-start"
            >
              View Profile ↗
            </a>
          </div>

          {/* Stat cards */}
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 mb-6">
            {ghStats.map((s) => (
              <div
                key={s.label}
                className="bg-black/30 border border-[rgba(255,255,255,0.07)] rounded-xl p-4 text-center"
              >
                <div className="font-head text-xl font-bold text-white">{s.num}</div>
                <div className="font-mono-custom text-[0.68rem] text-slate-500 uppercase tracking-widest mt-0.5">
                  {s.label}
                </div>
              </div>
            ))}
          </div>

          {/* Contribution grid */}
          <p className="font-mono-custom text-[0.68rem] text-slate-500 uppercase tracking-widest mb-3">
            Contribution Activity
          </p>
          <div className="overflow-x-auto">
            <ContribGrid />
          </div>
        </motion.div>
      </div>
    </section>
  )
}
