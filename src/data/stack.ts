import {
  Code2,
  Palette,
  Server,
  Sparkles,
  Rocket,
  Toolbox,
  GraduationCap,
  type LucideIcon,
} from "lucide-react"

type StackGroup = {
  title: string;
  description: string;
  icon: LucideIcon;
  skills: string[];
};

export const stack: StackGroup[] = [
  {
    title: "Frontend",
    description: "Building responsive, accessible web applications.",
    icon: Code2,
    skills: ["React", "TypeScript", "JavaScript", "Tailwind CSS", "HTML5", "CSS3"],
  },
  {
    title: "State Management & UI",
    description: "Managing application state and building intuitive interfaces.",
    icon: Palette,
    skills: ["Zustand", "Context API", "Tanstack Query", "shadcn/ui", "Framer Motion"],
  },
  {
    title: "Testing & Development Tools",
    description: "Testing, debugging, and maintaining reliable applications.",
    icon: Toolbox,
    skills: ["Jest", "Playwright", "React Testing Library", "MSW", "Git", "GitHub Actions", "Vitest", "Vite", "Vite PWA"],
  },
  {
    title: "Backend / BaaS",
    description: "Supporting frontend features with APIs and serverless services.",
    icon: Server,
    skills: ["Firebase", "Cloud Functions", "Firestore", "Vercel Functions"],
  },
  {
    title: "AI Integration & Engineering",
    description: "Building and integrating AI-powered capabilities into applications.",
    icon: Sparkles,
    skills: ["OpenAI API", "Gemini API", "LangGraph", "Python", "FastAPI"],
  },
  {
    title: "Deployment",
    description: "Deploying and maintaining production applications.",
    icon: Rocket,
    skills: ["Vercel", "Render", "Firebase Hosting"],
  },
  {
    title: "Currently Learning",
    description: "Areas I'm actively exploring and developing deeper expertise in.",
    icon: GraduationCap,
    skills: ["LangChain", "AI Engineering", "RAG Systems"],
  },
];