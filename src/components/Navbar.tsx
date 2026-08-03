import { useEffect, useRef, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { TbPalette, TbCheck, TbTerminal2, TbFileText, TbMail, TbMoon, TbSun } from "react-icons/tb";
import { navLinks, profile } from "../data/portfolio";
import { themeOptions, useTheme, type ThemeColor } from "../context/ThemeContext";

type NavbarProps = {
  onOpenResume?: () => void;
  onOpenTerminal?: () => void;
};

export default function Navbar({ onOpenResume, onOpenTerminal }: NavbarProps) {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = menuOpen ? "hidden" : "";

    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        setMenuOpen(false);
      }
    };

    const onResize = () => {
      if (window.innerWidth >= 768) {
        setMenuOpen(false);
      }
    };

    window.addEventListener("keydown", onKeyDown);
    window.addEventListener("resize", onResize);

    return () => {
      document.body.style.overflow = "";
      window.removeEventListener("keydown", onKeyDown);
      window.removeEventListener("resize", onResize);
    };
  }, [menuOpen]);

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-300 ${
        scrolled || menuOpen
          ? "border-b border-slate-800/80 bg-slate-950/80 backdrop-blur-xl"
          : "bg-transparent"
      }`}
    >
      <nav className="section-x mx-auto flex max-w-6xl items-center justify-between gap-4 py-3 sm:py-4">
        <a
          href="#hero"
          onClick={() => setMenuOpen(false)}
          className="min-w-0 shrink font-mono text-sm font-medium tracking-tight text-cyan-400 transition-colors hover:text-cyan-300"
        >
          {profile.name.split(" ")[0]}
          <span className="text-slate-500">.dev</span>
        </a>

        <ul className="hidden items-center gap-6 lg:gap-8 md:flex">
          {navLinks.map((link) => (
            <li key={link.href}>
              <a
                href={link.href}
                className="text-sm text-slate-400 transition-colors hover:text-white"
              >
                {link.label}
              </a>
            </li>
          ))}
        </ul>

        <div className="flex items-center gap-2 sm:gap-3">
          <ThemePicker />

          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            type="button"
            onClick={onOpenTerminal}
            aria-label="Open Developer CLI Terminal"
            title="Open Developer Terminal (>_)"
            className="inline-flex h-10 items-center gap-1.5 rounded-lg bg-cyan-500/10 px-3.5 font-mono text-xs font-semibold text-cyan-400 ring-1 ring-cyan-500/30 transition hover:bg-cyan-500/20"
          >
            <TbTerminal2 className="h-4 w-4" />
            <span className="hidden sm:inline">&gt;_ CLI</span>
          </motion.button>

          <motion.button
            whileHover={{ scale: 1.04 }}
            whileTap={{ scale: 0.96 }}
            type="button"
            onClick={onOpenResume}
            className="hidden h-10 items-center gap-1.5 rounded-lg bg-cyan-500/10 px-3.5 text-xs font-semibold text-cyan-400 ring-1 ring-cyan-500/30 transition hover:bg-cyan-500/20 md:inline-flex"
          >
            <TbFileText className="h-4 w-4" />
            <span>Resume</span>
          </motion.button>

          <motion.a
            whileHover={{ scale: 1.04 }}
            whileTap={{ scale: 0.96 }}
            href="#contact"
            className="hidden h-10 items-center gap-1.5 rounded-lg bg-cyan-500/10 px-3.5 text-xs font-semibold text-cyan-400 ring-1 ring-cyan-500/30 transition hover:bg-cyan-500/20 md:inline-flex"
          >
            <TbMail className="h-4 w-4" />
            <span>Get in touch</span>
          </motion.a>

          <button
            type="button"
            aria-label="Toggle menu"
            aria-expanded={menuOpen}
            onClick={() => setMenuOpen((open) => !open)}
            className="inline-flex h-10 w-10 shrink-0 items-center justify-center rounded-lg border border-slate-800 text-slate-300 md:hidden"
          >
            <span className="sr-only">Menu</span>
            <svg
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth={1.5}
            >
              {menuOpen ? (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M6 18L18 6M6 6l12 12"
                />
              ) : (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M4 6h16M4 12h16M4 18h16"
                />
              )}
            </svg>
          </button>
        </div>
      </nav>

      <AnimatePresence>
        {menuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.25 }}
            className="overflow-hidden border-t border-slate-800 bg-slate-950/95 md:hidden"
          >
            <ul className="section-x mx-auto flex max-w-6xl flex-col gap-1 py-4">
              {navLinks.map((link) => (
                <li key={link.href}>
                  <a
                    href={link.href}
                    onClick={() => setMenuOpen(false)}
                    className="block rounded-lg px-3 py-3 text-base text-slate-300 transition hover:bg-slate-900 hover:text-white"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
              <li className="pt-2 flex flex-col gap-2">
                <button
                  type="button"
                  onClick={() => {
                    setMenuOpen(false);
                    onOpenResume?.();
                  }}
                  className="inline-flex w-full items-center justify-center gap-2 rounded-lg bg-cyan-500/10 px-4 py-3 text-sm font-semibold text-cyan-400 ring-1 ring-cyan-500/30 transition hover:bg-cyan-500/20"
                >
                  <TbFileText className="h-4.5 w-4.5" />
                  <span>View Resume / CV</span>
                </button>
                <a
                  href="#contact"
                  onClick={() => setMenuOpen(false)}
                  className="inline-flex w-full items-center justify-center gap-2 rounded-lg bg-cyan-500/10 px-4 py-3 text-sm font-semibold text-cyan-400 ring-1 ring-cyan-500/30 transition hover:bg-cyan-500/20 sm:w-auto"
                >
                  <TbMail className="h-4.5 w-4.5" />
                  <span>Get in touch</span>
                </a>
              </li>
            </ul>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}

function ThemePicker() {
  const { theme, setTheme, mode, setMode } = useTheme();
  const [isOpen, setIsOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setIsOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  return (
    <div className="relative" ref={dropdownRef}>
      <motion.button
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
        type="button"
        onClick={() => setIsOpen((prev) => !prev)}
        aria-label="Edit theme color and mode"
        title="Edit Theme Color & Dark/Light Mode"
        className="relative inline-flex h-10 w-10 items-center justify-center rounded-lg border border-slate-800 bg-slate-900/60 text-slate-300 transition hover:border-slate-700 hover:bg-slate-900 hover:text-white"
      >
        <TbPalette className="h-5 w-5 text-cyan-400" />
        <span
          className="absolute right-1.5 top-1.5 h-2.5 w-2.5 rounded-full ring-2 ring-slate-950"
          style={{ backgroundColor: themeOptions.find((t) => t.id === theme)?.primaryColor }}
        />
      </motion.button>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: 10, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 10, scale: 0.95 }}
            transition={{ duration: 0.15 }}
            className="absolute right-0 top-12 z-50 w-60 rounded-2xl border border-slate-800 bg-slate-900/95 p-3.5 shadow-2xl backdrop-blur-xl"
          >
            {/* Mode Switcher Header */}
            <div className="mb-3 border-b border-slate-800 pb-3">
              <p className="font-mono text-xs font-semibold uppercase tracking-wider text-slate-400">
                Appearance Mode
              </p>
              <div className="mt-2 grid grid-cols-2 gap-1.5 rounded-xl border border-slate-800 bg-slate-950/80 p-1">
                <button
                  type="button"
                  onClick={() => setMode("dark")}
                  className={`inline-flex items-center justify-center gap-1.5 rounded-lg py-1.5 text-xs font-semibold transition-all ${
                    mode === "dark"
                      ? "bg-slate-800 text-cyan-400 shadow-sm"
                      : "text-slate-400 hover:text-slate-200"
                  }`}
                >
                  <TbMoon className="h-3.5 w-3.5" />
                  <span>Dark</span>
                </button>
                <button
                  type="button"
                  onClick={() => setMode("light")}
                  className={`inline-flex items-center justify-center gap-1.5 rounded-lg py-1.5 text-xs font-semibold transition-all ${
                    mode === "light"
                      ? "bg-slate-100 text-slate-950 shadow-sm"
                      : "text-slate-400 hover:text-slate-200"
                  }`}
                >
                  <TbSun className="h-3.5 w-3.5 text-amber-500" />
                  <span>Light</span>
                </button>
              </div>
            </div>

            {/* Accent Color Palette Selector */}
            <div className="mb-2 px-1">
              <p className="font-mono text-xs font-semibold uppercase tracking-wider text-slate-400">
                Accent Color
              </p>
            </div>

            <div className="space-y-1">
              {themeOptions.map((opt) => {
                const isActive = theme === opt.id;
                return (
                  <button
                    key={opt.id}
                    type="button"
                    onClick={() => {
                      setTheme(opt.id as ThemeColor);
                      setIsOpen(false);
                    }}
                    className={`flex w-full items-center justify-between rounded-xl px-3 py-2 text-xs font-medium transition-all ${
                      isActive
                        ? "bg-slate-800/80 text-white ring-1 ring-slate-700"
                        : "text-slate-400 hover:bg-slate-800/40 hover:text-slate-200"
                    }`}
                  >
                    <div className="flex items-center gap-2.5">
                      <span
                        className="h-3.5 w-3.5 shrink-0 rounded-full shadow-sm"
                        style={{ backgroundColor: opt.primaryColor }}
                      />
                      <span>{opt.name}</span>
                    </div>
                    {isActive && <TbCheck className="h-4 w-4 text-cyan-400" />}
                  </button>
                );
              })}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
