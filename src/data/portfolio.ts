export type SkillCategory = {
  title: string;
  skills: string[];
};

export type Project = {
  title: string;
  description: string;
  techStack: string[];
  category: "professional" | "training";
  impact?: string;
};

export const navLinks = [
  { label: "Home", href: "#hero" },
  { label: "About", href: "#about" },
  { label: "Skills", href: "#skills" },
  { label: "Projects", href: "#projects" },
  { label: "Contact", href: "#contact" },
] as const;

export const profile = {
  name: "Regie Igay",
  role: "Software Engineer",
  location: "Pontevedra, Negros Occidental, Philippines",
  email: "regie.igay@email.com",
  tagline:
    "I build enterprise systems that move faster, scale cleaner, and deliver measurable business impact.",
  summary:
    "Results-driven Software Developer with experience designing, building, and deploying enterprise web and desktop applications using C#, ASP.NET Core Web API, React.js, and PHP. Specializes in robust tools like payroll networks, inventory software, and rental management systems.",
  availability: "Open to software engineering opportunities",
};

export const skillCategories: SkillCategory[] = [
  {
    title: "Languages",
    skills: ["C#", "JavaScript", "TypeScript", "PHP", "SQL"],
  },
  {
    title: "Frameworks & APIs",
    skills: ["ASP.NET Core Web API", "React.js", "Tailwind CSS"],
  },
  {
    title: "Databases & Platforms",
    skills: ["SQL Server", "MySQL", "Supabase"],
  },
  {
    title: "Reporting & Enterprise",
    skills: ["Crystal Reports", "Power Platform", "SharePoint", "Dynamics 365"],
  },
];

export const projects: Project[] = [
  {
    title: "Hacienda & Academic Payroll Systems",
    description:
      "Engineered high-volume desktop and web payroll architectures using C#.NET, ASP.NET Core Web API, and online SQL Server databases. Features automated deduction handling (SSS, PhilHealth, Pag-IBIG) and Crystal Reports integration that accelerated processing workflows by 50% to 2x.",
    techStack: [
      "C#",
      "ASP.NET Core Web API",
      "SQL Server",
      "Crystal Reports",
      ".NET Desktop",
    ],
    category: "professional",
    impact: "50%–2x faster payroll processing",
  },
  {
    title: "Enterprise Rental Management Platform",
    description:
      "Built a web-based rental tracking application with dynamic contract lifecycle tracking for lessees and automated annual property escalation rate models.",
    techStack: [
      "C#",
      "ASP.NET Core Web API",
      "React.js",
      "SQL Server",
    ],
    category: "professional",
    impact: "End-to-end lease lifecycle automation",
  },
  {
    title: "Full-Stack Inventory & Accounting System",
    description:
      "Designed a high-performance inventory system leveraging TypeScript, React, ASP.NET Core Web API, and SQL Server with embedded stock tracking and sales-to-representative accounting modules.",
    techStack: [
      "TypeScript",
      "React",
      "ASP.NET Core Web API",
      "SQL Server",
    ],
    category: "professional",
    impact: "Unified inventory + sales accounting",
  },
  {
    title: "Low-Code Enterprise Integrations",
    description:
      "Configured custom administrative integrations and low-code solutions using Microsoft Power Platform (Power Apps, Power Pages, Dataverse), SharePoint, and Dynamics 365 CRM.",
    techStack: [
      "Power Apps",
      "Power Pages",
      "Dataverse",
      "SharePoint",
      "Dynamics 365",
    ],
    category: "training",
    impact: "Rapid enterprise workflow delivery",
  },
];
