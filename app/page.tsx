import Image from "next/image";

const Pillar = ({
  title,
  items,
}: {
  title: string;
  items: string[];
}) => (
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

export default function Home() {
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
                  src="/profile.png"
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
            Senior System Architect
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
            Roma • Sistemi & Sviluppo • Autonomia end-to-end
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
              title="Enterprise Experience"
              items={[
                "Telecom • INPS • Banca d’Italia",
                "Ambienti mission-critical",
                "Analisi, sviluppo e gestione infrastruttura",
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
              Tecnologie utilizzate con autonomia operativa.
            </p>

            <div className="mt-6 flex flex-wrap gap-2">
              {[
                "PHP OOP",
                "MySQL",
                "MSSQL",
                "Oracle",
                "Linux",
                "Windows Server",
                "Apache",
                "IIS",
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

      {/* EXPERIENCE */}
      <section className="px-6 pb-20">
        <div className="mx-auto max-w-5xl">
          <div className="rounded-2xl border border-slate-800 bg-slate-950/40 p-8">
            <h2 className="text-2xl font-bold">Esperienza</h2>
            <p className="mt-2 text-slate-400">
              Ruoli chiave e contesti enterprise.
            </p>

            <div className="mt-8 space-y-6">

              <div className="rounded-2xl border border-slate-800 bg-slate-950/50 p-6">
                <div className="flex justify-between">
                  <h3 className="font-semibold">
                    Progettista e Analista di Sistemi Informatici
                  </h3>
                  <span className="text-sm text-slate-400">
                    2020 → Oggi
                  </span>
                </div>
                <p className="mt-1 text-slate-300">
                  Cassagest Srl — Roma
                </p>
              </div>

              <div className="rounded-2xl border border-slate-800 bg-slate-950/50 p-6">
                <div className="flex justify-between">
                  <h3 className="font-semibold">
                    Progettista e Analista di Sistemi Informatici
                  </h3>
                  <span className="text-sm text-slate-400">
                    2018 → 2020
                  </span>
                </div>
                <p className="mt-1 text-slate-300">
                  Siriofin Spa — Roma
                </p>
              </div>

              <div className="rounded-2xl border border-slate-800 bg-slate-950/50 p-6">
                <div className="flex justify-between">
                  <h3 className="font-semibold">
                    Sistemista / Web Developer / IT Manager
                  </h3>
                  <span className="text-sm text-slate-400">
                    1993 → 2018
                  </span>
                </div>
                <p className="mt-1 text-slate-300">
                  Varie aziende — Roma
                </p>
              </div>

            </div>
          </div>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="border-t border-slate-900 px-6 py-10">
        <div className="mx-auto max-w-5xl flex flex-col md:flex-row items-center justify-between gap-4 text-sm text-slate-500">
          <span>© {new Date().getFullYear()} Serenella Angelilli</span>
          <div className="flex gap-4">
            <a href="mailto:serenella.angelilli@gmail.com" className="hover:text-slate-300">
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
