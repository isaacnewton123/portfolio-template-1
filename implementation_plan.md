# Hanif Maulana Portfolio – Next.js Rebuild

Rebuild the existing static HTML portfolio into a modern Next.js (App Router) application with Tailwind CSS, dark/light theme, and premium aesthetics.

## Proposed Changes

### 1. Project Scaffolding

#### [NEW] Next.js App (in `/home/isaacnewton/Documents/portfolio`)
- Initialize with `npx -y create-next-app@latest ./` using App Router, Tailwind CSS, TypeScript, ESLint
- Clean out default boilerplate

---

### 2. Asset Migration

#### [NEW] `public/assets/` directory tree
Copy all assets from `portofolio-template/assets/` into `public/assets/`:

| Source | Destination |
|--------|-------------|
| `assets/isaacnewton.jpg` | `public/assets/isaacnewton.jpg` |
| `assets/2D/MwH.jpg` | `public/assets/2d/MwH.jpg` |
| `assets/2D/Pohon Dekor.gif` | `public/assets/2d/PohonDekor.gif` |
| `assets/2D/mascot nubit.jpg` | `public/assets/2d/mascot-nubit.jpg` |
| `assets/ProjectLogo/multipost.webp` | `public/assets/multipost-logo.webp` |
| `assets/CV/CV.pdf` | `public/assets/CV.pdf` |

> [!NOTE]
> Filenames will be normalized (no spaces, lowercase-friendly) for reliable URL serving.

---

### 3. Theme System

#### [NEW] `src/context/ThemeContext.tsx`
- React context for `light` / `dark` mode
- Reads `prefers-color-scheme` on mount → defaults to **dark**
- Persists choice in `localStorage`
- Applies `class="dark"` on `<html>` for Tailwind's `darkMode: 'class'`
- Toggle button in the navbar

---

### 4. Tailwind Config & Global Styles

#### [MODIFY] `tailwind.config.ts`
- `darkMode: 'class'`
- Custom color palette:
  - Primary accent: teal `#0d9488` → `#2dd4bf` gradient (matching MultiPost logo)
  - Dark bg: `#0a0f1a`, cards: `#111827`
  - Light bg: `#f8fafc`, cards: `#ffffff`
- Custom font: `Inter` (Google Fonts)
- Extended animation keyframes for micro-interactions

#### [MODIFY] `src/app/globals.css`
- CSS custom properties for theme colors
- Smooth scroll, selection colors, scrollbar styling
- Glass-morphism utility classes
- Animated gradient backgrounds

---

### 5. Component Architecture

#### [NEW] `src/components/Navbar.tsx`
- Sticky glassmorphism navbar
- Logo text "Hanif Maulana"
- Nav links: Home, About, Projects, Artwork, Contact, CV (external)
- Theme toggle button (sun/moon icon)
- Mobile hamburger menu with animated slide-in

#### [NEW] `src/components/Hero.tsx`
- Full-viewport hero with animated gradient background
- Name: **Hanif Maulana**
- Role tagline: *"The Next-Gen Developer: Human Intelligence, AI Efficiency & Immersive Visuals."*
- Typing animation effect for specializations
- CTA buttons: "View Projects" / "Contact Me"
- Profile image (`isaacnewton.jpg`) with floating animation
- Scroll-down indicator

#### [NEW] `src/components/About.tsx`
- Four paragraphs as specified by the user
- Skills grid: Blender, CorelDraw, Photoshop, AI-Assisted Dev, Web Dev, Linux Admin
- "View CV" button linking to `/assets/CV.pdf`
- Mascot Nubit image as visual element
- Fade-in/slide animations on scroll (Intersection Observer)

#### [NEW] `src/components/Projects.tsx`
- **Only one project**: multipost.pro
- Large featured card with MultiPost logo (`multipost-logo.webp`)
- Description: *"MultiPost provides an advanced platform for managing and uploading content to multiple social media platforms simultaneously. Save time and grow your online presence."*
- "Visit Website" button → `https://multipost.pro`
- Glassmorphism card with hover lift effect

#### [NEW] `src/components/Artwork.tsx`
- Tab switcher: **3D Models** | **2D Artwork**
- **3D tab**: 5 Sketchfab iframe embeds (exact same model IDs from existing HTML)
- **2D tab**: Gallery grid showing MwH.jpg, PohonDekor.gif, mascot-nubit.jpg
- Lightbox/modal on image click
- Responsive grid (1 col mobile → 2 tablet → 3 desktop)

#### [NEW] `src/components/Contact.tsx`
- Social links with icons (open in new tab):
  - GitHub, X (Twitter), Facebook, LinkedIn
- Using inline SVG icons (no Font Awesome dependency)
- Hover animations on social cards

#### [NEW] `src/components/Footer.tsx`
- Logo text, social icons row, copyright

#### [NEW] `src/components/ScrollProgress.tsx`
- Reading progress bar at top of page
- Back-to-top floating button

---

### 6. Page Assembly

#### [MODIFY] `src/app/layout.tsx`
- Import Inter font from `next/font/google`
- Wrap children in `ThemeProvider`
- SEO meta tags in metadata export

#### [MODIFY] `src/app/page.tsx`
- Compose all sections: `Navbar → Hero → About → Projects → Artwork → Contact → Footer`

---

### 7. Animations & Micro-interactions
- **Intersection Observer hook** (`useInView`) for scroll-triggered entrance animations
- CSS `@keyframes` for: floating profile image, gradient shifts, pulse effects
- Hover effects: scale transforms, glow borders, card lifts
- Smooth section scroll with `scroll-behavior: smooth`
- Staggered animation delays for grid items

---

## Design Palette

| Token | Dark | Light |
|-------|------|-------|
| Background | `#0a0f1a` | `#f8fafc` |
| Surface/Card | `#111827` | `#ffffff` |
| Text primary | `#f1f5f9` | `#0f172a` |
| Text secondary | `#94a3b8` | `#64748b` |
| Accent primary | `#14b8a6` (teal) | `#0d9488` |
| Accent gradient | `#06b6d4 → #10b981` | `#0891b2 → #059669` |
| Border | `rgba(255,255,255,0.1)` | `rgba(0,0,0,0.1)` |

---

## Verification Plan

### Automated
- `npm run build` — no build errors
- `npm run dev` — app starts on localhost:3000

### Manual Verification
- Browse all sections in the browser
- Toggle dark/light theme, verify persistence
- Test responsive breakpoints (mobile, tablet, desktop)
- Verify all Sketchfab embeds load
- Verify all asset images render
- Verify all social links open in new tabs
