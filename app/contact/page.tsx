'use client';

import { useState } from 'react';
import Reveal from '@/components/Reveal';
import { SITE } from '@/lib/data';
import { useLanguage } from '@/lib/language-context';

const COPY = {
  en: {
    contact: 'Contact',
    heading: "Let's work together",
    subtitle:
      'Open to full-time roles, freelance engagements, and collaborations with companies, founders and individuals working on something of their own. Usually replies within 24 hours.',
    name: 'Name',
    namePlaceholder: 'Your full name',
    email: 'Email',
    emailPlaceholder: 'you@company.com',
    subject: 'Subject',
    subjectPlaceholder: "What's this about?",
    message: 'Message',
    messagePlaceholder: 'Tell me about the opportunity or project…',
    send: 'Send message',
    thanks: "Thanks — your message has been queued. I'll get back to you shortly.",
    direct: 'Direct',
    phone: 'Phone',
    location: 'Location',
    elsewhere: 'Elsewhere',
  },
  fr: {
    contact: 'Contact',
    heading: 'Travaillons ensemble',
    subtitle:
      "Ouvert aux postes à temps plein, missions freelance et collaborations avec des entreprises, fondateurs et particuliers qui portent leur propre projet. Réponse généralement sous 24 heures.",
    name: 'Nom',
    namePlaceholder: 'Votre nom complet',
    email: 'Email',
    emailPlaceholder: 'vous@entreprise.com',
    subject: 'Sujet',
    subjectPlaceholder: 'De quoi s\'agit-il ?',
    message: 'Message',
    messagePlaceholder: "Parlez-moi de l'opportunité ou du projet…",
    send: 'Envoyer le message',
    thanks: 'Merci — votre message a été mis en file d\'attente. Je vous répondrai rapidement.',
    direct: 'Direct',
    phone: 'Téléphone',
    location: 'Localisation',
    elsewhere: 'Ailleurs',
  },
};

export default function ContactPage() {
  const [sent, setSent] = useState(false);
  const { lang } = useLanguage();
  const t = COPY[lang];

  function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setSent(true);
    setTimeout(() => setSent(false), 3500);
    (e.currentTarget as HTMLFormElement).reset();
  }

  return (
    <main className="mx-auto max-w-6xl px-6 py-16 md:px-10 md:py-24">
      <Reveal>
        <p className="text-xs font-medium uppercase tracking-[0.2em] text-gold">{t.contact}</p>
        <h1 className="font-serif-display mt-3 max-w-2xl text-4xl text-foreground md:text-5xl">
          {t.heading}
        </h1>
        <p className="mt-5 max-w-xl text-[16px] leading-relaxed text-muted">{t.subtitle}</p>
      </Reveal>

      <div className="mt-14 grid gap-8 md:grid-cols-[1.3fr_1fr]">
        <Reveal>
          <form onSubmit={handleSubmit} className="rounded-2xl border border-border bg-surface p-8 md:p-10">
            <div className="grid gap-6 sm:grid-cols-2">
              <div>
                <label htmlFor="name" className="text-xs font-medium uppercase tracking-widest text-muted-2">
                  {t.name}
                </label>
                <input
                  id="name"
                  name="name"
                  required
                  placeholder={t.namePlaceholder}
                  className="mt-2 w-full rounded-lg border border-border-strong bg-background px-4 py-3 text-sm text-foreground outline-none transition-colors placeholder:text-muted-2 focus:border-accent"
                />
              </div>
              <div>
                <label htmlFor="email" className="text-xs font-medium uppercase tracking-widest text-muted-2">
                  {t.email}
                </label>
                <input
                  id="email"
                  name="email"
                  type="email"
                  required
                  placeholder={t.emailPlaceholder}
                  className="mt-2 w-full rounded-lg border border-border-strong bg-background px-4 py-3 text-sm text-foreground outline-none transition-colors placeholder:text-muted-2 focus:border-accent"
                />
              </div>
            </div>

            <div className="mt-6">
              <label htmlFor="subject" className="text-xs font-medium uppercase tracking-widest text-muted-2">
                {t.subject}
              </label>
              <input
                id="subject"
                name="subject"
                required
                placeholder={t.subjectPlaceholder}
                className="mt-2 w-full rounded-lg border border-border-strong bg-background px-4 py-3 text-sm text-foreground outline-none transition-colors placeholder:text-muted-2 focus:border-accent"
              />
            </div>

            <div className="mt-6">
              <label htmlFor="message" className="text-xs font-medium uppercase tracking-widest text-muted-2">
                {t.message}
              </label>
              <textarea
                id="message"
                name="message"
                required
                rows={6}
                placeholder={t.messagePlaceholder}
                className="mt-2 w-full resize-y rounded-lg border border-border-strong bg-background px-4 py-3 text-sm text-foreground outline-none transition-colors placeholder:text-muted-2 focus:border-accent"
              />
            </div>

            <button
              type="submit"
              className="mt-7 rounded-full bg-accent px-7 py-3.5 text-sm font-medium text-white transition-transform hover:-translate-y-0.5"
            >
              {t.send}
            </button>

            {sent && <p className="mt-4 text-sm text-accent">{t.thanks}</p>}
          </form>
        </Reveal>

        <div className="space-y-6">
          <Reveal delay={100}>
            <div className="rounded-2xl border border-border p-7">
              <div className="text-xs font-medium uppercase tracking-widest text-muted-2">{t.direct}</div>
              <dl className="mt-5 space-y-3 text-sm">
                <div className="flex justify-between gap-4 border-b border-border pb-3">
                  <dt className="text-muted-2">{t.email}</dt>
                  <dd>
                    <a href={`mailto:${SITE.email}`} className="link-underline text-accent">
                      {SITE.email}
                    </a>
                  </dd>
                </div>
                <div className="flex justify-between gap-4 border-b border-border pb-3">
                  <dt className="text-muted-2">{t.phone}</dt>
                  <dd>
                    <a href={`tel:${SITE.phone.replace(/\s/g, '')}`} className="link-underline text-accent">
                      {SITE.phone}
                    </a>
                  </dd>
                </div>
                <div className="flex justify-between gap-4">
                  <dt className="text-muted-2">{t.location}</dt>
                  <dd className="text-foreground">{lang === 'fr' ? SITE.locationFr : SITE.location}</dd>
                </div>
              </dl>
            </div>
          </Reveal>

          <Reveal delay={160}>
            <div className="rounded-2xl border border-border p-7">
              <div className="text-xs font-medium uppercase tracking-widest text-muted-2">{t.elsewhere}</div>
              <div className="mt-5 flex flex-col gap-2">
                {[
                  ['GitHub', SITE.github],
                  ['LinkedIn', SITE.linkedin],
                  ['WhatsApp', SITE.whatsapp],
                ].map(([label, href]) => (
                  <a
                    key={label}
                    href={href}
                    target="_blank"
                    rel="noreferrer"
                    className="flex items-center justify-between rounded-lg border border-border px-4 py-3 text-sm text-foreground transition-colors hover:border-accent/40 hover:bg-accent-soft"
                  >
                    {label}
                    <span className="text-muted-2">↗</span>
                  </a>
                ))}
              </div>
            </div>
          </Reveal>
        </div>
      </div>
    </main>
  );
}
