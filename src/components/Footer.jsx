export default function Footer() {
  return (
    <footer className="border-t border-[rgba(0,245,255,0.12)] bg-black/30 py-8 px-6">
      <div className="max-w-[1100px] mx-auto flex flex-col md:flex-row items-center justify-between gap-4">
        <div>
          <span className="font-head text-lg font-extrabold gradient-text-blue">
            MMA · Muhammad Musa Abbasi
          </span>
          <p className="text-slate-500 text-xs mt-1 font-mono-custom">
            Frontend Developer · Data Analyst · Rawalpindi, Pakistan
          </p>
        </div>
        <div className="flex gap-5">
          {[
            { label: 'Email', href: 'mailto:musaabbasi84@gmail.com' },
            { label: 'GitHub', href: 'https://github.com/musaabbasi84' },
            { label: 'LinkedIn', href: 'https://www.linkedin.com/in/musa-abbasi3001b7204/' },
          ].map((link) => (
            <a
              key={link.label}
              href={link.href}
              target={link.href.startsWith('http') ? '_blank' : undefined}
              rel="noreferrer"
              className="text-slate-500 hover:text-[#00f5ff] text-sm transition-colors duration-200"
            >
              {link.label}
            </a>
          ))}
        </div>
        <p className="text-slate-600 text-xs font-mono-custom">
          © {new Date().getFullYear()} Muhammad Musa Abbasi
        </p>
      </div>
    </footer>
  )
}
