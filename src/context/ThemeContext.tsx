import { createContext, useContext, useEffect, useState, type ReactNode } from "react";

export type ThemeColor = "cyan" | "emerald" | "violet" | "amber" | "rose" | "blue";
export type Mode = "dark" | "light";

export type ThemeOption = {
  id: ThemeColor;
  name: string;
  primaryColor: string;
  previewClass: string;
};

export const themeOptions: ThemeOption[] = [
  { id: "cyan", name: "Cyan Cyber", primaryColor: "#22d3ee", previewClass: "bg-cyan-400" },
  { id: "emerald", name: "Emerald Mint", primaryColor: "#34d399", previewClass: "bg-emerald-400" },
  { id: "violet", name: "Violet Neon", primaryColor: "#a78bfa", previewClass: "bg-violet-400" },
  { id: "amber", name: "Amber Sunset", primaryColor: "#fbbf24", previewClass: "bg-amber-400" },
  { id: "rose", name: "Rose Electric", primaryColor: "#fb7185", previewClass: "bg-rose-400" },
  { id: "blue", name: "Sapphire Blue", primaryColor: "#60a5fa", previewClass: "bg-blue-400" },
];

type ThemeContextType = {
  theme: ThemeColor;
  setTheme: (theme: ThemeColor) => void;
  mode: Mode;
  setMode: (mode: Mode) => void;
  toggleMode: () => void;
};

const ThemeContext = createContext<ThemeContextType | undefined>(undefined);

export function ThemeProvider({ children }: { children: ReactNode }) {
  const [theme, setThemeState] = useState<ThemeColor>(() => {
    const saved = localStorage.getItem("portfolio-theme") as ThemeColor;
    return saved && themeOptions.some((t) => t.id === saved) ? saved : "cyan";
  });

  const [mode, setModeState] = useState<Mode>(() => {
    const savedMode = localStorage.getItem("portfolio-mode") as Mode;
    return savedMode === "light" ? "light" : "dark";
  });

  const setTheme = (newTheme: ThemeColor) => {
    setThemeState(newTheme);
    localStorage.setItem("portfolio-theme", newTheme);
  };

  const setMode = (newMode: Mode) => {
    setModeState(newMode);
    localStorage.setItem("portfolio-mode", newMode);
  };

  const toggleMode = () => {
    setMode(mode === "dark" ? "light" : "dark");
  };

  useEffect(() => {
    document.documentElement.setAttribute("data-theme", theme);
    document.documentElement.setAttribute("data-mode", mode);
  }, [theme, mode]);

  return (
    <ThemeContext.Provider value={{ theme, setTheme, mode, setMode, toggleMode }}>
      {children}
    </ThemeContext.Provider>
  );
}

export function useTheme() {
  const context = useContext(ThemeContext);
  if (!context) {
    throw new Error("useTheme must be used within a ThemeProvider");
  }
  return context;
}
