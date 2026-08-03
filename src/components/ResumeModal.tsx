import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { TbFileText, TbPrinter, TbCopy, TbCheck, TbX, TbDownload } from "react-icons/tb";
import { profile } from "../data/portfolio";

type ResumeModalProps = {
  isOpen: boolean;
  onClose: () => void;
};

export default function ResumeModal({ isOpen, onClose }: ResumeModalProps) {
  const [copied, setCopied] = useState(false);

  const handlePrint = () => {
    window.print();
  };

  const handleCopyText = () => {
    const resumeText = `
REGIE IGAY
SOFTWARE ENGINEER
Pontevedra, Negros Occidental, Philippines 6105 | 09708218657 | regieeigay@gmail.com

SUMMARY
Results-driven Software Developer with experience designing, building, and deploying web and desktop applications using C#, ASP.NET Core Web API, React.js, and PHP. Specialized in delivering robust enterprise tools including payroll networks, inventory software, and rental management tracking systems. Adept at optimizing database operations across SQL Server, MySQL, and Supabase to significantly scale processing efficiency and performance.

EXPERIENCE
• Software Engineer | 02/2025 - Current | Bacolod City, Philippines
  CByte (Computer Programming Services)
  - Engineered and deployed a comprehensive Hacienda Payroll System utilizing C# .NET Windows Forms, ASP.NET Core Web API, and online SQL Server databases.
  - Integrated Crystal Reports to automate job and rate tracking processes, increasing payroll processing speed by 2x over historical manual computation methods.
  - Developed a high-volume Academic Payroll System supporting automated deduction handling (SSS, Pag-IBIG, PhilHealth, and personal loans).
  - Built a comprehensive web-based Rental Management System featuring dynamic contract lifecycle tracking.
  - Designed an enterprise-grade Inventory System leveraging TypeScript, React, ASP.NET Core Web API, and SQL Server.
  - Developed Enterprise Financial & GL ERPs (KAIROS GL & DMCGL) and VMA Enterprise Payroll hosted on Microsoft Azure.

• Software Engineering Trainee | 07/2024 - 12/2024 | Bacolod City, Philippines
  Coders Tribe (SDTP)
  - Developed dynamic web interfaces using React, HTML, CSS, Bootstrap, and Tailwind CSS.
  - Managed schemas within MySQL and SQL Server.
  - Leveraged Microsoft Power Platform (Power Pages, Power Apps, Dataverse) and SharePoint/Dynamics 365.

• Software Engineering Intern | 09/2023 - 12/2023 | Bacolod City, Philippines
  CByte (Computer Programming Services)
  - Earned official On-the-Job Training (OJT) Completion Certificate.
  - Created C# .NET Windows Forms and Web API applications with Crystal Reports.

EDUCATION
• Bachelor of Science in Information Technology (2024)
  Central Philippine State University | Awarded "Best in OJT" Certificate.

CERTIFICATIONS & HONORS
• Certificate of Completion – Software Development Training Program (SDTP) (12/2024 | Coders Tribe)
• Best in OJT Excellence Certificate (2024 | Central Philippine State University)
• Certificate of On-the-Job Training (OJT) Completion (12/2023 | CByte)
    `.trim();

    navigator.clipboard.writeText(resumeText);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <AnimatePresence>
      {isOpen && (
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
            className="relative z-10 w-full max-w-4xl max-h-[90vh] flex flex-col rounded-2xl border border-slate-800 bg-slate-900 shadow-2xl overflow-hidden"
          >
            {/* Modal Header */}
            <div className="flex flex-wrap items-center justify-between gap-3 border-b border-slate-800 bg-slate-950/60 px-5 py-4 sm:px-6">
              <div className="flex items-center gap-2.5">
                <TbFileText className="h-5 w-5 text-cyan-400" />
                <h3 className="font-mono text-sm font-semibold uppercase tracking-wider text-white">
                  Regie Igay — Resume / CV
                </h3>
              </div>

              <div className="flex flex-wrap items-center gap-2">
                <a
                  href="/Regie_Igay_Resume.pdf"
                  download="Regie_Igay_Resume.pdf"
                  className="inline-flex items-center gap-1.5 rounded-lg bg-cyan-500 px-3.5 py-1.5 text-xs font-semibold text-slate-950 transition hover:bg-cyan-400 shadow-md shadow-cyan-500/20"
                  title="Download PDF directly to your device"
                >
                  <TbDownload className="h-4 w-4" />
                  <span>Download PDF</span>
                </a>

                <button
                  type="button"
                  onClick={handlePrint}
                  className="inline-flex items-center gap-1.5 rounded-lg border border-slate-700 bg-slate-900 px-3 py-1.5 text-xs font-medium text-slate-200 transition hover:border-slate-500 hover:bg-slate-800"
                  title="Print or Save as PDF"
                >
                  <TbPrinter className="h-4 w-4" />
                  <span>Print</span>
                </button>

                <button
                  type="button"
                  onClick={handleCopyText}
                  className="inline-flex items-center gap-1.5 rounded-lg border border-slate-800 bg-slate-900 px-3 py-1.5 text-xs font-medium text-slate-300 transition hover:border-slate-700 hover:text-white"
                  title="Copy text to clipboard"
                >
                  {copied ? (
                    <>
                      <TbCheck className="h-4 w-4 text-emerald-400" />
                      <span className="text-emerald-400">Copied!</span>
                    </>
                  ) : (
                    <>
                      <TbCopy className="h-4 w-4 text-slate-400" />
                      <span>Copy Text</span>
                    </>
                  )}
                </button>

                <button
                  type="button"
                  onClick={onClose}
                  className="rounded-lg p-1.5 text-slate-400 transition hover:bg-slate-800 hover:text-white"
                  aria-label="Close modal"
                >
                  <TbX className="h-5 w-5" />
                </button>
              </div>
            </div>

            {/* Printable Resume Body */}
            <div className="flex-1 overflow-y-auto p-6 sm:p-8 space-y-6 text-slate-300 print:text-black print:bg-white print:p-0">
              {/* Header */}
              <div className="border-b border-slate-800 pb-4 text-center sm:text-left">
                <h1 className="text-2xl font-bold tracking-tight text-white sm:text-3xl">
                  Regie Igay
                </h1>
                <p className="mt-1 text-sm font-semibold tracking-wider text-cyan-400 uppercase">
                  SOFTWARE ENGINEER
                </p>
                <div className="mt-2 flex flex-wrap items-center justify-center sm:justify-start gap-3 font-mono text-xs text-slate-400">
                  <span>📍 Pontevedra, Negros Occidental, Philippines 6105</span>
                  <span>📞 09708218657</span>
                  <span>✉️ {profile.email}</span>
                </div>
              </div>

              {/* Summary */}
              <div>
                <h2 className="font-mono text-xs font-semibold uppercase tracking-wider text-cyan-400">
                  Summary
                </h2>
                <p className="mt-2 text-xs leading-relaxed text-slate-300 sm:text-sm">
                  Results-driven Software Developer with experience designing, building, and deploying web and desktop applications using <strong>C#, ASP.NET Core Web API, React.js, and PHP</strong>. Specialized in delivering robust enterprise tools including payroll networks, inventory software, and rental management tracking systems. Adept at optimizing database operations across <strong>SQL Server, MySQL, and Supabase</strong> hosted on <strong>Microsoft Azure</strong> to significantly scale processing efficiency and performance.
                </p>
              </div>

              {/* Experience */}
              <div>
                <h2 className="font-mono text-xs font-semibold uppercase tracking-wider text-cyan-400">
                  Experience
                </h2>
                <div className="mt-3 space-y-5">
                  <div className="rounded-xl border border-slate-800/80 bg-slate-950/40 p-4">
                    <div className="flex flex-col gap-1 sm:flex-row sm:items-center sm:justify-between">
                      <h3 className="text-sm font-bold text-white">
                        Software Engineer
                      </h3>
                      <span className="font-mono text-xs text-slate-400">
                        02/2025 - Current | Bacolod City, Philippines
                      </span>
                    </div>
                    <p className="text-xs font-semibold text-slate-400 italic mt-0.5">
                      CByte (Computer Programming Services)
                    </p>
                    <ul className="mt-3 space-y-2 text-xs text-slate-300">
                      <li className="flex items-start gap-2">
                        <span className="mt-1 text-cyan-400">•</span>
                        <span>Engineered and deployed a comprehensive <strong>Hacienda Payroll System</strong> utilizing C# .NET Windows Forms, ASP.NET Core Web API, and online SQL Server databases.</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="mt-1 text-cyan-400">•</span>
                        <span>Integrated <strong>Crystal Reports</strong> to automate job and rate tracking processes, increasing payroll processing speed by <strong>2x</strong> over historical manual computation methods.</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="mt-1 text-cyan-400">•</span>
                        <span>Developed a high-volume <strong>Academic Payroll System</strong> supporting automated deduction handling (SSS, Pag-IBIG, PhilHealth, and personal loans).</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="mt-1 text-cyan-400">•</span>
                        <span>Optimized automated and manual transaction calculations for teachers and trainees, accelerating administrative workflows by up to <strong>50%</strong>.</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="mt-1 text-cyan-400">•</span>
                        <span>Built a comprehensive web-based <strong>Rental Management System</strong> featuring dynamic contract lifecycle tracking for lessees and integrated reporting components.</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="mt-1 text-cyan-400">•</span>
                        <span>Programmed administrative functionalities allowing automated configuration and execution of annual property escalation rate models.</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="mt-1 text-cyan-400">•</span>
                        <span>Designed an enterprise-grade <strong>Inventory System</strong> leveraging TypeScript, React, ASP.NET Core Web API, and SQL Server.</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="mt-1 text-cyan-400">•</span>
                        <span>Implemented cross-functional stock tracking utilities and embedded an internal accounting module to match active sales items with assigned representatives.</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="mt-1 text-cyan-400">•</span>
                        <span>Developed Enterprise Financial & GL ERPs (<strong>KAIROS GL</strong> & <strong>DMCGL</strong>) and <strong>VMA Enterprise Payroll</strong> hosted on Microsoft Azure cloud infrastructure.</span>
                      </li>
                    </ul>
                  </div>

                  <div className="rounded-xl border border-slate-800/80 bg-slate-950/40 p-4">
                    <div className="flex flex-col gap-1 sm:flex-row sm:items-center sm:justify-between">
                      <h3 className="text-sm font-bold text-white">
                        Software Engineering Trainee
                      </h3>
                      <span className="font-mono text-xs text-slate-400">
                        07/2024 - 12/2024 | Bacolod City, Philippines
                      </span>
                    </div>
                    <p className="text-xs font-semibold text-slate-400 italic mt-0.5">
                      Coders Tribe (SDTP)
                    </p>
                    <ul className="mt-3 space-y-2 text-xs text-slate-300">
                      <li className="flex items-start gap-2">
                        <span className="mt-1 text-cyan-400">•</span>
                        <span>Developed dynamic web interfaces using React, HTML, CSS, Bootstrap, and Tailwind CSS.</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="mt-1 text-cyan-400">•</span>
                        <span>Designed mockups and functional blueprints using Figma to map out UI/UX architectures.</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="mt-1 text-cyan-400">•</span>
                        <span>Managed structured query designs and transactional schemas within MySQL and SQL Server.</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="mt-1 text-cyan-400">•</span>
                        <span>Leveraged Microsoft Power Platform (Power Pages, Power Apps, and Dataverse) to engineer custom low-code solutions.</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="mt-1 text-cyan-400">•</span>
                        <span>Configured custom administrative integrations within Microsoft SharePoint and Microsoft Dynamics 365 CRM.</span>
                      </li>
                    </ul>
                  </div>

                  <div className="rounded-xl border border-slate-800/80 bg-slate-950/40 p-4">
                    <div className="flex flex-col gap-1 sm:flex-row sm:items-center sm:justify-between">
                      <h3 className="text-sm font-bold text-white">
                        Software Engineering Intern
                      </h3>
                      <span className="font-mono text-xs text-slate-400">
                        09/2023 - 12/2023 | Bacolod City, Philippines
                      </span>
                    </div>
                    <p className="text-xs font-semibold text-slate-400 italic mt-0.5">
                      CByte (Computer Programming Services)
                    </p>
                    <ul className="mt-3 space-y-2 text-xs text-slate-300">
                      <li className="flex items-start gap-2">
                        <span className="mt-1 text-cyan-400">•</span>
                        <span>Completed rigorous corporate industrial requirements to earn an official On-the-Job Training (OJT) Completion Certificate from CByte.</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="mt-1 text-cyan-400">•</span>
                        <span>Created and maintained production-level database-driven applications utilizing C# .NET Windows Forms and modular Web APIs.</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="mt-1 text-cyan-400">•</span>
                        <span>Generated dynamic business insight summaries within Windows Forms environments using Crystal Reports.</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="mt-1 text-cyan-400">•</span>
                        <span>Tested, debugged, and resolved runtime environment errors to support software patch cycles and deployment tasks.</span>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>

              {/* Skills */}
              <div>
                <h2 className="font-mono text-xs font-semibold uppercase tracking-wider text-cyan-400">
                  Skills
                </h2>
                <div className="mt-3 space-y-2 text-xs text-slate-300">
                  <p><strong>Programming Languages:</strong> C#, JavaScript, TypeScript, PHP, SQL, HTML, CSS</p>
                  <p><strong>Backend & API Frameworks:</strong> ASP.NET Core Web API, C# .NET, MVC, REST APIs</p>
                  <p><strong>Frontend Libraries & UI/UX:</strong> React.js, Bootstrap, Tailwind CSS, Figma</p>
                  <p><strong>Database Management Systems:</strong> SQL Server, MySQL, Supabase</p>
                  <p><strong>Reporting & Implementations:</strong> Crystal Reports, Excel Export Integration, System Deployment, Testing, Bug Verification</p>
                  <p><strong>Enterprise & Cloud Platforms:</strong> Microsoft Azure, Microsoft Power Apps, Power Pages, Dataverse, SharePoint, Dynamics 365 CRM</p>
                  <p><strong>Product Environments Architecture:</strong> Payroll Systems, Inventory Tracking Solutions, Rental Management Platforms, Financial & GL ERPs</p>
                </div>
              </div>

              {/* Education */}
              <div>
                <h2 className="font-mono text-xs font-semibold uppercase tracking-wider text-cyan-400">
                  Education
                </h2>
                <div className="mt-3 rounded-xl border border-slate-800/80 bg-slate-950/40 p-4">
                  <div className="flex flex-col gap-1 sm:flex-row sm:items-center sm:justify-between">
                    <h3 className="text-sm font-bold text-white">
                      Bachelor of Science in Information Technology
                    </h3>
                    <span className="font-mono text-xs text-slate-400">
                      2024 | Hinigaran, Negros Occidental
                    </span>
                  </div>
                  <p className="text-xs font-semibold text-slate-400 italic mt-0.5">
                    Central Philippine State University
                  </p>
                  <ul className="mt-2 space-y-1.5 text-xs text-slate-300">
                    <li className="flex items-start gap-2">
                      <span className="mt-1 text-cyan-400">•</span>
                      <span>Awarded the academic distinction of <strong>&quot;Best in OJT&quot; (On-the-Job Training) Certificate</strong> by the university board for superior evaluation results.</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="mt-1 text-cyan-400">•</span>
                      <span>Acquired structural expertise in foundational software design, data storage systems, and dynamic web application logic using C# .NET, React, ASP.NET Core, and SQL Server.</span>
                    </li>
                  </ul>
                </div>
              </div>

              {/* Certifications & Academic Honors */}
              <div>
                <h2 className="font-mono text-xs font-semibold uppercase tracking-wider text-cyan-400">
                  Certifications & Academic Honors
                </h2>
                <div className="mt-3 space-y-3 text-xs text-slate-300">
                  <div className="rounded-xl border border-slate-800/80 bg-slate-950/40 p-3.5">
                    <p className="font-bold text-white">Certificate of Completion – Software Development Training Program (SDTP) <span className="font-normal text-slate-400">(12/2024 | Coders Tribe)</span></p>
                    <p className="mt-1 text-slate-400">Completed intensive training focused on enterprise backend API architectures, front-end ecosystems, and dynamic low-code environments.</p>
                  </div>
                  <div className="rounded-xl border border-slate-800/80 bg-slate-950/40 p-3.5">
                    <p className="font-bold text-white">Best in OJT Excellence Certificate <span className="font-normal text-slate-400">(2024 | Central Philippine State University)</span></p>
                    <p className="mt-1 text-slate-400">Conferred by the university department for achieving the highest performance metrics during the industrial immersion program.</p>
                  </div>
                  <div className="rounded-xl border border-slate-800/80 bg-slate-950/40 p-3.5">
                    <p className="font-bold text-white">Certificate of On-the-Job Training (OJT) Completion <span className="font-normal text-slate-400">(12/2023 | CByte Computer Programming Services)</span></p>
                    <p className="mt-1 text-slate-400">Verified fulfillment of industrial programming credentials, designing and modifying enterprise desktop software solutions.</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Footer */}
            <div className="flex items-center justify-between border-t border-slate-800 bg-slate-950/60 px-6 py-3 text-xs text-slate-400">
              <span>Click &quot;Download PDF&quot; to save <strong>Regie_Igay_Resume.pdf</strong> instantly.</span>
              <a
                href="/Regie_Igay_Resume.pdf"
                download="Regie_Igay_Resume.pdf"
                className="inline-flex items-center gap-1.5 font-semibold text-cyan-400 hover:text-cyan-300"
              >
                <TbDownload className="h-4 w-4" /> Download PDF
              </a>
            </div>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
}
