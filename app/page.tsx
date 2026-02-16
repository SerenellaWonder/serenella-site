"use client";

import Image from "next/image";
import { useMemo, useState } from "react";

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
  categories: Category[]; // include sempre "All" implicitamente via filtro
};

const Pillar = ({ title, items }: { title: string; items: string[] }) => (
  <div className="group relative overflow-hidden rounded-2xl border border-white/10 bg-white/5 p-6 shadow-[0_0_0_1px_rgba(255,255,255,0.06)] backdrop-blur-xl">
    <div className="pointer-events-none absolute inset-0 opacity-0 transition group-hover:opacity-100">
      <div className="absolute -left-24 -top-24 h-64 w-64 rounded-full bg-teal-400/10 blur-3xl" />
      <div className="absolute -right-24 -bottom-24 h-64 w-64 rounded-full bg-indigo-400/10 blur-3xl" />
    </div>
    <h3 className="relative text-lg font-semibold text-white">{title}</h3>
    <ul className="relative mt-4 space-y-2 text-slate-200/85">
      {items.map((x) => (
        <li key={x} className="flex items-start gap-2">
          <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-teal-300" />
          <span>{x}</span>
        </li>
      ))}
    </ul>
  </div>
);

const Badge = ({ text }: { text: string }) => (
  <span className="rounded-full border border-white/10 bg-white/5 px-3 py-1 text-sm text-slate-100/90 backdrop-blur">
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
      <span
        className={`${base} border-indigo-300/30 bg-indigo-400/10 text-indigo-200`}
      >
        Parallel
      </span>
    );
  }
  return (
    <span className={`${base} border-white/10 bg-white/5 text-slate-200`}>
      Enterprise
    </span>
  );
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

const ExperienceTimeline = ({
  items,
}: {
  items: TimelineItem[];
}) => (
  <div className="mt-10 relative">
    <div className="absolute left-4 top-0 h-full w-px bg-white/10" />
    <div className="space-y-8">
      {items.map((job) => (
        <div
          key={`${job.period}-${job.company}-${job.role}`}
          className="relative pl-12"
        >
          <div className="absolute left-4 top-2 -translate-x-1/2 h-3 w-3 rounded-full bg-teal-300 shadow-[0_0_0_4px_rgba(94,234,212,0.12)]" />

          <div className="group relative overflow-hidden rounded-2xl border border-white/10 bg-white/5 p-6 shadow-[0_0_0_1px_rgba(255,255,255,0.06)] backdrop-blur-xl">
            <div className="pointer-events-none absolute inset-0 opacity-0 transition group-hover:opacity-100">
              <div className="absolute -left-20 -top-20 h-56 w-56 rounded-full bg-teal-400/10 blur-3xl" />
              <div className="absolute -right-20 -bottom-20 h-56 w-56 rounded-full bg-indigo-400/10 blur-3xl" />
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
  const [filter, setFilter] = useState<Category>("All");

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
        "Automazione, reliability e hardening dei processi di rilascio (approccio DevOps)",
        "Collaborazione con team applicativi per qualità in produzione e miglioramento continuo",
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
        "Sistemi di Digital Trust (firma digitale e processi correlati): gestione, integrazione, troubleshooting",
        "Analisi tecnica e supporto a collaudi/rilasci su ambienti mission-critical",
        "Ottimizzazione processi applicativi e supporto trasversale a team e stakeholder",
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
        "Analisi requisiti e implementazione funzionalità lato server e integrazioni",
      ],
    },
    {
      period: "Mar 2020 → (fino al 2023)",
      role: "Progettista e Analista di Sistemi Informatici",
      company: "Cassagest Srl",
      location: "Roma",
      tag: "Enterprise",
      categories: ["Web", "Systems", "Enterprise", "Business"],
      bullets: [
        "Web development (HTML/CSS/PHP) e UX/UI",
        "Amministrazione sistemi • Supporto 3° livello • Problem solving",
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
        "LAMP in contesto Microsoft • Apache/IIS • PHP7 • MSSQL",
        "Test (alfa/beta), collaudo e produzione per clienti istituzionali (INPS / Banca d’Italia)",
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
        "Siti con Bootstrap/WordPress e integrazioni custom (PHP/JavaScript)",
      ],
    },
    {
      period: "Lug 2016 → Dic 2017",
      role: "Sistemista Applicativo e Rete Mobile (c/o TIM)",
      company: "Evolution Tech Services Srl",
      location: "Roma",
      tag: "Enterprise",
      categories: ["Telecom", "Enterprise", "Systems"],
      bullets: [
        "Gestione infrastrutture OMC (Nokia, Ericsson, Huawei)",
        "Supporto territorio con ticketing (Remedy)",
      ],
    },
    {
      period: "Ott 2015 → Mag 2016",
      role: "Progettista e Analista di Sistemi Informatici",
      company: "Bovi Group Srl",
      location: "Roma",
      tag: "Enterprise",
      categories: ["Web", "Enterprise", "Business"],
      bullets: [
        "Progettazione e realizzazione portali web (immobiliare / hospitality)",
        "Integrazioni con sistemi esterni (es. Booking / TripAdvisor)",
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
      bullets: [
        "Amministrazione sistemi e supporto infrastrutturale",
        "E-commerce management e realizzazione sito web aziendale",
      ],
    },
    {
      period: "Feb 2014 → Ott 2014",
      role: "Tecnico di Sistemi Informatici",
      company: "Futek Srl",
      location: "Roma",
      tag: "Enterprise",
      categories: ["Systems", "Business"],
      bullets: [
        "Amministrazione sistemi informatici",
        "E-commerce management su piattaforma ReadyPRO",
      ],
    },
    {
      period: "Feb 2012 → Gen 2014",
      role: "Analista di Sistemi Informatici",
      company: "Numero Blu Spa",
      location: "Roma",
      tag: "Enterprise",
      categories: ["Enterprise", "Systems"],
      bullets: [
        "Supporto tecnico alla Direzione Generale",
        "Ticketing e problem solving su sistemi e applicazioni",
      ],
    },
    {
      period: "Gen 2010 → Nov 2011",
      role: "IT Manager • Sistemi/Reti • VoIP",
      company: "YouDial.it",
      location: "Roma",
      tag: "Enterprise",
      categories: ["Systems", "Enterprise"],
      bullets: [
        "Gestione reti, sistemi e piattaforme VoIP",
        "Assistenza remota e amministrazione ambienti di virtualizzazione",
        "Monitoraggio e continuità operativa",
      ],
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
      bullets: [
        "Sviluppo tecnologie per turismo/viaggi",
        "Integrazione e amministrazione sistemi server/client",
        "Amministrazione Data Center",
      ],
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

  const filteredExperience = useMemo(() => {
    if (filter === "All") return experience;
    return experience.filter((x) => x.categories.includes(filter));
  }, [experience, filter]);

  return (
    <main className="min-h-screen text-white">
      {/* BACKGROUND FUTURISTICO */}
      <div className="fixed inset-0 -z-10 bg-slate-950">
        {/* aurora blobs */}
        <div className="absolute -top-32 left-1/2 h-[520px] w-[520px] -translate-x-1/2 rounded-full bg-teal-500/20 blur-3xl animate-pulse" />
        <div className="absolute top-40 -left-20 h-[520px] w-[520px] rounded-full bg-indigo-500/20 blur-3xl animate-pulse" />
        <div className="absolute bottom-0 right-0 h-[520px] w-[520px] rounded-full bg-cyan-500/10 blur-3xl animate-pulse" />

        {/* grid overlay */}
        <div
          className="absolute inset-0 opacity-[0.18]"
          style={{
            backgroundImage:
              "linear-gradient(to right, rgba(255,255,255,0.08) 1px, transparent 1px), linear-gradient(to bottom, rgba(255,255,255,0.08) 1px, transparent 1px)",
            backgroundSize: "64px 64px",
          }}
        />

        {/* vignette */}
        <div className="absolute inset-0 bg-gradient-to-b from-black/30 via-transparent to-black/50" />
      </div>

      {/* HERO */}
      <section className="px-6 pt-20 pb-10">
        <div className="mx-auto max-w-5xl text-center">
          <p className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-4 py-2 text-sm text-slate-100/80 backdrop-blur">
            <span className="h-2 w-2 rounded-full bg-teal-300" />
            CONTROL ROOM ONLINE
          </p>

          <div className="mt-8 flex justify-center">
            <div className="rounded-full p-[2px] bg-gradient-to-b from-teal-300/80 via-indigo-300/40 to-white/5">
              <div className="rounded-full bg-slate-950/70 p-1 backdrop-blur">
                <Image
                  src="/profile.jpg"
                  alt="Serenella Angelilli"
                  width={168}
                  height={168}
                  className="rounded-full object-cover"
                  priority
                />
              </div>
            </div>
          </div>

          <h1 className="mt-6 text-5xl md:text-6xl font-bold tracking-tight">
            Serenella Angelilli
          </h1>

          <p className="mt-6 text-xl md:text-2xl text-teal-200">
            Senior System Architect • DevOps (Digital Trust)
          </p>

          <p className="mt-4 text-lg text-slate-100/70">
            Enterprise Infrastructure • Application Systems • Web Engineering
          </p>

          <p className="mt-8 text-slate-100/60 text-lg italic">
            “I don’t just build websites. I design systems.”
          </p>

          <div className="mt-10 flex flex-wrap justify-center gap-4">
            <a
              href="/cv.pdf"
              className="rounded-lg bg-teal-300/90 px-6 py-3 font-semibold text-slate-950 transition hover:bg-teal-200"
            >
              Download CV
            </a>

            <a
              href="https://linkedin.com/in/serenella-angelilli-865285b"
              target="_blank"
              rel="noreferrer"
              className="rounded-lg border border-teal-300/40 bg-white/5 px-6 py-3 text-teal-100 transition hover:bg-white/10"
            >
              LinkedIn
            </a>
          </div>

          <p className="mt-6 text-sm text-slate-100/55">
            Roma • Autonomia end-to-end • Mission-critical mindset
          </p>
        </div>
      </section>

      {/* PILLARS */}
      <section className="px-6 py-10">
        <div className="mx-auto max-w-5xl">
          <div className="grid gap-6 md:grid-cols-3">
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
        </div>
      </section>

      {/* TECH STACK */}
      <section className="px-6 pb-16">
        <div className="mx-auto max-w-5xl">
          <div className="rounded-2xl border border-white/10 bg-white/5 p-8 shadow-[0_0_0_1px_rgba(255,255,255,0.06)] backdrop-blur-xl">
            <h2 className="text-2xl font-bold">Core Tech Stack</h2>
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
                <Badge key={t} text={t} />
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* EXPERIENCE + FILTER */}
      <section className="px-6 pb-20">
        <div className="mx-auto max-w-5xl">
          <div className="rounded-2xl border border-white/10 bg-white/5 p-8 shadow-[0_0_0_1px_rgba(255,255,255,0.06)] backdrop-blur-xl">
            <div className="flex flex-col gap-4 md:flex-row md:items-end md:justify-between">
              <div>
                <h2 className="text-2xl font-bold">Esperienza</h2>
                <p className="mt-2 text-slate-100/70">
                  Timeline completa. Filtra per area per vedere subito ciò che interessa al recruiter.
                </p>
              </div>

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
            </div>

            <ExperienceTimeline items={filteredExperience} />
          </div>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="border-t border-white/10 px-6 py-10">
        <div className="mx-auto max-w-5xl flex flex-col md:flex-row items-center justify-between gap-4 text-sm text-slate-100/55">
          <span>© {new Date().getFullYear()} Serenella Angelilli</span>
          <div className="flex gap-4">
            <a
              href="mailto:serenella.angelilli@gmail.com"
              className="hover:text-slate-100"
            >
              Email
            </a>
            <a
              href="https://linkedin.com/in/serenella-angelilli-865285b"
              target="_blank"
              rel="noreferrer"
              className="hover:text-slate-100"
            >
              LinkedIn
            </a>
          </div>
        </div>
      </footer>
    </main>
  );
}
