import { motion } from "framer-motion";
import { skillCategories } from "../data/portfolio";
import SkillIcon from "./SkillIcon";

const accentColors = [
  "border-cyan-500/30 bg-cyan-500/5 text-cyan-300 hover:border-cyan-400 hover:bg-cyan-500/10",
  "border-emerald-500/30 bg-emerald-500/5 text-emerald-300 hover:border-emerald-400 hover:bg-emerald-500/10",
  "border-indigo-500/30 bg-indigo-500/5 text-indigo-300 hover:border-indigo-400 hover:bg-indigo-500/10",
  "border-violet-500/30 bg-violet-500/5 text-violet-300 hover:border-violet-400 hover:bg-violet-500/10",
];

export default function Skills() {
  return (
    <section id="skills" className="section-x section-y scroll-mt-24">
      <div className="mx-auto max-w-6xl min-w-0">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-60px" }}
          transition={{ duration: 0.5 }}
        >
          <p className="font-mono text-sm text-cyan-400">Skills Matrix</p>
          <h2 className="mt-2 text-2xl font-bold tracking-tight text-white sm:text-3xl lg:text-4xl">
            Tools I ship with confidence
          </h2>
          <p className="mt-4 max-w-2xl text-sm leading-relaxed text-slate-400 sm:text-base">
            A focused stack for building reliable enterprise applications — from
            backend APIs and relational databases to modern React frontends and
            reporting integrations.
          </p>
        </motion.div>

        <div className="mt-8 grid gap-4 sm:mt-12 sm:grid-cols-2 sm:gap-6 xl:grid-cols-2">
          {skillCategories.map((category, index) => (
            <motion.article
              key={category.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-40px" }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              whileHover={{ y: -4, transition: { duration: 0.2 } }}
              className="min-w-0 rounded-2xl border border-slate-800 bg-slate-900/40 p-5 transition hover:border-slate-700 sm:p-6"
            >
              <h3 className="text-base font-semibold text-white sm:text-lg">
                {category.title}
              </h3>
              <div className="mt-4 flex flex-wrap gap-2">
                {category.skills.map((skill) => (
                  <motion.span
                    key={skill}
                    whileHover={{ scale: 1.06, y: -2 }}
                    whileTap={{ scale: 0.96 }}
                    transition={{ type: "spring", stiffness: 400, damping: 17 }}
                    className={`inline-flex max-w-full items-center gap-2 rounded-lg border px-2.5 py-1.5 font-mono text-[11px] leading-tight transition-colors sm:px-3 sm:text-xs ${accentColors[index % accentColors.length]}`}
                  >
                    <SkillIcon skill={skill} className="h-3.5 w-3.5 shrink-0 sm:h-4 sm:w-4" />
                    <span className="min-w-0 break-words">{skill}</span>
                  </motion.span>
                ))}
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}
