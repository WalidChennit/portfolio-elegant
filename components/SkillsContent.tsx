'use client';

import Reveal from '@/components/Reveal';
import { SKILL_GROUPS, TOP_SKILLS } from '@/lib/data';
import { useLanguage } from '@/lib/language-context';

const COPY = {
  en: {
    capabilities: 'Capabilities',
    heading: 'A full-stack toolkit',
    subtitle:
      'Six domains, thirty-plus tools — the stack I use to take a product from architecture to production.',
    coreProficiency: 'Core proficiency',
    summary: 'Summary',
    summaryItems: [
      'End-to-end full-stack delivery, backend-leaning',
      'Comfortable across SQL + NoSQL, REST + RBAC',
      'Mobile-first with React Native & Expo',
      'AI / vision integration in production banking workflows',
    ],
  },
  fr: {
    capabilities: 'Compétences',
    heading: 'Une boîte à outils full-stack',
    subtitle:
      "Six domaines, plus de trente outils — la stack que j'utilise pour mener un produit de l'architecture à la production.",
    coreProficiency: 'Maîtrise principale',
    summary: 'Résumé',
    summaryItems: [
      'Livraison full-stack de bout en bout, orientée backend',
      "À l'aise entre SQL + NoSQL, REST + RBAC",
      'Mobile-first avec React Native & Expo',
      'Intégration IA / vision dans des workflows bancaires en production',
    ],
  },
};

export default function SkillsContent() {
  const { lang } = useLanguage();
  const t = COPY[lang];

  return (
    <main className="mx-auto max-w-6xl px-6 py-16 md:px-10 md:py-24">
      <Reveal>
        <p className="text-xs font-medium uppercase tracking-[0.2em] text-gold">{t.capabilities}</p>
        <h1 className="font-serif-display mt-3 max-w-2xl text-4xl text-foreground md:text-5xl">
          {t.heading}
        </h1>
        <p className="mt-5 max-w-xl text-[16px] leading-relaxed text-muted">{t.subtitle}</p>
      </Reveal>

      <Reveal delay={80}>
        <div className="mt-14 rounded-2xl border border-border bg-surface p-8 md:p-10">
          <h2 className="font-serif-display text-2xl text-foreground">{t.coreProficiency}</h2>
          <div className="mt-8 grid gap-x-10 gap-y-6 md:grid-cols-2">
            {TOP_SKILLS.map((s) => (
              <div key={s.name}>
                <div className="mb-2 flex items-baseline justify-between text-sm">
                  <span className="font-medium text-foreground">{s.name}</span>
                  <span className="text-muted-2">{s.level}%</span>
                </div>
                <div className="h-[3px] w-full overflow-hidden rounded-full bg-border">
                  <div className="h-full rounded-full bg-accent" style={{ width: `${s.level}%` }} />
                </div>
              </div>
            ))}
          </div>
        </div>
      </Reveal>

      <div className="mt-14 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        {SKILL_GROUPS.map((g, i) => (
          <Reveal key={g.label} delay={Math.min(i * 70, 280)}>
            <div className="h-full rounded-2xl border border-border p-7">
              <h3 className="font-serif-display text-lg text-foreground">
                {lang === 'fr' ? g.labelFr : g.label}
              </h3>
              <div className="mt-5 flex flex-wrap gap-2">
                {g.items.map((item) => (
                  <span
                    key={item}
                    className="rounded-full bg-accent-soft px-3 py-1.5 text-[12.5px] text-accent"
                  >
                    {item}
                  </span>
                ))}
              </div>
            </div>
          </Reveal>
        ))}
      </div>

      <Reveal delay={120}>
        <div className="mt-14 rounded-2xl border border-border bg-accent p-8 text-white md:p-10">
          <p className="text-sm uppercase tracking-widest text-white/60">{t.summary}</p>
          <ul className="mt-5 space-y-2.5 text-[15px] leading-relaxed text-white/90">
            {t.summaryItems.map((item) => (
              <li key={item}>· {item}</li>
            ))}
          </ul>
        </div>
      </Reveal>
    </main>
  );
}
