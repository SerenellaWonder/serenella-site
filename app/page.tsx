import Image from "next/image";

type TimelineItem = {
  period: string;
  role: string;
  company: string;
  location?: string;
  bullets: string[];
  tag?: "Current" | "Parallel" | "Enterprise";
};

const Pillar = ({ title, items }: { title: string; items: string[] }) => (
  <div className="rounded-2xl border border-slate-800 bg-slate-950/40 p-6 shadow-sm">
    <h3 className="text-lg font-semibold text-white">{title}</h3>
    <ul className="mt-4 space-y-2 text-slate-300">
      {items.map((x) => (
        <li key={x} className="flex items-start gap-2">
          <span className="mt-1.5 h-1.5 w-1.5 rounded-full bg-teal-400" />
          <span>{x}</span>
        </li>
      ))}
    </ul>
  </div>
);

const Badge = ({ text }: { text: string }) => (
  <span className="rounded-full border border-slate-800 bg-slate-900/60 px-3 py-1 text-sm text-slate-200">
    {text}
  </span>
);

const Tag = ({ kind }: { kind: NonNullable<TimelineItem["tag"]> }) => {
  const base =
    "inline-flex items-center rounded-full border px-2.5 py-1 text-xs font-medium";
  if (kind === "Current") {
    return (
      <span className={`${base} border-teal-500/40 bg-teal-500/10 text-teal-300`}>
        Current
      </span>
    );
  }
  if (kind === "Parallel") {
    return (
      <span className={`${base} border-indigo-500/40 bg-indigo-500/10 text-indigo-300`}>
        Parallel
      </span>
    );
  }
  return (
    <span className={`${base} border-slate-700 bg-slate-900/40 text-slate-300`}>
      Enterprise
    </span>
  );
};

const ExperienceTimeline = ({ items }: { items: TimelineItem[] }) => (
  <div className="mt-10 relative">
    {/* linea verticale */}
    <div className="absolute left-4 top-0 h-full w-px bg-slate-800" />

    <div className="space-y-8">
      {items.map((job) => (
        <div key={`${job.period}-${job.company}-${job.role}`} className="relative pl-12">
          <div className="absolute left-4 top-2 -translate-x-1/2 h-3 w-3 rounded-full bg-teal-400 shadow-[0_0_0_4px_rgba(13,148,136,0.15)]" />

          <div className="rounded-2xl border border-slate-800 bg-slate-950/50 p-6">
            <div className="flex flex-col gap-2 md:flex-row md:items-baseline md:justify-between">
              <div className="flex flex-wrap items-center gap-3">
                <h3 className="text-lg font-semibold">{job.role}</h3>
                {job.tag ? <Tag kind={job.tag} /> : null}
              </div>
              <span className="text-sm text-slate-400">{job.period}</span>
            </div>

            <p className="mt-1 text-slate-300">
              {job.company}
              {job.location ? <span className="text-slate-400"> • {job.location}</span> : null}
            </p>

            <ul className="mt-4 space-y-2 text-slate-300">
              {job.bullets.map((b) => (
                <li key={b} className="flex items-start gap-2">
                  <span className="mt-1.5 h-1.5 w-1.5 rounded-full bg-teal-400" />
                  <span>{b}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      ))}
    </div>
  </div>
);

export default function Home() {
  const experience: TimelineItem[] = [
    {
      period: "Lug 2025 → Oggi",
      role: "DevOps Engineer — Digital Trust",
      company: "Tinexta Infocert (acquisizione Linkverse)",
      location: "Roma / Hybrid",
      tag: "Current",
      bullets: [
        "Evoluzione e gestione pipeline di delivery per servizi di Digital Trust",
        "Automazione, reliability e hardening dei processi di rilascio (approccio DevOps)",
        "Collaborazione con team applicativi per continuità operativa e qualità in produzione",
      ],
    },
    {
      period: "Mar 2023 → Lug 2025",
      role: "Senior Specialist — Application Systems (Digital Trust)",
      company: "Linkverse",
      location: "Roma",
      tag: "Enterprise",
      bullets: [
        "Gestione e sviluppo su sistemi di Digital Trust (es. firma digitale / workflow di firma)",
        "Analisi tecnica, integrazione e troubleshooting su ambienti mission-critical",
        "Supporto a rilasci, collaudi e miglioramento dei processi applicativi",
      ],
    },
    {
      period: "Feb 2023 → Mar 2023",
      role: "Sistemista Senior — Application Systems Radio Mobile",
      company: "Ready2Use (progetto Telecom Italia)",
      location: "Roma",
      tag: "Enterprise",
      bullets: [
        "Supporto e gestione di sistemi applicativi in ambito radio mobile",
        "Attività operative su infrastruttura e ambienti applicativi (stabilità e continuità)",
      ],
    },
    {
      period: "2023 (periodo)",
      role: "Senior Web Developer",
      company: "ISAY",
      location: "Roma",
      tag: "Enterprise",
      bullets: [
        "Progettazione e sviluppo di soluzioni web (focus su qualità e manutenibilità)",
        "Analisi requisiti e implementazione di funzionalità lato server e integrazioni",
      ],
    },
    {
      period: "Mar 2020 → (fino a 2023)",
      role: "Progettista e Analista di Sistemi Informatici",
      company: "Cassagest Srl",
      location: "Roma",
      tag: "Enterprise",
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
      bullets: [
        "Sviluppo web application con integrazioni SOAP/XML",
        "LAMP in contesto Microsoft • Apache/IIS • PHP7 • MSSQL",
        "Test (alfa/beta), collaudo e produzione per clienti istituzionali (es. INPS / Banca d’Italia)",
      ],
    },
    {
      period: "Gen 2017 → Mag 2018",
      role: "Sviluppatore Web • E-commerce Manager • Sistemista",
      company: "ABwise Srl",
      location: "Roma",
      tag: "Enterprise",
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
      bullets: [
        "Progettazione e realizzazione portali web aziendali (immobiliare / hospitality)",
        "Integrazioni con sistemi esterni (es. Booking / TripAdvisor)",
        "Sviluppo front-end con Bootstrap e gestione CMS per sito holding",
      ],
    },
    {
      period: "Feb 2014 → Ott 2015",
      role: "Tecnico di Sistemi Informatici",
      company: "Flashnet Srl",
      location: "Roma",
      tag: "Enterprise",
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
      bullets: [
        "Supporto tecnico alla Direzione Generale",
        "Ticketing e problem solving su sistemi e applicazioni",
      ],
    },
    {
      period: "Gen 2010 → Nov 2011",
      role: "IT Manager • Sistemista Reti/Sistemi • VOIP",
      company: "YouDial.it",
      location: "Roma",
      tag: "Enterprise",
      bullets: [
        "Gestione reti, sistemi e piattaforme VoIP",
        "Assistenza remota e amministrazione ambienti di virtualizzazione",
        "Monitoraggio reti e continuità operativa",
      ],
    },
    {
      period: "Lug 2007 → Dic 2009",
      role: "Tecnico di Sistemi Informatici",
      company: "HT Lab Spa (c/o Telecom Italia Mobile)",
      location: "Roma",
      tag: "Enterprise",
      bullets: [
        "Amministrazione sistemi Unix/Linux in contesto enterprise",
      ],
    },
    {
      period: "Feb 1998 → Giu 2007",
      role: "Tecnico di Sistemi Informatici",
      company: "Galileo Italia / Travelport (Gruppo Alitalia)",
      location: "Roma",
      tag: "Enterprise",
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
      bullets: [
        "Office automation e data entry",
      ],
    },
    {
      period: "Da 17 anni → Oggi",
      role: "Founder — Web House & E-commerce Systems",
      company: "ELISYSTEMS (attività parallela)",
      location: "Roma",
      tag: "Parallel",
      bullets: [
        "Progettazione e realizzazione siti web personali e professionali",
        "Sviluppo sistemi e-commerce e soluzioni su misura",
        "Supporto tecnico end-to-end: analisi, sviluppo, messa online e manutenzione",
      ],
    },
  ];

  return (
    <main className="min-h-screen bg-slate-950 text-white">
      {/* HERO */}
      <section className="px-6 pt-20 pb-12">
        <div className="mx-auto max-w-5xl text-center">
          <p className="inline-flex items-center gap-2 rounded-full border border-slate-800 bg-slate-900/40 px-4 py-2 text-sm text-slate-300">
            <span className="h-2 w-2 rounded-full bg-teal-400" />
            SYSTEM ONLINE
          </p>

          {/* FOTO PROFILO */}
          <div className="mt-8 flex justify-center">
            <div className="rounded-full p-[2px] bg-gradient-to-b from-teal-400/80 to-slate-900">
              <div className="rounded-full bg-slate-950 p-1">
                <Image
                  src="/profile.jpg"
                  alt="Serenella Angelilli"
                  width={160}
                  height={160}
                  className="rounded-full object-cover"
                  priority
                />
              </div>
            </div>
          </div>

          <h1 className="mt-6 text-5xl md:text-6xl font-bold tracking-tight">
            Serenella Angelilli
          </h1>

          <p className="mt-6 text-xl md:text-2xl text-teal-400">
            Senior System Architect • DevOps (Digital Trust)
          </p>

          <p className="mt-4 text-lg text-slate-400">
            Enterprise Infrastructure • Web Applications • Mission-Critical Systems
          </p>

          <p className="mt-8 text-slate-500 text-lg italic">
            “I don’t just build websites. I design systems.”
          </p>

          <div className="mt-10 flex flex-wrap justify-center gap-4">
            <a
              href="/cv.pdf"
              className="px-6 py-3 bg-teal-500 hover:bg-teal-400 text-black font-semibold rounded-lg transition"
            >
              Download CV
            </a>

            <a
              href="https://linkedin.com/in/serenella-angelilli-865285b"
              target="_blank"
              rel="noreferrer"
              className="px-6 py-3 border border-teal-500 text-teal-400 hover:bg-teal-500 hover:text-black rounded-lg transition"
            >
              LinkedIn
            </a>
          </div>

          <p className="mt-6 text-sm text-slate-500">
            Roma • Sistemi, Infrastrutture, DevOps • Autonomia end-to-end
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
                "VoIP / Asterisk • Monitoring • Virtualization",
              ]}
            />
            <Pillar
              title="Web & Applications"
              items={[
                "PHP (OOP) • HTML/CSS • JavaScript",
                "LAMP • SOAP/XML • Integrazioni servizi",
                "CMS & eCommerce: WordPress, PrestaShop, Joomla",
              ]}
            />
            <Pillar
              title="Digital Trust & Enterprise"
              items={[
                "Digital Trust • firma digitale • sistemi mission-critical",
                "Telecom / INPS / Banca d’Italia (contesti enterprise)",
                "DevOps mindset: delivery, reliability, automazione",
              ]}
            />
          </div>
        </div>
      </section>

      {/* TECH STACK */}
      <section className="px-6 pb-20">
        <div className="mx-auto max-w-5xl">
          <div className="rounded-2xl border border-slate-800 bg-slate-950/40 p-8">
            <h2 className="text-2xl font-bold">Core Tech Stack</h2>
            <p className="mt-2 text-slate-400">
              Tecnologie che uso con autonomia operativa e approccio sistemistico.
            </p>

            <div className="mt-6 flex flex-wrap gap-2">
              {[
                "DevOps",
                "Digital Trust",
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

      {/* EXPERIENCE TIMELINE */}
      <section className="px-6 pb-20">
        <div className="mx-auto max-w-5xl">
          <div className="rounded-2xl border border-slate-800 bg-slate-950/40 p-8">
            <h2 className="text-2xl font-bold">Esperienza</h2>
            <p className="mt-2 text-slate-400">
              Timeline completa con ruoli, contesti e responsabilità.
            </p>

            <ExperienceTimeline items={experience} />
          </div>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="border-t border-slate-900 px-6 py-10">
        <div className="mx-auto max-w-5xl flex flex-col md:flex-row items-center justify-between gap-4 text-sm text-slate-500">
          <span>© {new Date().getFullYear()} Serenella Angelilli</span>
          <div className="flex gap-4">
            <a
              href="mailto:serenella.angelilli@gmail.com"
              className="hover:text-slate-300"
            >
              Email
            </a>
            <a
              href="https://linkedin.com/in/serenella-angelilli-865285b"
              target="_blank"
              rel="noreferrer"
              className="hover:text-slate-300"
            >
              LinkedIn
            </a>
          </div>
        </div>
      </footer>
    </main>
  );
}
