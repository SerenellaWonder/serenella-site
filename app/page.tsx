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

export default function Home() {
  const [mounted, setMounted] = useState(false);
  const [showFloating, setShowFloating] = useState(false);
  const [cvOpen, setCvOpen] = useState(false);
  const [filter, setFilter] = useState<Category>("All");

  useEffect(() => {
    setMounted(true);

    const handleScroll = () => {
      setShowFloating(window.scrollY > 400);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const experience = [
    {
      period: "Lug 2025 → Oggi",
      role: "DevOps Engineer — Digital Trust",
      company: "Tinexta Infocert",
      bullets: [
        "Delivery e operations su servizi Digital Trust",
        "Automazione e miglioramento continuo",
      ],
      categories: ["Digital Trust", "DevOps", "Enterprise"],
    },
    {
      period: "Mar 2023 → Lug 2025",
      role: "Senior Specialist — Application Systems",
      company: "Linkverse",
      bullets: [
        "Gestione sistemi di firma digitale",
        "Troubleshooting mission-critical",
      ],
      categories: ["Digital Trust", "Enterprise"],
    },
    {
      period: "Da 17 anni → Oggi",
      role: "Founder — ELISYSTEMS",
      company: "Web House & E-commerce Systems",
      bullets: [
        "Progettazione siti professionali",
        "Sviluppo e-commerce su misura",
      ],
      categories: ["Web", "Business"],
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

      {/* ================= BACKGROUND ================= */}

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
      </div>

      {/* ================= HERO ================= */}

      <section className="px-6 pt-28 pb-20 text-center">
        <div
          className={`mx-auto max-w-5xl transition-all duration-1000 ${
            mounted ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
          }`}
        >
          <Image
            src="/profile.png"
            alt="Serenella Angelilli"
            width={180}
            height={180}
            className="rounded-full border border-white/10 mx-auto"
          />

          <h1 className="mt-8 text-5xl md:text-6xl font-bold bg-gradient-to-r from-white via-teal-200 to-indigo-300 bg-clip-text text-transparent">
            Serenella Angelilli
          </h1>

          <p className="mt-6 text-xl text-teal-200">
            System Architect • DevOps • Digital Trust
          </p>

          {/* SLOGAN RIPRISTINATO */}
          <p className="mt-6 text-lg italic text-slate-200/70">
            “Non progetto siti web. Disegno sistemi.”
          </p>

          <div className="mt-10 flex justify-center gap-6 flex-wrap">
            <a
              href="/cv.pdf"
              target="_blank"
              className="rounded-lg bg-teal-300 px-7 py-3 font-semibold text-slate-950 hover:bg-teal-200 transition"
            >
              Download CV
            </a>

            <button
              onClick={() => setCvOpen(true)}
              className="rounded-lg border border-white/10 bg-white/5 px-7 py-3 hover:bg-white/10 transition"
            >
              Preview CV
            </button>
          </div>
        </div>
      </section>

      {/* ================= CV PREVIEW CARD ================= */}

      <section className="px-6 pb-20">
        <div className="mx-auto max-w-4xl">
          <div
            onClick={() => setCvOpen(true)}
            className="cursor-pointer rounded-2xl border border-white/10 bg-white/5 p-6 backdrop-blur-xl hover:bg-white/10 transition"
          >
            <h2 className="text-xl font-semibold mb-4">Curriculum Preview</h2>
            <div className="aspect-[3/4] bg-slate-800 rounded-lg flex items-center justify-center text-slate-400">
              <span>Click to preview CV</span>
            </div>
          </div>
        </div>
      </section>

      {/* ================= EXPERIENCE ================= */}

      <section className="px-6 pb-28">
        <div className="mx-auto max-w-4xl space-y-8">
          {filtered.map((job, i) => (
            <div key={i} className="border border-white/10 rounded-xl p-6 bg-white/5">
              <div className="flex justify-between">
                <h3 className="font-semibold">{job.role}</h3>
                <span className="text-sm text-slate-400">{job.period}</span>
              </div>
              <p className="text-slate-300 mt-1">{job.company}</p>
              <ul className="mt-4 space-y-2 text-sm text-slate-200/80">
                {job.bullets.map((b, idx) => (
                  <li key={idx}>• {b}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </section>

      {/* ================= FLOATING CV BUTTON ================= */}

      {showFloating && (
        <a
          href="/cv.pdf"
          target="_blank"
          className="fixed bottom-6 right-6 z-50 bg-teal-400 text-slate-900 px-6 py-3 rounded-full font-semibold shadow-lg hover:bg-teal-300 transition"
        >
          Download CV
        </a>
      )}

      {/* ================= MODAL ================= */}

      {cvOpen && (
        <div className="fixed inset-0 z-50 bg-black/70 flex items-center justify-center p-4">
          <div className="bg-slate-900 rounded-xl w-full max-w-4xl h-[80vh] overflow-hidden relative">
            <button
              onClick={() => setCvOpen(false)}
              className="absolute top-4 right-4 text-white"
            >
              ✕
            </button>
            <iframe src="/cv.pdf" className="w-full h-full" />
          </div>
        </div>
      )}

      {/* ================= FOOTER ================= */}

      <footer className="border-t border-white/10 px-6 py-10 text-center text-sm text-slate-400">
        © {new Date().getFullYear()} Serenella Angelilli •
        <a href="mailto:serenella.angelilli@gmail.com" className="ml-2 hover:text-white">
          Email
        </a>
      </footer>

    </main>
  );
}
