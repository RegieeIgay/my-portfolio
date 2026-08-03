import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { TbBriefcase, TbSchool, TbAward, TbCalendar, TbMapPin } from "react-icons/tb";
import SkillIcon from "./SkillIcon";

type Milestone = {
  id: string;
  period: string;
  role: string;
  organization: string;
  location: string;
  category: "work" | "education" | "cert";
  categoryLabel: string;
  accentClass: string;
  badgeClass: string;
  nodeColor: string;
  icon: typeof TbBriefcase;
  description: string;
  highlights: string[];
  skills: string[];
};

const milestones: Milestone[] = [
  {
    id: "cbyte-engineer",
    period: "02/2025 – Present",
    role: "Software Engineer",
    organization: "CByte (Computer Programming Services)",
    location: "Bacolod City, Philippines",
    category: "work",
    categoryLabel: "Current Role",
    accentClass: "border-cyan-500/40 bg-cyan-500/5",
    badgeClass: "border-cyan-500/30 bg-cyan-500/10 text-cyan-400",
    nodeColor: "bg-cyan-400 shadow-[0_0_12px_rgba(34,211,238,0.8)]",
    icon: TbBriefcase,
    description:
      "Leading full-stack engineering of enterprise desktop and web platforms. Designed and deployed high-volume payroll networks, rental platforms, inventory solutions, and General Ledger ERPs.",
    highlights: [
      "Engineered Hacienda & Academic Payroll Systems accelerating computations by 50% to 2x.",
      "Developed KAIROS GL, DMCGL, and VMA Enterprise Payroll hosted on Microsoft Azure.",
      "Integrated Crystal Reports for automated job, rate tracking, and statutory deduction processing.",
    ],
    skills: ["C#", "ASP.NET Core Web API", "React", "SQL Server", "Microsoft Azure", "Crystal Reports"],
  },
  {
    id: "coders-tribe-sdtp",
    period: "07/2024 – 12/2024",
    role: "Software Engineering Trainee",
    organization: "Coders Tribe (SDTP)",
    location: "Bacolod City, Philippines",
    category: "cert",
    categoryLabel: "Training & Certification",
    accentClass: "border-indigo-500/40 bg-indigo-500/5",
    badgeClass: "border-indigo-500/30 bg-indigo-500/10 text-indigo-400",
    nodeColor: "bg-indigo-400 shadow-[0_0_12px_rgba(129,140,248,0.8)]",
    icon: TbAward,
    description:
      "Completed intensive Software Development Training Program (SDTP) focused on enterprise backend API architectures, modern frontend frameworks, and low-code cloud integrations.",
    highlights: [
      "Built dynamic web applications using React, HTML5, CSS3, and Tailwind CSS.",
      "Engineered low-code business workflows on Power Apps, Power Pages, and Dataverse.",
      "Configured administrative integrations within Microsoft SharePoint and Dynamics 365 CRM.",
    ],
    skills: ["React", "Power Platform", "Dataverse", "SharePoint", "Dynamics 365", "MySQL"],
  },
  {
    id: "cpsu-degree",
    period: "2024",
    role: "Bachelor of Science in Information Technology",
    organization: "Central Philippine State University (CPSU)",
    location: "Hinigaran, Negros Occidental",
    category: "education",
    categoryLabel: "Best in OJT Distinction",
    accentClass: "border-amber-500/40 bg-amber-500/5",
    badgeClass: "border-amber-500/30 bg-amber-500/10 text-amber-400",
    nodeColor: "bg-amber-400 shadow-[0_0_12px_rgba(251,191,36,0.8)]",
    icon: TbSchool,
    description:
      "Graduated BS in Information Technology. Conferred the prestigious academic distinction of 'Best in OJT Certificate' for achieving top performance during corporate software immersion.",
    highlights: [
      "Awarded 'Best in OJT' Excellence Certificate by the university evaluation board.",
      "Specialized in software design patterns, relational database normalization, and web API logic.",
    ],
    skills: ["BSIT Degree", "Best in OJT", "C# .NET", "SQL Server", "Web API"],
  },
  {
    id: "cbyte-intern",
    period: "09/2023 – 12/2023",
    role: "Software Engineering Intern",
    organization: "CByte (Computer Programming Services)",
    location: "Bacolod City, Philippines",
    category: "work",
    categoryLabel: "OJT Industrial Immersion",
    accentClass: "border-emerald-500/40 bg-emerald-500/5",
    badgeClass: "border-emerald-500/30 bg-emerald-500/10 text-emerald-400",
    nodeColor: "bg-emerald-400 shadow-[0_0_12px_rgba(52,211,153,0.8)]",
    icon: TbBriefcase,
    description:
      "Full-time industrial software engineering internship. Built production-level C# .NET Windows Forms applications and Web APIs with integrated Crystal Reports analytics.",
    highlights: [
      "Earned official On-the-Job Training (OJT) Completion Certificate from CByte.",
      "Resolved runtime environment errors and engineered SQL Server reporting pipelines.",
    ],
    skills: ["C#", "Windows Forms", "Web API", "Crystal Reports", "SQL Server"],
  },
];

export default function Timeline() {
  const [filter, setFilter] = useState<"all" | "work" | "education" | "cert">("all");

  const filteredMilestones = milestones.filter(
    (m) => filter === "all" || m.category === filter
  );

  return (
    <section id="timeline" className="section-x section-y scroll-mt-24">
      <div className="mx-auto max-w-6xl min-w-0">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-60px" }}
          transition={{ duration: 0.5 }}
        >
          <p className="font-mono text-sm text-cyan-400">Career Journey</p>
          <h2 className="mt-2 text-2xl font-bold tracking-tight text-white sm:text-3xl lg:text-4xl">
            Milestones & Progression Roadmap
          </h2>
          <p className="mt-4 max-w-2xl text-sm leading-relaxed text-slate-400 sm:text-base">
            A visual timeline of key milestones — from academic honors at CPSU to
            shipping enterprise payroll, inventory, and Azure-hosted GL ERP systems.
          </p>
        </motion.div>

        {/* Category Filter Pills */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-40px" }}
          transition={{ duration: 0.4, delay: 0.1 }}
          className="mt-8 flex flex-wrap items-center gap-2"
        >
          {[
            { id: "all", label: "All Milestones" },
            { id: "work", label: "Work Experience" },
            { id: "cert", label: "Training & Honors" },
            { id: "education", label: "Education" },
          ].map((item) => (
            <button
              key={item.id}
              type="button"
              onClick={() => setFilter(item.id as typeof filter)}
              className={`rounded-lg px-3.5 py-1.5 text-xs font-medium transition-all ${
                filter === item.id
                  ? "bg-cyan-500 text-slate-950 font-semibold shadow-md shadow-cyan-500/20"
                  : "border border-slate-800 bg-slate-900/60 text-slate-400 hover:border-slate-700 hover:text-slate-200"
              }`}
            >
              {item.label}
            </button>
          ))}
        </motion.div>

        {/* Timeline Visual Tree */}
        <div className="relative mt-12 pl-4 sm:pl-8">
          {/* Vertical Glowing Connector Line */}
          <div
            aria-hidden
            className="absolute left-4 top-2 bottom-2 w-0.5 -translate-x-1/2 bg-gradient-to-b from-cyan-500 via-indigo-500 to-slate-800 sm:left-8"
          />

          <div className="space-y-8 sm:space-y-10">
            <AnimatePresence mode="popLayout">
              {filteredMilestones.map((m, idx) => {
                const IconComponent = m.icon;
                return (
                  <motion.div
                    key={m.id}
                    layout
                    initial={{ opacity: 0, x: -25 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true, margin: "-40px" }}
                    transition={{ duration: 0.5, delay: idx * 0.1 }}
                    className="relative pl-6 sm:pl-10"
                  >
                    {/* Glowing Node Icon */}
                    <div
                      className={`absolute left-0 top-1.5 h-8 w-8 -translate-x-1/2 rounded-full border-2 border-slate-950 flex items-center justify-center text-slate-950 transition-transform ${m.nodeColor}`}
                    >
                      <IconComponent className="h-4 w-4 shrink-0" />
                    </div>

                    {/* Card Body */}
                    <motion.div
                      whileHover={{ y: -4, transition: { duration: 0.2 } }}
                      className={`rounded-2xl border p-5 backdrop-blur-md transition-all sm:p-6 ${m.accentClass}`}
                    >
                      <div className="flex flex-col gap-2 sm:flex-row sm:items-start sm:justify-between">
                        <div>
                          <span
                            className={`inline-flex rounded-full border px-2.5 py-0.5 font-mono text-[11px] font-semibold uppercase tracking-wider ${m.badgeClass}`}
                          >
                            {m.categoryLabel}
                          </span>
                          <h3 className="mt-2 text-lg font-bold text-white sm:text-xl">
                            {m.role}
                          </h3>
                          <p className="text-sm font-semibold text-cyan-400">
                            {m.organization}
                          </p>
                        </div>

                        <div className="flex flex-col gap-1 font-mono text-xs text-slate-400 sm:items-end">
                          <span className="inline-flex items-center gap-1">
                            <TbCalendar className="h-3.5 w-3.5 text-cyan-400" />
                            {m.period}
                          </span>
                          <span className="inline-flex items-center gap-1 text-slate-500">
                            <TbMapPin className="h-3.5 w-3.5" />
                            {m.location}
                          </span>
                        </div>
                      </div>

                      <p className="mt-4 text-xs leading-relaxed text-slate-300 sm:text-sm">
                        {m.description}
                      </p>

                      {/* Key Highlights */}
                      <ul className="mt-4 space-y-2 border-t border-slate-800/80 pt-3 text-xs text-slate-400">
                        {m.highlights.map((h, i) => (
                          <li key={i} className="flex items-start gap-2">
                            <span className="mt-1 h-1.5 w-1.5 shrink-0 rounded-full bg-cyan-400" />
                            <span>{h}</span>
                          </li>
                        ))}
                      </ul>

                      {/* Tech Skills Pills */}
                      <div className="mt-5 flex flex-wrap gap-1.5 pt-2">
                        {m.skills.map((skill) => (
                          <span
                            key={skill}
                            className="inline-flex items-center gap-1 rounded-md border border-slate-800 bg-slate-950 px-2.5 py-1 font-mono text-[10px] text-slate-300 sm:text-[11px]"
                          >
                            <SkillIcon skill={skill} className="h-3 w-3 shrink-0 text-cyan-400" />
                            <span>{skill}</span>
                          </span>
                        ))}
                      </div>
                    </motion.div>
                  </motion.div>
                );
              })}
            </AnimatePresence>
          </div>
        </div>
      </div>
    </section>
  );
}
