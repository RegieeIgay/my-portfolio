import { profile } from "../data/portfolio";

export default function About() {
  return (
    <section id="about" className="px-6 py-24">
      <div className="mx-auto max-w-6xl">
        <SectionHeading
          eyebrow="About Me"
          title="Building systems that enterprises rely on"
        />

        <div className="mt-12 grid gap-10 lg:grid-cols-[1.2fr_0.8fr] lg:items-start">
          <div className="space-y-6 text-base leading-relaxed text-slate-400">
            <p>{profile.summary}</p>
            <p>
              From payroll networks handling statutory deductions to inventory
              platforms with embedded accounting, I focus on software that reduces
              manual overhead, improves data integrity, and scales with real-world
              operational demand.
            </p>
          </div>

          <div className="rounded-2xl border border-slate-800 bg-slate-900/50 p-6">
            <h3 className="text-sm font-semibold uppercase tracking-wider text-slate-500">
              Core Focus
            </h3>
            <ul className="mt-4 space-y-3">
              {[
                "Enterprise web & desktop application development",
                "Payroll, inventory, and rental management systems",
                "API-first architecture with SQL Server backends",
                "Reporting pipelines and business workflow automation",
              ].map((item) => (
                <li
                  key={item}
                  className="flex items-start gap-3 text-sm text-slate-300"
                >
                  <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-indigo-400" />
                  {item}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}

function SectionHeading({
  eyebrow,
  title,
}: {
  eyebrow: string;
  title: string;
}) {
  return (
    <div>
      <p className="font-mono text-sm text-cyan-400">{eyebrow}</p>
      <h2 className="mt-2 text-3xl font-bold tracking-tight text-white sm:text-4xl">
        {title}
      </h2>
    </div>
  );
}
