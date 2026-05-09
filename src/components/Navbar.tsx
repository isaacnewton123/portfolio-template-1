"use client";

import { useState, useEffect } from "react";
import { useTheme } from "@/context/ThemeContext";
import ResumeModal from "@/components/ResumeModal";

const navLinks = [
  { label: "About", href: "#about" },
  { label: "Work", href: "#projects" },
  { label: "Gallery", href: "#artwork" },
  { label: "Contact", href: "#contact" },
];

export default function Navbar() {
  const { theme, toggleTheme } = useTheme();
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [resumeOpen, setResumeOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 60);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = mobileOpen ? "hidden" : "";
  }, [mobileOpen]);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-700 ${
        scrolled ? "glass py-4" : "bg-transparent py-6"
      }`}
    >
      <div className="max-w-6xl mx-auto px-6 flex items-center justify-between">
        {/* Logo mark */}
        <a href="#hero" className="flex items-center gap-3 group">
          <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-[var(--gradient-start)] to-[var(--gradient-end)] flex items-center justify-center text-white text-xs font-black group-hover:scale-110 transition-transform duration-300">
            J
          </div>
          <span className={`text-sm font-semibold tracking-wide transition-all duration-500 ${scrolled ? "text-[var(--foreground)]" : "text-[var(--foreground)]/80"}`}>
            John Doe
          </span>
        </a>

        {/* Desktop Nav */}
        <nav className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="relative text-[13px] font-medium tracking-wide uppercase text-[var(--muted)] hover:text-[var(--foreground)] transition-colors duration-300 after:content-[''] after:absolute after:-bottom-1 after:left-0 after:w-0 after:h-px after:bg-[var(--accent)] hover:after:w-full after:transition-all after:duration-300"
            >
              {link.label}
            </a>
          ))}
          <button
            onClick={() => setResumeOpen(true)}
            className="text-[13px] font-medium tracking-wide uppercase text-[var(--muted)] hover:text-[var(--foreground)] transition-colors duration-300 flex items-center gap-1.5 cursor-pointer"
          >
            Resume
            <svg className="w-3 h-3" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M3 16.5v2.25A2.25 2.25 0 005.25 21h13.5A2.25 2.25 0 0021 18.75V16.5M16.5 12L12 16.5m0 0L7.5 12m4.5 4.5V3" />
            </svg>
          </button>

          {/* Divider + Theme */}
          <div className="w-px h-5 bg-[var(--border-custom)]" />
          <button
            onClick={toggleTheme}
            aria-label="Toggle theme"
            className="p-2 rounded-lg hover:bg-[var(--surface)] transition-colors duration-300"
          >
            {theme === "dark" ? (
              <svg className="w-4 h-4 text-[var(--muted)]" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M12 3v2.25m6.364.386l-1.591 1.591M21 12h-2.25m-.386 6.364l-1.591-1.591M12 18.75V21m-4.773-4.227l-1.591 1.591M5.25 12H3m4.227-4.773L5.636 5.636M15.75 12a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0z" />
              </svg>
            ) : (
              <svg className="w-4 h-4 text-[var(--muted)]" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M21.752 15.002A9.718 9.718 0 0118 15.75c-5.385 0-9.75-4.365-9.75-9.75 0-1.33.266-2.597.748-3.752A9.753 9.753 0 003 11.25C3 16.635 7.365 21 12.75 21a9.753 9.753 0 009.002-5.998z" />
              </svg>
            )}
          </button>
        </nav>

        {/* Mobile controls */}
        <div className="flex items-center gap-3 md:hidden">
          <button onClick={toggleTheme} aria-label="Toggle theme" className="p-2 rounded-lg hover:bg-[var(--surface)] transition-colors">
            {theme === "dark" ? (
              <svg className="w-4 h-4 text-[var(--muted)]" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M12 3v2.25m6.364.386l-1.591 1.591M21 12h-2.25m-.386 6.364l-1.591-1.591M12 18.75V21m-4.773-4.227l-1.591 1.591M5.25 12H3m4.227-4.773L5.636 5.636M15.75 12a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0z" />
              </svg>
            ) : (
              <svg className="w-4 h-4 text-[var(--muted)]" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M21.752 15.002A9.718 9.718 0 0118 15.75c-5.385 0-9.75-4.365-9.75-9.75 0-1.33.266-2.597.748-3.752A9.753 9.753 0 003 11.25C3 16.635 7.365 21 12.75 21a9.753 9.753 0 009.002-5.998z" />
              </svg>
            )}
          </button>
          <button
            onClick={() => setMobileOpen(!mobileOpen)}
            aria-label="Toggle menu"
            className="p-2"
          >
            <div className="w-5 flex flex-col gap-1">
              <span className={`block h-px w-full bg-[var(--foreground)] transition-all duration-300 origin-center ${mobileOpen ? "rotate-45 translate-y-[3px]" : ""}`} />
              <span className={`block h-px w-3 bg-[var(--foreground)] transition-all duration-300 ml-auto ${mobileOpen ? "opacity-0 w-0" : ""}`} />
              <span className={`block h-px w-full bg-[var(--foreground)] transition-all duration-300 origin-center ${mobileOpen ? "-rotate-45 -translate-y-[3px]" : ""}`} />
            </div>
          </button>
        </div>
      </div>

      {/* Mobile overlay */}
      <div className={`md:hidden fixed inset-0 z-40 transition-all duration-500 ${mobileOpen ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"}`}>
        <div className="absolute inset-0 bg-[var(--background)]/95" onClick={() => setMobileOpen(false)} />
        <div className="relative z-10 flex flex-col items-center justify-center h-full gap-8">
          {navLinks.map((link, i) => (
            <a
              key={link.href}
              href={link.href}
              onClick={() => setMobileOpen(false)}
              className="text-3xl font-light text-[var(--foreground)] hover:text-[var(--accent)] transition-all duration-300"
              style={{ transitionDelay: `${i * 50}ms` }}
            >
              {link.label}
            </a>
          ))}
          <button
            onClick={() => { setMobileOpen(false); setResumeOpen(true); }}
            className="text-3xl font-light text-[var(--foreground)] hover:text-[var(--accent)] transition-all duration-300 flex items-center gap-2 cursor-pointer"
          >
            Resume
            <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M3 16.5v2.25A2.25 2.25 0 005.25 21h13.5A2.25 2.25 0 0021 18.75V16.5M16.5 12L12 16.5m0 0L7.5 12m4.5 4.5V3" />
            </svg>
          </button>
        </div>
      </div>
      <ResumeModal open={resumeOpen} onClose={() => setResumeOpen(false)} />
    </header>
  );
}
