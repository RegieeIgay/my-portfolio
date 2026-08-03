import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  TbBrowser,
  TbServer,
  TbDatabase,
  TbCloud,
  TbCpu,
  TbShieldCheck,
  TbBolt,
  TbLayersIntersect,
  TbCheck,
} from "react-icons/tb";
import SkillIcon from "./SkillIcon";

type SystemPreset = "kairos" | "payroll" | "rental";

type ArchitectureLayer = {
  id: string;
  name: string;
  subtitle: string;
  icon: typeof TbBrowser;
  techs: string[];
  details: string;
  metrics: string;
  color: string;
  border: string;
  glow: string;
};

const systemPresets: Record<
  SystemPreset,
  {
    title: string;
    description: string;
    badge: string;
    layers: ArchitectureLayer[];
  }
> = {
  kairos: {
    title: "KAIROS GL & DMCGL — General Ledger ERP Architecture",
    description:
      "Full-stack Enterprise Financial Management and Chart of Accounts General Ledger ERP deployed on Microsoft Azure cloud infrastructure.",
    badge: "Financial & Retail GL ERP",
    layers: [
      {
        id: "client",
        name: "1. Client & Presentation Layer",
        subtitle: "Single Page Application",
        icon: TbBrowser,
        techs: ["TypeScript", "React", "Tailwind CSS"],
        details:
          "Modular React component tree with TypeScript strict typing, responsive chart of accounts tables, journal voucher entries, and dynamic financial statement views.",
        metrics: "Sub-100ms UI Render Time",
        color: "text-cyan-400",
        border: "border-cyan-500/30",
        glow: "bg-cyan-500/5",
      },
      {
        id: "api",
        name: "2. API Gateway & Business Controllers",
        subtitle: "ASP.NET Core Web API",
        icon: TbServer,
        techs: ["ASP.NET Core Web API", "C# .NET", "RESTful APIs"],
        details:
          "REST Controllers with Dependency Injection, JWT Token Authorization, input model validation, global exception handling, and transaction boundaries.",
        metrics: "High Throughput Web API",
        color: "text-indigo-400",
        border: "border-indigo-500/30",
        glow: "bg-indigo-500/5",
      },
      {
        id: "engine",
        name: "3. General Ledger Accounting Engine",
        subtitle: "Debit / Credit Double-Entry Validation",
        icon: TbCpu,
        techs: ["C# Engine", "SQL Transactions", "Financial Reporting"],
        details:
          "Enforces double-entry ledger equilibrium (Debit = Credit), automates fiscal period closing, journal posting, and multi-currency exchange balancing.",
        metrics: "100% Balanced Ledger Integrity",
        color: "text-emerald-400",
        border: "border-emerald-500/30",
        glow: "bg-emerald-500/5",
      },
      {
        id: "cloud",
        name: "4. Cloud Database & Azure Hosting",
        subtitle: "Azure App Service & Azure SQL Database",
        icon: TbCloud,
        techs: ["SQL Server", "Microsoft Azure", "EF Core"],
        details:
          "Azure-hosted SQL Server instance with normalized schemas, indexed journal transaction tables, and automated Azure Blob Storage backups.",
        metrics: "99.9% Cloud Availability",
        color: "text-amber-400",
        border: "border-amber-500/30",
        glow: "bg-amber-500/5",
      },
    ],
  },
  payroll: {
    title: "VMA & Hacienda — Enterprise Payroll System Architecture",
    description:
      "Hybrid Desktop WinForms and Cloud Web API payroll network featuring statutory deduction calculators and Crystal Reports integration.",
    badge: "50%–2x Workflow Acceleration",
    layers: [
      {
        id: "client",
        name: "1. Desktop & Web Client Interface",
        subtitle: "C# Windows Forms & Web Portal",
        icon: TbBrowser,
        techs: ["C#", "Windows Forms", "Crystal Reports"],
        details:
          "High-performance C# Windows Forms desktop GUI optimized for fast keyboard data entry, batch attendance imports, and print preview generators.",
        metrics: "2x Faster Processing Speed",
        color: "text-cyan-400",
        border: "border-cyan-500/30",
        glow: "bg-cyan-500/5",
      },
      {
        id: "api",
        name: "2. Modular Payroll Service Layer",
        subtitle: "ASP.NET Core Web API",
        icon: TbServer,
        techs: ["ASP.NET Core Web API", "REST APIs", "C# .NET"],
        details:
          "Encapsulates employee compensation services, rate lookup endpoints, loan deduction schedules, and statutory rate computation modules.",
        metrics: "Sub-second API Responses",
        color: "text-indigo-400",
        border: "border-indigo-500/30",
        glow: "bg-indigo-500/5",
      },
      {
        id: "engine",
        name: "3. Philippine Statutory Deduction Engine",
        subtitle: "SSS, PhilHealth, Pag-IBIG & Withholding Tax Rules",
        icon: TbCpu,
        techs: ["Deduction Algorithms", "Batch Calculators"],
        details:
          "Automated statutory contribution table lookups (SSS matrix, PhilHealth 5% tier, Pag-IBIG bracket, withholding tax tables) with personal loan tracking.",
        metrics: "Zero Calculation Margin of Error",
        color: "text-emerald-400",
        border: "border-emerald-500/30",
        glow: "bg-emerald-500/5",
      },
      {
        id: "cloud",
        name: "4. Cloud Database & Blob Storage",
        subtitle: "Azure SQL Server & Data Archival",
        icon: TbDatabase,
        techs: ["SQL Server", "Microsoft Azure", "Crystal Reports Data Pipelines"],
        details:
          "Centralized Azure SQL database for employee records, monthly payroll history tables, and Crystal Reports data sources.",
        metrics: "Secure Cloud Storage",
        color: "text-amber-400",
        border: "border-amber-500/30",
        glow: "bg-amber-500/5",
      },
    ],
  },
  rental: {
    title: "Enterprise Rental & Inventory Tracking Architecture",
    description:
      "Web-based rental contract lifecycle tracker with property escalation rate calculators and stock inventory accounting.",
    badge: "Unified Property & Inventory ERP",
    layers: [
      {
        id: "client",
        name: "1. Web User Interface",
        subtitle: "React & TypeScript Frontend",
        icon: TbBrowser,
        techs: ["React", "TypeScript", "Tailwind CSS"],
        details:
          "Dynamic dashboard displaying lessee contract statuses, upcoming property escalation alerts, stock level gauges, and sales rep allocation charts.",
        metrics: "Responsive Real-time UI",
        color: "text-cyan-400",
        border: "border-cyan-500/30",
        glow: "bg-cyan-500/5",
      },
      {
        id: "api",
        name: "2. Business Logic Web API",
        subtitle: "ASP.NET Core Services",
        icon: TbServer,
        techs: ["ASP.NET Core Web API", "RESTful API"],
        details:
          "API controllers managing lease contract extensions, automated property escalation models, stock movements, and rep sales matching.",
        metrics: "Secure JWT Endpoints",
        color: "text-indigo-400",
        border: "border-indigo-500/30",
        glow: "bg-indigo-500/5",
      },
      {
        id: "engine",
        name: "3. Escalation & Inventory Accounting Engine",
        subtitle: "Automated Annual Escalation & Stock Ledger",
        icon: TbCpu,
        techs: ["Escalation Rate Models", "Inventory Accounting"],
        details:
          "Applies annual percentage escalation formulas to rental contracts and matches real-time inventory deductions with representative sales entries.",
        metrics: "Automated Annual Lease Escalation",
        color: "text-emerald-400",
        border: "border-emerald-500/30",
        glow: "bg-emerald-500/5",
      },
      {
        id: "cloud",
        name: "4. Cloud Database Infrastructure",
        subtitle: "Azure Hosted SQL Server",
        icon: TbCloud,
        techs: ["SQL Server", "Microsoft Azure"],
        details:
          "Relational schema for contract histories, inventory stock ledgers, item pricing, and sales representative accounts hosted on Azure.",
        metrics: "High Data Integrity",
        color: "text-amber-400",
        border: "border-amber-500/30",
        glow: "bg-amber-500/5",
      },
    ],
  },
};

export default function Architecture() {
  const [activePreset, setActivePreset] = useState<SystemPreset>("kairos");
  const [activeLayer, setActiveLayer] = useState<string>("client");

  const currentPreset = systemPresets[activePreset];
  const selectedLayer = currentPreset.layers.find((l) => l.id === activeLayer) || currentPreset.layers[0];

  return (
    <section id="architecture" className="section-x section-y scroll-mt-24">
      <div className="mx-auto max-w-6xl min-w-0">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-60px" }}
          transition={{ duration: 0.5 }}
        >
          <p className="font-mono text-sm text-cyan-400">System Design & Engineering</p>
          <h2 className="mt-2 text-2xl font-bold tracking-tight text-white sm:text-3xl lg:text-4xl">
            Enterprise Cloud Architecture Blueprint
          </h2>
          <p className="mt-4 max-w-2xl text-sm leading-relaxed text-slate-400 sm:text-base">
            An interactive blueprint showing the multi-tier data flow across client frontends, ASP.NET Core Web APIs, business calculation engines, and Microsoft Azure cloud SQL Server databases.
          </p>
        </motion.div>

        {/* System Preset Selection Tabs */}
        <div className="mt-8 flex flex-wrap gap-2.5 sm:mt-10">
          {[
            { id: "kairos", label: "KAIROS GL & DMCGL (Financial ERP)" },
            { id: "payroll", label: "VMA & Hacienda (Enterprise Payroll)" },
            { id: "rental", label: "Rental & Inventory Tracking" },
          ].map((tab) => (
            <button
              key={tab.id}
              type="button"
              onClick={() => {
                setActivePreset(tab.id as SystemPreset);
                setActiveLayer("client");
              }}
              className={`rounded-xl px-4 py-2.5 font-mono text-xs font-semibold transition-all ${
                activePreset === tab.id
                  ? "bg-cyan-500 text-slate-950 shadow-lg shadow-cyan-500/20"
                  : "border border-slate-800 bg-slate-900/60 text-slate-400 hover:border-slate-700 hover:text-slate-200"
              }`}
            >
              {tab.label}
            </button>
          ))}
        </div>

        {/* System Info Banner */}
        <motion.div
          key={activePreset}
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.3 }}
          className="mt-6 rounded-2xl border border-slate-800 bg-slate-900/40 p-5 backdrop-blur-md"
        >
          <div className="flex flex-col gap-2 sm:flex-row sm:items-center sm:justify-between">
            <div>
              <span className="inline-flex rounded-full border border-cyan-500/30 bg-cyan-500/10 px-3 py-0.5 font-mono text-xs font-semibold text-cyan-400">
                {currentPreset.badge}
              </span>
              <h3 className="mt-2 text-lg font-bold text-white sm:text-xl">
                {currentPreset.title}
              </h3>
            </div>
            <div className="flex items-center gap-4 text-xs font-mono text-slate-400">
              <span className="flex items-center gap-1 text-emerald-400">
                <TbShieldCheck className="h-4 w-4" /> Azure Cloud Deployed
              </span>
              <span className="flex items-center gap-1 text-cyan-400">
                <TbBolt className="h-4 w-4" /> Real-Time Pipeline
              </span>
            </div>
          </div>
          <p className="mt-2 text-xs leading-relaxed text-slate-400 sm:text-sm">
            {currentPreset.description}
          </p>
        </motion.div>

        {/* 4-Layer Architecture Pipeline Visualizer */}
        <div className="mt-8 grid gap-4 lg:grid-cols-4">
          {currentPreset.layers.map((layer, idx) => {
            const LayerIcon = layer.icon;
            const isSelected = activeLayer === layer.id;

            return (
              <motion.div
                key={layer.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: idx * 0.1 }}
                onClick={() => setActiveLayer(layer.id)}
                className={`relative flex cursor-pointer flex-col justify-between rounded-2xl border p-5 transition-all ${
                  isSelected
                    ? `${layer.border} ${layer.glow} ring-2 ring-cyan-500/40 shadow-xl`
                    : "border-slate-800 bg-slate-900/40 hover:border-slate-700 hover:bg-slate-900/80"
                }`}
              >
                <div>
                  <div className="flex items-center justify-between">
                    <div className={`rounded-xl p-2.5 ${layer.glow} border ${layer.border}`}>
                      <LayerIcon className={`h-6 w-6 ${layer.color}`} />
                    </div>
                    <span className="font-mono text-[10px] text-slate-500">Layer 0{idx + 1}</span>
                  </div>

                  <h4 className="mt-4 text-sm font-bold text-white">{layer.name}</h4>
                  <p className="text-xs font-semibold text-slate-400">{layer.subtitle}</p>

                  <div className="mt-4 flex flex-wrap gap-1.5">
                    {layer.techs.map((tech) => (
                      <span
                        key={tech}
                        className="inline-flex items-center gap-1 rounded-md border border-slate-800 bg-slate-950 px-2 py-0.5 font-mono text-[10px] text-slate-300"
                      >
                        <SkillIcon skill={tech} className="h-3 w-3 text-cyan-400" />
                        <span>{tech}</span>
                      </span>
                    ))}
                  </div>
                </div>

                <div className="mt-5 border-t border-slate-800/80 pt-3 flex items-center justify-between text-[11px] font-mono text-slate-400">
                  <span>{layer.metrics}</span>
                  {isSelected && <TbCheck className="h-4 w-4 text-cyan-400" />}
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* Selected Layer Deep-Dive Panel */}
        <AnimatePresence mode="wait">
          <motion.div
            key={selectedLayer.id + activePreset}
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -15 }}
            transition={{ duration: 0.25 }}
            className="mt-6 rounded-2xl border border-cyan-500/30 bg-slate-900/80 p-6 backdrop-blur-xl shadow-2xl"
          >
            <div className="flex flex-col gap-4 lg:flex-row lg:items-center lg:justify-between">
              <div className="space-y-2">
                <div className="flex items-center gap-2">
                  <TbLayersIntersect className="h-5 w-5 text-cyan-400" />
                  <h4 className="font-mono text-sm font-bold text-white uppercase tracking-wider">
                    {selectedLayer.name} — Technical Details
                  </h4>
                </div>
                <p className="text-xs leading-relaxed text-slate-300 sm:text-sm">
                  {selectedLayer.details}
                </p>
              </div>

              <div className="shrink-0 rounded-xl border border-emerald-500/30 bg-emerald-500/10 px-4 py-3 text-center">
                <p className="font-mono text-[10px] uppercase text-emerald-400">Performance Metric</p>
                <p className="mt-1 font-mono text-sm font-bold text-emerald-300">
                  {selectedLayer.metrics}
                </p>
              </div>
            </div>
          </motion.div>
        </AnimatePresence>
      </div>
    </section>
  );
}
