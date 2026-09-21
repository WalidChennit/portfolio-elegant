'use client';

import { useState, useEffect } from 'react';
import Image from 'next/image';
import Reveal from '@/components/Reveal';
import { PROJECTS } from '@/lib/data';
import { useLanguage } from '@/lib/language-context';

const COPY = {
  en: {
    work: 'Work',
    heading: 'Selected projects',
    subtitle:
      'Six engagements across banking, scientific research and education — each shipped end-to-end, from architecture to production.',
    viewLiveDemo: 'View Live Demo ↗',
    demoAccounts: 'Demo accounts',
    hideDemoAccounts: 'Hide demo accounts',
    role: 'Role',
    email: 'Email',
    password: 'Password',
    viewScreenshots: (n: number) => `View screenshots (${n})`,
    screenshots: (n: number) => `${n} screenshots`,
  },
  fr: {
    work: 'Travaux',
    heading: 'Projets sélectionnés',
    subtitle:
      "Six missions entre banque, recherche scientifique et éducation — chacune livrée de bout en bout, de l'architecture à la production.",
    viewLiveDemo: 'Voir la démo en direct ↗',
    demoAccounts: 'Comptes de démo',
    hideDemoAccounts: 'Masquer les comptes de démo',
    role: 'Rôle',
    email: 'Email',
    password: 'Mot de passe',
    viewScreenshots: (n: number) => `Voir les captures (${n})`,
    screenshots: (n: number) => `${n} captures d'écran`,
  },
};

export default function ProjectsPage() {
  const [openDemo, setOpenDemo] = useState<string | null>(null);
  const [galleryModal, setGalleryModal] = useState<string | null>(null);
  const [lightboxIndex, setLightboxIndex] = useState<number | null>(null);
  const { lang } = useLanguage();
  const t = COPY[lang];

  const activeProject = PROJECTS.find((p) => p.slug === galleryModal) || null;
  const images = activeProject?.images || [];

  useEffect(() => {
    if (!galleryModal) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        if (lightboxIndex !== null) setLightboxIndex(null);
        else setGalleryModal(null);
      }
      if (lightboxIndex !== null) {
        if (e.key === 'ArrowRight') setLightboxIndex((i) => (i === null ? i : (i + 1) % images.length));
        if (e.key === 'ArrowLeft') setLightboxIndex((i) => (i === null ? i : (i - 1 + images.length) % images.length));
      }
    };
    document.addEventListener('keydown', onKey);
    document.body.style.overflow = 'hidden';
    return () => {
      document.removeEventListener('keydown', onKey);
      document.body.style.overflow = '';
    };
  }, [galleryModal, lightboxIndex, images.length]);

  return (
    <main className="mx-auto max-w-6xl px-6 py-16 md:px-10 md:py-24">
      <Reveal>
        <p className="text-xs font-medium uppercase tracking-[0.2em] text-gold">{t.work}</p>
        <h1 className="font-serif-display mt-3 max-w-2xl text-4xl text-foreground md:text-5xl">
          {t.heading}
        </h1>
        <p className="mt-5 max-w-xl text-[16px] leading-relaxed text-muted">{t.subtitle}</p>
      </Reveal>

      <div className="mt-14 space-y-6">
        {PROJECTS.map((p, i) => (
          <Reveal key={p.slug} delay={Math.min(i * 60, 240)}>
            <article className="overflow-hidden rounded-2xl border border-border bg-surface">
              <div className="grid md:grid-cols-[280px_1fr]">
                <div className="border-b border-border p-7 md:border-b-0 md:border-r">
                  <div className="text-xs font-medium uppercase tracking-widest text-muted-2">{p.period}</div>
                  <h2 className="font-serif-display mt-3 text-2xl text-foreground">{p.name}</h2>
                  <div className="mt-1 text-sm text-muted">{p.org}</div>
                  <div className="mt-6 flex flex-wrap gap-2 text-xs">
                    <span className="rounded-full bg-accent-soft px-3 py-1 text-accent">
                      {lang === 'fr' ? p.sectorFr : p.sector}
                    </span>
                    <span
                      className={`rounded-full px-3 py-1 font-medium ${
                        p.status === 'Live' || p.status === 'Active'
                          ? 'bg-[#e9f3ec] text-[#2f6b45]'
                          : 'bg-black/5 text-muted-2'
                      }`}
                    >
                      {lang === 'fr' ? p.statusFr : p.status}
                    </span>
                  </div>
                </div>

                <div className="p-7">
                  <p className="max-w-2xl text-[16px] leading-relaxed text-foreground">
                    {lang === 'fr' ? p.summaryFr : p.summary}
                  </p>

                  <ul className="mt-5 grid gap-x-8 gap-y-2 text-sm text-muted sm:grid-cols-2">
                    {(lang === 'fr' ? p.highlightsFr : p.highlights).map((h) => (
                      <li key={h} className="flex gap-2">
                        <span className="mt-2 h-1 w-1 flex-shrink-0 rounded-full bg-accent" />
                        <span>{h}</span>
                      </li>
                    ))}
                  </ul>

                  <div className="mt-6 flex flex-wrap gap-1.5">
                    {p.stack.map((s) => (
                      <span key={s} className="rounded-full border border-border px-2.5 py-1 text-[11px] text-muted">
                        {s}
                      </span>
                    ))}
                  </div>

                  {p.images && p.images.length > 0 && (
                    <div className="mt-6 border-t border-border pt-5">
                      <button
                        type="button"
                        onClick={() => setGalleryModal(p.slug)}
                        className="group inline-flex items-center gap-2 rounded-full border border-border-strong bg-surface px-5 py-2.5 text-xs font-medium text-muted transition-all duration-300 hover:-translate-y-0.5 hover:border-accent hover:text-accent hover:shadow-md"
                      >
                        <svg
                          className="h-3.5 w-3.5"
                          viewBox="0 0 24 24"
                          fill="none"
                          stroke="currentColor"
                          strokeWidth="1.8"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        >
                          <rect x="3" y="5" width="18" height="14" rx="2" />
                          <circle cx="8.5" cy="10" r="1.5" />
                          <path d="M21 15l-5-5-9 9" />
                        </svg>
                        {t.viewScreenshots(p.images.length)}
                      </button>
                    </div>
                  )}

                  {p.demoUrl && (
                    <div className="mt-6 border-t border-border pt-5">
                      <div className="flex flex-wrap items-center gap-3">
                        <a
                          href={p.demoUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="rounded-full bg-accent px-5 py-2.5 text-xs font-medium text-white transition-transform hover:-translate-y-0.5"
                        >
                          {t.viewLiveDemo}
                        </a>
                        {p.demoAccounts && (
                          <button
                            type="button"
                            onClick={() => setOpenDemo(openDemo === p.slug ? null : p.slug)}
                            className="rounded-full border border-border-strong px-5 py-2.5 text-xs font-medium text-muted transition-colors hover:text-foreground"
                          >
                            {openDemo === p.slug ? t.hideDemoAccounts : t.demoAccounts}
                          </button>
                        )}
                      </div>

                      {p.demoAccounts && openDemo === p.slug && (
                        <div className="mt-4 overflow-hidden rounded-xl border border-border">
                          <table className="w-full text-left text-xs">
                            <thead>
                              <tr className="bg-accent-soft text-muted-2">
                                <th className="px-4 py-2 font-medium">{t.role}</th>
                                <th className="px-4 py-2 font-medium">{t.email}</th>
                                <th className="px-4 py-2 font-medium">{t.password}</th>
                              </tr>
                            </thead>
                            <tbody>
                              {p.demoAccounts.map((a) => (
                                <tr key={a.email} className="border-t border-border">
                                  <td className="px-4 py-2 text-accent">{a.role}</td>
                                  <td className="px-4 py-2 text-foreground">{a.email}</td>
                                  <td className="px-4 py-2 text-muted">{a.pass}</td>
                                </tr>
                              ))}
                            </tbody>
                          </table>
                        </div>
                      )}
                    </div>
                  )}
                </div>
              </div>
            </article>
          </Reveal>
        ))}
      </div>

      {activeProject && (
        <div
          className="lightbox-backdrop fixed inset-0 z-50 flex items-center justify-center bg-black/80 p-4 md:p-8"
          onClick={() => {
            setGalleryModal(null);
            setLightboxIndex(null);
          }}
        >
          <div
            className="modal-panel relative flex max-h-[90vh] w-full max-w-4xl flex-col overflow-hidden rounded-2xl bg-surface shadow-2xl"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="flex items-center justify-between border-b border-border px-6 py-4">
              <div>
                <h3 className="font-serif-display text-lg text-foreground">{activeProject.name}</h3>
                <p className="text-xs text-muted">{t.screenshots(images.length)}</p>
              </div>
              <button
                type="button"
                onClick={() => {
                  setGalleryModal(null);
                  setLightboxIndex(null);
                }}
                aria-label="Close"
                className="rounded-full p-2 text-muted transition-colors hover:bg-black/5 hover:text-foreground"
              >
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" className="h-5 w-5">
                  <path d="M6 6l12 12M18 6L6 18" />
                </svg>
              </button>
            </div>

            <div className="overflow-y-auto p-6">
              <div className="grid grid-cols-2 gap-3 sm:grid-cols-3">
                {images.map((img, idx) => (
                  <button
                    key={img}
                    type="button"
                    onClick={() => setLightboxIndex(idx)}
                    style={{ animationDelay: `${idx * 40}ms` }}
                    className="gallery-item group relative aspect-video overflow-hidden rounded-lg border border-border bg-black/5 transition-shadow duration-300 hover:shadow-lg hover:ring-2 hover:ring-accent/30"
                  >
                    <Image
                      src={`/projects/${activeProject.slug}/${img}`}
                      alt={`${activeProject.name} screenshot`}
                      fill
                      className="object-cover transition-transform duration-500 group-hover:scale-110"
                      sizes="(max-width: 640px) 50vw, 300px"
                    />
                    <div className="absolute inset-0 flex items-center justify-center bg-black/0 opacity-0 transition-all duration-300 group-hover:bg-black/20 group-hover:opacity-100">
                      <svg
                        className="h-6 w-6 text-white drop-shadow"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="1.8"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      >
                        <circle cx="11" cy="11" r="7" />
                        <path d="M21 21l-4.3-4.3M11 8v6M8 11h6" />
                      </svg>
                    </div>
                  </button>
                ))}
              </div>
            </div>
          </div>

          {lightboxIndex !== null && (
            <div
              className="lightbox-backdrop fixed inset-0 z-[60] flex items-center justify-center bg-black/92 p-6"
              onClick={(e) => {
                e.stopPropagation();
                setLightboxIndex(null);
              }}
            >
              <img
                key={images[lightboxIndex]}
                src={`/projects/${activeProject.slug}/${images[lightboxIndex]}`}
                alt=""
                className="lightbox-image max-h-full max-w-full rounded-lg object-contain shadow-2xl"
                onClick={(e) => e.stopPropagation()}
              />

              {images.length > 1 && (
                <>
                  <button
                    type="button"
                    onClick={(e) => {
                      e.stopPropagation();
                      setLightboxIndex((i) => (i === null ? i : (i - 1 + images.length) % images.length));
                    }}
                    aria-label="Previous"
                    className="absolute left-3 top-1/2 -translate-y-1/2 rounded-full bg-white/10 p-3 text-white transition-colors hover:bg-white/20 md:left-6"
                  >
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="h-5 w-5">
                      <path d="M15 18l-6-6 6-6" />
                    </svg>
                  </button>
                  <button
                    type="button"
                    onClick={(e) => {
                      e.stopPropagation();
                      setLightboxIndex((i) => (i === null ? i : (i + 1) % images.length));
                    }}
                    aria-label="Next"
                    className="absolute right-3 top-1/2 -translate-y-1/2 rounded-full bg-white/10 p-3 text-white transition-colors hover:bg-white/20 md:right-6"
                  >
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="h-5 w-5">
                      <path d="M9 18l6-6-6-6" />
                    </svg>
                  </button>
                </>
              )}

              <button
                type="button"
                onClick={(e) => {
                  e.stopPropagation();
                  setLightboxIndex(null);
                }}
                aria-label="Close"
                className="absolute right-6 top-6 rounded-full bg-white/10 p-2 text-white transition-colors hover:bg-white/20"
              >
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" className="h-5 w-5">
                  <path d="M6 6l12 12M18 6L6 18" />
                </svg>
              </button>

              <div className="absolute bottom-6 left-1/2 -translate-x-1/2 rounded-full bg-white/10 px-3 py-1 text-xs text-white">
                {lightboxIndex + 1} / {images.length}
              </div>
            </div>
          )}
        </div>
      )}
    </main>
  );
}
