import { useState, useRef, useEffect, type FormEvent } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { TbTerminal2, TbX, TbCornerDownLeft } from "react-icons/tb";
import { profile, skillCategories, projects } from "../data/portfolio";
import { useTheme, themeOptions, type ThemeColor } from "../context/ThemeContext";

type TerminalDrawerProps = {
  isOpen: boolean;
  onClose: () => void;
  onOpenResume?: () => void;
};

type HistoryEntry = {
  id: string;
  command: string;
  output: React.ReactNode;
};

export default function TerminalDrawer({ isOpen, onClose, onOpenResume }: TerminalDrawerProps) {
  const { theme, setTheme } = useTheme();
  const [inputVal, setInputVal] = useState("");
  const [history, setHistory] = useState<HistoryEntry[]>([
    {
      id: "welcome",
      command: "welcome",
      output: (
        <div className="space-y-1 text-slate-300">
          <p className="text-cyan-400 font-bold">
            Regie Igay — Software Engineer CLI v1.0.0
          </p>
          <p className="text-slate-400">
            Type <span className="text-cyan-300 font-semibold">&apos;help&apos;</span> to list all available commands. Press <span className="text-amber-400">Esc</span> to close terminal.
          </p>
        </div>
      ),
    },
  ]);
  const [commandHistory, setCommandHistory] = useState<string[]>([]);
  const [historyIndex, setHistoryIndex] = useState<number>(-1);

  const bottomRef = useRef<HTMLDivElement>(null);
  const inputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    if (isOpen) {
      setTimeout(() => inputRef.current?.focus(), 100);
    }
  }, [isOpen]);

  useEffect(() => {
    bottomRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [history]);

  const handleCommand = (e: FormEvent) => {
    e.preventDefault();
    const cmdStr = inputVal.trim();
    if (!cmdStr) return;

    const lowerCmd = cmdStr.toLowerCase();
    const args = lowerCmd.split(" ");
    const mainCmd = args[0];

    let outputContent: React.ReactNode;

    switch (mainCmd) {
      case "help":
        outputContent = (
          <div className="space-y-1 text-xs">
            <p className="font-semibold text-cyan-400">Available Commands:</p>
            <div className="grid grid-cols-[110px_1fr] gap-x-2 gap-y-1">
              <span className="text-emerald-400">whoami / about</span>
              <span>Candidate profile summary</span>
              <span className="text-emerald-400">skills</span>
              <span>List technical skills & stack</span>
              <span className="text-emerald-400">projects</span>
              <span>List enterprise projects & builds</span>
              <span className="text-emerald-400">experience</span>
              <span>View employment & OJT history</span>
              <span className="text-emerald-400">contact</span>
              <span>Get email & phone details</span>
              <span className="text-emerald-400">resume / cv</span>
              <span>Open executive resume modal</span>
              <span className="text-emerald-400">theme [color]</span>
              <span>Change theme (cyan, emerald, violet, amber, rose, blue)</span>
              <span className="text-emerald-400">clear</span>
              <span>Clear terminal history</span>
              <span className="text-emerald-400">sudo</span>
              <span>Run superuser command</span>
            </div>
          </div>
        );
        break;

      case "whoami":
      case "about":
        outputContent = (
          <div className="space-y-1.5 text-xs text-slate-300">
            <p className="font-bold text-cyan-400">{profile.name} — {profile.role}</p>
            <p>📍 {profile.location}</p>
            <p className="text-slate-400">{profile.summary}</p>
          </div>
        );
        break;

      case "skills":
        outputContent = (
          <div className="space-y-2 text-xs">
            <p className="font-bold text-cyan-400">Technical Stack Matrix:</p>
            {skillCategories.map((cat) => (
              <div key={cat.title}>
                <span className="font-semibold text-indigo-300">{cat.title}: </span>
                <span className="text-slate-300">{cat.skills.join(", ")}</span>
              </div>
            ))}
          </div>
        );
        break;

      case "projects":
        outputContent = (
          <div className="space-y-2 text-xs text-slate-300">
            <p className="font-bold text-cyan-400">Enterprise Projects:</p>
            {projects
              .filter((p) => p.category === "professional")
              .map((p) => (
                <div key={p.title} className="border-l-2 border-slate-700 pl-2">
                  <p className="font-bold text-white">{p.title}</p>
                  <p className="text-[11px] text-slate-400">{p.description}</p>
                  <p className="text-[10px] text-cyan-400 font-mono">Stack: {p.techStack.join(", ")}</p>
                </div>
              ))}
          </div>
        );
        break;

      case "experience":
        outputContent = (
          <div className="space-y-2 text-xs text-slate-300">
            <p className="font-bold text-cyan-400">Work Experience History:</p>
            <div className="space-y-1.5">
              <p>⚡ <strong>Software Engineer</strong> @ CByte (02/2025 - Present)</p>
              <p>⚡ <strong>Software Engineering Trainee</strong> @ Coders Tribe (07/2024 - 12/2024)</p>
              <p>⚡ <strong>Software Engineering Intern</strong> @ CByte (09/2023 - 12/2023)</p>
            </div>
          </div>
        );
        break;

      case "contact":
        outputContent = (
          <div className="space-y-1 text-xs text-slate-300">
            <p className="font-bold text-cyan-400">Contact Details:</p>
            <p>✉️ Email: <a href={`mailto:${profile.email}`} className="text-cyan-300 underline">{profile.email}</a></p>
            <p>📞 Phone: <span className="font-mono">09708218657</span></p>
            <p>📍 Location: {profile.location}</p>
            <p>🟢 Status: {profile.availability}</p>
          </div>
        );
        break;

      case "resume":
      case "cv":
        onOpenResume?.();
        outputContent = <p className="text-emerald-400">Opening executive resume modal...</p>;
        break;

      case "theme":
        if (args[1]) {
          const targetTheme = args[1] as ThemeColor;
          if (themeOptions.some((t) => t.id === targetTheme)) {
            setTheme(targetTheme);
            outputContent = <p className="text-emerald-400">Theme updated to <strong>{targetTheme}</strong>!</p>;
          } else {
            outputContent = (
              <p className="text-rose-400">
                Invalid theme &apos;{args[1]}&apos;. Choose from: {themeOptions.map((t) => t.id).join(", ")}.
              </p>
            );
          }
        } else {
          outputContent = (
            <p className="text-slate-300">Current theme: <strong className="text-cyan-400">{theme}</strong>. Available: {themeOptions.map((t) => t.id).join(", ")}.</p>
          );
        }
        break;

      case "clear":
        setHistory([]);
        setInputVal("");
        return;

      case "sudo":
        outputContent = (
          <p className="text-amber-400 font-mono">
            Permission granted: You are now running with root developer privileges. 🚀
          </p>
        );
        break;

      default:
        outputContent = (
          <p className="text-rose-400">
            Command not recognized: &apos;{cmdStr}&apos;. Type <span className="text-cyan-300 underline">&apos;help&apos;</span> for commands.
          </p>
        );
        break;
    }

    setHistory((prev) => [
      ...prev,
      { id: Date.now().toString(), command: cmdStr, output: outputContent },
    ]);
    setCommandHistory((prev) => [...prev, cmdStr]);
    setHistoryIndex(-1);
    setInputVal("");
  };

  const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "ArrowUp") {
      e.preventDefault();
      if (commandHistory.length === 0) return;
      const nextIdx = historyIndex === -1 ? commandHistory.length - 1 : Math.max(0, historyIndex - 1);
      setHistoryIndex(nextIdx);
      setInputVal(commandHistory[nextIdx]);
    } else if (e.key === "ArrowDown") {
      e.preventDefault();
      if (historyIndex === -1) return;
      const nextIdx = historyIndex + 1;
      if (nextIdx >= commandHistory.length) {
        setHistoryIndex(-1);
        setInputVal("");
      } else {
        setHistoryIndex(nextIdx);
        setInputVal(commandHistory[nextIdx]);
      }
    } else if (e.key === "Escape") {
      onClose();
    }
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <div className="fixed inset-0 z-50 flex items-end sm:items-center justify-center p-2 sm:p-6 overflow-hidden">
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="fixed inset-0 bg-slate-950/80 backdrop-blur-md"
          />

          {/* Terminal Window */}
          <motion.div
            initial={{ opacity: 0, y: 50, scale: 0.96 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 50, scale: 0.96 }}
            transition={{ duration: 0.2 }}
            className="relative z-10 w-full max-w-3xl h-[480px] flex flex-col rounded-2xl border border-slate-800 bg-slate-950/95 font-mono shadow-2xl overflow-hidden ring-1 ring-cyan-500/20"
          >
            {/* Window Bar */}
            <div className="flex items-center justify-between border-b border-slate-800 bg-slate-900/90 px-4 py-2.5">
              <div className="flex items-center gap-2">
                <span className="h-3 w-3 rounded-full bg-rose-500/80 cursor-pointer" onClick={onClose} />
                <span className="h-3 w-3 rounded-full bg-amber-500/80" />
                <span className="h-3 w-3 rounded-full bg-emerald-500/80" />
                <span className="ml-2 text-xs font-semibold text-slate-400">
                  regie@igay-dev:~$
                </span>
              </div>

              <div className="flex items-center gap-2 text-slate-400">
                <TbTerminal2 className="h-4 w-4 text-cyan-400" />
                <button
                  type="button"
                  onClick={onClose}
                  className="rounded p-1 text-slate-400 hover:bg-slate-800 hover:text-white"
                  aria-label="Close terminal"
                >
                  <TbX className="h-4 w-4" />
                </button>
              </div>
            </div>

            {/* Terminal Body Output */}
            <div className="flex-1 overflow-y-auto p-4 space-y-3 text-xs leading-relaxed">
              {history.map((entry) => (
                <div key={entry.id} className="space-y-1">
                  {entry.command !== "welcome" && (
                    <div className="flex items-center gap-2 text-slate-400">
                      <span className="text-emerald-400 font-bold">regie@igay-dev:~$</span>
                      <span className="text-white font-medium">{entry.command}</span>
                    </div>
                  )}
                  <div className="pl-0">{entry.output}</div>
                </div>
              ))}
              <div ref={bottomRef} />
            </div>

            {/* Command Input Form */}
            <form
              onSubmit={handleCommand}
              className="flex items-center gap-2 border-t border-slate-800 bg-slate-900/60 px-4 py-3"
            >
              <span className="text-emerald-400 font-bold text-xs shrink-0">
                regie@igay-dev:~$
              </span>
              <input
                ref={inputRef}
                type="text"
                value={inputVal}
                onChange={(e) => setInputVal(e.target.value)}
                onKeyDown={handleKeyDown}
                placeholder="Type 'help', 'skills', 'projects', 'contact'..."
                className="w-full bg-transparent text-xs text-white placeholder-slate-600 focus:outline-none"
              />
              <button
                type="submit"
                className="shrink-0 text-cyan-400 transition hover:text-cyan-300"
                title="Execute command"
              >
                <TbCornerDownLeft className="h-4 w-4" />
              </button>
            </form>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
}
