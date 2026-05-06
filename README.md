# 🚀 Hanif Maulana — Portfolio

A modern, responsive personal portfolio built with **Next.js 16**, **React**, and **Tailwind CSS v4**.

🔗 **Live:** [isaacnewton.store](https://isaacnewton.store)

![Next.js](https://img.shields.io/badge/Next.js-16-black?logo=next.js)
![TypeScript](https://img.shields.io/badge/TypeScript-5-blue?logo=typescript)
![Tailwind](https://img.shields.io/badge/Tailwind_CSS-v4-06B6D4?logo=tailwindcss)
![License](https://img.shields.io/badge/License-MIT-green)

---

## ✨ Features

- 🌗 **Dark / Light Theme** — Auto-detects OS preference, persists via localStorage, zero-flash
- 📱 **Fully Responsive** — Mobile-first layouts for phones, tablets, and desktops
- 🎬 **Scroll Animations** — Intersection Observer entrance effects
- ⌨️ **Typing Effect** — Rotating role text in hero
- 🧊 **3D Gallery** — Embedded Sketchfab interactive 3D models
- 🖼️ **2D Gallery** — Artwork gallery with lightbox modal
- 🪟 **Glassmorphism** — Frosted-glass navbar and cards
- 📊 **Scroll Progress** — Reading progress bar + back-to-top
- 🔍 **SEO Optimized** — Open Graph & Twitter Card meta tags
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
src/
├── app/
│   ├── globals.css          # Theme, animations, utilities
│   ├── layout.tsx           # Root layout + SEO
│   └── page.tsx             # Page assembly
├── components/
│   ├── Navbar.tsx            # Glassmorphism nav + mobile drawer
│   ├── Hero.tsx              # Hero + typing effect
│   ├── About.tsx             # Bio, skills, CV
│   ├── Projects.tsx          # Featured project (MultiPost)
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

## 📝 License

This project is open source under the [MIT License](LICENSE).

---

Made with ❤️ by [Hanif Maulana](https://isaacnewton.store)
