import { lazy, useEffect, useState } from "react";
import { Routes, Route } from "react-router";
import { AppShell } from "@/components/layout/AppShell";
import Dashboard from "@/pages/dashboard/Dashboard";
import {
  ProjectsSkeleton, 
  ProjectDetailSkeleton, 
  SkillsSkeleton, 
  AboutSkeleton, 
  ContactSkeleton,
  // ArticlesSkeleton,
  // ArticleDetailLoading,
  SettingsSkeleton,
  NotFoundSkeleton
} from "@/skeletons/index"
import LazyWrapper from "./lazy/LazyWrapper";
import { Toaster } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { SplashScreen } from "@/components/shared/SplashScreen";
import { CommandPaletteProvider } from "@/components/shared/CommandPalette";
import { cn } from "./lib/utils";

const Projects = lazy(() => import("@/pages/projects/Projects"));
const ProjectDetail = lazy(() => import("@/pages/projects/ProjectDetail"));
// const Articles = lazy(() => import("@/pages/Articles"));
// const ArticleDetail = lazy(() => import("@/pages/ArticleDetail"));
const About = lazy(() => import("@/pages/About"));
const Skills = lazy(() => import("@/pages/Skills"));
const Contact = lazy(() => import("@/pages/contact/Contact"));
const Settings = lazy(() => import("@/pages/Settings"));
const NotFound = lazy(() => import("@/pages/NotFound"));

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
            
            <Route path="/projects" element={
              <LazyWrapper loadingFallback={<ProjectsSkeleton />}>
                <Projects />
              </LazyWrapper>
            } />

            <Route path="/projects/:slug" element={
              <LazyWrapper loadingFallback={<ProjectDetailSkeleton />}>
                <ProjectDetail />
              </LazyWrapper>
            } />

            {/* <Route path="/articles" element={
              <LazyWrapper loadingFallback={<ArticlesSkeleton />}>
                <Articles />
              </LazyWrapper>
            } />
            
            <Route path="/articles/:slug" element={
              <LazyWrapper loadingFallback={<ArticleDetailLoading />}>
                <ArticleDetail />
              </LazyWrapper>
            } /> */}
            
            <Route path="/about" element={
              <LazyWrapper loadingFallback={<AboutSkeleton />}>
                <About />
              </LazyWrapper>
            } />

            <Route path="/skills" element={
              <LazyWrapper loadingFallback={<SkillsSkeleton />}>
                <Skills />
              </LazyWrapper>
            } />
            
            <Route path="/contact" element={
              <LazyWrapper loadingFallback={<ContactSkeleton />}>
                <Contact />
              </LazyWrapper>
            } />
            
            <Route path="/settings" element={
              <LazyWrapper loadingFallback={<SettingsSkeleton />}>
                <Settings />
              </LazyWrapper>
            } />

            <Route path="*" element={
              <LazyWrapper loadingFallback={<NotFoundSkeleton />}>
                <NotFound />
              </LazyWrapper>
            } />
          </Route>
        </Routes>
        </div>
        <Toaster richColors position="bottom-right" />
      </CommandPaletteProvider>
    </TooltipProvider>
  );
}
