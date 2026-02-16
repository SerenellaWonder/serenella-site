"use client";

import Image from "next/image";
import { useEffect, useState } from "react";

export default function Home() {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  return (
    <main className="relative min-h-screen text-white overflow-hidden">

      {/* ================= BACKGROUND FUTURISTICO ================= */}

      <div className="fixed inset-0 -z-10 bg-slate-950">

        {/* Aurora principale */}
        <div className="absolute -top-32 left-1/2 h-[700px] w-[700px] -translate-x-1/2 rounded-full bg-teal-500/20 blur-[140px] animate-pulse" />
        <div className="absolute top-40 -left-40 h-[600px] w-[600px] rounded-full bg-indigo-500/20 blur-[140px] animate-pulse" />
        <div className="absolute bottom-0 right-0 h-[600px] w-[600px] rounded-full bg-cyan-500/10 blur-[140px] animate-pulse" />

        {/* Grid overlay */}
        <div
          className="absolute inset-0 opacity-[0.12]"
          style={{
            backgroundImage:
              "linear-gradient(to right, rgba(255,255,255,0.05) 1px, transparent 1px), linear-gradient(to bottom, rgba(255,255,255,0.05) 1px, transparent 1px)",
            backgroundSize: "60px 60px",
          }}
        />

        {/* Scanline effect */}
        <div className="absolute inset-0 pointer-events-none bg-[repeating-linear-gradient(0deg,transparent,transparent_2px,rgba(255,255,255,0.015)_3px)]" />

        {/* Vignette */}
        <div className="absolute inset-0 bg-gradient-to-b from-black/30 via-transparent to-black/60" />
      </div>

      {/* ================= HERO ================= */}

      <section className="px-6 pt-28 pb-20">
        <div className="mx-auto max-w-5xl text-center">

          <p className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-4 py-2 text-sm text-slate-100/70 backdrop-blur-xl">
            Senior IT Professional • 30+ Years Experience
          </p>

          {/* FOTO */}
          <div className="mt-10 flex justify-center">
            <div className="relative rounded-full p-[3px] bg-gradient-to-b from-teal-300/70 via-indigo-300/40 to-white/5 animate-[pulse_4s_ease-in-out_infinite]">
              <div className="rounded-full bg-slate-950/80 p-1 backdrop-blur-xl">
                <Image
                  src="/profile.png"
                  alt="Serenella Angelilli"
                  width={180}
                  height={180}
                  className="rounded-full object-cover"
                  priority
                />
              </div>
            </div>
          </div>

          {/* NOME con glow dinamico */}
          <h1 className="mt-8 text-5xl md:text-6xl font-bold tracking-tight bg-gradient-to-r from-white via-teal-200 to-indigo-300 bg-clip-text text-transparent drop-shadow-[0_0_20px_rgba(94,234,212,0.2)]">
            Serenella Angelilli
          </h1>

          <p className="mt-6 text-xl md:text-2xl text-teal-200">
            System Architect • DevOps • Digital Trust
          </p>

          <p className="mt-4 text-lg text-slate-200/70 max-w-3xl mx-auto">
            Enterprise Infrastructure, Application Systems and Web Engineering
            with mission-critical mindset and full-stack operational autonomy.
          </p>

          {/* CTA */}
          <div className="mt-12 flex flex-wrap justify-center gap-6">
            <a
              href="/cv.pdf"
              className="group relative rounded-lg bg-teal-300/90 px-7 py-3 font-semibold text-slate-950 transition hover:bg-teal-200"
            >
              Download CV
              <span className="absolute inset-0 rounded-lg opacity-0 group-hover:opacity-100 transition bg-white/20 blur-xl" />
            </a>

            <a
              href="https://linkedin.com/in/serenella-angelilli-865285b"
              target="_blank"
              rel="noreferrer"
              className="rounded-lg border border-teal-300/40 bg-white/5 px-7 py-3 text-teal-100 transition hover:bg-white/10 backdrop-blur-xl"
            >
              LinkedIn
            </a>
          </div>

          <p className="mt-8 text-sm text-slate-100/50">
            Roma • Enterprise Systems • DevOps • Digital Trust
          </p>

        </div>
      </section>

      {/* ================= SECTION PREVIEW ================= */}

      <section className="px-6 pb-28">
        <div className={`mx-auto max-w-5xl transition-all duration-1000 ${mounted ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}>

          <div className="grid gap-8 md:grid-cols-3">

            <div className="rounded-2xl border border-white/10 bg-white/5 p-8 backdrop-blur-xl hover:bg-white/10 transition">
              <h3 className="text-lg font-semibold text-white">System & Infrastructure</h3>
              <p className="mt-4 text-slate-200/70 text-sm">
                Linux, Windows Server, networking, monitoring, VoIP,
                virtualization and mission-critical stability.
              </p>
            </div>

            <div className="rounded-2xl border border-white/10 bg-white/5 p-8 backdrop-blur-xl hover:bg-white/10 transition">
              <h3 className="text-lg font-semibold text-white">Web & Applications</h3>
              <p className="mt-4 text-slate-200/70 text-sm">
                PHP OOP, integrations, LAMP, SOAP/XML, CMS and enterprise web systems.
              </p>
            </div>

            <div className="rounded-2xl border border-white/10 bg-white/5 p-8 backdrop-blur-xl hover:bg-white/10 transition">
              <h3 className="text-lg font-semibold text-white">Digital Trust & DevOps</h3>
              <p className="mt-4 text-slate-200/70 text-sm">
                Signature systems, release processes, reliability, automation
                and enterprise-grade operations.
              </p>
            </div>

          </div>

        </div>
      </section>

      {/* ================= FOOTER ================= */}

      <footer className="border-t border-white/10 px-6 py-12">
        <div className="mx-auto max-w-5xl flex flex-col md:flex-row items-center justify-between gap-4 text-sm text-slate-100/55">
          <span>© {new Date().getFullYear()} Serenella Angelilli</span>
          <div className="flex gap-6">
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

    </main>
  );
}
