import { profile } from "../data/portfolio";

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="section-x border-t border-slate-800 py-6 sm:py-8">
      <div className="mx-auto flex max-w-6xl min-w-0 flex-col items-center justify-between gap-3 text-center text-sm text-slate-500 sm:flex-row sm:gap-4 sm:text-left">
        <p className="min-w-0 break-words">
          © {year} {profile.name}. All rights reserved.
        </p>
        <p className="font-mono text-xs">
          Built with React & Tailwind CSS
        </p>
      </div>
    </footer>
  );
}
