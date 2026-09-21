'use client';

import Link from 'next/link';
import Reveal from '@/components/Reveal';
import { BLOG_POSTS } from '@/lib/blog-posts';
import { useLanguage } from '@/lib/language-context';

const COPY = {
  en: {
    writing: 'Writing',
    heading: 'Notes on building',
    subtitle:
      'Field notes on full-stack engineering, AI integration, and shipping production software — written from real projects, not theory.',
    featured: 'Featured',
  },
  fr: {
    writing: 'Écriture',
    heading: 'Notes sur le développement',
    subtitle:
      "Carnets de bord sur l'ingénierie full-stack, l'intégration de l'IA et la mise en production de logiciels — écrits depuis des projets réels, pas de la théorie.",
    featured: 'À la une',
  },
};

export default function BlogListContent() {
  const { lang } = useLanguage();
  const t = COPY[lang];
  const featured = BLOG_POSTS.find((p) => p.featured) ?? BLOG_POSTS[0];
  const rest = BLOG_POSTS.filter((p) => p.slug !== featured.slug);

  return (
    <main className="mx-auto max-w-6xl px-6 py-16 md:px-10 md:py-24">
      <Reveal>
        <p className="text-xs font-medium uppercase tracking-[0.2em] text-gold">{t.writing}</p>
        <h1 className="font-serif-display mt-3 max-w-2xl text-4xl text-foreground md:text-5xl">
          {t.heading}
        </h1>
        <p className="mt-5 max-w-xl text-[16px] leading-relaxed text-muted">{t.subtitle}</p>
      </Reveal>

      <Reveal delay={100}>
        <Link
          href={`/blog/${featured.slug}`}
          className="mt-14 grid gap-8 overflow-hidden rounded-2xl border border-border bg-surface p-8 transition-colors hover:border-accent/40 md:grid-cols-[1fr_1.3fr] md:p-10"
        >
          <div className="flex flex-col justify-center">
            <span className="text-xs font-medium uppercase tracking-widest text-gold">{t.featured}</span>
            <h2 className="font-serif-display mt-4 text-2xl leading-snug text-foreground md:text-3xl">
              {lang === 'fr' ? featured.titleFr : featured.title}
            </h2>
          </div>
          <div className="flex flex-col justify-center">
            <p className="text-[15px] leading-relaxed text-muted">
              {lang === 'fr' ? featured.dekFr : featured.dek}
            </p>
            <div className="mt-5 flex items-center gap-3 text-xs text-muted-2">
              <span>{lang === 'fr' ? featured.dateFr : featured.date}</span>
              <span>·</span>
              <span>{lang === 'fr' ? featured.readTimeFr : featured.readTime}</span>
            </div>
          </div>
        </Link>
      </Reveal>

      <div className="mt-14 divide-y divide-border border-t border-border">
        {rest.map((post, i) => (
          <Reveal key={post.slug} delay={Math.min(i * 50, 200)}>
            <Link
              href={`/blog/${post.slug}`}
              className="group grid gap-2 py-7 transition-colors hover:bg-accent-soft/40 md:grid-cols-[120px_1fr_auto] md:items-center md:gap-8 md:px-4"
            >
              <div className="text-xs font-medium uppercase tracking-widest text-muted-2">
                {lang === 'fr' ? post.dateFr : post.date}
              </div>
              <div>
                <h3 className="font-serif-display text-xl text-foreground">
                  {lang === 'fr' ? post.titleFr : post.title}
                </h3>
                <p className="mt-1.5 max-w-2xl text-sm leading-relaxed text-muted">
                  {lang === 'fr' ? post.dekFr : post.dek}
                </p>
                <div className="mt-3 flex flex-wrap gap-1.5">
                  {(lang === 'fr' ? post.tagsFr : post.tags).map((t) => (
                    <span key={t} className="rounded-full border border-border px-2.5 py-0.5 text-[11px] text-muted-2">
                      {t}
                    </span>
                  ))}
                </div>
              </div>
              <div className="hidden text-muted-2 transition-transform group-hover:translate-x-1 group-hover:text-accent md:block">
                →
              </div>
            </Link>
          </Reveal>
        ))}
      </div>
    </main>
  );
}
