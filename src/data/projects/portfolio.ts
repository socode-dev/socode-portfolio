import PortfolioThumbnail from "@/assets/portfolio-thumbnail.png";
import type { Project } from "@/types/project";

export const portfolio: Project = {
    id: "prj_portfolio",
    slug: "portfolio",
    title: "This Portfolio",
    description:
      "The portfolio you are currently using, built as a SaaS-style application with a sidebar, command palette and data-driven pages.",
    thumbnail: "linear-gradient(135deg, #a78bfa 0%, #4f46e5 100%)",
    image: PortfolioThumbnail,
    technologies: ["Vite", "React", "TypeScript", "Vite", "Tailwind CSS", "Framer Motion", "shadcn/ui"],
    status: "shipped",
    github: "https://github.com/",
    liveDemo: "/",
    summary:
      "A portfolio designed to feel like a real product rather than a single scrolling page. It uses React Router, a typed projects data source, a command palette and a settings page, so the experience of using it is itself part of the case study.",
    problem: "",
    highlights: [
      "Dashboard, projects, articles and settings as real routes",
      "Command palette (⌘K) for fast navigation",
      "Light and dark themes built on Tailwind design tokens",
      "Every project page renders from a single typed data source",
    ],
    challenges: [
      "Designing a layout that feels like a tool, not a landing page",
      "Building a token system that holds up in both themes",
    ],
    lessonsLearned: [
      "Constraints: no fake content, no fake metrics - sharpen the design",
      "Application-feeling UIs reward boring, consistent layout primitives",
    ],
    pinned: true,
  }