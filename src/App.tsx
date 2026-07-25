import { useEffect, useState } from "react";
import { Routes, Route } from "react-router";
import { AppShell } from "@/components/layout/AppShell";
import Dashboard from "@/pages/dashboard/Dashboard";
import Projects from "@/pages/projects/Projects";
import ProjectDetail from "@/pages/projects/ProjectDetail";
// import Articles from "@/pages/Articles";
// import ArticleDetail from "@/pages/ArticleDetail";
import About from "@/pages/About";
import Skills from "@/pages/Skills";
import Contact from "@/pages/contact/Contact";
import Settings from "@/pages/Settings";
import NotFound from "@/pages/NotFound";
import { Toaster } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { SplashScreen } from "@/components/shared/SplashScreen";
import { CommandPaletteProvider } from "@/components/shared/CommandPalette";
import { cn } from "./lib/utils";

export default function App() {
  const [booted, setBooted] = useState(false);
  
  useEffect(() => {
    const t = window.setTimeout(() => setBooted(true), 50);
    return () => window.clearTimeout(t);
  }, []);

  return (
    <TooltipProvider delayDuration={150}>
      <CommandPaletteProvider>
        <SplashScreen />
        <div
          className={cn("transition-opacity duration-500 ease-out ", booted ? "opacity-100" : "opacity-0")}
        >
        <Routes>
          <Route element={<AppShell />}>
            <Route path="/" element={<Dashboard />} />
            <Route path="/projects" element={<Projects />} />
            <Route path="/projects/:slug" element={<ProjectDetail />} />
            {/* <Route path="/articles" element={<Articles />} />
            <Route path="/articles/:slug" element={<ArticleDetail />} /> */}
            <Route path="/about" element={<About />} />
            <Route path="/skills" element={<Skills />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/settings" element={<Settings />} />
            <Route path="*" element={<NotFound />} />
          </Route>
        </Routes>
        </div>
        <Toaster richColors position="bottom-right" />
      </CommandPaletteProvider>
    </TooltipProvider>
  );
}
