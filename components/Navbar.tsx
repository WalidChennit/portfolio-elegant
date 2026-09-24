'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useState } from 'react';
import { NAV_LINKS, SITE } from '@/lib/data';
import { useLanguage } from '@/lib/language-context';

export default function Navbar() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);
  const { lang, toggleLang } = useLanguage();
  const resumeLabel = lang === 'fr' ? 'CV' : 'Resume';
  const downloadResumeLabel = lang === 'fr' ? 'Télécharger le CV' : 'Download Resume';

  return (
    <header className="sticky top-0 z-50 border-b border-border bg-background/85 backdrop-blur-md">
      <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4 md:px-10">
        <Link href="/" className="font-serif-display text-lg tracking-tight text-foreground">
          {SITE.name}
        </Link>

        <nav className="hidden items-center gap-1 md:flex">
          {NAV_LINKS.map((l) => {
            const active = pathname === l.href;
            return (
              <Link
                key={l.href}
                href={l.href}
                className={`rounded-full px-4 py-2 text-[13px] tracking-wide transition-colors ${
                  active
                    ? 'bg-accent text-white'
                    : 'text-muted hover:bg-accent-soft hover:text-foreground'
                }`}
              >
                {lang === 'fr' ? l.labelFr : l.label}
              </Link>
            );
          })}
          <a
            href={SITE.cv}
            download
            className="ml-3 rounded-full border border-border-strong px-4 py-2 text-[13px] tracking-wide text-accent transition-colors hover:bg-accent hover:text-white"
          >
            {resumeLabel}
          </a>
          <button
            type="button"
            onClick={toggleLang}
            aria-label="Toggle language"
            className="ml-1 flex items-center gap-1 rounded-full border border-border-strong px-3 py-2 text-[12px] font-medium tracking-wide text-muted transition-colors hover:border-accent hover:text-accent"
          >
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" className="h-3.5 w-3.5">
              <circle cx="12" cy="12" r="9" />
              <path d="M3 12h18M12 3c2.5 2.7 3.8 6 3.8 9s-1.3 6.3-3.8 9c-2.5-2.7-3.8-6-3.8-9s1.3-6.3 3.8-9z" />
            </svg>
            <span className={lang === 'en' ? 'text-accent' : ''}>EN</span>
            <span className="text-border-strong">/</span>
            <span className={lang === 'fr' ? 'text-accent' : ''}>FR</span>
          </button>
        </nav>

        <div className="flex items-center gap-2 md:hidden">
          <button
            type="button"
            onClick={toggleLang}
            aria-label="Toggle language"
            className="flex h-9 items-center gap-1 rounded-full border border-border-strong px-3 text-[12px] font-medium text-muted"
          >
            <span className={lang === 'en' ? 'text-accent' : ''}>EN</span>
            <span className="text-border-strong">/</span>
            <span className={lang === 'fr' ? 'text-accent' : ''}>FR</span>
          </button>
          <button
            aria-label="Toggle menu"
            aria-expanded={open}
            onClick={() => setOpen((o) => !o)}
            className="flex h-9 w-9 items-center justify-center rounded-full border border-border-strong"
          >
            <span className="sr-only">Menu</span>
            {open ? (
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6">
                <path d="M4 4l16 16M20 4L4 20" />
              </svg>
            ) : (
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6">
                <path d="M3 6h18M3 12h18M3 18h18" />
              </svg>
            )}
          </button>
        </div>
      </div>

      {open && (
        <div className="border-t border-border bg-background px-6 pb-6 md:hidden">
          <nav className="flex flex-col gap-1 pt-4">
            {NAV_LINKS.map((l) => {
              const active = pathname === l.href;
              return (
                <Link
                  key={l.href}
                  href={l.href}
                  onClick={() => setOpen(false)}
                  className={`rounded-lg px-4 py-3 text-sm ${
                    active ? 'bg-accent text-white' : 'text-muted hover:bg-accent-soft'
                  }`}
                >
                  {lang === 'fr' ? l.labelFr : l.label}
                </Link>
              );
            })}
            <a
              href={SITE.cv}
              download
              className="mt-2 rounded-lg border border-border-strong px-4 py-3 text-center text-sm text-accent"
            >
              {downloadResumeLabel}
            </a>
          </nav>
        </div>
      )}
    </header>
  );
}
