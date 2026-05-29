/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,jsx}'],
  theme: {
    extend: {
      fontFamily: {
        head: ['Syne', 'sans-serif'],
        body: ['DM Sans', 'sans-serif'],
        mono: ['JetBrains Mono', 'monospace'],
      },
      colors: {
        navy: {
          DEFAULT: '#020817',
          2: '#0a1628',
          3: '#0f1f3d',
        },
        cyan: {
          neon: '#00f5ff',
        },
      },
      animation: {
        pulse2: 'pulse2 2s cubic-bezier(0.4,0,0.6,1) infinite',
      },
      keyframes: {
        pulse2: {
          '0%,100%': { opacity: '1', transform: 'scale(1)' },
          '50%': { opacity: '0.5', transform: 'scale(0.8)' },
        },
      },
    },
  },
  plugins: [],
}
