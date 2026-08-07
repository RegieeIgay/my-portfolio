import { AnimatePresence, motion } from "framer-motion";
import { TbX, TbExternalLink, TbCheck, TbServer, TbCode, TbCloudCheck, TbSparkles } from "react-icons/tb";
import type { Project } from "../data/portfolio";
import SkillIcon from "./SkillIcon";

type ProjectModalProps = {
  project: Project | null;
  onClose: () => void;
};

export default function ProjectModal({ project, onClose }: ProjectModalProps) {
  if (!project) return null;

  return (
    <AnimatePresence>
      {project && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 overflow-y-auto">
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="fixed inset-0 bg-slate-950/80 backdrop-blur-md"
          />

          {/* Modal Container */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95, y: 20 }}
            transition={{ duration: 0.25 }}
            className="relative z-10 w-full max-w-3xl max-h-[90vh] flex flex-col rounded-2xl border border-slate-800 bg-slate-900 shadow-2xl overflow-hidden"
          >
            {/* Modal Header */}
            <div className="flex items-center justify-between border-b border-slate-800 bg-slate-950/60 px-5 py-4 sm:px-6">
              <div className="flex items-center gap-2.5">
                <TbSparkles className="h-5 w-5 text-cyan-400" />
                <span className="font-mono text-xs font-semibold uppercase tracking-wider text-slate-400">
                  Project Deep Dive & Architecture
                </span>
              </div>

              <button
                type="button"
                onClick={onClose}
                className="rounded-lg p-1.5 text-slate-400 transition hover:bg-slate-800 hover:text-white"
                aria-label="Close modal"
              >
                <TbX className="h-5 w-5" />
              </button>
            </div>

            {/* Modal Body */}
            <div className="flex-1 overflow-y-auto p-6 sm:p-8 space-y-6 text-slate-300">
              {/* Category & Title */}
              <div>
                <div className="flex flex-wrap items-center gap-2">
                  <span className="rounded-full border border-cyan-500/30 bg-cyan-500/10 px-3 py-1 font-mono text-[11px] font-semibold text-cyan-400">
                    {project.category === "professional"
                      ? "Enterprise Production"
                      : project.category === "training"
                      ? "Technical Training"
                      : "Personal Project"}
                  </span>
                  {project.impact && (
                    <span className="rounded-full bg-emerald-500/10 px-3 py-1 text-[11px] font-medium text-emerald-400 ring-1 ring-emerald-500/20">
                      ⚡ {project.impact}
                    </span>
                  )}
                </div>

                <h2 className="mt-3 text-2xl font-bold tracking-tight text-white sm:text-3xl">
                  {project.title}
                </h2>
              </div>

              {/* Extended Description */}
              <div className="rounded-xl border border-slate-800 bg-slate-950/60 p-4 sm:p-5 space-y-3">
                <h3 className="flex items-center gap-2 font-mono text-xs font-semibold uppercase tracking-wider text-cyan-400">
                  <TbCode className="h-4 w-4" /> System Overview
                </h3>
                <p className="text-xs leading-relaxed text-slate-300 sm:text-sm">
                  {project.description}
                </p>
              </div>

              {/* Technology Stack Grid */}
              <div>
                <h3 className="flex items-center gap-2 font-mono text-xs font-semibold uppercase tracking-wider text-cyan-400">
                  <TbServer className="h-4 w-4" /> Architecture & Technologies Used
                </h3>
                <div className="mt-3 flex flex-wrap gap-2">
                  {project.techStack.map((tech) => (
                    <div
                      key={tech}
                      className="inline-flex items-center gap-1.5 rounded-lg border border-slate-800 bg-slate-950 px-3 py-1.5 font-mono text-xs text-slate-200"
                    >
                      <SkillIcon skill={tech} className="h-4 w-4 text-cyan-400" />
                      <span>{tech}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* System Architecture / Key Features Highlights */}
              <div className="rounded-xl border border-slate-800 bg-slate-950/60 p-4 sm:p-5">
                <h3 className="flex items-center gap-2 font-mono text-xs font-semibold uppercase tracking-wider text-cyan-400">
                  <TbCloudCheck className="h-4 w-4" /> {project.category === "professional" ? "Key Enterprise Capabilities" : "Key Project Features"}
                </h3>
                <ul className="mt-3 space-y-2 text-xs text-slate-300 sm:text-sm">
                  {(project.features || [
                    "Hosted on Microsoft Azure cloud infrastructure with scalable SQL Server backends.",
                    "Optimized transactional queries and REST API controllers for sub-second data responses.",
                    "Designed with modular component architectures and strict type definitions."
                  ]).map((feature, idx) => (
                    <li key={idx} className="flex items-start gap-2">
                      <TbCheck className="h-4 w-4 text-emerald-400 shrink-0 mt-0.5" />
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            {/* Modal Footer */}
            <div className="flex items-center justify-between border-t border-slate-800 bg-slate-950/60 px-6 py-4">
              <button
                type="button"
                onClick={onClose}
                className="rounded-lg border border-slate-800 bg-slate-900 px-4 py-2 text-xs font-medium text-slate-300 transition hover:bg-slate-800 hover:text-white"
              >
                Close Deep Dive
              </button>

              {project.url ? (
                <a
                  href={project.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 rounded-lg bg-cyan-500 px-4 py-2 text-xs font-semibold text-slate-950 transition hover:bg-cyan-400 shadow-md shadow-cyan-500/20"
                >
                  <span>Launch Live Demo</span>
                  <TbExternalLink className="h-4 w-4" />
                </a>
              ) : (
                <span className="font-mono text-xs text-slate-500 italic">
                  Enterprise Production App (Cloud Deployed)
                </span>
              )}
            </div>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
}
