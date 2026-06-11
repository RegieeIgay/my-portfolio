import { profile } from "../data/portfolio";

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="border-t border-slate-800 px-6 py-8">
      <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-4 text-sm text-slate-500 sm:flex-row">
        <p>
          © {year} {profile.name}. All rights reserved.
        </p>
        <p className="font-mono text-xs">
          Built with React & Tailwind CSS
        </p>
      </div>
    </footer>
  );
}
