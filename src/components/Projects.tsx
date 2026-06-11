import { projects, type Project } from "../data/portfolio";

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
} as const;

export default function Projects() {
  const professional = projects.filter((p) => p.category === "professional");
  const training = projects.filter((p) => p.category === "training");

  return (
    <section id="projects" className="px-6 py-24">
      <div className="mx-auto max-w-6xl">
        <p className="font-mono text-sm text-cyan-400">Featured Projects</p>
        <h2 className="mt-2 text-3xl font-bold tracking-tight text-white sm:text-4xl">
          Impact-driven work
        </h2>
        <p className="mt-4 max-w-2xl text-slate-400">
          Selected builds that emphasize measurable outcomes — faster workflows,
          automated lifecycles, and unified operational tooling.
        </p>

        <ProjectGroup
          category="professional"
          items={professional}
        />
        <ProjectGroup
          category="training"
          items={training}
        />
      </div>
    </section>
  );
}

function ProjectGroup({
  category,
  items,
}: {
  category: Project["category"];
  items: Project[];
}) {
  const meta = categoryMeta[category];

  return (
    <div className="mt-14">
      <div className="mb-8 flex flex-col gap-2 sm:flex-row sm:items-end sm:justify-between">
        <div>
          <span
            className={`inline-flex rounded-full border px-3 py-1 text-xs font-semibold uppercase tracking-wider ${meta.accent}`}
          >
            {meta.label}
          </span>
          <p className="mt-3 text-sm text-slate-500">{meta.description}</p>
        </div>
      </div>

      <div className="grid gap-6 lg:grid-cols-2">
        {items.map((project) => (
          <ProjectCard key={project.title} project={project} />
        ))}
      </div>
    </div>
  );
}

function ProjectCard({ project }: { project: Project }) {
  return (
    <article className="group flex h-full flex-col rounded-2xl border border-slate-800 bg-slate-900/50 p-6 transition hover:border-slate-700 hover:bg-slate-900/80">
      <div className="flex items-start justify-between gap-4">
        <h3 className="text-xl font-semibold text-white group-hover:text-cyan-300 transition-colors">
          {project.title}
        </h3>
        {project.impact && (
          <span className="shrink-0 rounded-lg bg-emerald-500/10 px-2.5 py-1 text-xs font-medium text-emerald-400 ring-1 ring-emerald-500/20">
            {project.impact}
          </span>
        )}
      </div>

      <p className="mt-4 flex-1 text-sm leading-relaxed text-slate-400">
        {project.description}
      </p>

      <div className="mt-6 border-t border-slate-800 pt-5">
        <p className="mb-3 text-xs font-semibold uppercase tracking-wider text-slate-500">
          Tech Stack
        </p>
        <div className="flex flex-wrap gap-2">
          {project.techStack.map((tech) => (
            <span
              key={tech}
              className="rounded-md border border-slate-700 bg-slate-950 px-2.5 py-1 font-mono text-xs text-slate-300"
            >
              {tech}
            </span>
          ))}
        </div>
      </div>
    </article>
  );
}
