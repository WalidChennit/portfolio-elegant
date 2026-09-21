'use client';

import Reveal from '@/components/Reveal';
import { CERTIFICATIONS, EDUCATION, LANGUAGES, SITE, STATS } from '@/lib/data';
import { useLanguage } from '@/lib/language-context';

const COPY = {
  en: {
    about: 'About',
    heading: 'Engineer, mentor, and lifelong builder.',
    p1: "I'm a Software Engineer with a Master's Degree in Software Engineering from USTHB. I design and ship full-stack systems end-to-end — from scalable backends in NestJS and Spring Boot to mobile and web frontends in React Native and Next.js.",
    p2a: 'Currently building the virtual banking platform at',
    p2b:
      "as a Full Stack Developer. Over the last two years I've contributed to ambitious projects across several industries — including a secure eKYC platform with AI-driven biometric verification at",
    p2c: 'an R&D information system at',
    p2d: 'and a collaborative meeting tool for boardroom workflows.',
    p3: "I'm fluent across the stack — relational and NoSQL databases, modular RESTful architectures, role-based access control, JWT, Docker, and CI/CD — and I write code with an eye for clarity, security, and the people who will read it three months later. I'm equally comfortable adapting that approach to any industry or team, not just the ones I've already worked in.",
    education: 'Education',
    certifications: 'Certifications',
    profile: 'Profile',
    name: 'Name',
    role: 'Role',
    location: 'Location',
    degree: 'Degree',
    degreeValue: 'M.Sc. Software Engineering',
    school: 'School',
    status: 'Status',
    statusValue: 'Open to opportunities',
    traits: ['Curious', 'Rigorous', 'Quality-oriented', 'Fast learner', 'Team player'],
    downloadResume: 'Download Resume',
    languages: 'Languages',
    offDuty: 'Off duty',
    offDutyItems: ['Tech watch & continuous learning', 'Video games', 'Sport & travel', 'Hackathons'],
  },
  fr: {
    about: 'À propos',
    heading: 'Ingénieur, mentor, et bâtisseur dans l\'âme.',
    p1: "Je suis ingénieur logiciel, titulaire d'un Master en Génie Logiciel de l'USTHB. Je conçois et livre des systèmes full-stack de bout en bout — des backends scalables en NestJS et Spring Boot aux interfaces mobiles et web en React Native et Next.js.",
    p2a: 'Je construis actuellement la plateforme de banque virtuelle chez',
    p2b:
      "en tant que Développeur Full Stack. Au cours des deux dernières années, j'ai contribué à des projets ambitieux dans plusieurs secteurs — notamment une plateforme eKYC sécurisée avec vérification biométrique par IA chez",
    p2c: "un système d'information R&D chez",
    p2d: 'et un outil de réunion collaboratif pour les salles de conseil.',
    p3: "Je suis à l'aise sur toute la stack — bases de données relationnelles et NoSQL, architectures RESTful modulaires, contrôle d'accès par rôles, JWT, Docker et CI/CD — et j'écris du code en pensant clarté, sécurité, et aux personnes qui le liront trois mois plus tard. Je suis tout aussi à l'aise pour adapter cette approche à n'importe quel secteur ou équipe, pas seulement ceux où j'ai déjà travaillé.",
    education: 'Formation',
    certifications: 'Certifications',
    profile: 'Profil',
    name: 'Nom',
    role: 'Rôle',
    location: 'Localisation',
    degree: 'Diplôme',
    degreeValue: 'M.Sc. Génie Logiciel',
    school: 'École',
    status: 'Statut',
    statusValue: 'Ouvert aux opportunités',
    traits: ['Curieux', 'Rigoureux', 'Orienté qualité', 'Apprentissage rapide', 'Esprit d\'équipe'],
    downloadResume: 'Télécharger le CV',
    languages: 'Langues',
    offDuty: 'En dehors du travail',
    offDutyItems: ['Veille technologique & apprentissage continu', 'Jeux vidéo', 'Sport & voyages', 'Hackathons'],
  },
};

export default function AboutContent() {
  const { lang } = useLanguage();
  const t = COPY[lang];

  return (
    <main className="mx-auto max-w-6xl px-6 py-16 md:px-10 md:py-24">
      <Reveal>
        <p className="text-xs font-medium uppercase tracking-[0.2em] text-gold">{t.about}</p>
        <h1 className="font-serif-display mt-3 max-w-2xl text-4xl text-foreground md:text-5xl">
          {t.heading}
        </h1>
      </Reveal>

      <div className="mt-14 grid gap-14 md:grid-cols-[1fr_320px]">
        <div>
          <Reveal>
            <div className="space-y-5 text-[17px] leading-relaxed text-muted">
              <p>{t.p1}</p>
              <p>
                {t.p2a} <strong className="font-medium text-foreground">Diar Dzair</strong> {t.p2b}{' '}
                <strong className="font-medium text-foreground">CPA</strong>, {t.p2c}{' '}
                <strong className="font-medium text-foreground">CDTA</strong>, {t.p2d}
              </p>
              <p>{t.p3}</p>
            </div>
          </Reveal>

          <Reveal delay={100}>
            <div className="mt-10 grid grid-cols-3 gap-6 border-t border-border pt-8">
              {STATS.map((s) => (
                <div key={s.label}>
                  <div className="font-serif-display text-3xl text-accent">{s.n}</div>
                  <div className="mt-1 text-xs leading-snug text-muted-2">
                    {lang === 'fr' ? s.labelFr : s.label}
                  </div>
                </div>
              ))}
            </div>
          </Reveal>

          <Reveal delay={140}>
            <div className="mt-16">
              <h2 className="font-serif-display text-2xl text-foreground">{t.education}</h2>
              <div className="mt-8 space-y-8 border-l border-border pl-8">
                {EDUCATION.map((e) => (
                  <div key={e.title} className="relative">
                    <span className="absolute -left-[37px] top-1.5 h-2.5 w-2.5 rounded-full border-2 border-accent bg-background" />
                    <div className="text-xs font-medium uppercase tracking-widest text-muted-2">
                      {e.period}
                    </div>
                    <div className="mt-1 text-lg text-foreground">
                      {lang === 'fr' ? e.titleFr : e.title}
                      {e.note && (
                        <span className="ml-2 text-sm text-accent">
                          · {lang === 'fr' ? e.noteFr : e.note}
                        </span>
                      )}
                    </div>
                    <div className="mt-0.5 text-sm text-muted">{e.org}</div>
                  </div>
                ))}
              </div>
            </div>
          </Reveal>

          <Reveal delay={180}>
            <div className="mt-16">
              <h2 className="font-serif-display text-2xl text-foreground">{t.certifications}</h2>
              <div className="mt-8 grid gap-4 sm:grid-cols-2">
                {CERTIFICATIONS.map((c) => (
                  <div key={c.name} className="rounded-xl border border-border p-5">
                    <div className="text-xs font-medium uppercase tracking-widest text-gold">{c.tag}</div>
                    <div className="mt-2 text-base text-foreground">{c.name}</div>
                    <div className="mt-1.5 text-sm leading-relaxed text-muted">
                      {lang === 'fr' ? c.descFr : c.desc}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </Reveal>
        </div>

        <aside>
          <Reveal delay={80}>
            <div className="rounded-2xl border border-border bg-surface p-7">
              <div className="text-xs font-medium uppercase tracking-widest text-muted-2">{t.profile}</div>
              <dl className="mt-5 space-y-3 text-sm">
                {[
                  [t.name, SITE.name],
                  [t.role, lang === 'fr' ? SITE.roleFr : SITE.role],
                  [t.location, lang === 'fr' ? SITE.locationFr : SITE.location],
                  [t.degree, t.degreeValue],
                  [t.school, 'USTHB'],
                  [t.status, t.statusValue],
                ].map(([k, v]) => (
                  <div key={k} className="flex justify-between gap-4 border-b border-border pb-3 last:border-0 last:pb-0">
                    <dt className="text-muted-2">{k}</dt>
                    <dd className="text-right font-medium text-foreground">{v}</dd>
                  </div>
                ))}
              </dl>

              <div className="mt-6 flex flex-wrap gap-2">
                {t.traits.map((tr) => (
                  <span key={tr} className="rounded-full bg-accent-soft px-3 py-1 text-xs text-accent">
                    {tr}
                  </span>
                ))}
              </div>

              <a
                href={SITE.cv}
                download
                className="mt-7 block rounded-full bg-accent px-5 py-3 text-center text-sm font-medium text-white transition-transform hover:-translate-y-0.5"
              >
                {t.downloadResume}
              </a>
            </div>
          </Reveal>

          <Reveal delay={140}>
            <div className="mt-6 rounded-2xl border border-border p-7">
              <div className="text-xs font-medium uppercase tracking-widest text-muted-2">{t.languages}</div>
              <div className="mt-5 space-y-5">
                {LANGUAGES.map((l) => (
                  <div key={l.name}>
                    <div className="mb-1.5 flex items-baseline justify-between text-sm">
                      <span className="font-medium text-foreground">
                        {lang === 'fr' ? l.nameFr : l.name}
                      </span>
                      <span className="text-xs text-muted-2">{lang === 'fr' ? l.noteFr : l.note}</span>
                    </div>
                    <div className="h-[3px] w-full overflow-hidden rounded-full bg-border">
                      <div className="h-full rounded-full bg-accent" style={{ width: `${l.level}%` }} />
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </Reveal>

          <Reveal delay={180}>
            <div className="mt-6 rounded-2xl border border-border p-7">
              <div className="text-xs font-medium uppercase tracking-widest text-muted-2">{t.offDuty}</div>
              <ul className="mt-4 space-y-2 text-sm text-muted">
                {t.offDutyItems.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
            </div>
          </Reveal>
        </aside>
      </div>
    </main>
  );
}
