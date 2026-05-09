"use client";

import { useState } from "react";
import ResumeModal from "@/components/ResumeModal";

/* Real brand SVG logos for each skill */
const skills = [
  {
    name: "Blender",
    category: "3D Modeling",
    logo: (
      <svg viewBox="0 0 64 64" className="w-8 h-8" fill="none">
        <path d="M32.5 40.2c-4.6 0-8.3-3.2-8.3-7.2s3.7-7.2 8.3-7.2 8.3 3.2 8.3 7.2-3.7 7.2-8.3 7.2z" fill="currentColor" opacity="0.15" />
        <path d="M37.7 33c0 2.8-2.3 5-5.2 5-2.9 0-5.2-2.2-5.2-5s2.3-5 5.2-5c2.9 0 5.2 2.2 5.2 5z" fill="currentColor" />
        <path d="M16.2 31.5l14.4-10.7c.3-.2.1-.7-.3-.6l-9.4 2.3c-.1 0-.2.1-.3.2l-6.3 8.1c-.3.4.1.9.5.7h1.4z" fill="currentColor" />
        <path d="M11.4 34.6c.1-1.7.5-3.3 1.2-4.8l-5-3.6c-.4-.3-.1-.9.4-.8l9.9 1.1-2.5 3.2c-.9 1.3-1.4 2.8-1.6 4.3-.5 4.7 3 8.9 7.8 9.4 2.6.3 5.1-.5 7-2.1 1.9-1.6 3.1-3.9 3.4-6.4.2-2-.3-3.9-1.3-5.5l5.5-4.1c.3-.2.2-.7-.2-.7H25.8c-.4 0-.3-.6.1-.7l18-5.6c.4-.1.3-.7-.1-.7H26.4c-.4 0-.3-.6.1-.7l12.8-3.5c.4-.1.3-.7-.2-.7l-22 9.8" stroke="currentColor" strokeWidth="1.5" fill="none" strokeLinecap="round" strokeLinejoin="round" opacity="0.5" />
      </svg>
    ),
  },
  {
    name: "CorelDraw",
    category: "Vector Design",
    logo: (
      <svg viewBox="0 0 48 48" className="w-8 h-8" fill="currentColor">
        <path d="M24 4C12.95 4 4 12.95 4 24s8.95 20 20 20 20-8.95 20-20S35.05 4 24 4zm0 3c9.39 0 17 7.61 17 17s-7.61 17-17 17S7 33.39 7 24 14.61 7 24 7z" opacity="0.4" />
        <path d="M24 11c-7.18 0-13 5.82-13 13s5.82 13 13 13 13-5.82 13-13-5.82-13-13-13zm0 3c5.52 0 10 4.48 10 10s-4.48 10-10 10-10-4.48-10-10 4.48-10 10-10z" opacity="0.6" />
        <path d="M24 18c-3.31 0-6 2.69-6 6s2.69 6 6 6 6-2.69 6-6-2.69-6-6-6zm0 3c1.66 0 3 1.34 3 3s-1.34 3-3 3-3-1.34-3-3 1.34-3 3-3z" />
      </svg>
    ),
  },
  {
    name: "Photoshop",
    category: "Photo Editing",
    logo: (
      <svg viewBox="0 0 48 48" className="w-8 h-8" fill="currentColor">
        <rect x="4" y="4" width="40" height="40" rx="4" fill="currentColor" opacity="0.12" />
        <text x="10" y="33" fontFamily="Inter, sans-serif" fontWeight="800" fontSize="22" fill="currentColor" opacity="0.9">Ps</text>
      </svg>
    ),
  },
  {
    name: "AI Development",
    category: "AI Workflows",
    logo: (
      <svg viewBox="0 0 48 48" className="w-8 h-8" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <circle cx="24" cy="24" r="4" fill="currentColor" opacity="0.3" />
        <path d="M24 8v4m0 24v4M8 24h4m24 0h4" />
        <path d="M12.8 12.8l2.8 2.8m16.8 16.8l2.8 2.8M12.8 35.2l2.8-2.8m16.8-16.8l2.8-2.8" />
        <circle cx="24" cy="24" r="10" opacity="0.5" />
        <circle cx="24" cy="24" r="18" opacity="0.2" />
      </svg>
    ),
  },
  {
    name: "React / Next.js",
    category: "Web Development",
    logo: (
      <svg viewBox="0 0 48 48" className="w-8 h-8" fill="none">
        <circle cx="24" cy="24" r="4" fill="currentColor" />
        <ellipse cx="24" cy="24" rx="20" ry="8" stroke="currentColor" strokeWidth="1.5" opacity="0.6" />
        <ellipse cx="24" cy="24" rx="20" ry="8" stroke="currentColor" strokeWidth="1.5" opacity="0.6" transform="rotate(60 24 24)" />
        <ellipse cx="24" cy="24" rx="20" ry="8" stroke="currentColor" strokeWidth="1.5" opacity="0.6" transform="rotate(120 24 24)" />
      </svg>
    ),
  },
  {
    name: "Linux Admin",
    category: "Server Ops",
    logo: (
      <svg viewBox="0 0 48 48" className="w-8 h-8" fill="currentColor">
        <path d="M24 6c-1.7 0-3.3 1.4-4.2 3.7-.6 1.5-.9 3.3-1 5.2-.3 4 .5 8.5 2.2 11.3.3.5.6 1 .9 1.3-1.3 1.3-3 3.5-3.5 5.3-.3 1-.2 1.8.4 2.4.5.5 1.2.6 2 .4 1.2-.3 2.4-1.1 3.2-1.8.8.7 2 1.5 3.2 1.8.8.2 1.5.1 2-.4.6-.6.7-1.4.4-2.4-.5-1.8-2.2-4-3.5-5.3.3-.3.6-.8.9-1.3 1.7-2.8 2.5-7.3 2.2-11.3-.1-1.9-.4-3.7-1-5.2C27.3 7.4 25.7 6 24 6z" opacity="0.6" />
        <circle cx="22" cy="14" r="1.5" fill="currentColor" />
        <circle cx="26" cy="14" r="1.5" fill="currentColor" />
        <path d="M22 18c0 0 1 1.5 4 0" stroke="currentColor" strokeWidth="1" fill="none" strokeLinecap="round" opacity="0.8" />
      </svg>
    ),
  },
];

const paragraphs = [
  "I am an AI Enthusiast and AI Architect building solutions through Vibe Coding. I orchestrate AI to execute technical visions with high speed and precision, believing that AI is the ultimate tool for innovation.",
  "My core focus is extreme efficiency. By relying on AI as my primary coding partner, I design complex architectures and Agentic Workflows that are production-ready in record time.",
  "AI First Mentality: Always prioritizing intelligent automation and agentic workflows in every technical challenge.",
  "Continuous Learning: Constantly pushing the boundaries of LLM capabilities to redefine how we interact with code."
];

export default function About() {
  const [resumeOpen, setResumeOpen] = useState(false);

  return (
    <section id="about" className="relative py-24 sm:py-32 lg:py-40 overflow-hidden">
      <div className="max-w-6xl mx-auto px-6">
        {/* Header */}
        <div className="mb-14 sm:mb-20">
          <div className="flex items-center justify-center gap-4 mb-6">
            <div className="accent-line" />
            <span className="text-xs font-medium tracking-[0.2em] uppercase text-[var(--accent)]">About</span>
            <div className="accent-line" />
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-[-0.02em] text-center">
            Crafting digital products with{" "}
            <span className="gradient-text">intelligence</span> and{" "}
            <span className="gradient-text">vision</span>
          </h2>
        </div>

        {/* Text content */}
        <div className="max-w-3xl mx-auto text-center space-y-5 mb-16 sm:mb-20">
          {paragraphs.map((p, i) => (
            <p key={i} className="text-sm sm:text-base leading-[1.85] text-[var(--muted)]">
              {p}
            </p>
          ))}
          <div className="pt-4">
            <button
              onClick={() => setResumeOpen(true)}
              className="inline-flex items-center gap-2 px-5 py-2.5 text-sm font-semibold rounded-full bg-[var(--foreground)] text-[var(--background)] hover:bg-[var(--accent)] transition-all duration-300 cursor-pointer"
            >
              <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M3 16.5v2.25A2.25 2.25 0 005.25 21h13.5A2.25 2.25 0 0021 18.75V16.5M16.5 12L12 16.5m0 0L7.5 12m4.5 4.5V3" />
              </svg>
              Download Resume
            </button>
          </div>
        </div>

        {/* Skills with logos */}
        <div>
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-3 sm:gap-4">
            {skills.map((skill, i) => (
              <div
                key={skill.name}
                className="bento-item flex flex-col items-center text-center gap-3 p-5 sm:p-6 group"
              >
                <div className="text-[var(--accent)] group-hover:scale-110 transition-transform duration-300">
                  {skill.logo}
                </div>
                <div>
                  <p className="text-xs sm:text-sm font-semibold text-[var(--foreground)] mb-0.5">{skill.name}</p>
                  <p className="text-[10px] sm:text-[11px] text-[var(--muted)]">{skill.category}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
      <ResumeModal open={resumeOpen} onClose={() => setResumeOpen(false)} />
    </section>
  );
}
