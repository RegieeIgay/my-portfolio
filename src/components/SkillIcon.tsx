import type { IconType } from "react-icons";
import { DiMsqlServer } from "react-icons/di";
import { FaShareNodes, FaWindows } from "react-icons/fa6";
import { VscAzure } from "react-icons/vsc";
import {
  SiCrystal,
  SiDotnet,
  SiJavascript,
  SiMysql,
  SiPhp,
  SiReact,
  SiSharp,
  SiSupabase,
  SiTailwindcss,
  SiTypescript,
} from "react-icons/si";
import { TbApps, TbDatabase, TbUsers } from "react-icons/tb";

const skillIconMap: Record<string, IconType> = {
  "C#": SiSharp,
  JavaScript: SiJavascript,
  TypeScript: SiTypescript,
  PHP: SiPhp,
  SQL: TbDatabase,
  "ASP.NET Core Web API": SiDotnet,
  "React.js": SiReact,
  React: SiReact,
  "Tailwind CSS": SiTailwindcss,
  "SQL Server": DiMsqlServer,
  MySQL: SiMysql,
  Supabase: SiSupabase,
  "Crystal Reports": SiCrystal,
  "Power Platform": TbApps,
  "Power Apps": TbApps,
  "Power Pages": TbApps,
  Dataverse: TbDatabase,
  SharePoint: FaShareNodes,
  "Dynamics 365": TbUsers,
  ".NET Desktop": SiDotnet,
  "Windows Forms": FaWindows,
  "Microsoft Azure": VscAzure,
};

type SkillIconProps = {
  skill: string;
  className?: string;
};

export default function SkillIcon({
  skill,
  className = "h-4 w-4 shrink-0",
}: SkillIconProps) {
  const Icon = skillIconMap[skill];

  if (!Icon) {
    return null;
  }

  return <Icon className={className} aria-hidden />;
}
