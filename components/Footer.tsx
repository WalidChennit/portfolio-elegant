'use client';

import Link from 'next/link';
import { NAV_LINKS, SITE } from '@/lib/data';
import { useLanguage } from '@/lib/language-context';

export default function Footer() {
  const { lang } = useLanguage();

  const roleLine =
    lang === 'fr'
      ? `${SITE.roleFr} basé à ${SITE.locationFr}, je construis des produits full-stack pour tous les secteurs.`
      : `${SITE.role} based in ${SITE.location}, building full-stack products across industries.`;

  return (
    <footer className="border-t border-border">
      <div className="mx-auto max-w-6xl px-6 py-14 md:px-10">
        <div className="grid gap-10 md:grid-cols-3">
          <div>
            <div className="font-serif-display text-lg text-foreground">{SITE.name}</div>
            <p className="mt-3 max-w-xs text-sm text-muted">{roleLine}</p>
          </div>

          <div>
            <div className="text-xs font-medium uppercase tracking-widest text-muted-2">
              {lang === 'fr' ? 'Navigation' : 'Navigate'}
            </div>
            <ul className="mt-4 flex flex-col gap-2">
              {NAV_LINKS.map((l) => (
                <li key={l.href}>
                  <Link href={l.href} className="link-underline text-sm text-muted hover:text-foreground">
                    {lang === 'fr' ? l.labelFr : l.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <div className="text-xs font-medium uppercase tracking-widest text-muted-2">
              {lang === 'fr' ? 'Contact' : 'Connect'}
            </div>
            <ul className="mt-4 flex flex-col gap-2 text-sm">
              <li>
                <a href={`mailto:${SITE.email}`} className="link-underline text-muted hover:text-foreground">
                  {SITE.email}
                </a>
              </li>
              <li>
                <a href={SITE.linkedin} target="_blank" rel="noreferrer" className="link-underline text-muted hover:text-foreground">
                  LinkedIn
                </a>
              </li>
              <li>
                <a href={SITE.github} target="_blank" rel="noreferrer" className="link-underline text-muted hover:text-foreground">
                  GitHub
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-12 flex flex-col items-start justify-between gap-4 border-t border-border pt-6 text-xs text-muted-2 md:flex-row md:items-center">
          <span>
            © {new Date().getFullYear()} {SITE.name}. {lang === 'fr' ? 'Tous droits réservés.' : 'All rights reserved.'}
          </span>
          <span>{lang === 'fr' ? 'Conçu et développé à Alger.' : 'Designed & built in Algiers.'}</span>
        </div>
      </div>
    </footer>
  );
}
