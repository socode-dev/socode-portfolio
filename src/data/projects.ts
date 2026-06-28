import type { Project } from "@/types/project";

/**
 * Single source of truth for every project in the portfolio.
 * Add a new project by appending an entry here — the list page,
 * detail page and command palette will pick it up automatically.
 */
export const projects: Project[] = [
  {
    id: "prj_smartbudget",
    slug: "smartbudget",
    title: "SmartBudget",
    description:
      "A financial intelligence platform with a deterministic calculation engine and an AI layer constrained to interpretation only.",
    thumbnail: "linear-gradient(135deg, #7c3aed 0%, #4338ca 100%)",
    technologies: ["React", "JavaScript", "Tailwind CSS", "OpenAI API", "Firebase"],
    status: "in-progress",
    github: "https://github.com/",
    summary:
      "Most personal finance apps show you charts. They don't tell you what the charts mean. SmartBudget is built to close that gap — a deterministic financial intelligence platform where the calculations are always correct and AI is constrained to explaining what those calculations found.",
    highlights: [
      "Architecture: a deterministic engine owns all financial logic — budget calculations, anomaly detection, spending categorisation",
      "An AI layer sits on top and is only allowed to interpret what the deterministic layer surfaces — it cannot own decisions or touch business logic",
      "An LLM orchestrator decides which insight is most critical to surface at any given moment, so the user sees signal, not noise",
      "A deliberate constraint: giving AI ownership of financial calculations is a reliability problem; constraining it to interpretation keeps the system predictable and auditable — which matters in a microfinance context",
    ],
    challenges: [
      "Designing a prompt layer that stays stable as financial data grows",
      "Building the deterministic engine to be composable — new rules slot in without touching existing logic",
      "Keeping the UI calm and readable while AI insights stream in asynchronously",
    ],
    lessonsLearned: [
      "Constraining AI to interpretation only makes the system more trustworthy, not less intelligent",
      "Separating what the system calculates from what it says about those calculations is a product design decision, not just a technical one",
      "Shipping a narrow slice well beats shipping a wide slice half-built",
      "Status: pilot-ready phase. Target deployment: microfinance banks.",
    ],
    featured: true,
  },
  {
    id: "prj_skillforge",
    slug: "skillforge",
    title: "SkillForge",
    description:
      "A platform that lets users request skills from one another with real-time communication and a modern frontend architecture.",
    thumbnail: "linear-gradient(135deg, #06b6d4 0%, #7c3aed 100%)",
    technologies: ["React", "TypeScript", "Tailwind CSS", "Firebase", "Firestore"],
    status: "in-progress",
    github: "https://github.com/",
    summary:
      "SkillForge is a platform where users can request skills from one another and coordinate through real-time chat. The focus is on a modern frontend architecture with strict TypeScript, reusable component primitives, and a chat module isolated behind a clean interface.",
    highlights: [
      "Skill request flow with structured, typed fields",
      "Real-time chat between users",
      "Composable React components with strict TypeScript types",
      "Feature-based folder structure that scales without churn",
    ],
    challenges: [
      "Modelling messages and threads with strong types end to end",
      "Designing reusable components without over-abstracting",
      "Keeping the chat UI smooth under fast updates",
    ],
    lessonsLearned: [
      "TypeScript pays off most at module boundaries",
      "Reusability comes from consistent props, not inheritance",
      "Chat UIs reward small, focused state slices",
    ],
    featured: true,
  },
  {
    id: "prj_portfolio",
    slug: "portfolio",
    title: "This Portfolio",
    description:
      "The portfolio you are currently using — built as a SaaS-style application with a sidebar, command palette and data-driven pages.",
    thumbnail: "linear-gradient(135deg, #a78bfa 0%, #4f46e5 100%)",
    technologies: ["React", "TypeScript", "Vite", "Tailwind CSS", "Framer Motion", "shadcn/ui"],
    status: "in-progress",
    github: "https://github.com/",
    liveDemo: "/",
    summary:
      "A portfolio designed to feel like a real product rather than a single scrolling page. It uses React Router, a typed projects data source, a command palette and a settings page — so the experience of using it is itself part of the case study.",
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
      "Constraints — no fake content, no fake metrics — sharpen the design",
      "Application-feeling UIs reward boring, consistent layout primitives",
    ],
    featured: false,
  },
];

export function getProjectBySlug(slug: string): Project | undefined {
  return projects.find((p) => p.slug === slug);
}

export function getFeaturedProjects(): Project[] {
  return projects.filter((p) => p.featured);
}
