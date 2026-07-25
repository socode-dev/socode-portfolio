import SkillForgeThumbnail from "@/assets/skillforge-thumbnail.png";
import type { Project } from "@/types/project";

export const skillforge: Project = {
  id: "prj_skillforge",
  slug: "skillforge",
    
  title: "SkillForge",
    
  description: "A platform that lets users request skills from one another with real-time communication and a modern frontend architecture.",
    
  thumbnail: "linear-gradient(135deg, #06b6d4 0%, #7c3aed 100%)",
  image: SkillForgeThumbnail,
    
  technologies: ["Vite", "React", "TypeScript", "Tailwind CSS", "Firebase", "Firestore", "Cloud Functions", "Jest", "Playwright", "Github Actions(CI)"],
    
  status: "in-progress",
    
  github: "https://github.com/socode-dev/skillforge",
    
  summary: "SkillForge is a platform where users can request skills from one another and coordinate through real-time chat. The focus is on a modern frontend architecture with strict TypeScript, reusable component primitives, and a chat module isolated behind a clean interface.",
    
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
    
  pinned: true,
}