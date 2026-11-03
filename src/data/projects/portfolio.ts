import PortfolioThumbnail from "@/assets/portfolio-thumbnail.webp";
import type { Project } from "@/types/project";

export const portfolio: Project = {
    id: "prj_portfolio",
    slug: "portfolio",
    
    title: "Developer Workspace",
    
    description:
      "An interactive developer portfolio built as a dashboard-style application, featuring structured project showcases, keyboard-driven navigation, theme customization, and reusable UI components.",
    
      thumbnail: "linear-gradient(135deg, #a78bfa 0%, #4f46e5 100%)",
    
    image: PortfolioThumbnail,
    
    featuredStack: [ "React", "TypeScript", "shadcn/ui", "Framer Motion"],
    
    technologies: {
      "Frontend": ["React", "TypeScript", "Vite", "Tailwind CSS"],
      "UI & Animation": ["Framer Motion", "shadcn/ui",],
    },
    
    status: "shipped",
    
    github: "https://github.com/socode-dev",
    liveDemo: "/",
    
    summary: "Developer Workspace is a React and TypeScript portfolio designed around the interaction patterns of a modern SaaS application. It brings together a dashboard, project case studies, skills, articles, and settings within a consistent application shell. I built it with reusable UI components, typed project data, keyboard-driven navigation, and a theme system supporting light and dark modes. The result is an interactive experience that makes my engineering work easy to navigate and explore.",
    
    problem: "Traditional portfolio layouts can make it difficult to explore multiple projects and understand the engineering decisions behind them. I wanted a structured, application-style experience that presents my work clearly while demonstrating the frontend architecture and interface patterns I use when building products.",
    
    highlights: [
      "Built a responsive application-style interface with dedicated routes for the dashboard, projects, and settings.",
      "Implemented a command palette with keyboard shortcuts for quick navigation across the workspace.",
      "Developed a consistent light and dark theme system using Tailwind CSS design tokens.",
      "Designed reusable layouts and UI components to maintain consistent navigation and presentation across pages.",
      "Implemented a typed, data-driven project system that renders individual project pages from structured TypeScript objects.",
    ],

    challenges: [
      "Designing a dashboard-style interface that remains intuitive as a personal portfolio rather than becoming unnecessarily complex.",
      "Maintaining visual consistency and accessible contrast across light and dark themes.",
      "Structuring reusable components and typed project data to support new projects without duplicating page implementations.",
    ],

    lessonsLearned: [
      "Clear information hierarchy and consistent layout patterns are essential when adapting application interfaces to content-focused experiences.",
      "A reusable component system and centralized design tokens simplify maintenance and visual consistency.",
      "Typed, data-driven architecture makes it easier to extend an application without repeatedly modifying its presentation layer.",
      "Real project content and verifiable achievements communicate engineering ability more effectively than decorative metrics.",
    ],
    
    pinned: false,
  }
