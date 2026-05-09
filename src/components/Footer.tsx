"use client";

export default function Footer() {
  const links = [
    { href: "https://github.com/isaacnewton123", label: "GitHub" },
    { href: "https://x.com/isaac_newton252", label: "X" },
    { href: "https://www.facebook.com/hanif.maulana.108/", label: "Facebook" },
    { href: "https://www.linkedin.com/in/hanif-maulana-210b4721b/", label: "LinkedIn" },
  ];

  return (
    <footer className="relative border-t border-[var(--border-custom)]">
      <div className="max-w-6xl mx-auto px-6 py-10">
        <div className="flex flex-col sm:flex-row items-center justify-between gap-6">
          <a href="#hero" className="flex items-center gap-3 group">
            <div className="w-7 h-7 rounded-md bg-gradient-to-br from-[var(--gradient-start)] to-[var(--gradient-end)] flex items-center justify-center text-white text-[10px] font-black">
              J
            </div>
            <span className="text-sm font-semibold text-[var(--foreground)]">John Doe</span>
          </a>

          <div className="flex items-center gap-6">
            {links.map((l) => (
              <a key={l.label} href={l.href} target="_blank" rel="noopener noreferrer" className="text-xs font-medium text-[var(--muted)] hover:text-[var(--accent)] transition-colors duration-300">
                {l.label}
              </a>
            ))}
          </div>
        </div>

        <div className="mt-8 pt-6 border-t border-[var(--border-custom)] text-center">
          <p className="text-xs text-[var(--muted)]">
            &copy; {new Date().getFullYear()} John Doe. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
