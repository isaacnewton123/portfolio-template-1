"use client";

import Image from "next/image";

const projects = [
  {
    id: "multipost",
    title: "MultiPost",
    url: "multipost.pro",
    link: "https://multipost.pro",
    status: "Live · SaaS Platform",
    description: "Built entirely with full vibe coding (coding with AI). MultiPost provides an advanced platform for managing and uploading content to multiple social media platforms simultaneously.",
    tags: ["Vibe Coding", "Social Media", "Automation", "SaaS"],
    image: "/assets/multipost-logo.webp",
  },
  {
    id: "ai-guardrails",
    title: "eslint-plugin-ai-guardrails",
    url: "eslint-ai-guardrails.vercel.app",
    link: "https://eslint-ai-guardrails.vercel.app/",
    status: "Live · Open Source",
    description: "Built entirely with full vibe coding (coding with AI). Stop AI-generated code from becoming long-term tech debt. eslint-plugin-ai-guardrails enforces structure-first linting rules.",
    tags: ["Vibe Coding", "ESLint", "TypeScript", "AI"],
    image: "/assets/ai-guardrails-logo.webp",
  }
];

export default function Projects() {
  return (
    <section id="projects" className="relative py-32 lg:py-40 overflow-hidden">
      <div className="absolute inset-0 bg-[var(--surface)]/40" />

      <div className="relative max-w-6xl mx-auto px-6">
        <div className="mb-20 text-center">
          <div className="flex items-center justify-center gap-4 mb-6">
            <div className="accent-line" />
            <span className="text-xs font-medium tracking-[0.2em] uppercase text-[var(--accent)]">Featured Work</span>
            <div className="accent-line" />
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-[-0.02em] text-center">
            Selected <span className="gradient-text">Projects</span>
          </h2>
        </div>

        <div className="max-w-4xl mx-auto flex flex-col gap-12">
          {projects.map((project) => (
            <div key={project.id}>
              <div className="group relative rounded-[2rem] bg-[var(--surface)] border border-[var(--border-custom)] overflow-hidden hover:border-[var(--accent)]/20 transition-all duration-700">
                <div className="grid lg:grid-cols-2">
                  {/* Visual */}
                  <div className="relative p-12 sm:p-16 flex items-center justify-center min-h-[320px] lg:min-h-[480px]">
                    <div className="absolute inset-0 opacity-[0.03]" style={{ backgroundImage: `radial-gradient(var(--accent) 1px, transparent 1px)`, backgroundSize: "24px 24px" }} />
                    <div className="absolute inset-0 bg-gradient-to-br from-[var(--gradient-start)]/[0.05] to-[var(--gradient-end)]/[0.05]" />
                    <div className="relative group-hover:scale-105 transition-transform duration-700">
                      <Image src={project.image} alt={project.title} width={300} height={300} className="w-48 h-48 sm:w-60 sm:h-60 object-contain drop-shadow-2xl" />
                    </div>
                  </div>

                  {/* Info */}
                  <div className="p-10 sm:p-14 flex flex-col justify-center border-t lg:border-t-0 lg:border-l border-[var(--border-custom)] space-y-7">
                    <div className="flex items-center gap-3">
                      <span className="relative flex h-2 w-2">
                        <span className="relative rounded-full h-2 w-2 bg-[var(--accent)]" />
                      </span>
                      <span className="text-[11px] font-semibold tracking-[0.15em] uppercase text-[var(--accent)]">{project.status}</span>
                    </div>
                    <div>
                      <h3 className="text-3xl sm:text-4xl font-bold tracking-[-0.02em]">{project.title}</h3>
                      <p className="mt-2 text-sm text-[var(--muted)] font-mono">{project.url}</p>
                    </div>
                    <p className="text-[var(--muted)] leading-[1.8] text-sm sm:text-base">
                      {project.description}
                    </p>
                    <div className="flex flex-wrap gap-2">
                      {project.tags.map((t) => (
                        <span key={t} className="px-3 py-1.5 text-[11px] font-medium rounded-full border border-[var(--border-custom)] text-[var(--muted)] hover:border-[var(--accent)]/30 hover:text-[var(--accent)] transition-colors">{t}</span>
                      ))}
                    </div>
                    <a href={project.link} target="_blank" rel="noopener noreferrer" className="group/b inline-flex items-center gap-2.5 px-6 py-3 text-sm font-semibold rounded-full bg-[var(--foreground)] text-[var(--background)] hover:bg-[var(--accent)] transition-all duration-300 w-fit">
                      Visit Website
                      <svg className="w-4 h-4 transition-transform group-hover/b:-translate-y-0.5 group-hover/b:translate-x-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}><path strokeLinecap="round" strokeLinejoin="round" d="M4.5 19.5l15-15m0 0H8.25m11.25 0v11.25" /></svg>
                    </a>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
