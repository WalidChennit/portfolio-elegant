'use client';

import Link from 'next/link';
import Reveal from '@/components/Reveal';
import { PROJECTS, SITE, STATS, TOP_SKILLS } from '@/lib/data';
import { useLanguage } from '@/lib/language-context';

const COPY = {
  en: {
    heroHeadline: 'Building reliable, full-stack software for ambitious companies and individuals.',
    heroSub: (name: string) =>
      `I'm ${name}, a full-stack engineer designing and shipping production systems end-to-end — from NestJS and Spring Boot backends to React Native and Next.js interfaces, with AI-driven document and biometric verification where it matters.`,
    viewProjects: 'View Projects',
    downloadResume: 'Download Resume',
    selectedWork: 'Selected Work',
    recentEngagements: 'Recent engagements',
    viewAllProjects: 'View all projects →',
    coreStack: 'Core Stack',
    toolsIReachFor: 'Tools I reach for most',
    seeFullSkillSet: 'See the full skill set →',
    ctaHeadline: "Let's build something reliable together.",
    ctaSub:
      'Open to full-time roles, freelance engagements, and collaborations with founders, businesses and individuals building something ambitious of their own.',
    getInTouch: 'Get in touch',
  },
  fr: {
    heroHeadline: 'Je construis des logiciels full-stack fiables pour des entreprises et particuliers ambitieux.',
    heroSub: (name: string) =>
      `Je suis ${name}, ingénieur full-stack qui conçoit et livre des systèmes en production de bout en bout — des backends NestJS et Spring Boot aux interfaces React Native et Next.js, avec de la vérification documentaire et biométrique par IA quand c'est pertinent.`,
    viewProjects: 'Voir les projets',
    downloadResume: 'Télécharger le CV',
    selectedWork: 'Travaux sélectionnés',
    recentEngagements: 'Missions récentes',
    viewAllProjects: 'Voir tous les projets →',
    coreStack: 'Stack principale',
    toolsIReachFor: 'Les outils que j\'utilise le plus',
    seeFullSkillSet: 'Voir toutes les compétences →',
    ctaHeadline: 'Construisons ensemble quelque chose de fiable.',
    ctaSub:
      'Ouvert aux postes à temps plein, missions freelance et collaborations avec des fondateurs, entreprises et particuliers qui construisent quelque chose d\'ambitieux.',
    getInTouch: 'Me contacter',
  },
};

export default function HomePage() {
  const featured = PROJECTS.slice(0, 3);
  const { lang } = useLanguage();
  const t = COPY[lang];

  return (
    <main>
      {/* Hero */}
      <section className="mx-auto max-w-6xl px-6 pb-20 pt-16 md:px-10 md:pb-28 md:pt-24">
        <Reveal>
          <p className="text-xs font-medium uppercase tracking-[0.2em] text-gold">
            {lang === 'fr' ? SITE.roleFr : SITE.role} · {lang === 'fr' ? SITE.locationFr : SITE.location}
          </p>
        </Reveal>
        <Reveal delay={80}>
          <h1 className="font-serif-display mt-5 max-w-3xl text-[34px] leading-[1.1] tracking-tight text-foreground sm:text-[42px] md:text-[64px]">
            {t.heroHeadline}
          </h1>
        </Reveal>
        <Reveal delay={160}>
          <p className="mt-6 max-w-xl text-[17px] leading-relaxed text-muted">{t.heroSub(SITE.name)}</p>
        </Reveal>
        <Reveal delay={240}>
          <div className="mt-9 flex flex-wrap items-center gap-4">
            <Link
              href="/projects"
              className="rounded-full bg-accent px-7 py-3.5 text-sm font-medium text-white transition-transform hover:-translate-y-0.5"
            >
              {t.viewProjects}
            </Link>
            <a
              href={SITE.cv}
              download
              className="rounded-full border border-border-strong px-7 py-3.5 text-sm font-medium text-foreground transition-colors hover:border-accent hover:text-accent"
            >
              {t.downloadResume}
            </a>
          </div>
        </Reveal>

        <Reveal delay={320}>
          <div className="mt-16 grid grid-cols-3 gap-6 border-t border-border pt-10 md:max-w-lg">
            {STATS.map((s) => (
              <div key={s.label}>
                <div className="font-serif-display text-3xl text-accent md:text-4xl">{s.n}</div>
                <div className="mt-1 text-xs leading-snug text-muted-2">{lang === 'fr' ? s.labelFr : s.label}</div>
              </div>
            ))}
          </div>
        </Reveal>
      </section>

      {/* Selected work */}
      <section className="border-t border-border bg-surface">
        <div className="mx-auto max-w-6xl px-6 py-20 md:px-10">
          <Reveal>
            <div className="flex items-end justify-between gap-6">
              <div>
                <p className="text-xs font-medium uppercase tracking-[0.2em] text-gold">{t.selectedWork}</p>
                <h2 className="font-serif-display mt-3 text-3xl text-foreground md:text-4xl">{t.recentEngagements}</h2>
              </div>
              <Link href="/projects" className="link-underline hidden text-sm text-accent md:block">
                {t.viewAllProjects}
              </Link>
            </div>
          </Reveal>

          <div className="mt-12 grid gap-6 md:grid-cols-3">
            {featured.map((p, i) => (
              <Reveal key={p.slug} delay={i * 100}>
                <Link
                  href="/projects"
                  className="group flex h-full flex-col rounded-2xl border border-border bg-background p-7 transition-all hover:-translate-y-1 hover:border-accent/40 hover:shadow-[0_20px_40px_-24px_rgba(22,50,79,0.35)]"
                >
                  <div className="flex items-center justify-between">
                    <span className="text-xs font-medium uppercase tracking-widest text-muted-2">
                      {lang === 'fr' ? p.sectorFr : p.sector}
                    </span>
                    <span
                      className={`rounded-full px-2.5 py-1 text-[10px] font-medium uppercase tracking-wide ${
                        p.status === 'Live' || p.status === 'Active'
                          ? 'bg-accent-soft text-accent'
                          : 'bg-black/5 text-muted-2'
                      }`}
                    >
                      {lang === 'fr' ? p.statusFr : p.status}
                    </span>
                  </div>
                  <h3 className="font-serif-display mt-4 text-xl text-foreground">{p.name}</h3>
                  <p className="mt-1 text-xs text-muted-2">{p.org}</p>
                  <p className="mt-4 flex-1 text-sm leading-relaxed text-muted">
                    {lang === 'fr' ? p.summaryFr : p.summary}
                  </p>
                  <div className="mt-6 flex flex-wrap gap-1.5">
                    {p.stack.slice(0, 3).map((s) => (
                      <span key={s} className="rounded-full bg-accent-soft px-2.5 py-1 text-[11px] text-accent">
                        {s}
                      </span>
                    ))}
                  </div>
                </Link>
              </Reveal>
            ))}
          </div>

          <div className="mt-10 md:hidden">
            <Link href="/projects" className="link-underline text-sm text-accent">
              {t.viewAllProjects}
            </Link>
          </div>
        </div>
      </section>

      {/* Skills strip */}
      <section className="mx-auto max-w-6xl px-6 py-20 md:px-10">
        <Reveal>
          <p className="text-xs font-medium uppercase tracking-[0.2em] text-gold">{t.coreStack}</p>
          <h2 className="font-serif-display mt-3 text-3xl text-foreground md:text-4xl">
            {t.toolsIReachFor}
          </h2>
        </Reveal>

        <div className="mt-12 grid gap-x-10 gap-y-6 md:grid-cols-2">
          {TOP_SKILLS.map((s, i) => (
            <Reveal key={s.name} delay={i * 60}>
              <div>
                <div className="mb-2 flex items-baseline justify-between text-sm">
                  <span className="font-medium text-foreground">{s.name}</span>
                  <span className="text-muted-2">{s.level}%</span>
                </div>
                <div className="h-[3px] w-full overflow-hidden rounded-full bg-border">
                  <div
                    className="h-full rounded-full bg-accent"
                    style={{ width: `${s.level}%` }}
                  />
                </div>
              </div>
            </Reveal>
          ))}
        </div>

        <Reveal delay={200}>
          <div className="mt-10">
            <Link href="/skills" className="link-underline text-sm text-accent">
              {t.seeFullSkillSet}
            </Link>
          </div>
        </Reveal>
      </section>

      {/* CTA */}
      <section className="border-t border-border bg-accent">
        <div className="mx-auto max-w-6xl px-6 py-20 text-center md:px-10">
          <Reveal>
            <h2 className="font-serif-display text-3xl text-white md:text-4xl">{t.ctaHeadline}</h2>
            <p className="mx-auto mt-4 max-w-lg text-[15px] text-white/75">{t.ctaSub}</p>
            <Link
              href="/contact"
              className="mt-8 inline-block rounded-full bg-white px-8 py-3.5 text-sm font-medium text-accent transition-transform hover:-translate-y-0.5"
            >
              {t.getInTouch}
            </Link>
          </Reveal>
        </div>
      </section>
    </main>
  );
}
