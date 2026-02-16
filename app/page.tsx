"use client";

import Image from "next/image";
import { useEffect, useState } from "react";

export default function Home() {
  const [mounted, setMounted] = useState(false);
  const [cvOpen, setCvOpen] = useState(false);
  const [scrollProgress, setScrollProgress] = useState(0);
  const [typedText, setTypedText] = useState("");

  const slogan = "Non progetto siti web. Disegno sistemi.";

  useEffect(() => {
    setMounted(true);

    // Scroll progress bar
    const handleScroll = () => {
      const total =
        document.documentElement.scrollHeight -
        document.documentElement.clientHeight;
      const progress = (window.scrollY / total) * 100;
      setScrollProgress(progress);
    };

    window.addEventListener("scroll", handleScroll);

    // Typing effect
    let i = 0;
    const interval = setInterval(() => {
      setTypedText(slogan.slice(0, i));
      i++;
      if (i > slogan.length) clearInterval(interval);
    }, 50);

    return () => {
      window.removeEventListener("scroll", handleScroll);
      clearInterval(interval);
    };
  }, []);

  return (
    <main className="relative min-h-screen text-white overflow-hidden">

      {/* Scroll Progress Bar */}
      <div
        className="fixed top-0 left-0 h-[3px] bg-teal-400 z-50 transition-all duration-150"
        style={{ width: `${scrollProgress}%` }}
      />

      {/* Background */}
      <div className="fixed inset-0 -z-10 bg-slate-950">
        <div className="absolute -top-32 left-1/2 h-[700px] w-[700px] -translate-x-1/2 rounded-full bg-teal-500/20 blur-[140px] animate-pulse" />
        <div className="absolute top-40 -left-40 h-[600px] w-[600px] rounded-full bg-indigo-500/20 blur-[140px] animate-pulse" />
        <div className="absolute bottom-0 right-0 h-[600px] w-[600px] rounded-full bg-cyan-500/10 blur-[140px] animate-pulse" />
      </div>

      {/* HERO */}
      <section className="px-6 pt-28 pb-20 text-center">
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

        {/* Typing slogan */}
        <p className="mt-6 text-lg italic text-slate-200/70 h-8">
          {typedText}
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
      </section>

      {/* EXPERIENCE Timeline */}
      <section className="px-6 pb-28">
        <div className="mx-auto max-w-4xl relative">

          <div className="absolute left-4 top-0 h-full w-[2px] bg-gradient-to-b from-teal-400 to-indigo-400 animate-pulse" />

          {[
            {
              role: "DevOps Engineer — Digital Trust",
              company: "Tinexta Infocert",
              period: "2025 → Oggi",
            },
            {
              role: "Senior Specialist — Application Systems",
              company: "Linkverse",
              period: "2023 → 2025",
            },
            {
              role: "Founder — ELISYSTEMS",
              company: "Web House & E-commerce",
              period: "17 anni → Oggi",
            },
          ].map((job, i) => (
            <div key={i} className="pl-12 mb-12 relative">
              <div className="absolute left-4 top-2 -translate-x-1/2 h-3 w-3 rounded-full bg-teal-300 shadow-[0_0_0_4px_rgba(94,234,212,0.3)]" />
              <div className="bg-white/5 border border-white/10 rounded-xl p-6 backdrop-blur-xl hover:bg-white/10 transition">
                <h3 className="font-semibold">{job.role}</h3>
                <p className="text-slate-300 mt-1">{job.company}</p>
                <span className="text-sm text-slate-400">{job.period}</span>
              </div>
            </div>
          ))}

        </div>
      </section>

      {/* Floating CV */}
      <a
        href="/cv.pdf"
        target="_blank"
        className="fixed bottom-6 right-6 bg-teal-400 text-slate-900 px-6 py-3 rounded-full font-semibold shadow-lg hover:bg-teal-300 transition"
      >
        Download CV
      </a>

      {/* CV Modal */}
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

      {/* FOOTER */}
      <footer className="border-t border-white/10 px-6 py-10 text-center text-sm text-slate-400">
        © {new Date().getFullYear()} Serenella Angelilli •
        <a href="mailto:serenella.angelilli@gmail.com" className="ml-2 hover:text-white">
          Email
        </a>
      </footer>

    </main>
  );
}
