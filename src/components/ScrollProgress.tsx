"use client";

import { useEffect, useState } from "react";

export default function ScrollProgress() {
  const [progress, setProgress] = useState(0);
  const [showTop, setShowTop] = useState(false);

  useEffect(() => {
    const onScroll = () => {
      const scrollTop = window.scrollY;
      const docHeight = document.documentElement.scrollHeight - window.innerHeight;
      setProgress(docHeight > 0 ? (scrollTop / docHeight) * 100 : 0);
      setShowTop(scrollTop > 400);
    };
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <>
      {/* Progress bar */}
      <div className="fixed top-0 left-0 right-0 z-[60] h-[3px] bg-transparent">
        <div
          className="h-full bg-gradient-to-r from-[var(--gradient-start)] to-[var(--gradient-end)] transition-[width] duration-150"
          style={{ width: `${progress}%` }}
        />
      </div>

      {/* Back to top */}
      <button
        onClick={scrollToTop}
        aria-label="Back to top"
        className={`fixed bottom-8 right-8 z-50 w-12 h-12 rounded-full bg-gradient-to-r from-[var(--gradient-start)] to-[var(--gradient-end)] text-white shadow-lg shadow-[var(--accent)]/25 flex items-center justify-center transition-all duration-500 hover:shadow-xl hover:-translate-y-0.5 ${
          showTop
            ? "opacity-100 scale-100 pointer-events-auto"
            : "opacity-0 scale-75 pointer-events-none"
        }`}
      >
        <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
          <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 15.75l7.5-7.5 7.5 7.5" />
        </svg>
      </button>
    </>
  );
}
