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
  personal: {
    label: "Personal Projects",
    accent: "text-emerald-400 border-emerald-500/30 bg-emerald-500/10",
    description:
      "Live web apps built and deployed — click any project to open the demo.",
  },
} as const;

export default function Projects() {
  const professional = projects.filter((p) => p.category === "professional");
  const training = projects.filter((p) => p.category === "training");
  const personal = projects.filter((p) => p.category === "personal");

  return (
    <section id="projects" className="section-x section-y scroll-mt-24">
      <div className="mx-auto max-w-6xl min-w-0">
        <p className="font-mono text-sm text-cyan-400">Featured Projects</p>
        <h2 className="mt-2 text-2xl font-bold tracking-tight text-white sm:text-3xl lg:text-4xl">
          Impact-driven work
        </h2>
        <p className="mt-4 max-w-2xl text-sm leading-relaxed text-slate-400 sm:text-base">
          Selected builds that emphasize measurable outcomes — faster workflows,
          automated lifecycles, and unified operational tooling.
        </p>

        <ProjectGroup category="professional" items={professional} />
        <ProjectGroup category="training" items={training} />
        <ProjectGroup category="personal" items={personal} />
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
    <div className="mt-10 sm:mt-14">
      <div className="mb-6 flex flex-col gap-2 sm:mb-8">
        <span
          className={`inline-flex w-fit max-w-full rounded-full border px-3 py-1 text-[11px] font-semibold uppercase tracking-wider sm:text-xs ${meta.accent}`}
        >
          {meta.label}
        </span>
        <p className="max-w-2xl text-sm leading-relaxed text-slate-500">
          {meta.description}
        </p>
      </div>

      <div className="grid gap-4 sm:gap-6 md:grid-cols-2">
        {items.map((project) => (
          <ProjectCard key={project.title} project={project} />
        ))}
      </div>
    </div>
  );
}

function ProjectCard({ project }: { project: Project }) {
  const cardContent = (
    <>
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
              className="max-w-full rounded-md border border-slate-700 bg-slate-950 px-2 py-1 font-mono text-[11px] text-slate-300 sm:px-2.5 sm:text-xs"
            >
              <span className="break-words">{tech}</span>
            </span>
          ))}
        </div>

        {project.url && (
          <span className="mt-4 inline-flex items-center gap-2 text-sm font-medium text-cyan-400 transition group-hover:text-cyan-300 sm:mt-5">
            View live demo
            <ExternalLinkIcon />
          </span>
        )}
      </div>
    </>
  );

  const cardClassName =
    "group flex h-full min-w-0 flex-col rounded-2xl border border-slate-800 bg-slate-900/50 p-5 transition sm:p-6";

  if (project.url) {
    return (
      <a
        href={project.url}
        target="_blank"
        rel="noopener noreferrer"
        className={`${cardClassName} hover:border-cyan-500/40 hover:bg-slate-900/80`}
      >
        {cardContent}
      </a>
    );
  }

  return (
    <article className={`${cardClassName} hover:border-slate-700 hover:bg-slate-900/80`}>
      {cardContent}
    </article>
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
