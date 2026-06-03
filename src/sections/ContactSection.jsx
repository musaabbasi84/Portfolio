import { useState } from 'react'
import { motion } from 'framer-motion'
import SectionHeader from '../components/SectionHeader'

const contactLinks = [
  {
    icon: '📧',
    label: 'Email',
    value: 'musaabbasi84@gmail.com',
    href: 'mailto:musaabbasi84@gmail.com',
    display: 'musaabbasi84@gmail.com',
  },
  {
    icon: '📞',
    label: 'Phone',
    value: '+92 344 5717833',
    href: 'tel:+923445717833',
    display: '+92 344 5717833',
  },
  {
  icon: '💼',
  label: 'LinkedIn',
  value: 'linkedin.com/in/musa-abbasi',
  href: 'https://www.linkedin.com/in/musa-abbasi3001b7204/',
  display: 'linkedin.com/in/musa-abbasi',
},
  {
    icon: '🐙',
    label: 'GitHub',
    value: 'github.com/musaabbasi84',
    href: 'https://github.com/musaabbasi84',
    display: 'github.com/musaabbasi84',
  },
]

export default function ContactSection() {
  const [form, setForm] = useState({ name: '', email: '', message: '' })
  const [sent, setSent] = useState(false)
  const [errors, setErrors] = useState({})

  const validate = () => {
    const e = {}
    if (!form.name.trim()) e.name = 'Name is required'
    if (!form.email.trim() || !/\S+@\S+\.\S+/.test(form.email)) e.email = 'Valid email required'
    if (!form.message.trim()) e.message = 'Message is required'
    return e
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    const errs = validate()
    if (Object.keys(errs).length) {
      setErrors(errs)
      return
    }
    setSent(true)
    setErrors({})
  }

  const handleChange = (field, val) => {
    setForm((prev) => ({ ...prev, [field]: val }))
    if (errors[field]) setErrors((prev) => ({ ...prev, [field]: '' }))
  }

  return (
    <section id="contact" className="py-20">
      <div className="max-w-[1100px] mx-auto px-6">
        <SectionHeader label="07 · Get In Touch" title="Contact Me" />

        <div className="grid grid-cols-1 lg:grid-cols-[1fr_1.4fr] gap-12 items-start">
          {/* Contact info */}
          <motion.div
            initial={{ opacity: 0, x: -24 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="space-y-3"
          >
            <p className="text-slate-400 text-sm leading-relaxed mb-5">
              Open to full-time roles, internships, freelance work, or just a conversation.
              I respond within 24 hours.
            </p>
            {contactLinks.map((c) => (
              <a
                key={c.label}
                href={c.href}
                target={c.href.startsWith('http') ? '_blank' : undefined}
                rel="noreferrer"
                className="flex items-center gap-3 glass-card rounded-xl p-4 hover:border-[rgba(0,245,255,0.3)] transition-colors duration-200 group"
              >
                <div className="w-10 h-10 rounded-xl bg-[rgba(0,245,255,0.1)] border border-[rgba(0,245,255,0.2)] flex items-center justify-center text-lg flex-shrink-0">
                  {c.icon}
                </div>
                <div>
                  <p className="font-mono-custom text-[0.68rem] text-slate-500 uppercase tracking-widest">
                    {c.label}
                  </p>
                  <p className="text-slate-200 text-sm group-hover:text-[#00f5ff] transition-colors">
                    {c.display}
                  </p>
                </div>
              </a>
            ))}
          </motion.div>

          {/* Form */}
          <motion.div
            initial={{ opacity: 0, x: 24 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
          >
            {sent ? (
              <div className="glass-card rounded-2xl p-10 text-center">
                <div className="text-4xl mb-4">✅</div>
                <h3 className="font-head text-xl font-bold text-white mb-2">Message Sent!</h3>
                <p className="text-slate-400 text-sm">
                  Thanks for reaching out. I'll get back to you within 24 hours.
                </p>
                <button
                  onClick={() => { setSent(false); setForm({ name: '', email: '', message: '' }) }}
                  className="mt-6 text-xs font-mono-custom text-[#00f5ff] hover:underline"
                >
                  Send another message
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} noValidate className="space-y-4">
                {/* Name */}
                <div>
                  <label className="block font-mono-custom text-[0.72rem] text-slate-400 uppercase tracking-widest mb-1.5">
                    Your Name
                  </label>
                  <input
                    type="text"
                    value={form.name}
                    onChange={(e) => handleChange('name', e.target.value)}
                    placeholder="e.g. Sarah Johnson"
                    className={`w-full bg-[rgba(255,255,255,0.04)] border rounded-xl px-4 py-3 text-sm text-slate-200 placeholder-slate-600 outline-none transition-colors duration-200 focus:border-[#00f5ff] ${
                      errors.name ? 'border-red-500' : 'border-[rgba(0,245,255,0.12)]'
                    }`}
                  />
                  {errors.name && (
                    <p className="text-red-400 text-xs mt-1 font-mono-custom">{errors.name}</p>
                  )}
                </div>

                {/* Email */}
                <div>
                  <label className="block font-mono-custom text-[0.72rem] text-slate-400 uppercase tracking-widest mb-1.5">
                    Email Address
                  </label>
                  <input
                    type="email"
                    value={form.email}
                    onChange={(e) => handleChange('email', e.target.value)}
                    placeholder="your@company.com"
                    className={`w-full bg-[rgba(255,255,255,0.04)] border rounded-xl px-4 py-3 text-sm text-slate-200 placeholder-slate-600 outline-none transition-colors duration-200 focus:border-[#00f5ff] ${
                      errors.email ? 'border-red-500' : 'border-[rgba(0,245,255,0.12)]'
                    }`}
                  />
                  {errors.email && (
                    <p className="text-red-400 text-xs mt-1 font-mono-custom">{errors.email}</p>
                  )}
                </div>

                {/* Message */}
                <div>
                  <label className="block font-mono-custom text-[0.72rem] text-slate-400 uppercase tracking-widest mb-1.5">
                    Message
                  </label>
                  <textarea
                    rows={5}
                    value={form.message}
                    onChange={(e) => handleChange('message', e.target.value)}
                    placeholder="Hi Musa, I'd love to discuss a frontend role at our startup..."
                    className={`w-full bg-[rgba(255,255,255,0.04)] border rounded-xl px-4 py-3 text-sm text-slate-200 placeholder-slate-600 outline-none transition-colors duration-200 focus:border-[#00f5ff] resize-none ${
                      errors.message ? 'border-red-500' : 'border-[rgba(0,245,255,0.12)]'
                    }`}
                  />
                  {errors.message && (
                    <p className="text-red-400 text-xs mt-1 font-mono-custom">{errors.message}</p>
                  )}
                </div>

                <button
                  type="submit"
                  className="w-full bg-gradient-to-r from-[#00f5ff] to-blue-500 text-[#020817] font-semibold py-3.5 rounded-xl text-sm hover:opacity-90 active:scale-[0.99] transition-all duration-200"
                >
                  Send Message →
                </button>
              </form>
            )}
          </motion.div>
        </div>
      </div>
    </section>
  )
}
