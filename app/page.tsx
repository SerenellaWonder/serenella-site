"use client";

import Image from "next/image";
import React, { useEffect, useMemo, useState } from "react";

type Category =
  | "All"
  | "Digital Trust"
  | "Telecom"
  | "DevOps"
  | "Web"
  | "Systems"
  | "Enterprise"
  | "Business";

type TimelineItem = {
  period: string;
  role: string;
  company: string;
  location?: string;
  bullets: string[];
  tag?: "Current" | "Parallel" | "Enterprise";
  categories: Category[];
};

const Card = ({ title, children }: { title?: string; children: React.ReactNode }) => (
  <div className="rounded-2xl border border-white/10 bg-white/5 p-8 shadow-[0_0_0_1px_rgba(255,255,255,0.06)] backdrop-blur-xl">
    {title ? <h2 className="text-2xl font-bold">{title}</h2> : null}
    {children}
  </div>
);

const Pillar = ({ title, items }: { title: string; items: string[] }) => (
  <div className="group relative overflow-hidden rounded-2xl border border-white/10 bg-white/5 p-6 shadow-[0_0_0_1px_rgba(255,255,255,0.06)] backdrop-blur-xl transition hover:bg-white/10">
    <div className="pointer-events-none absolute inset-0 opacity-0 transition group-hover:opacity-100">
      <div className="absolute -left-24 -top-24 h-64 w-64 rounded-full bg-teal-400/12 blur-3xl" />
      <div className="absolute -right-24 -bottom-24 h-64 w-64 rounded-full bg-indigo-400/12 blur-3xl" />
    </div>
    <h3 className="relative text-lg font-semibold text-white">{title}</h3>
    <ul className="relative mt-4 space-y-2 text-slate-100/80">
      {items.map((x) => (
        <li key={x} className="flex items-start gap-2">
          <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-teal-300" />
          <span>{x}</span>
        </li>
      ))}
    </ul>
  </div>
);

const Chip = ({ text }: { text: string }) => (
  <span className="rounded-full border border-white/10 bg-white/5 px-3 py-1 text-sm text-slate-100/80 backdrop-blur">
    {text}
  </span>
);

const Tag = ({ kind }: { kind: NonNullable<TimelineItem["tag"]> }) => {
  const base =
    "inline-flex items-center rounded-full border px-2.5 py-1 text-xs font-medium backdrop-blur";
  if (kind === "Current") {
    return (
      <span className={`${base} border-teal-300/30 bg-teal-400/10 text-teal-200`}>
        Current
      </span>
    );
  }
  if (kind === "Parallel") {
    return (
      <span className={`${base} border-indigo-300/30 bg-indigo-400/10 text-indigo-200`}>
        Parallel
      </span>
    );
  }
  return <span className={`${base} border-white/10 bg-white/5 text-slate-200`}>Enterprise</span>;
};

const FilterButton = ({
  label,
  active,
  onClick,
}: {
  label: Category;
  active: boolean;
  onClick: () => void;
}) => (
  <button
    onClick={onClick}
    className={[
      "rounded-full border px-3 py-1 text-sm transition backdrop-blur",
      active
        ? "border-teal-300/40 bg-teal-400/10 text-teal-100"
        : "border-white/10 bg-white/5 text-slate-100/80 hover:bg-white/10",
    ].join(" ")}
    type="button"
  >
    {label}
  </button>
);

const ExperienceTimeline = ({ items }: { items: TimelineItem[] }) => (
  <div className="mt-8 relative">
    <div className="absolute left-4 top-0 h-full w-px bg-white/10" />
    <div className="space-y-8">
      {items.map((job) => (
        <div key={`${job.period}-${job.company}-${job.role}`} className="relative pl-12">
          <div className="absolute left-4 top-2 -translate-x-1/2 h-3 w-3 rounded-full bg-teal-300 shadow-[0_0_0_4px_rgba(94,234,212,0.12)]" />

          <div className="group relative overflow-hidden rounded-2xl border border-white/10 bg-white/5 p-6 shadow-[0_0_0_1px_rgba(255,255,255,0.06)] backdrop-blur-xl transition hover:bg-white/10">
            <div className="pointer-events-none absolute inset-0 opacity-0 transition group-hover:opacity-100">
              <div className="absolute -left-20 -top-20 h-56 w-56 rounded-full bg-teal-400/12 blur-3xl" />
              <div className="absolute -right-20 -bottom-20 h-56 w-56 rounded-full bg-indigo-400/12 blur-3xl" />
            </div>

            <div className="relative flex flex-col gap-2 md:flex-row md:items-baseline md:justify-between">
              <div className="flex flex-wrap items-center gap-3">
                <h3 className="text-lg font-semibold text-white">{job.role}</h3>
                {job.tag ? <Tag kind={job.tag} /> : null}
              </div>
              <span className="text-sm text-slate-100/60">{job.period}</span>
            </div>

            <p className="relative mt-1 text-slate-100/80">
              {job.company}
              {job.location ? (
                <span className="text-slate-100/55"> • {job.location}</span>
              ) : null}
            </p>

            <ul className="relative mt-4 space-y-2 text-slate-100/80">
              {job.bullets.map((b) => (
                <li key={b} className="flex items-start gap-2">
                  <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-teal-300" />
                  <span>{b}</span>
                </li>
              ))}
            </ul>

            <div className="relative mt-5 flex flex-wrap gap-2">
              {job.categories.map((c) => (
                <span
                  key={c}
                  className="rounded-full border border-white/10 bg-white/5 px-2.5 py-1 text-xs text-slate-100/70"
                >
                  {c}
                </span>
              ))}
            </div>
          </div>
        </div>
      ))}
    </div>
  </div>
);

export default function Home() {
  const [mounted, setMounted] = useState(false);
  const [filter, setFilter] = useState<Category>("All");
  const [cvOpen, setCvOpen] = useState(false);

  useEffect(() => setMounted(true), []);

  // ESC per chiudere modale
  useEffect(() => {
    const onKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") setCvOpen(false);
    };
    window.addEventListener("keydown", onKeyDown);
    return () => window.removeEventListener("keydown", onKeyDown);
  }, []);

  const experience: TimelineItem[] = [
    {
      period: "Lug 2025 → Oggi",
      role: "DevOps Engineer — Digital Trust",
      company: "Tinexta Infocert (acquisizione Linkverse)",
      location: "Roma / Hybrid",
      tag: "Current",
      categories: ["Digital Trust", "DevOps", "Enterprise", "Systems"],
      bullets: [
        "Delivery e operations su servizi di Digital Trust in contesti mission-critical",
        "Automazione e miglioramento continuo dei processi di rilascio (approccio DevOps)",
        "Collaborazione con team applicativi per qualità in produzione e reliability",
      ],
    },
    {
      period: "Mar 2023 → Lug 2025",
      role: "Senior Specialist — Application Systems (Digital Trust)",
      company: "Linkverse",
      location: "Roma",
      tag: "Enterprise",
      categories: ["Digital Trust", "Enterprise", "Systems"],
      bullets: [
        "Gestione sistemi di Digital Trust (firma digitale) e integrazioni",
        "Analisi tecnica e troubleshooting su ambienti mission-critical",
        "Supporto a collaudi e rilasci, ottimizzazione dei processi applicativi",
      ],
    },
    {
      period: "Feb 2023 → Mar 2023",
      role: "Sistemista Senior — Application Systems Radio Mobile",
      company: "Ready2Use (progetto Telecom Italia)",
      location: "Roma",
      tag: "Enterprise",
      categories: ["Telecom", "Enterprise", "Systems"],
      bullets: [
        "Supporto e gestione sistemi applicativi in ambito radio mobile",
        "Attività operative per stabilità, continuità e risoluzione anomalie in esercizio",
      ],
    },
    {
      period: "2023 (periodo)",
      role: "Senior Web Developer",
      company: "ISAY",
      location: "Roma",
      tag: "Enterprise",
      categories: ["Web", "Enterprise"],
      bullets: [
        "Progettazione e sviluppo soluzioni web con focus su qualità e manutenibilità",
        "Analisi requisiti e implementazione funzionalità backend e integrazioni",
      ],
    },
    {
      period: "Mar 2020 → 2023",
      role: "Progettista e Analista di Sistemi Informatici",
      company: "Cassagest Srl",
      location: "Roma",
      tag: "Enterprise",
      categories: ["Web", "Systems", "Enterprise", "Business"],
      bullets: [
        "Web development (HTML/CSS/PHP) e UX/UI",
        "Amministrazione sistemi • supporto 3° livello • problem solving",
        "Business Intelligence e supporto trasversale alle esigenze aziendali",
      ],
    },
    {
      period: "Lug 2018 → Mar 2020",
      role: "Progettista e Analista di Sistemi Informatici",
      company: "Siriofin Spa",
      location: "Roma",
      tag: "Enterprise",
      categories: ["Enterprise", "Systems", "Web"],
      bullets: [
        "Web application enterprise con integrazioni SOAP/XML",
        "LAMP su contesto Microsoft • Apache/IIS • PHP7 • MSSQL",
        "Test e collaudo per clienti istituzionali (INPS / Banca d’Italia)",
      ],
    },
    {
      period: "Gen 2017 → Mag 2018",
      role: "Sviluppatore Web • E-commerce Manager • Sistemista",
      company: "ABwise Srl",
      location: "Roma",
      tag: "Enterprise",
      categories: ["Web", "Systems", "Business"],
      bullets: [
        "Automazione import massivo prodotti (CSV → PrestaShop) con bash + SQL",
        "Siti WordPress/Bootstrap e integrazioni custom (PHP/JavaScript)",
      ],
    },
    {
      period: "Lug 2016 → Dic 2017",
      role: "Sistemista Applicativo e Rete Mobile (c/o TIM)",
      company: "Evolution Tech Services Srl",
      location: "Roma",
      tag: "Enterprise",
      categories: ["Telecom", "Enterprise", "Systems"],
      bullets: ["Gestione infrastrutture OMC (Nokia, Ericsson, Huawei)", "Supporto territorio con ticketing (Remedy)"],
    },
    {
      period: "Ott 2015 → Mag 2016",
      role: "Progettista e Analista di Sistemi Informatici",
      company: "Bovi Group Srl",
      location: "Roma",
      tag: "Enterprise",
      categories: ["Web", "Enterprise", "Business"],
      bullets: [
        "Progettazione portali web (immobiliare / hospitality) e integrazioni",
        "Integrazioni con Booking / TripAdvisor",
        "Front-end Bootstrap e gestione CMS",
      ],
    },
    {
      period: "Feb 2014 → Ott 2015",
      role: "Tecnico di Sistemi Informatici",
      company: "Flashnet Srl",
      location: "Roma",
      tag: "Enterprise",
      categories: ["Systems", "Business"],
      bullets: ["Amministrazione sistemi e supporto infrastrutturale", "E-commerce management e realizzazione sito web aziendale"],
    },
    {
      period: "Feb 2014 → Ott 2014",
      role: "Tecnico di Sistemi Informatici",
      company: "Futek Srl",
      location: "Roma",
      tag: "Enterprise",
      categories: ["Systems", "Business"],
      bullets: ["Amministrazione sistemi informatici", "E-commerce management su piattaforma ReadyPRO"],
    },
    {
      period: "Feb 2012 → Gen 2014",
      role: "Analista di Sistemi Informatici",
      company: "Numero Blu Spa",
      location: "Roma",
      tag: "Enterprise",
      categories: ["Enterprise", "Systems"],
      bullets: ["Supporto tecnico alla Direzione Generale", "Ticketing e problem solving su sistemi e applicazioni"],
    },
    {
      period: "Gen 2010 → Nov 2011",
      role: "IT Manager • Sistemi/Reti • VoIP",
      company: "YouDial.it",
      location: "Roma",
      tag: "Enterprise",
      categories: ["Systems", "Enterprise"],
      bullets: ["Gestione reti, sistemi e piattaforme VoIP", "Assistenza remota e amministrazione ambienti di virtualizzazione", "Monitoraggio e continuità operativa"],
    },
    {
      period: "Lug 2007 → Dic 2009",
      role: "Tecnico di Sistemi Informatici (c/o TIM)",
      company: "HT Lab Spa",
      location: "Roma",
      tag: "Enterprise",
      categories: ["Telecom", "Systems", "Enterprise"],
      bullets: ["Amministrazione sistemi Unix/Linux in contesto enterprise"],
    },
    {
      period: "Feb 1998 → Giu 2007",
      role: "Tecnico di Sistemi Informatici",
      company: "Galileo Italia / Travelport (Gruppo Alitalia)",
      location: "Roma",
      tag: "Enterprise",
      categories: ["Enterprise", "Systems"],
      bullets: ["Sviluppo tecnologie per turismo/viaggi", "Integrazione e amministrazione sistemi server/client", "Amministrazione Data Center"],
    },
    {
      period: "Gen 1993 → Gen 1997",
      role: "Assistente Informatica",
      company: "Mediser",
      location: "Roma",
      tag: "Enterprise",
      categories: ["Business"],
      bullets: ["Office automation e data entry"],
    },
    {
      period: "Da 17 anni → Oggi",
      role: "Founder — Web House & E-commerce Systems",
      company: "ELISYSTEMS (attività parallela)",
      location: "Roma",
      tag: "Parallel",
      categories: ["Web", "Business", "Enterprise"],
      bullets: [
        "Progettazione e realizzazione siti web personali e professionali",
        "Sviluppo sistemi e-commerce e soluzioni su misura",
        "Supporto end-to-end: analisi, sviluppo, messa online, manutenzione",
      ],
    },
  ];

  const categories: Category[] = [
    "All",
    "Digital Trust",
    "DevOps",
    "Telecom",
    "Systems",
    "Web",
    "Enterprise",
    "Business",
  ];

  const filtered = useMemo(() => {
    if (filter === "All") return experience;
    return experience.filter((e) => e.categories.includes(filter));
  }, [experience, filter]);

  return (
    <main className="relative min-h-screen text-white overflow-hidden">
      {/* BACKGROUND FUTURISTICO */}
      <div className="fixed inset-0 -z-10 bg-slate-950">
        <div className="absolute -top-32 left-1/2 h-[720px] w-[720px] -translate-x-1/2 rounded-full bg-teal-500/22 blur-[140px] animate-pulse" />
        <div className="absolute top-40 -left-44 h-[620px] w-[620px] rounded-full bg-indigo-500/22 blur-[140px] animate-pulse" />
        <div className="absolute bottom-0 right-0 h-[620px] w-[620px] rounded-full bg-cyan-500/12 blur-[140px] animate-pulse" />
        <div
          className="absolute inset-0 opacity-[0.14]"
          style={{
            backgroundImage:
              "linear-gradient(to right, rgba(255,255,255,0.06) 1px, transparent 1px), linear-gradient(to bottom, rgba(255,255,255,0.06) 1px, transparent 1px)",
            backgroundSize: "64px 64px",
          }}
        />
        <div className="absolute inset-0 pointer-events-none bg-[repeating-linear-gradient(0deg,transparent,transparent_2px,rgba(255,255,255,0.012)_3px)]" />
        <div className="absolute inset-0 bg-gradient-to-b from-black/30 via-transparent to-black/60" />
      </div>

      {/* HERO */}
      <section className="px-6 pt-24 pb-14">
        <div
          className={`mx-auto max-w-5xl text-center transition-all duration-1000 ${
            mounted ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
          }`}
        >
          <p className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-4 py-2 text-sm text-slate-100/70 backdrop-blur-xl">
            Senior IT Professional • 30+ Years Experience
          </p>

          <div className="mt-10 flex justify-center">
            <div className="rounded-full p-[3px] bg-gradient-to-b from-teal-300/70 via-indigo-300/40 to-white/5">
              <div className="rounded-full bg-slate-950/80 p-1 backdrop-blur-xl">
                <Image
                  src="/profile.png"
                  alt="Serenella Angelilli"
                  width={176}
                  height={176}
                  className="rounded-full object-cover"
                  priority
                />
              </div>
            </div>
          </div>

          <h1 className="mt-8 text-5xl md:text-6xl font-bold tracking-tight bg-gradient-to-r from-white via-teal-200 to-indigo-300 bg-clip-text text-transparent drop-shadow-[0_0_20px_rgba(94,234,212,0.18)]">
            Serenella Angelilli
          </h1>

          <p className="mt-6 text-xl md:text-2xl text-teal-200">
            System Architect • DevOps • Digital Trust
          </p>

          <p className="mt-4 text-lg text-slate-100/70 max-w-3xl mx-auto">
            Enterprise infrastructure, application systems and web engineering with mission-critical mindset and full-stack operational autonomy.
          </p>

          <div className="mt-12 flex flex-wrap justify-center gap-4">
            <a
              href="/cv.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="rounded-lg bg-teal-300/90 px-7 py-3 font-semibold text-slate-950 transition hover:bg-teal-200"
            >
              Download CV
            </a>

            <button
              type="button"
              onClick={() => setCvOpen(true)}
              className="rounded-lg border border-white/10 bg-white/5 px-7 py-3 text-slate-100/85 transition hover:bg-white/10 backdrop-blur-xl"
            >
              Preview CV
            </button>

            <a
              href="https://linkedin.com/in/serenella-angelilli-865285b"
              target="_blank"
              rel="noreferrer"
              className="rounded-lg border border-teal-300/40 bg-white/5 px-7 py-3 text-teal-100 transition hover:bg-white/10 backdrop-blur-xl"
            >
              LinkedIn
            </a>
          </div>

          <p className="mt-8 text-sm text-slate-100/55">
            Roma • Enterprise Systems • DevOps • Digital Trust
          </p>
        </div>
      </section>

      {/* MACRO AREE */}
      <section className="px-6 py-10">
        <div className="mx-auto max-w-5xl grid gap-6 md:grid-cols-3">
          <Pillar
            title="System & Infrastructure"
            items={[
              "Linux / Windows Server • Apache / IIS",
              "Networking WAN/LAN • VPN • Troubleshooting",
              "Monitoring & Virtualization • VoIP/Asterisk",
            ]}
          />
          <Pillar
            title="Web & Applications"
            items={[
              "PHP (OOP) • HTML/CSS • JavaScript",
              "LAMP • Integrazioni servizi • SOAP/XML",
              "CMS & E-commerce: WordPress, PrestaShop, Joomla",
            ]}
          />
          <Pillar
            title="Digital Trust & DevOps"
            items={[
              "Digital Trust • firma digitale • sistemi affidabili",
              "Release & operations: quality, reliability, automation",
              "Enterprise environments: processi e collaudi strutturati",
            ]}
          />
        </div>
      </section>

      {/* TECH STACK */}
      <section className="px-6 pb-16">
        <div className="mx-auto max-w-5xl">
          <Card title="Core Tech Stack">
            <p className="mt-2 text-slate-100/70">
              Tecnologie e aree in cui opero con autonomia e approccio sistemistico.
            </p>
            <div className="mt-6 flex flex-wrap gap-2">
              {[
                "Digital Trust",
                "DevOps",
                "Linux",
                "Windows Server",
                "Apache",
                "IIS",
                "PHP OOP",
                "JavaScript",
                "HTML/CSS",
                "MySQL",
                "MSSQL",
                "Oracle",
                "SOAP/XML",
                "WordPress",
                "PrestaShop",
                "Joomla",
                "Bootstrap",
                "Nagios",
                "Cacti",
                "VMware",
                "VirtualBox",
                "OpenVPN",
              ].map((t) => (
                <Chip key={t} text={t} />
              ))}
            </div>
          </Card>
        </div>
      </section>

      {/* EXPERIENCE + STICKY FILTER */}
      <section className="px-6 pb-20">
        <div className="mx-auto max-w-5xl">
          <div className="rounded-2xl border border-white/10 bg-white/5 shadow-[0_0_0_1px_rgba(255,255,255,0.06)] backdrop-blur-xl overflow-hidden">
            <div className="p-8">
              <h2 className="text-2xl font-bold">Esperienza</h2>
              <p className="mt-2 text-slate-100/70">
                Timeline completa. Filtra per area per vedere subito ciò che interessa al recruiter.
              </p>
            </div>

            <div className="sticky top-0 z-20 border-y border-white/10 bg-slate-950/55 backdrop-blur-xl">
              <div className="px-8 py-3">
                <div className="flex flex-wrap gap-2">
                  {categories.map((c) => (
                    <FilterButton
                      key={c}
                      label={c}
                      active={filter === c}
                      onClick={() => setFilter(c)}
                    />
                  ))}
                </div>

                <div className="mt-2 text-xs text-slate-100/55">
                  Showing: <span className="text-slate-100/80">{filter}</span> • Results:{" "}
                  <span className="text-slate-100/80">{filtered.length}</span>
                </div>
              </div>
            </div>

            <div className="p-8 pt-4">
              <ExperienceTimeline items={filtered} />
            </div>
          </div>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="border-t border-white/10 px-6 py-12">
        <div className="mx-auto max-w-5xl flex flex-col md:flex-row items-center justify-between gap-4 text-sm text-slate-100/55">
          <span>© {new Date().getFullYear()} Serenella Angelilli</span>
          <div className="flex gap-6">
            <a href="/cv.pdf" target="_blank" rel="noreferrer" className="hover:text-white">
              CV
            </a>
            <button
              type="button"
              onClick={() => setCvOpen(true)}
              className="hover:text-white"
            >
              Preview CV
            </button>
            <a href="mailto:serenella.angelilli@gmail.com" className="hover:text-white">
              Email
            </a>
            <a
              href="https://linkedin.com/in/serenella-angelilli-865285b"
              target="_blank"
              rel="noreferrer"
              className="hover:text-white"
            >
              LinkedIn
            </a>
          </div>
        </div>
      </footer>

      {/* CV MODAL */}
      {cvOpen ? (
        <div
          className="fixed inset-0 z-50"
          aria-modal="true"
          role="dialog"
          onMouseDown={(e) => {
            // chiudi cliccando sul backdrop
            if (e.target === e.currentTarget) setCvOpen(false);
          }}
        >
          <div className="absolute inset-0 bg-black/60 backdrop-blur-sm" />
          <div className="absolute inset-0 flex items-center justify-center p-4">
            <div className="relative w-full max-w-5xl overflow-hidden rounded-2xl border border-white/10 bg-slate-950/80 shadow-2xl backdrop-blur-xl">
              <div className="flex items-center justify-between border-b border-white/10 px-4 py-3">
                <div className="text-sm text-slate-100/80">
                  CV Preview <span className="text-slate-100/50">(ESC to close)</span>
                </div>
                <div className="flex items-center gap-2">
                  <a
                    href="/cv.pdf"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="rounded-lg border border-white/10 bg-white/5 px-3 py-1.5 text-sm text-slate-100/85 hover:bg-white/10"
                  >
                    Open
                  </a>
                  <button
                    type="button"
                    onClick={() => setCvOpen(false)}
                    className="rounded-lg border border-white/10 bg-white/5 px-3 py-1.5 text-sm text-slate-100/85 hover:bg-white/10"
                  >
                    Close
                  </button>
                </div>
              </div>

              <div className="h-[78vh] bg-black/10">
                <iframe
                  title="CV"
                  src="/cv.pdf"
                  className="h-full w-full"
                />
              </div>
            </div>
          </div>
        </div>
      ) : null}
    </main>
  );
}
