"use client";

import { useEffect, useState } from "react";
import Image from "next/image";

const words = ["AI Enthusiast", "AI Architect", "Vibe Coder", "LLM Orchestrator"];

export default function Hero() {
  const [wordIdx, setWordIdx] = useState(0);
  const [fade, setFade] = useState(true);

  useEffect(() => {
    const interval = setInterval(() => {
      setFade(false);
      setTimeout(() => {
        setWordIdx((i) => (i + 1) % words.length);
        setFade(true);
      }, 300);
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  return (
    <section
      id="hero"
      className="relative min-h-screen flex items-center overflow-hidden"
    >
      {/* Grid overlay */}
      <div className="absolute inset-0 opacity-[0.03]" style={{
        backgroundImage: `linear-gradient(var(--foreground) 1px, transparent 1px), linear-gradient(90deg, var(--foreground) 1px, transparent 1px)`,
        backgroundSize: "60px 60px",
      }} />

      <div className="relative z-10 max-w-6xl mx-auto px-5 sm:px-6 w-full pt-28 pb-20 sm:pt-32 sm:pb-24 lg:py-0">
        <div className="flex flex-col lg:grid lg:grid-cols-12 gap-10 lg:gap-8 items-center lg:min-h-screen lg:py-32">

          {/* Photo — mobile first (shown above text on mobile) */}
          <div className="lg:hidden w-full flex justify-center">
            <div className="relative w-48 h-56 sm:w-56 sm:h-64 rounded-2xl overflow-hidden">
              <Image
                src="/assets/hanifmaulana.webp"
                alt="Hanif Maulana"
                fill
                className="object-cover object-top"
                priority
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[var(--background)] via-transparent to-transparent opacity-50" />
            </div>
          </div>

          {/* Text — 7 cols on desktop */}
          <div className="lg:col-span-7 space-y-5 sm:space-y-7 text-center lg:text-left">
            {/* Status */}
            <div className="flex items-center justify-center lg:justify-start gap-3">
              <span className="relative flex h-2 w-2">
                <span className="relative inline-flex rounded-full h-2 w-2 bg-[var(--accent)]" />
              </span>
              <span className="text-[10px] sm:text-xs font-medium tracking-[0.2em] uppercase text-[var(--muted)]">
                Available for collaboration
              </span>
            </div>

            {/* Name */}
            <h1 className="text-4xl sm:text-5xl lg:text-[clamp(3.5rem,5.5vw,5rem)] font-bold leading-[1.1] tracking-[-0.03em]">
              <span className="text-[var(--foreground)]">Hanif</span>
              <br />
              <span className="gradient-text">Maulana</span>
            </h1>

            {/* Rotating role */}
            <div className="flex items-center justify-center lg:justify-start gap-3">
              <div className="accent-line hidden sm:block" />
              <p className={`text-sm sm:text-base font-medium text-[var(--accent)] transition-all duration-300 ${fade ? "opacity-100 translate-y-0" : "opacity-0 translate-y-2"}`}>
                {words[wordIdx]}
              </p>
            </div>

            {/* Tagline */}
            <p className="text-sm sm:text-base lg:text-lg text-[var(--muted)] leading-relaxed max-w-xl mx-auto lg:mx-0">
              I orchestrate AI to execute technical visions with high speed and precision, building solutions through Vibe Coding.
            </p>

            {/* CTAs */}
            <div className="flex flex-wrap justify-center lg:justify-start gap-3 pt-1">
              <a
                href="#projects"
                className="group inline-flex items-center gap-2 px-5 sm:px-6 py-2.5 sm:py-3 text-sm font-semibold rounded-full bg-[var(--foreground)] text-[var(--background)] hover:bg-[var(--accent)] transition-all duration-300"
              >
                View Work
                <svg className="w-4 h-4 transition-transform group-hover:translate-y-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 13.5L12 21m0 0l-7.5-7.5M12 21V3" />
                </svg>
              </a>
              <a
                href="#contact"
                className="inline-flex items-center gap-2 px-5 sm:px-6 py-2.5 sm:py-3 text-sm font-semibold rounded-full border border-[var(--border-custom)] text-[var(--foreground)] hover:border-[var(--accent)] hover:text-[var(--accent)] transition-all duration-300"
              >
                Get in Touch
              </a>
            </div>
          </div>

          {/* Photo — desktop only (right side) */}
          <div className="hidden lg:flex lg:col-span-5 justify-end">
            <div className="relative">
              {/* Decorative rings */}
              <div className="absolute -inset-6 rounded-[2.5rem] border border-[var(--accent)]/5" />

              <div className="relative w-[320px] h-[420px] rounded-[1.5rem] overflow-hidden">
                <Image
                  src="/assets/hanifmaulana.webp"
                  alt="Hanif Maulana"
                  fill
                  className="object-cover object-top transition-all duration-700"
                  priority
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[var(--background)] via-transparent to-transparent opacity-60" />
              </div>

              {/* Floating card */}
              <div className="absolute -bottom-5 -left-5 glass rounded-2xl px-5 py-3.5 shadow-2xl">
                <p className="text-[10px] uppercase tracking-[0.15em] text-[var(--muted)] mb-0.5">Experience</p>
                <p className="text-lg font-bold gradient-text">3+ Years</p>
              </div>

              <div className="absolute -top-3 -right-3 w-5 h-5 rounded-full bg-gradient-to-br from-[var(--gradient-start)] to-[var(--gradient-end)] shadow-lg shadow-[var(--accent)]/30" />
            </div>
          </div>
        </div>
      </div>

      {/* Scroll hint — hidden on small phones */}
      <div className="hidden sm:flex absolute bottom-6 left-1/2 -translate-x-1/2 flex-col items-center gap-2">
        <div className="w-px h-10 bg-gradient-to-b from-transparent to-[var(--accent)]/40" />
        <span className="text-[10px] uppercase tracking-[0.2em] text-[var(--muted)]">Scroll</span>
      </div>
    </section>
  );
}
