"use client";

import Image from "next/image";
import { useEffect, useMemo, useState } from "react";

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

export default function Home() {
  const [mounted, setMounted] = useState(false);
  const [filter, setFilter] = useState<Category>("All");

  useEffect(() => {
    setMounted(true);
  }, []);

  const experience: TimelineItem[] = [
    {
      period: "Lug 2025 → Oggi",
      role: "DevOps Engineer — Digital Trust",
      company: "Tinexta Infocert",
      location: "Roma / Hybrid",
      tag: "Current",
      categories: ["Digital Trust", "DevOps", "Enterprise", "Systems"],
      bullets: [
        "Delivery e operations su servizi di Digital Trust",
        "Automazione e miglioramento continuo dei processi di rilascio",
        "Supporto e collaborazione con team applicativi enterprise",
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
        "Gestione sistemi di firma digitale e Digital Trust",
        "Analisi tecnica, integrazione e troubleshooting",
        "Supporto a collaudi e ambienti mission-critical",
      ],
    },
    {
      period: "Feb 2023 → Mar 2023",
      role: "Sistemista Senior — Radio Mobile",
      company: "Ready2Use (Progetto Telecom Italia)",
      location: "Roma",
      tag: "Enterprise",
      categories: ["Telecom", "Enterprise", "Systems"],
      bullets: [
        "Supporto sistemi applicativi radio mobile",
        "Gestione stabilità e continuità operativa",
      ],
    },
    {
      period: "2023",
      role: "Senior Web Developer",
      company: "ISAY",
      location: "Roma",
      tag: "Enterprise",
      categories: ["Web", "Enterprise"],
      bullets: [
        "Progettazione e sviluppo applicazioni web",
        "Analisi requisiti e implementazione backend",
      ],
    },
    {
      period: "Mar 2020 → 2023",
      role: "Progettista e Analista Sistemi Informatici",
      company: "Cassagest Srl",
      location: "Roma",
      tag: "Enterprise",
      categories: ["Web", "Systems", "Enterprise", "Business"],
      bullets: [
        "Web development e UX/UI",
        "Amministrazione sistemi e supporto 3° livello",
        "Business Intelligence e supporto trasversale",
      ],
    },
    {
      period: "Lug 2018 → Mar 2020",
      role: "Progettista e Analista Sistemi Informatici",
      company: "Siriofin Spa",
      location: "Roma",
      tag: "Enterprise",
      categories: ["Enterprise", "Systems", "Web"],
      bullets: [
        "Web application enterprise con SOAP/XML",
        "LAMP su contesto Microsoft (Apache/IIS, MSSQL)",
        "Test e collaudi per INPS e Banca d’Italia",
      ],
    },
    {
      period: "1993 → 2018",
      role: "IT Manager • Sistemista • Web Developer",
      company: "Varie aziende (TIM, Travelport, Galileo, ecc.)",
      location: "Roma",
      tag: "Enterprise",
      categories: ["Telecom", "Systems", "Enterprise", "Web"],
      bullets: [
        "Data center, Unix/Linux, reti, VoIP",
        "Gestione infrastrutture enterprise",
        "Sviluppo portali web e integrazioni sistemi",
      ],
    },
    {
      period: "Da 17 anni → Oggi",
      role: "Founder — ELISYSTEMS",
      company: "Web House & E-commerce Systems",
      location: "Roma",
      tag: "Parallel",
      categories: ["Web", "Business"],
      bullets: [
        "Progettazione e realizzazione siti web professionali",
        "Sviluppo e-commerce su misura",
        "Gestione clienti end-to-end",
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
  }, [filter]);

  return (
    <main className="relative min-h-screen text-white overflow-hidden">

      {/* BACKGROUND */}
      <div className="fixed inset-0 -z-10 bg-slate-950">
        <div className="absolute -top-32 left-1/2 h-[700px] w-[700px] -translate-x-1/2 rounded-full bg-teal-500/20 blur-[140px] animate-pulse" />
        <div className="absolute top-40 -left-40 h-[600px] w-[600px] rounded-full bg-indigo-500/20 blur-[140px] animate-pulse" />
        <div
          className="absolute inset-0 opacity-[0.12]"
          style={{
            backgroundImage:
              "linear-gradient(to right, rgba(255,255,255,0.05) 1px, transparent 1px), linear-gradient(to bottom, rgba(255,255,255,0.05) 1px, transparent 1px)",
            backgroundSize: "60px 60px",
          }}
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/30 via-transparent to-black/60" />
      </div>

      {/* HERO */}
      <section className="px-6 pt-28 pb-20 text-center">
        <p className="inline-flex rounded-full border border-white/10 bg-white/5 px-4 py-2 text-sm text-slate-100/70 backdrop-blur-xl">
          Senior IT Professional • 30+ Years Experience
        </p>

        <div className="mt-10 flex justify-center">
          <Image
            src="/profile.png"
            alt="Serenella Angelilli"
            width={180}
            height={180}
            className="rounded-full border border-white/10 shadow-lg"
          />
        </div>

        <h1 className="mt-8 text-5xl md:text-6xl font-bold bg-gradient-to-r from-white via-teal-200 to-indigo-300 bg-clip-text text-transparent">
          Serenella Angelilli
        </h1>

        <p className="mt-6 text-xl md:text-2xl text-teal-200">
          System Architect • DevOps • Digital Trust
        </p>
      </section>

      {/* EXPERIENCE */}
      <section className="px-6 pb-20">
        <div className="mx-auto max-w-5xl rounded-2xl border border-white/10 bg-white/5 backdrop-blur-xl p-8">

          <div className="sticky top-0 z-20 bg-slate-950/70 backdrop-blur-xl py-4">
            <div className="flex flex-wrap gap-2">
              {categories.map((c) => (
                <button
                  key={c}
                  onClick={() => setFilter(c)}
                  className={`rounded-full px-3 py-1 text-sm border transition ${
                    filter === c
                      ? "border-teal-300 bg-teal-500/10 text-teal-200"
                      : "border-white/10 bg-white/5 text-slate-200/70 hover:bg-white/10"
                  }`}
                >
                  {c}
                </button>
              ))}
            </div>
          </div>

          <div className="mt-8 space-y-8">
            {filtered.map((job, i) => (
              <div key={i} className="border border-white/10 rounded-xl p-6 bg-white/5">
                <div className="flex justify-between flex-wrap gap-2">
                  <h3 className="font-semibold text-white">{job.role}</h3>
                  <span className="text-sm text-slate-300">{job.period}</span>
                </div>
                <p className="text-slate-300 mt-1">
                  {job.company} {job.location && `• ${job.location}`}
                </p>
                <ul className="mt-4 space-y-2 text-slate-200/80 text-sm">
                  {job.bullets.map((b, idx) => (
                    <li key={idx} className="flex gap-2">
                      <span className="h-1.5 w-1.5 rounded-full bg-teal-300 mt-2" />
                      {b}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>

        </div>
      </section>

    </main>
  );
}
