import { profile } from "../data/portfolio";

export default function Hero() {
  return (
    <section
      id="hero"
      className="relative flex min-h-screen items-center px-6 pt-24 pb-16"
    >
      <div className="mx-auto w-full max-w-6xl">
        <div className="max-w-3xl">
          <p className="mb-4 inline-flex items-center gap-2 rounded-full border border-emerald-500/20 bg-emerald-500/5 px-4 py-1.5 text-sm text-emerald-400">
            <span className="h-2 w-2 rounded-full bg-emerald-400 shadow-[0_0_8px_rgba(52,211,153,0.8)]" />
            {profile.availability}
          </p>

          <h1 className="text-4xl font-bold tracking-tight text-white sm:text-5xl lg:text-6xl">
            {profile.name}
          </h1>

          <p className="mt-4 text-xl text-cyan-400 sm:text-2xl">{profile.role}</p>

          <p className="mt-2 font-mono text-sm text-slate-500">{profile.location}</p>

          <p className="mt-8 max-w-2xl text-lg leading-relaxed text-slate-400">
            {profile.tagline}
          </p>

          <div className="mt-10 flex flex-wrap gap-4">
            <a
              href="#projects"
              className="inline-flex items-center justify-center rounded-xl bg-cyan-500 px-6 py-3 text-sm font-semibold text-slate-950 transition hover:bg-cyan-400"
            >
              View featured work
            </a>
            <a
              href="#contact"
              className="inline-flex items-center justify-center rounded-xl border border-slate-700 px-6 py-3 text-sm font-semibold text-slate-200 transition hover:border-slate-500 hover:bg-slate-900"
            >
              Contact me
            </a>
          </div>
        </div>

        <div className="mt-16 grid gap-4 sm:grid-cols-3">
          {[
            { value: "50%–2x", label: "Payroll workflow acceleration" },
            { value: "Enterprise", label: "Web & desktop systems delivered" },
            { value: "Full-Stack", label: "C# · React · SQL architecture" },
          ].map((stat) => (
            <div
              key={stat.label}
              className="rounded-2xl border border-slate-800/80 bg-slate-900/40 p-5 backdrop-blur-sm"
            >
              <p className="text-2xl font-bold text-white">{stat.value}</p>
              <p className="mt-1 text-sm text-slate-500">{stat.label}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
