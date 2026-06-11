import { skillCategories } from "../data/portfolio";
import SkillIcon from "./SkillIcon";

const accentColors = [
  "border-cyan-500/30 bg-cyan-500/5 text-cyan-300",
  "border-emerald-500/30 bg-emerald-500/5 text-emerald-300",
  "border-indigo-500/30 bg-indigo-500/5 text-indigo-300",
  "border-violet-500/30 bg-violet-500/5 text-violet-300",
];

export default function Skills() {
  return (
    <section id="skills" className="section-x section-y scroll-mt-24">
      <div className="mx-auto max-w-6xl min-w-0">
        <p className="font-mono text-sm text-cyan-400">Skills Matrix</p>
        <h2 className="mt-2 text-2xl font-bold tracking-tight text-white sm:text-3xl lg:text-4xl">
          Tools I ship with confidence
        </h2>
        <p className="mt-4 max-w-2xl text-sm leading-relaxed text-slate-400 sm:text-base">
          A focused stack for building reliable enterprise applications — from
          backend APIs and relational databases to modern React frontends and
          reporting integrations.
        </p>

        <div className="mt-8 grid gap-4 sm:mt-12 sm:grid-cols-2 sm:gap-6 xl:grid-cols-2">
          {skillCategories.map((category, index) => (
            <article
              key={category.title}
              className="min-w-0 rounded-2xl border border-slate-800 bg-slate-900/40 p-5 transition hover:border-slate-700 sm:p-6"
            >
              <h3 className="text-base font-semibold text-white sm:text-lg">
                {category.title}
              </h3>
              <div className="mt-4 flex flex-wrap gap-2">
                {category.skills.map((skill) => (
                  <span
                    key={skill}
                    className={`inline-flex max-w-full items-center gap-2 rounded-lg border px-2.5 py-1.5 font-mono text-[11px] leading-tight sm:px-3 sm:text-xs ${accentColors[index % accentColors.length]}`}
                  >
                    <SkillIcon skill={skill} className="h-3.5 w-3.5 shrink-0 sm:h-4 sm:w-4" />
                    <span className="min-w-0 break-words">{skill}</span>
                  </span>
                ))}
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
