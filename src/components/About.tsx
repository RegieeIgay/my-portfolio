import { motion } from "framer-motion";
import { profile } from "../data/portfolio";

export default function About() {
  return (
    <section id="about" className="section-x section-y scroll-mt-24">
      <div className="mx-auto max-w-6xl min-w-0">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-60px" }}
          transition={{ duration: 0.5 }}
        >
          <SectionHeading
            eyebrow="About Me"
            title="Building systems that enterprises rely on"
          />
        </motion.div>

        <div className="mt-8 grid gap-8 sm:mt-12 lg:grid-cols-[1.2fr_0.8fr] lg:items-start lg:gap-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="min-w-0 space-y-5 text-sm leading-relaxed text-slate-400 sm:space-y-6 sm:text-base"
          >
            <p>{profile.summary}</p>
            <p>
              From payroll networks handling statutory deductions to inventory
              platforms with embedded accounting, I focus on software that reduces
              manual overhead, improves data integrity, and scales with real-world
              operational demand.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ duration: 0.5, delay: 0.2 }}
            whileHover={{ y: -4, transition: { duration: 0.2 } }}
            className="min-w-0 rounded-2xl border border-slate-800 bg-slate-900/50 p-5 transition-colors hover:border-indigo-500/40 hover:bg-slate-900/80 sm:p-6"
          >
            <h3 className="text-sm font-semibold uppercase tracking-wider text-slate-500">
              Core Focus
            </h3>
            <ul className="mt-4 space-y-3">
              {[
                "Enterprise web & desktop application development",
                "Financial management (GL), payroll, inventory & rental ERPs",
                "API-first architecture with SQL Server backends",
                "Reporting pipelines and business workflow automation",
              ].map((item, index) => (
                <motion.li
                  key={item}
                  initial={{ opacity: 0, x: -10 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.3, delay: 0.3 + index * 0.1 }}
                  className="flex items-start gap-3 text-sm text-slate-300"
                >
                  <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-indigo-400 shadow-[0_0_6px_rgba(129,140,248,0.8)]" />
                  <span className="min-w-0">{item}</span>
                </motion.li>
              ))}
            </ul>
          </motion.div>
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
    <div className="min-w-0">
      <p className="font-mono text-sm text-cyan-400">{eyebrow}</p>
      <h2 className="mt-2 text-2xl font-bold tracking-tight text-white sm:text-3xl lg:text-4xl">
        {title}
      </h2>
    </div>
  );
}
