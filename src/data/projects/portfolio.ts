import PortfolioThumbnail from "@/assets/portfolio-thumbnail.png";
import type { Project } from "@/types/project";

export const portfolio: Project = {
    id: "prj_portfolio",
    slug: "portfolio",
    title: "This Portfolio",
    description:
      "A product-style portfolio that presents who I am, the stack I work with and the projects I have built through a focused, app-like experience.",
    thumbnail: "linear-gradient(135deg, #a78bfa 0%, #4f46e5 100%)",
    image: PortfolioThumbnail,
    technologies: ["Vite", "React", "TypeScript", "Tailwind CSS", "Framer Motion", "shadcn/ui"],
    status: "shipped",
    github: "https://github.com/socode-dev",
    liveDemo: "/",
    summary:
      "This portfolio is both a personal profile and a working example of how I think about product interfaces. Instead of using a traditional one-page resume layout, I structured it like a lightweight SaaS app: a dashboard introduces the main signal, project pages show what I have shipped, the skills section explains the tools I use, and the contact flow makes it easy to reach me. The product-style shell is a design choice, but the purpose is simple: make my experience, technical range and project work easy to explore.",
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
