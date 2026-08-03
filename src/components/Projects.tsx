import { useState } from "react";
import { motion } from "framer-motion";
import { TbSearch, TbX, TbFilter, TbSearchOff, TbSparkles } from "react-icons/tb";
import { projects, type Project } from "../data/portfolio";
import SkillIcon from "./SkillIcon";
import ProjectModal from "./ProjectModal";

const categoryMeta = {
  professional: {
    label: "Professional Experience",
    accent: "text-cyan-400 border-cyan-500/30 bg-cyan-500/10",
    description:
      "Production-grade systems engineered for high-volume business operations.",
  },
  training: {
    label: "Technical Training",
    accent: "text-indigo-400 border-indigo-500/30 bg-indigo-500/10",
    description:
      "Enterprise integrations and low-code solutions from hands-on platform training.",
  },
  personal: {
    label: "Personal Projects",
    accent: "text-emerald-400 border-emerald-500/30 bg-emerald-500/10",
    description:
      "Live web apps built and deployed — click any project to view deep dive.",
  },
} as const;

const popularTechFilters = [
  "All",
  "C#",
  "ASP.NET Core Web API",
  "React",
  "SQL Server",
  "Microsoft Azure",
  "TypeScript",
];

export default function Projects() {
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedTech, setSelectedTech] = useState("All");
  const [activeProjectModal, setActiveProjectModal] = useState<Project | null>(null);

  const filteredProjects = projects.filter((p) => {
    // Tech check
    if (selectedTech !== "All") {
      const matchTech = p.techStack.some((t) => {
        if (selectedTech === "React") {
          return t === "React" || t === "React.js";
        }
        return t.toLowerCase() === selectedTech.toLowerCase();
      });
      if (!matchTech) return false;
    }

    // Search query check
    if (searchQuery.trim() !== "") {
      const q = searchQuery.toLowerCase();
      const titleMatch = p.title.toLowerCase().includes(q);
      const descMatch = p.description.toLowerCase().includes(q);
      const techMatch = p.techStack.some((t) => t.toLowerCase().includes(q));
      const impactMatch = p.impact?.toLowerCase().includes(q);
      return titleMatch || descMatch || techMatch || impactMatch;
    }

    return true;
  });

  const professional = filteredProjects.filter((p) => p.category === "professional");
  const training = filteredProjects.filter((p) => p.category === "training");
  const personal = filteredProjects.filter((p) => p.category === "personal");

  const isFilteringActive = searchQuery.trim() !== "" || selectedTech !== "All";

  const resetFilters = () => {
    setSearchQuery("");
    setSelectedTech("All");
  };

  return (
    <section id="projects" className="section-x section-y scroll-mt-24">
      <div className="mx-auto max-w-6xl min-w-0">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-60px" }}
          transition={{ duration: 0.5 }}
        >
          <p className="font-mono text-sm text-cyan-400">Featured Projects</p>
          <h2 className="mt-2 text-2xl font-bold tracking-tight text-white sm:text-3xl lg:text-4xl">
            Impact-driven work
          </h2>
          <p className="mt-4 max-w-2xl text-sm leading-relaxed text-slate-400 sm:text-base">
            Selected builds that emphasize measurable outcomes — faster workflows,
            automated lifecycles, and unified operational tooling. Click any project card for a full technical breakdown.
          </p>
        </motion.div>

        {/* Search & Tech Stack Filter Bar */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-40px" }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="mt-8 rounded-2xl border border-slate-800 bg-slate-900/40 p-4 backdrop-blur-md sm:mt-10 sm:p-5"
        >
          <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
            {/* Search Input */}
            <div className="relative min-w-0 flex-1">
              <TbSearch className="pointer-events-none absolute left-3.5 top-1/2 h-4 w-4 -translate-y-1/2 text-slate-500" />
              <input
                type="text"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                placeholder="Search projects by name, tech stack, or description..."
                className="w-full rounded-xl border border-slate-800 bg-slate-950/80 py-2.5 pl-10 pr-10 text-xs text-white placeholder-slate-500 transition-colors focus:border-cyan-500/50 focus:outline-none focus:ring-1 focus:ring-cyan-500/50 sm:text-sm"
              />
              {searchQuery && (
                <button
                  type="button"
                  onClick={() => setSearchQuery("")}
                  aria-label="Clear search"
                  className="absolute right-3 top-1/2 -translate-y-1/2 text-slate-500 transition-colors hover:text-slate-300"
                >
                  <TbX className="h-4 w-4" />
                </button>
              )}
            </div>

            {isFilteringActive && (
              <button
                type="button"
                onClick={resetFilters}
                className="shrink-0 font-mono text-xs text-cyan-400 underline underline-offset-4 transition-colors hover:text-cyan-300"
              >
                Reset filters
              </button>
            )}
          </div>

          {/* Quick Tech Filters */}
          <div className="mt-4 flex flex-wrap items-center gap-2 border-t border-slate-800/60 pt-3.5">
            <span className="inline-flex items-center gap-1 font-mono text-[11px] uppercase tracking-wider text-slate-500">
              <TbFilter className="h-3.5 w-3.5 text-cyan-400" /> Filter Tech:
            </span>
            {popularTechFilters.map((tech) => (
              <button
                key={tech}
                type="button"
                onClick={() => setSelectedTech(tech)}
                className={`inline-flex items-center gap-1.5 rounded-md border px-2.5 py-1 font-mono text-[11px] transition-all sm:text-xs ${
                  selectedTech === tech
                    ? "border-cyan-400 bg-cyan-500/20 text-cyan-300 font-semibold"
                    : "border-slate-800 bg-slate-950/60 text-slate-400 hover:border-slate-700 hover:text-slate-200"
                }`}
              >
                {tech !== "All" && <SkillIcon skill={tech} className="h-3 w-3 shrink-0" />}
                <span>{tech}</span>
              </button>
            ))}
          </div>
        </motion.div>

        {filteredProjects.length === 0 ? (
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            className="mt-10 flex flex-col items-center justify-center rounded-2xl border border-slate-800 bg-slate-900/30 py-16 text-center"
          >
            <TbSearchOff className="h-10 w-10 text-slate-600" />
            <h3 className="mt-4 text-lg font-semibold text-white">No matching projects</h3>
            <p className="mt-1 max-w-sm text-xs leading-relaxed text-slate-400 sm:text-sm">
              No builds match your search filter. Try clearing filters or searching for another tech stack.
            </p>
            <button
              type="button"
              onClick={resetFilters}
              className="mt-5 rounded-xl bg-cyan-500 px-4 py-2 text-xs font-semibold text-slate-950 transition hover:bg-cyan-400"
            >
              Clear filters
            </button>
          </motion.div>
        ) : (
          <>
            {professional.length > 0 && (
              <ProjectGroup category="professional" items={professional} onSelectProject={setActiveProjectModal} />
            )}
            {training.length > 0 && (
              <ProjectGroup category="training" items={training} onSelectProject={setActiveProjectModal} />
            )}
            {personal.length > 0 && (
              <ProjectGroup category="personal" items={personal} onSelectProject={setActiveProjectModal} />
            )}
          </>
        )}

        <ProjectModal project={activeProjectModal} onClose={() => setActiveProjectModal(null)} />
      </div>
    </section>
  );
}

function ProjectGroup({
  category,
  items,
  onSelectProject,
}: {
  category: Project["category"];
  items: Project[];
  onSelectProject: (p: Project) => void;
}) {
  const meta = categoryMeta[category];

  return (
    <div className="mt-10 sm:mt-14">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-40px" }}
        transition={{ duration: 0.4 }}
        className="mb-6 flex flex-col gap-2 sm:mb-8"
      >
        <span
          className={`inline-flex w-fit max-w-full rounded-full border px-3 py-1 text-[11px] font-semibold uppercase tracking-wider sm:text-xs ${meta.accent}`}
        >
          {meta.label}
        </span>
        <p className="max-w-2xl text-sm leading-relaxed text-slate-500">
          {meta.description}
        </p>
      </motion.div>

      <div className="grid gap-4 sm:gap-6 md:grid-cols-2">
        {items.map((project, idx) => (
          <ProjectCard key={project.title} project={project} index={idx} onClick={() => onSelectProject(project)} />
        ))}
      </div>
    </div>
  );
}

function ProjectCard({ project, index, onClick }: { project: Project; index: number; onClick: () => void }) {
  const cardClassName =
    "group flex h-full min-w-0 flex-col rounded-2xl border border-slate-800 bg-slate-900/50 p-5 cursor-pointer transition-all duration-300 sm:p-6 hover:border-cyan-500/40 hover:bg-slate-900/80 hover:shadow-xl hover:shadow-cyan-500/5";

  return (
    <motion.div
      onClick={onClick}
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-40px" }}
      transition={{ duration: 0.5, delay: (index % 2) * 0.1 }}
      whileHover={{ y: -6, transition: { duration: 0.2 } }}
      className={cardClassName}
    >
      <div className="flex flex-col gap-3 sm:flex-row sm:items-start sm:justify-between sm:gap-4">
        <h3 className="min-w-0 text-lg font-semibold text-white transition-colors group-hover:text-cyan-300 sm:text-xl">
          {project.title}
        </h3>
        {project.impact && (
          <span className="w-fit shrink-0 rounded-lg bg-emerald-500/10 px-2.5 py-1 text-[11px] font-medium text-emerald-400 ring-1 ring-emerald-500/20 sm:text-xs">
            {project.impact}
          </span>
        )}
      </div>

      <p className="mt-4 flex-1 text-sm leading-relaxed text-slate-400">
        {project.description}
      </p>

      <div className="mt-5 border-t border-slate-800 pt-4 sm:mt-6 sm:pt-5">
        <p className="mb-3 text-xs font-semibold uppercase tracking-wider text-slate-500">
          Tech Stack
        </p>
        <div className="flex flex-wrap gap-2">
          {project.techStack.map((tech) => (
            <span
              key={tech}
              className="inline-flex max-w-full items-center gap-1.5 rounded-md border border-slate-700 bg-slate-950 px-2 py-1 font-mono text-[11px] text-slate-300 transition-colors group-hover:border-cyan-500/40 sm:px-2.5 sm:text-xs"
            >
              <SkillIcon skill={tech} className="h-3.5 w-3.5 shrink-0 text-cyan-400" />
              <span className="break-words">{tech}</span>
            </span>
          ))}
        </div>

        <div className="mt-5 flex items-center justify-between pt-1 text-xs font-medium text-cyan-400">
          <span className="inline-flex items-center gap-1 text-slate-400 group-hover:text-cyan-300">
            <TbSparkles className="h-4 w-4 text-cyan-400" /> View technical details
          </span>

          {project.url && (
            <span className="inline-flex items-center gap-1 text-cyan-400 group-hover:text-cyan-300">
              Live Demo <ExternalLinkIcon />
            </span>
          )}
        </div>
      </div>
    </motion.div>
  );
}

function ExternalLinkIcon() {
  return (
    <svg
      className="h-4 w-4 shrink-0 transition group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
      fill="none"
      viewBox="0 0 24 24"
      stroke="currentColor"
      strokeWidth={2}
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"
      />
    </svg>
  );
}
