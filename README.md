# Muhammad Musa Abbasi — Developer Portfolio

> Production-ready SaaS-style developer portfolio built with React + Vite, Tailwind CSS, and Framer Motion.

![React](https://img.shields.io/badge/React-18-61DAFB?logo=react&logoColor=white&style=flat-square)
![Vite](https://img.shields.io/badge/Vite-5-646CFF?logo=vite&logoColor=white&style=flat-square)
![Tailwind CSS](https://img.shields.io/badge/Tailwind-3-38BDF8?logo=tailwindcss&logoColor=white&style=flat-square)
![Framer Motion](https://img.shields.io/badge/Framer_Motion-11-EF4444?logo=framer&logoColor=white&style=flat-square)

---

## 🚀 Live Demo

Deploy to Vercel or Netlify (see guide below).

---

## 🗂 Project Structure

```
portfolio/
├── public/
│   └── favicon.svg
├── src/
│   ├── components/
│   │   ├── Navbar.jsx
│   │   ├── Footer.jsx
│   │   ├── SectionHeader.jsx
│   │   ├── PageLoader.jsx
│   │   └── ScrollToTop.jsx
│   ├── sections/
│   │   ├── HeroSection.jsx
│   │   ├── AboutSection.jsx
│   │   ├── SkillsSection.jsx
│   │   ├── ExperienceSection.jsx
│   │   ├── ProjectsSection.jsx
│   │   ├── GitHubSection.jsx
│   │   ├── CertificationsSection.jsx
│   │   └── ContactSection.jsx
│   ├── pages/
│   │   └── Home.jsx
│   ├── utils/
│   │   ├── projectsData.js
│   │   ├── skillsData.js
│   │   ├── experienceData.js
│   │   └── certificationsData.js
│   ├── styles/
│   │   └── globals.css
│   ├── App.jsx
│   └── main.jsx
├── index.html
├── vite.config.js
├── tailwind.config.js
├── postcss.config.js
└── package.json
```

---

## ⚙️ Local Development

### Prerequisites
- Node.js 18+
- npm or yarn

### Install & Run

```bash
# Clone
git clone https://github.com/musaabbasi84/portfolio.git
cd portfolio

# Install dependencies
npm install

# Start dev server
npm run dev
```

Open [http://localhost:5173](http://localhost:5173)

### Build for Production

```bash
npm run build
npm run preview   # preview the production build locally
```

---

## 🌐 Deployment

### Vercel (Recommended)

1. Push code to GitHub
2. Go to [vercel.com](https://vercel.com) → New Project → Import repo
3. Framework: **Vite** (auto-detected)
4. Build command: `npm run build`
5. Output directory: `dist`
6. Click **Deploy**

### Netlify

1. Push code to GitHub
2. Go to [netlify.com](https://netlify.com) → Add new site → Import from Git
3. Build command: `npm run build`
4. Publish directory: `dist`
5. Click **Deploy site**

> For Netlify SPA routing, add a `public/_redirects` file:
> ```
> /* /index.html 200
> ```

---

## 🎨 Tech Stack

| Layer | Technology |
|---|---|
| Framework | React 18 + Vite 5 |
| Styling | Tailwind CSS 3 |
| Animation | Framer Motion 11 |
| Routing | React Router 6 |
| Fonts | Syne, DM Sans, JetBrains Mono |

---

## 📬 Contact

**Muhammad Musa Abbasi**  
📧 musaabbasi84@gmail.com  
📞 +92 344 5717833  
🔗 [LinkedIn](https://www.linkedin.com/in/musa-abbasi3001b7204/)  
🐙 [GitHub](https://github.com/musaabbasi84)
