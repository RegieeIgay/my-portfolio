export type SkillCategory = {
  title: string;
  skills: string[];
};

export type Project = {
  title: string;
  description: string;
  techStack: string[];
  category: "professional" | "training" | "personal";
  impact?: string;
  url?: string;
};

export const navLinks = [
  { label: "Home", href: "#hero" },
  { label: "About", href: "#about" },
  { label: "Skills", href: "#skills" },
  { label: "Timeline", href: "#timeline" },
  { label: "Architecture", href: "#architecture" },
  { label: "Projects", href: "#projects" },
  { label: "Contact", href: "#contact" },
] as const;

export const profile = {
  name: "Regie Igay",
  role: "Software Engineer",
  location: "Pontevedra, Negros Occidental, Philippines",
  email: "regieeigay@gmail.com",
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
    title: "Databases & Cloud Platforms",
    skills: ["SQL Server", "MySQL", "Supabase", "Microsoft Azure"],
  },
  {
    title: "Reporting & Enterprise",
    skills: ["Crystal Reports", "Power Platform", "SharePoint", "Dynamics 365"],
  },
];

export const projects: Project[] = [
  {
    title: "KAIROS GL — Pharmacy Financial & GL ERP",
    description:
      "Full-stack Enterprise Financial Management and General Ledger (GL) ERP Web Application tailored for pharmacy operations. Engineered modules for multi-entity general ledger, chart of accounts, real-time journal entries, and automated financial reporting hosted on Microsoft Azure cloud infrastructure.",
    techStack: [
      "TypeScript",
      "React",
      "ASP.NET Core Web API",
      "SQL Server",
      "Microsoft Azure",
    ],
    category: "professional",
    impact: "Pharmacy Financial & GL ERP",
  },
  {
    title: "DMCGL — Hardware & Sari-Sari Store GL ERP",
    description:
      "Full-stack Enterprise Financial Management and General Ledger (GL) ERP Web Application built for hardware stores and sari-sari store retail operations. Integrated general ledger accounting with stock inventory management, POS sales tracking, and financial analytics hosted on Microsoft Azure.",
    techStack: [
      "TypeScript",
      "React",
      "ASP.NET Core Web API",
      "SQL Server",
      "Microsoft Azure",
    ],
    category: "professional",
    impact: "Retail & Hardware GL ERP",
  },
  {
    title: "VMA Enterprise Payroll System",
    description:
      "High-performance enterprise payroll system built with C# Windows Forms desktop application, ASP.NET Core Web API backend, and cloud-hosted SQL Server database on Microsoft Azure. Handles complex employee compensation, statutory deduction calculations, and automated payroll processing.",
    techStack: [
      "C#",
      "Windows Forms",
      "ASP.NET Core Web API",
      "SQL Server",
      "Microsoft Azure",
    ],
    category: "professional",
    impact: "Cloud-Hosted Enterprise Payroll",
  },
  {
    title: "Hacienda & Academic Payroll Systems",
    description:
      "Engineered high-volume desktop and web payroll architectures using C#.NET, ASP.NET Core Web API, and cloud-hosted SQL Server databases on Microsoft Azure. Features automated deduction handling (SSS, PhilHealth, Pag-IBIG) and Crystal Reports integration that accelerated processing workflows by 50% to 2x.",
    techStack: [
      "C#",
      "ASP.NET Core Web API",
      "SQL Server",
      "Microsoft Azure",
      "Crystal Reports",
      ".NET Desktop",
    ],
    category: "professional",
    impact: "50%–2x faster payroll processing",
  },
  {
    title: "Enterprise Rental Management Platform",
    description:
      "Built a web-based rental tracking application hosted on Microsoft Azure with dynamic contract lifecycle tracking for lessees and automated annual property escalation rate models.",
    techStack: [
      "C#",
      "ASP.NET Core Web API",
      "React.js",
      "SQL Server",
      "Microsoft Azure",
    ],
    category: "professional",
    impact: "End-to-end lease lifecycle automation",
  },
  {
    title: "Full-Stack Inventory & Accounting System",
    description:
      "Designed a high-performance inventory system leveraging TypeScript, React, ASP.NET Core Web API, and Azure-hosted SQL Server with embedded stock tracking and sales-to-representative accounting modules.",
    techStack: [
      "TypeScript",
      "React",
      "ASP.NET Core Web API",
      "SQL Server",
      "Microsoft Azure",
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
  {
    title: "Campus Connect",
    description:
      "A school attendance and academic management portal with secure sign-in for educators. Streamlines daily attendance tracking through a clean, modern web interface.",
    techStack: ["React.js", "Tailwind CSS", "TypeScript"],
    category: "personal",
    url: "https://campus-connect-79.lovable.app",
  },
  {
    title: "Finance Flow",
    description:
      "A personal finance app for tracking expenses and managing loans. Helps users monitor spending and stay on top of financial obligations in one dashboard.",
    techStack: ["React.js", "Tailwind CSS", "TypeScript"],
    category: "personal",
    url: "https://finance-flow-60.lovable.app",
  },
  {
    title: "Phil Payroll Pal",
    description:
      "A Philippine-focused payroll management system with secure authentication. Built to simplify employee compensation tracking and payroll workflows.",
    techStack: ["React.js", "Tailwind CSS", "TypeScript"],
    category: "personal",
    url: "https://phil-payroll-pal.lovable.app",
  },
];
