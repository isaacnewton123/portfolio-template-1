"use client";

import { useState, useEffect } from "react";

const resumes = [
  {
    label: "English",
    flag: "🇬🇧",
    href: "/assets/Resume_Hanif_Maulana_ENGLISH.pdf",
  },
  {
    label: "Indonesian",
    flag: "🇮🇩",
    href: "/assets/Resume_Hanif_Maulana_INDONESIA.pdf",
  },
];

export function useResumeModal() {
  const [open, setOpen] = useState(false);
  return { open, show: () => setOpen(true), hide: () => setOpen(false) };
}

export default function ResumeModal({
  open,
  onClose,
}: {
  open: boolean;
  onClose: () => void;
}) {
  useEffect(() => {
    if (open) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => { document.body.style.overflow = ""; };
  }, [open]);

  if (!open) return null;

  return (
    <div
      className="fixed inset-0 z-[200] flex items-center justify-center p-4"
      onClick={onClose}
    >
      {/* Backdrop */}
      <div className="absolute inset-0 bg-black/60 backdrop-blur-sm" />

      {/* Modal */}
      <div
        className="relative w-full max-w-sm rounded-2xl bg-[var(--surface)] border border-[var(--border-custom)] shadow-2xl overflow-hidden animate-[fadeInUp_0.3s_ease-out]"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Top accent */}
        <div className="h-1 bg-gradient-to-r from-[var(--gradient-start)] to-[var(--gradient-end)]" />

        <div className="p-8">
          {/* Header */}
          <div className="flex items-center justify-between mb-6">
            <div>
              <h3 className="text-lg font-bold text-[var(--foreground)]">Download Resume</h3>
              <p className="text-xs text-[var(--muted)] mt-1">Choose your preferred language</p>
            </div>
            <button
              onClick={onClose}
              className="p-2 rounded-xl hover:bg-[var(--surface-hover)] transition-colors"
              aria-label="Close"
            >
              <svg className="w-4 h-4 text-[var(--muted)]" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
          </div>

          {/* Options */}
          <div className="space-y-3">
            {resumes.map((r) => (
              <a
                key={r.label}
                href={r.href}
                target="_blank"
                rel="noopener noreferrer"
                onClick={onClose}
                className="group flex items-center gap-4 p-4 rounded-xl border border-[var(--border-custom)] hover:border-[var(--accent)]/40 hover:bg-[var(--surface-hover)] transition-all duration-300"
              >
                <span className="text-2xl">{r.flag}</span>
                <div className="flex-1">
                  <p className="text-sm font-semibold text-[var(--foreground)]">{r.label}</p>
                  <p className="text-[11px] text-[var(--muted)]">PDF Document</p>
                </div>
                <svg className="w-4 h-4 text-[var(--muted)] group-hover:text-[var(--accent)] transition-colors" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M3 16.5v2.25A2.25 2.25 0 005.25 21h13.5A2.25 2.25 0 0021 18.75V16.5M16.5 12L12 16.5m0 0L7.5 12m4.5 4.5V3" />
                </svg>
              </a>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
