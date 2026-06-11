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
    <section id="skills" className="px-6 py-24">
      <div className="mx-auto max-w-6xl">
        <p className="font-mono text-sm text-cyan-400">Skills Matrix</p>
        <h2 className="mt-2 text-3xl font-bold tracking-tight text-white sm:text-4xl">
          Tools I ship with confidence
        </h2>
        <p className="mt-4 max-w-2xl text-slate-400">
          A focused stack for building reliable enterprise applications — from
          backend APIs and relational databases to modern React frontends and
          reporting integrations.
        </p>

        <div className="mt-12 grid gap-6 sm:grid-cols-2">
          {skillCategories.map((category, index) => (
            <article
              key={category.title}
              className="rounded-2xl border border-slate-800 bg-slate-900/40 p-6 transition hover:border-slate-700"
            >
              <h3 className="text-lg font-semibold text-white">
                {category.title}
              </h3>
              <div className="mt-4 flex flex-wrap gap-2">
                {category.skills.map((skill) => (
                  <span
                    key={skill}
                    className={`inline-flex items-center gap-2 rounded-lg border px-3 py-1.5 font-mono text-xs ${accentColors[index % accentColors.length]}`}
                  >
                    <SkillIcon skill={skill} />
                    {skill}
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
