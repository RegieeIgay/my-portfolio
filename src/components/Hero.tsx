import { profile } from "../data/portfolio";

export default function Hero() {
  return (
    <section
      id="hero"
      className="section-x relative flex min-h-[100dvh] scroll-mt-24 items-center pt-20 pb-12 sm:pt-24 sm:pb-16 lg:pt-28"
    >
      <div className="mx-auto w-full max-w-6xl min-w-0">
        <div className="max-w-3xl">
          <p className="mb-4 inline-flex max-w-full flex-wrap items-center gap-2 rounded-full border border-emerald-500/20 bg-emerald-500/5 px-3 py-1.5 text-xs text-emerald-400 sm:px-4 sm:text-sm">
            <span className="h-2 w-2 shrink-0 rounded-full bg-emerald-400 shadow-[0_0_8px_rgba(52,211,153,0.8)]" />
            <span className="min-w-0">{profile.availability}</span>
          </p>

          <h1 className="text-3xl font-bold tracking-tight text-white sm:text-5xl lg:text-6xl">
            {profile.name}
          </h1>

          <p className="mt-3 text-lg text-cyan-400 sm:mt-4 sm:text-xl lg:text-2xl">
            {profile.role}
          </p>

          <p className="mt-2 max-w-md font-mono text-xs leading-relaxed text-slate-500 sm:text-sm">
            {profile.location}
          </p>

          <p className="mt-6 max-w-2xl text-base leading-relaxed text-slate-400 sm:mt-8 sm:text-lg">
            {profile.tagline}
          </p>

          <div className="mt-8 flex w-full flex-col gap-3 sm:mt-10 sm:flex-row sm:flex-wrap sm:gap-4">
            <a
              href="#projects"
              className="inline-flex w-full items-center justify-center rounded-xl bg-cyan-500 px-6 py-3.5 text-sm font-semibold text-slate-950 transition hover:bg-cyan-400 sm:w-auto"
            >
              View featured work
            </a>
            <a
              href="#contact"
              className="inline-flex w-full items-center justify-center rounded-xl border border-slate-700 px-6 py-3.5 text-sm font-semibold text-slate-200 transition hover:border-slate-500 hover:bg-slate-900 sm:w-auto"
            >
              Contact me
            </a>
          </div>
        </div>

        <div className="mt-10 grid gap-3 sm:mt-16 sm:grid-cols-2 sm:gap-4 lg:grid-cols-3">
          {[
            { value: "50%–2x", label: "Payroll workflow acceleration" },
            { value: "Enterprise", label: "Web & desktop systems delivered" },
            { value: "Full-Stack", label: "C# · React · SQL architecture" },
          ].map((stat) => (
            <div
              key={stat.label}
              className="min-w-0 rounded-2xl border border-slate-800/80 bg-slate-900/40 p-4 backdrop-blur-sm sm:p-5 lg:col-span-1 sm:last:col-span-2 lg:last:col-span-1"
            >
              <p className="text-xl font-bold text-white sm:text-2xl">
                {stat.value}
              </p>
              <p className="mt-1 text-xs leading-relaxed text-slate-500 sm:text-sm">
                {stat.label}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
