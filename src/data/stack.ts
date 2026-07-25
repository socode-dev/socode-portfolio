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
    description: "What I work with every day.",
    icon: Code2,
    skills: ["React", "TypeScript", "JavaScript", "Tailwind CSS", "HTML5", "CSS3", "jQuery"],
  },
  {
    title: "State & UI",
    description: "How I assemble interfaces and manage states.",
    icon: Palette,
    skills: ["Zustand", "Context API", "shadcn/ui", "Radix UI", "Framer Motion"],
  },
  {
    title: "Backend / BaaS",
    description: "What I reach for when I need a backend and lightweight server logic.",
    icon: Server,
    skills: ["Firebase", "Cloud Functions", "Firestore", "Vercel Functions"],
  },
  {
    title: "AI",
    description: "How I add intelligence to products.",
    icon: Sparkles,
    skills: ["OpenAI API", "Prompt Engineering"],
  },
  {
    title: "Tools & Testing",
    description: "What i build with.",
    icon: Toolbox,
    skills: ["Jest", "Playwright", "Git", "GitHub", "Vitest", "Vite"],
  },
  {
    title: "Deployment",
    description: "Where I ship.",
    icon: Rocket,
    skills: ["Vercel", "Firebase Hosting"],
  },
  {
    title: "Currently Learning",
    description: "What I'm actively investing time in.",
    icon: GraduationCap,
    skills: ["Python", "LangChain", "LangGraph", "AI Engineering", "RAG Systems"],
  },
];