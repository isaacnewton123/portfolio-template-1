"use client";

import { useState } from "react";
import Image from "next/image";

const models3D = [
  { id: "866eb6a0df8d491fb7e98d1bf7fa2a5e", title: "Speaker", desc: "Railroad crossing warning speaker" },
  { id: "751a026fa3cf45feb183f092c3906765", title: "Railroad Crossing", desc: "Signal and gate system" },
  { id: "ec09981d25824d089ff9d1a4f1d23fd2", title: "Mascot Hemi Siuu", desc: "Character 3D model" },
  { id: "522a438e11004b648a1b6167a7a25dcb", title: "Mascot Hemi", desc: "Character 3D model" },
  { id: "fbc18e40b844425087dc5a12c2457f6c", title: "Wooden Door", desc: "Clean door with metal handle" },
];

const art2D = [
  { src: "/assets/2d/MwH.jpg", title: "MwH Design", desc: "Event announcement & branding" },
  { src: "/assets/2d/PohonDekor.gif", title: "Christmas Animation", desc: "Nubit character celebration" },
  { src: "/assets/2d/mascot-nubit.jpg", title: "Mascot Nubit", desc: "Digital branding identity" },
];

export default function Artwork() {
  const [tab, setTab] = useState<"3d" | "2d">("3d");
  const [lightbox, setLightbox] = useState<string | null>(null);

  return (
    <section id="artwork" className="relative py-32 lg:py-40 overflow-hidden">
      <div className="max-w-6xl mx-auto px-6">
        <div className="mb-16">
          <div className="flex items-center justify-center gap-4 mb-6">
            <div className="accent-line" />
            <span className="text-xs font-medium tracking-[0.2em] uppercase text-[var(--accent)]">Gallery</span>
            <div className="accent-line" />
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-[-0.02em] text-center">
            Creative <span className="gradient-text">Artwork</span>
          </h2>
        </div>

        {/* Tabs */}
        <div className="flex justify-center mb-12">
          <div className="flex gap-1 p-1 rounded-full bg-[var(--surface)] border border-[var(--border-custom)]">
            {(["3d", "2d"] as const).map((t) => (
              <button key={t} onClick={() => setTab(t)} className={`px-5 py-2 rounded-full text-xs font-semibold tracking-wide uppercase transition-all duration-300 ${tab === t ? "bg-[var(--foreground)] text-[var(--background)]" : "text-[var(--muted)] hover:text-[var(--foreground)]"}`}>
                {t === "3d" ? "3D Models" : "2D Art"}
              </button>
            ))}
          </div>
        </div>

        <div>
          {tab === "3d" && (
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
              {models3D.map((m, i) => (
                <div key={m.id} className="bento-item p-0 overflow-hidden">
                  <div className="sketchfab-wrapper">
                    <iframe title={m.title} allowFullScreen allow="autoplay; fullscreen; xr-spatial-tracking" src={`https://sketchfab.com/models/${m.id}/embed`} />
                  </div>
                  <div className="p-5">
                    <h3 className="text-sm font-semibold mb-1">{m.title}</h3>
                    <p className="text-xs text-[var(--muted)]">{m.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          )}

          {tab === "2d" && (
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
              {art2D.map((a, i) => (
                <div key={a.src} className="bento-item p-0 overflow-hidden cursor-pointer group" onClick={() => setLightbox(a.src)}>
                  <div className="relative aspect-[4/3] overflow-hidden">
                    <Image src={a.src} alt={a.title} fill className="object-cover group-hover:scale-110 transition-transform duration-700" unoptimized={a.src.endsWith(".gif")} />
                    <div className="absolute inset-0 bg-black/0 group-hover:bg-black/30 transition-colors duration-300 flex items-center justify-center">
                      <div className="w-10 h-10 rounded-full bg-white/90 flex items-center justify-center opacity-0 group-hover:opacity-100 scale-75 group-hover:scale-100 transition-all duration-300">
                        <svg className="w-4 h-4 text-gray-900" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}><path strokeLinecap="round" strokeLinejoin="round" d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607zM10.5 7.5v6m3-3h-6" /></svg>
                      </div>
                    </div>
                  </div>
                  <div className="p-5">
                    <h3 className="text-sm font-semibold mb-1">{a.title}</h3>
                    <p className="text-xs text-[var(--muted)]">{a.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>
      </div>

      {/* Lightbox */}
      {lightbox && (
        <div className="fixed inset-0 z-[100] bg-black/85 flex items-center justify-center p-6 cursor-pointer" onClick={() => setLightbox(null)}>
          <button className="absolute top-6 right-6 w-10 h-10 rounded-full bg-white/10 hover:bg-white/20 flex items-center justify-center transition-colors" onClick={() => setLightbox(null)} aria-label="Close">
            <svg className="w-5 h-5 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}><path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" /></svg>
          </button>
          <div className="relative max-w-4xl max-h-[85vh] rounded-2xl overflow-hidden" onClick={(e) => e.stopPropagation()}>
            <Image src={lightbox} alt="Artwork" width={1200} height={900} className="w-auto h-auto max-h-[85vh] object-contain" unoptimized={lightbox.endsWith(".gif")} />
          </div>
        </div>
      )}
    </section>
  );
}
