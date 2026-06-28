import { motion } from "framer-motion";
import {
  Code2,
  Palette,
  Database,
  Server,
  Sparkles,
  GitBranch,
  Rocket,
  GraduationCap,
} from "lucide-react";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

type SkillGroup = {
  title: string;
  description: string;
  icon: React.ReactNode;
  skills: string[];
};

const groups: SkillGroup[] = [
  {
    title: "Frontend",
    description: "What I work with every day.",
    icon: <Code2 className="h-4 w-4" />,
    skills: ["React", "JavaScript", "TypeScript", "HTML", "CSS", "Tailwind CSS", "Vite"],
  },
  {
    title: "UI",
    description: "How I assemble interfaces.",
    icon: <Palette className="h-4 w-4" />,
    skills: ["shadcn/ui", "Radix UI", "Framer Motion"],
  },
  {
    title: "Backend / BaaS",
    description: "What I reach for when I need a backend.",
    icon: <Database className="h-4 w-4" />,
    skills: ["Firebase", "Firestore", "Firebase Authentication", "Firebase Cloud Functions"],
  },
  {
    title: "Server",
    description: "For lightweight server logic.",
    icon: <Server className="h-4 w-4" />,
    skills: ["Vercel Serverless Functions"],
  },
  {
    title: "AI",
    description: "How I add intelligence to products.",
    icon: <Sparkles className="h-4 w-4" />,
    skills: ["OpenAI API", "Prompt Engineering"],
  },
  {
    title: "Version Control",
    description: "How I manage code.",
    icon: <GitBranch className="h-4 w-4" />,
    skills: ["Git", "GitHub"],
  },
  {
    title: "Deployment",
    description: "Where I ship.",
    icon: <Rocket className="h-4 w-4" />,
    skills: ["Vercel", "Firebase Hosting"],
  },
  {
    title: "Currently Learning",
    description: "What I'm actively investing time in.",
    icon: <GraduationCap className="h-4 w-4" />,
    skills: ["Python", "LangChain", "LangGraph", "AI Engineering", "RAG Systems"],
  },
];

export default function Skills() {
  return (
    <div className="space-y-8">
      <header className="space-y-3">
        <div className="text-xs font-medium uppercase tracking-wider text-muted-foreground">
          Skills
        </div>
        <h1 className="text-balance text-3xl font-semibold tracking-tight sm:text-4xl">
          A focused toolkit, not a buzzword list.
        </h1>
        <p className="max-w-3xl text-base text-muted-foreground">
          These are the tools and topics I actually use and study right now.
        </p>
      </header>

      <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
        {groups.map((g, i) => (
          <motion.div
            key={g.title}
            initial={{ opacity: 0, y: 6 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.3, delay: i * 0.04 }}
          >
            <Card className="h-full">
              <CardHeader>
                <div className="flex items-center gap-2 text-xs font-medium text-muted-foreground">
                  <span className="grid h-6 w-6 place-items-center rounded-md bg-accent text-accent-foreground">
                    {g.icon}
                  </span>
                  {g.title}
                </div>
                <p className="pt-1 text-sm text-muted-foreground">{g.description}</p>
              </CardHeader>
              <CardContent>
                <div className="flex flex-wrap gap-1.5">
                  {g.skills.map((s) => (
                    <Badge key={s} variant="outline" className="font-mono text-[11px]">
                      {s}
                    </Badge>
                  ))}
                </div>
              </CardContent>
            </Card>
          </motion.div>
        ))}
      </div>
    </div>
  );
}
