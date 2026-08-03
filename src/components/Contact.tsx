import { motion } from "framer-motion";
import { profile } from "../data/portfolio";

export default function Contact() {
  return (
    <section id="contact" className="section-x section-y scroll-mt-24">
      <div className="mx-auto max-w-6xl min-w-0">
        <motion.div
          initial={{ opacity: 0, y: 35 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-60px" }}
          transition={{ duration: 0.6 }}
          className="relative overflow-hidden rounded-2xl border border-slate-800 bg-gradient-to-br from-slate-900 via-slate-900 to-slate-950 p-5 sm:rounded-3xl sm:p-8 lg:p-12"
        >
          <motion.div
            aria-hidden
            animate={{
              scale: [1, 1.2, 1],
              opacity: [0.1, 0.25, 0.1],
            }}
            transition={{
              duration: 6,
              repeat: Infinity,
              ease: "easeInOut",
            }}
            className="pointer-events-none absolute -right-16 -top-16 h-48 w-48 rounded-full bg-cyan-500/10 blur-3xl sm:h-64 sm:w-64"
          />
          <motion.div
            aria-hidden
            animate={{
              scale: [1, 1.25, 1],
              opacity: [0.1, 0.2, 0.1],
            }}
            transition={{
              duration: 8,
              repeat: Infinity,
              ease: "easeInOut",
              delay: 1,
            }}
            className="pointer-events-none absolute -bottom-16 -left-16 h-48 w-48 rounded-full bg-indigo-500/10 blur-3xl sm:h-64 sm:w-64"
          />

          <div className="relative min-w-0 max-w-2xl">
            <p className="font-mono text-sm text-cyan-400">Contact</p>
            <h2 className="mt-2 text-2xl font-bold tracking-tight text-white sm:text-3xl lg:text-4xl">
              Let&apos;s build something that performs
            </h2>
            <p className="mt-4 text-sm leading-relaxed text-slate-400 sm:text-base">
              Interested in collaborating on enterprise software, full-stack
              systems, or workflow automation? Reach out — I&apos;d love to
              connect.
            </p>

            <div className="mt-6 flex flex-col gap-4 sm:mt-8 sm:flex-row sm:items-center">
              <motion.a
                whileHover={{ scale: 1.04 }}
                whileTap={{ scale: 0.97 }}
                href={`mailto:${profile.email}`}
                className="inline-flex w-full min-w-0 items-center justify-center gap-2 rounded-xl bg-cyan-500 px-5 py-3.5 text-sm font-semibold text-slate-950 shadow-lg shadow-cyan-500/20 transition hover:bg-cyan-400 sm:w-auto sm:px-6"
              >
                <MailIcon />
                <span className="min-w-0 break-all text-center sm:break-normal">
                  {profile.email}
                </span>
              </motion.a>
              <p className="text-center text-sm text-slate-500 sm:text-left">
                {profile.location}
              </p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

function MailIcon() {
  return (
    <svg
      className="h-4 w-4 shrink-0"
      fill="none"
      viewBox="0 0 24 24"
      stroke="currentColor"
      strokeWidth={2}
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
      />
    </svg>
  );
}
