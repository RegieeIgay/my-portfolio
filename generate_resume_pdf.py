import os
from reportlab.lib.pagesizes import letter
from reportlab.lib import colors
from reportlab.platypus import SimpleDocTemplate, Paragraph, Spacer, HRFlowable
from reportlab.lib.styles import getSampleStyleSheet, ParagraphStyle

pdf_path = os.path.join(os.path.dirname(__file__), "public", "Regie_Igay_Resume.pdf")
doc = SimpleDocTemplate(
    pdf_path,
    pagesize=letter,
    rightMargin=36,
    leftMargin=36,
    topMargin=36,
    bottomMargin=36
)

styles = getSampleStyleSheet()

# Custom Styles
title_style = ParagraphStyle(
    "TitleStyle",
    parent=styles["Normal"],
    fontName="Helvetica-Bold",
    fontSize=22,
    leading=26,
    alignment=1, # Center
    textColor=colors.HexColor("#0f172a")
)

subtitle_style = ParagraphStyle(
    "SubtitleStyle",
    parent=styles["Normal"],
    fontName="Helvetica-Bold",
    fontSize=11,
    leading=14,
    alignment=1,
    textColor=colors.HexColor("#475569")
)

contact_style = ParagraphStyle(
    "ContactStyle",
    parent=styles["Normal"],
    fontName="Helvetica",
    fontSize=9,
    leading=12,
    alignment=1,
    textColor=colors.HexColor("#64748b")
)

heading_style = ParagraphStyle(
    "HeadingStyle",
    parent=styles["Normal"],
    fontName="Helvetica-Bold",
    fontSize=11,
    leading=14,
    textColor=colors.HexColor("#0f172a"),
    spaceBefore=8,
    spaceAfter=4
)

body_style = ParagraphStyle(
    "BodyStyle",
    parent=styles["Normal"],
    fontName="Helvetica",
    fontSize=9,
    leading=12,
    textColor=colors.HexColor("#1e293b")
)

bullet_style = ParagraphStyle(
    "BulletStyle",
    parent=styles["Normal"],
    fontName="Helvetica",
    fontSize=8.5,
    leading=11.5,
    leftIndent=12,
    textColor=colors.HexColor("#334155")
)

bold_bullet_style = ParagraphStyle(
    "BoldBulletStyle",
    parent=styles["Normal"],
    fontName="Helvetica-Bold",
    fontSize=8.5,
    leading=11.5,
    leftIndent=12,
    textColor=colors.HexColor("#1e293b")
)

job_title_style = ParagraphStyle(
    "JobTitleStyle",
    parent=styles["Normal"],
    fontName="Helvetica-Bold",
    fontSize=9.5,
    leading=12.5,
    textColor=colors.HexColor("#0f172a")
)

company_style = ParagraphStyle(
    "CompanyStyle",
    parent=styles["Normal"],
    fontName="Helvetica-Oblique",
    fontSize=9,
    leading=12,
    textColor=colors.HexColor("#475569")
)

story = []

# Header
story.append(Paragraph("Regie Igay", title_style))
story.append(Spacer(1, 2))
story.append(Paragraph("SOFTWARE ENGINEER", subtitle_style))
story.append(Spacer(1, 3))
story.append(Paragraph("Pontevedra, Negros Occidental, Philippines 6105 &bull; 09708218657 &bull; regieeigay@gmail.com", contact_style))
story.append(Spacer(1, 6))
story.append(HRFlowable(width="100%", thickness=1, color=colors.HexColor("#cbd5e1"), spaceAfter=6, spaceBefore=2))

# Summary
story.append(Paragraph("SUMMARY", heading_style))
summary_text = (
    "Results-driven Software Developer with experience designing, building, and deploying web and desktop applications using "
    "<b>C#, ASP.NET Core Web API, React.js, and PHP</b>. Specialized in delivering robust enterprise tools including payroll networks, "
    "inventory software, rental management, and enterprise General Ledger (GL) ERP systems. Adept at optimizing database operations across "
    "<b>SQL Server, MySQL, and Supabase</b> hosted on <b>Microsoft Azure</b> to significantly scale processing efficiency and performance."
)
story.append(Paragraph(summary_text, body_style))
story.append(Spacer(1, 6))
story.append(HRFlowable(width="100%", thickness=0.5, color=colors.HexColor("#e2e8f0"), spaceAfter=6, spaceBefore=2))

# Experience
story.append(Paragraph("EXPERIENCE", heading_style))

# Job 1
story.append(Paragraph("<b>Software Engineer</b> &nbsp;|&nbsp; 02/2025 - Current &nbsp;|&nbsp; Bacolod City, Philippines", job_title_style))
story.append(Paragraph("CByte (Computer Programming Services)", company_style))
j1_bullets = [
    "Engineered and deployed a comprehensive <b>Hacienda Payroll System</b> utilizing <b>C# .NET Windows Forms, ASP.NET Core Web API</b>, and online <b>SQL Server</b> databases on <b>Microsoft Azure</b>.",
    "Integrated <b>Crystal Reports</b> to automate job and rate tracking processes, increasing payroll processing speed by <b>2x</b> over historical manual computation methods.",
    "Developed a high-volume <b>Academic Payroll System</b> supporting automated deduction handling (SSS, Pag-IBIG, PhilHealth, and personal loans).",
    "Optimized automated and manual transaction calculations for teachers and trainees, accelerating administrative workflows by up to <b>50%</b>.",
    "Built a web-based <b>Rental Management System</b> featuring dynamic contract lifecycle tracking for lessees and integrated reporting components.",
    "Programmed administrative functionalities allowing automated configuration and execution of annual property escalation rate models.",
    "Designed an enterprise-grade <b>Inventory System</b> leveraging <b>TypeScript, React, ASP.NET Core Web API</b>, and <b>SQL Server</b>.",
    "Implemented cross-functional stock tracking utilities and embedded an internal accounting module to match active sales items with assigned representatives.",
    "Engineered full-stack Enterprise Financial Management & GL ERPs (<b>KAIROS GL</b> and <b>DMCGL</b>) and <b>VMA Enterprise Payroll</b> hosted on <b>Microsoft Azure</b>."
]
for b in j1_bullets:
    story.append(Paragraph(f"• {b}", bullet_style))

story.append(Spacer(1, 4))

# Job 2
story.append(Paragraph("<b>Software Engineering Trainee</b> &nbsp;|&nbsp; 07/2024 - 12/2024 &nbsp;|&nbsp; Bacolod City, Philippines", job_title_style))
story.append(Paragraph("Coders Tribe (SDTP)", company_style))
j2_bullets = [
    "Developed dynamic web interfaces using <b>React, HTML, CSS, Bootstrap</b>, and <b>Tailwind CSS</b>.",
    "Designed mockups and functional blueprints using <b>Figma</b> to map out UI/UX architectures.",
    "Managed structured query designs and transactional schemas within <b>MySQL</b> and <b>SQL Server</b>.",
    "Leveraged <b>Microsoft Power Platform</b> (Power Pages, Power Apps, and Dataverse) to engineer custom low-code solutions.",
    "Configured custom administrative integrations within <b>Microsoft SharePoint</b> and <b>Microsoft Dynamics 365 CRM</b>."
]
for b in j2_bullets:
    story.append(Paragraph(f"• {b}", bullet_style))

story.append(Spacer(1, 4))

# Job 3
story.append(Paragraph("<b>Software Engineering Intern</b> &nbsp;|&nbsp; 09/2023 - 12/2023 &nbsp;|&nbsp; Bacolod City, Philippines", job_title_style))
story.append(Paragraph("CByte (Computer Programming Services)", company_style))
j3_bullets = [
    "Completed corporate industrial requirements to earn an official <b>On-the-Job Training (OJT) Completion Certificate</b> from CByte.",
    "Created and maintained production-level database-driven applications utilizing <b>C# .NET Windows Forms</b> and modular <b>Web APIs</b>.",
    "Generated dynamic business insight summaries within Windows Forms environments using <b>Crystal Reports</b>.",
    "Tested, debugged, and resolved runtime environment errors to support software patch cycles and deployment tasks."
]
for b in j3_bullets:
    story.append(Paragraph(f"• {b}", bullet_style))

story.append(Spacer(1, 6))
story.append(HRFlowable(width="100%", thickness=0.5, color=colors.HexColor("#e2e8f0"), spaceAfter=6, spaceBefore=2))

# Skills
story.append(Paragraph("SKILLS", heading_style))
skills_list = [
    "<b>Programming Languages:</b> C#, JavaScript, TypeScript, PHP, SQL, HTML, CSS",
    "<b>Backend & API Frameworks:</b> ASP.NET Core Web API, C# .NET, MVC, REST APIs",
    "<b>Frontend Libraries & UI/UX:</b> React.js, Bootstrap, Tailwind CSS, Figma",
    "<b>Database Management Systems:</b> SQL Server, MySQL, Supabase",
    "<b>Reporting & Implementations:</b> Crystal Reports, Excel Export Integration, System Deployment, Testing, Bug Verification",
    "<b>Enterprise & Cloud Platforms:</b> Microsoft Azure, Microsoft Power Apps, Power Pages, Dataverse, SharePoint, Dynamics 365 CRM",
    "<b>Product Environments Architecture:</b> Payroll Systems, Inventory Tracking Solutions, Rental Management Platforms, Financial & GL ERPs"
]
for s in skills_list:
    story.append(Paragraph(f"• {s}", bullet_style))

story.append(Spacer(1, 6))
story.append(HRFlowable(width="100%", thickness=0.5, color=colors.HexColor("#e2e8f0"), spaceAfter=6, spaceBefore=2))

# Education
story.append(Paragraph("EDUCATION", heading_style))
story.append(Paragraph("<b>Bachelor of Science in Information Technology</b> &nbsp;|&nbsp; 2024 &nbsp;|&nbsp; Hinigaran, Negros Occidental", job_title_style))
story.append(Paragraph("Central Philippine State University", company_style))
edu_bullets = [
    "Awarded the academic distinction of <b>\"Best in OJT\" (On-the-Job Training) Certificate</b> by the university board for superior evaluation results.",
    "Acquired structural expertise in foundational software design, data storage systems, and dynamic web application logic using <b>C# .NET, React, ASP.NET Core</b>, and <b>SQL Server</b>."
]
for b in edu_bullets:
    story.append(Paragraph(f"• {b}", bullet_style))

story.append(Spacer(1, 6))
story.append(HRFlowable(width="100%", thickness=0.5, color=colors.HexColor("#e2e8f0"), spaceAfter=6, spaceBefore=2))

# Certifications
story.append(Paragraph("CERTIFICATIONS & ACADEMIC HONORS", heading_style))
certs = [
    "<b>Certificate of Completion – Software Development Training Program (SDTP)</b> (12/2024 | Coders Tribe)<br/>Completed intensive training focused on enterprise backend API architectures, front-end ecosystems, and dynamic low-code environments.",
    "<b>Best in OJT Excellence Certificate</b> (2024 | Central Philippine State University)<br/>Conferred by the university department for achieving the highest performance metrics during the industrial immersion program.",
    "<b>Certificate of On-the-Job Training (OJT) Completion</b> (12/2023 | CByte Computer Programming Services)<br/>Verified fulfillment of industrial programming credentials, designing and modifying enterprise desktop software solutions."
]
for c in certs:
    story.append(Paragraph(f"• {c}", bullet_style))
    story.append(Spacer(1, 2))

# Build document
doc.build(story)
print("PDF generated successfully at:", pdf_path)
