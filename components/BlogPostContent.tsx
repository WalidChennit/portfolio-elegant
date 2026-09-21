'use client';

import Link from 'next/link';
import { BlogPost } from '@/lib/blog-posts';
import Reveal from '@/components/Reveal';
import { useLanguage } from '@/lib/language-context';

const COPY = {
  en: {
    back: '← Back to writing',
    featured: 'Featured',
    nextUp: 'Next up',
  },
  fr: {
    back: "← Retour à l'écriture",
    featured: 'À la une',
    nextUp: 'À suivre',
  },
};

function renderRich(text: string, key: number) {
  const parts = text.split(/(\*\*[^*]+\*\*|`[^`]+`)/g);
  return (
    <p key={key} className="mb-4 text-[16.5px] leading-[1.8] text-muted">
      {parts.map((part, i) => {
        if (part.startsWith('**') && part.endsWith('**')) {
          return (
            <strong key={i} className="font-medium text-foreground">
              {part.slice(2, -2)}
            </strong>
          );
        }
        if (part.startsWith('`') && part.endsWith('`')) {
          return (
            <code key={i} className="rounded bg-accent-soft px-1.5 py-0.5 text-[0.88em] text-accent">
              {part.slice(1, -1)}
            </code>
          );
        }
        return <span key={i}>{part}</span>;
      })}
    </p>
  );
}

export default function BlogPostContent({ post, next }: { post: BlogPost; next: BlogPost }) {
  const { lang } = useLanguage();
  const t = COPY[lang];

  return (
    <main className="mx-auto max-w-3xl px-6 py-16 md:px-10 md:py-24">
      <Reveal>
        <Link href="/blog" className="link-underline text-sm text-muted hover:text-foreground">
          {t.back}
        </Link>
      </Reveal>

      <Reveal delay={60}>
        <div className="mt-8 border-b border-border pb-10">
          {post.featured && (
            <span className="text-xs font-medium uppercase tracking-widest text-gold">{t.featured}</span>
          )}
          <h1 className="font-serif-display mt-3 text-3xl leading-tight text-foreground md:text-[44px]">
            {lang === 'fr' ? post.titleFr : post.title}
          </h1>
          <p className="mt-5 max-w-2xl text-[17px] leading-relaxed text-muted">
            {lang === 'fr' ? post.dekFr : post.dek}
          </p>
          <div className="mt-6 flex flex-wrap items-center gap-3 text-xs text-muted-2">
            <span>{lang === 'fr' ? post.dateFr : post.date}</span>
            <span>·</span>
            <span>{lang === 'fr' ? post.readTimeFr : post.readTime}</span>
            <span>·</span>
            <span>{(lang === 'fr' ? post.tagsFr : post.tags).join(' · ')}</span>
          </div>
        </div>
      </Reveal>

      <Reveal delay={120}>
        <article className="mt-10">
          {post.sections.map((section, i) => (
            <section key={i} className="mb-9">
              {section.heading && (
                <h2 className="font-serif-display mb-4 text-2xl text-foreground">
                  {lang === 'fr' ? section.headingFr : section.heading}
                </h2>
              )}
              {(lang === 'fr' ? section.bodyFr : section.body).map((para, j) => renderRich(para, j))}
            </section>
          ))}
        </article>
      </Reveal>

      <Reveal delay={160}>
        <div className="mt-14 border-t border-border pt-8">
          <span className="text-xs font-medium uppercase tracking-widest text-muted-2">{t.nextUp}</span>
          <Link
            href={`/blog/${next.slug}`}
            className="mt-4 flex items-center justify-between rounded-2xl border border-border p-6 transition-colors hover:border-accent/40"
          >
            <span className="font-serif-display text-lg text-foreground">
              {lang === 'fr' ? next.titleFr : next.title}
            </span>
            <span className="text-accent">→</span>
          </Link>
        </div>
      </Reveal>
    </main>
  );
}
