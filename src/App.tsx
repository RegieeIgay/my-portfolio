import { useState } from "react";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import Skills from "./components/Skills";
import Timeline from "./components/Timeline";
import Architecture from "./components/Architecture";
import Projects from "./components/Projects";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import ResumeModal from "./components/ResumeModal";
import TerminalDrawer from "./components/TerminalDrawer";
import { ThemeProvider } from "./context/ThemeContext";

export default function App() {
  const [isResumeOpen, setIsResumeOpen] = useState(false);
  const [isTerminalOpen, setIsTerminalOpen] = useState(false);

  return (
    <ThemeProvider>
      <div className="relative min-h-screen overflow-x-hidden bg-slate-950 text-slate-200">
        <div
          aria-hidden
          className="pointer-events-none fixed inset-0 -z-10 bg-[radial-gradient(ellipse_at_top,_rgba(var(--accent-400),0.12),_transparent_55%),radial-gradient(ellipse_at_bottom_right,_rgba(99,102,241,0.1),_transparent_50%)]"
        />
        <Navbar
          onOpenResume={() => setIsResumeOpen(true)}
          onOpenTerminal={() => setIsTerminalOpen(true)}
        />
        <main>
          <Hero onOpenResume={() => setIsResumeOpen(true)} />
          <About />
          <Skills />
          <Timeline />
          <Architecture />
          <Projects />
          <Contact />
        </main>
        <Footer />
        <ResumeModal
          isOpen={isResumeOpen}
          onClose={() => setIsResumeOpen(false)}
        />
        <TerminalDrawer
          isOpen={isTerminalOpen}
          onClose={() => setIsTerminalOpen(false)}
          onOpenResume={() => setIsResumeOpen(true)}
        />
      </div>
    </ThemeProvider>
  );
}
