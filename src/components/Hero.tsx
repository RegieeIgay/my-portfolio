import { motion } from "framer-motion";
import { TbFileText, TbBriefcase, TbMail } from "react-icons/tb";
import { profile } from "../data/portfolio";

type HeroProps = {
  onOpenResume?: () => void;
};

export default function Hero({ onOpenResume }: HeroProps) {
  return (
    <section
      id="hero"
      className="section-x relative flex min-h-[100dvh] scroll-mt-24 items-center pt-20 pb-12 sm:pt-24 sm:pb-16 lg:pt-28"
    >
      {/* Floating ambient glow spheres */}
      <motion.div
        aria-hidden
        animate={{
          y: [0, -20, 0],
          scale: [1, 1.1, 1],
          opacity: [0.15, 0.3, 0.15],
        }}
        transition={{
          duration: 8,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        className="pointer-events-none absolute left-1/4 top-1/4 h-72 w-72 rounded-full bg-cyan-500/20 blur-3xl"
      />
      <motion.div
        aria-hidden
        animate={{
          y: [0, 20, 0],
          scale: [1, 1.15, 1],
          opacity: [0.1, 0.25, 0.1],
        }}
        transition={{
          duration: 10,
          repeat: Infinity,
          ease: "easeInOut",
          delay: 1,
        }}
        className="pointer-events-none absolute right-1/4 bottom-1/4 h-80 w-80 rounded-full bg-indigo-500/20 blur-3xl"
      />

      <div className="relative mx-auto w-full max-w-6xl min-w-0">
        <div className="max-w-3xl">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <p className="mb-4 inline-flex max-w-full flex-wrap items-center gap-2 rounded-full border border-emerald-500/20 bg-emerald-500/5 px-3 py-1.5 text-xs text-emerald-400 sm:px-4 sm:text-sm">
              <span className="h-2 w-2 shrink-0 rounded-full bg-emerald-400 shadow-[0_0_8px_rgba(52,211,153,0.8)] animate-pulse" />
              <span className="min-w-0">{profile.availability}</span>
            </p>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 25 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="text-3xl font-bold tracking-tight text-white sm:text-5xl lg:text-6xl"
          >
            {profile.name}
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="mt-3 text-lg text-cyan-400 sm:mt-4 sm:text-xl lg:text-2xl"
          >
            {profile.role}
          </motion.p>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="mt-2 max-w-md font-mono text-xs leading-relaxed text-slate-500 sm:text-sm"
          >
            {profile.location}
          </motion.p>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
            className="mt-6 max-w-2xl text-base leading-relaxed text-slate-400 sm:mt-8 sm:text-lg"
          >
            {profile.tagline}
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.5 }}
            className="mt-8 flex w-full flex-col gap-3 sm:mt-10 sm:flex-row sm:flex-wrap sm:gap-4"
          >
            <motion.a
              whileHover={{ scale: 1.03 }}
              whileTap={{ scale: 0.98 }}
              href="#projects"
              className="inline-flex w-full items-center justify-center gap-2 rounded-xl bg-cyan-500 px-6 py-3.5 text-sm font-semibold text-slate-950 shadow-lg shadow-cyan-500/20 transition hover:bg-cyan-400 sm:w-auto"
            >
              <TbBriefcase className="h-4.5 w-4.5" />
              <span>View featured work</span>
            </motion.a>
            <motion.button
              whileHover={{ scale: 1.03 }}
              whileTap={{ scale: 0.98 }}
              type="button"
              onClick={onOpenResume}
              className="inline-flex w-full items-center justify-center gap-2 rounded-xl border border-cyan-500/30 bg-cyan-500/10 px-6 py-3.5 text-sm font-semibold text-cyan-400 ring-1 ring-cyan-500/30 transition hover:bg-cyan-500/20 sm:w-auto"
            >
              <TbFileText className="h-4.5 w-4.5" />
              <span>View Resume / CV</span>
            </motion.button>
            <motion.a
              whileHover={{ scale: 1.03 }}
              whileTap={{ scale: 0.98 }}
              href="#contact"
              className="inline-flex w-full items-center justify-center gap-2 rounded-xl border border-cyan-500/30 bg-cyan-500/10 px-6 py-3.5 text-sm font-semibold text-cyan-400 ring-1 ring-cyan-500/30 transition hover:bg-cyan-500/20 sm:w-auto"
            >
              <TbMail className="h-4.5 w-4.5" />
              <span>Contact me</span>
            </motion.a>
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.6 }}
          className="mt-10 grid gap-3 sm:mt-16 sm:grid-cols-2 sm:gap-4 lg:grid-cols-3"
        >
          {[
            { value: "50%–2x", label: "Payroll workflow acceleration" },
            { value: "Enterprise", label: "Web & desktop systems delivered" },
            { value: "Full-Stack", label: "C# · React · SQL architecture" },
          ].map((stat, i) => (
            <motion.div
              key={stat.label}
              whileHover={{ y: -4, transition: { duration: 0.2 } }}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: 0.6 + i * 0.1 }}
              className="min-w-0 rounded-2xl border border-slate-800/80 bg-slate-900/40 p-4 backdrop-blur-sm transition-colors hover:border-cyan-500/40 hover:bg-slate-900/70 sm:p-5 lg:col-span-1 sm:last:col-span-2 lg:last:col-span-1"
            >
              <p className="text-xl font-bold text-white sm:text-2xl">
                {stat.value}
              </p>
              <p className="mt-1 text-xs leading-relaxed text-slate-500 sm:text-sm">
                {stat.label}
              </p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
