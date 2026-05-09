# 🚀 Next.js Portfolio Template

A modern, responsive personal portfolio built with **Next.js 16**, **React**, and **Tailwind CSS v4**.

🔗 **Live Demo:** [Demo Link](#)

![Next.js](https://img.shields.io/badge/Next.js-16-black?logo=next.js)
![TypeScript](https://img.shields.io/badge/TypeScript-5-blue?logo=typescript)
![Tailwind](https://img.shields.io/badge/Tailwind_CSS-v4-06B6D4?logo=tailwindcss)
![License](https://img.shields.io/badge/License-MIT-green)

---

## ✨ Features

- 🌗 **Dark / Light Theme** — Auto-detects OS preference, persists via localStorage, zero-flash
- 📱 **Fully Responsive** — Mobile-first layouts for phones, tablets, and desktops
- ⚡ **Ultra-Fast Performance** — Stripped of heavy CSS filters and layout shifts for maximum speed
- 🤖 **Vibe Coding** — Architected entirely through AI orchestration
- ⌨️ **Typing Effect** — Rotating role text in hero
- 🧊 **3D Gallery** — Embedded Sketchfab interactive 3D models
- 🖼️ **2D Gallery** — Artwork gallery with lightbox modal
- 📊 **Scroll Progress** — Reading progress bar + back-to-top
- 📄 **Resume Generator** — Automated PDF resume generation via Python & WeasyPrint (`generate-resume.py`)
- 🔍 **SEO Optimized** — Open Graph, Twitter Card meta tags & RealFaviconGenerator integration
- ☁️ **Vercel-Ready** — One-click deploy with config included

## 🛠 Tech Stack

| Layer | Technology |
|-------|-----------|
| Framework | [Next.js 16](https://nextjs.org/) (App Router) |
| Language | [TypeScript](https://www.typescriptlang.org/) |
| Styling | [Tailwind CSS v4](https://tailwindcss.com/) |
| Font | [Inter](https://fonts.google.com/specimen/Inter) via `next/font` |
| Deploy | [Vercel](https://vercel.com/) |

## 📁 Structure

```
.
├── generate-resume.py       # Python script for generating PDF resumes
├── src/
│   ├── app/
│   ├── globals.css          # Theme, utilities
│   ├── layout.tsx           # Root layout + SEO
│   └── page.tsx             # Page assembly
├── components/
│   ├── Navbar.tsx            # Nav + mobile drawer
│   ├── Hero.tsx              # Hero + typing effect
│   ├── About.tsx             # Bio, skills, CV
│   ├── Projects.tsx          # Featured projects (MultiPost, eslint-plugin-ai-guardrails)
│   ├── Artwork.tsx           # 3D/2D tabbed gallery
│   ├── Contact.tsx           # Social links
│   ├── Footer.tsx
│   └── ScrollProgress.tsx
├── context/
│   └── ThemeContext.tsx       # Dark/light theme
└── hooks/
    └── useInView.ts          # Intersection Observer
```

## 🚀 Quick Start

```bash
# Clone
git clone https://github.com/isaacnewton123/portfolio.git
cd portfolio

# Install
npm install

# Dev
npm run dev
# → http://localhost:3000
```

## 📦 Build & Deploy

```bash
# Production build
npm run build
npm start

# Deploy to Vercel
npx vercel --prod
```

## 🤝 Contributing

Contributions are welcome! Feel free to:

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/amazing`)
3. Commit changes (`git commit -m 'Add amazing feature'`)
4. Push to branch (`git push origin feature/amazing`)
5. Open a Pull Request

## 💖 Support

If you found this project helpful, consider supporting:

- **Ko-fi**: [ko-fi.com/isaacnewton1](https://ko-fi.com/isaacnewton1)
- **Trakteer**: [trakteer.id/isaacnewton1/link](https://trakteer.id/isaacnewton1/link)

## 📝 License

This project is open source under the [MIT License](LICENSE).

---

Made with ❤️ by [Hanif Maulana](https://github.com/isaacnewton123)
