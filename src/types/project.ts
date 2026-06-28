export type ProjectStatus = "in-progress" | "shipped" | "archived" | "concept";

export interface Project {
  id: string;
  slug: string;
  title: string;
  description: string;
  thumbnail: string;
  technologies: string[];
  status: ProjectStatus;
  github?: string;
  liveDemo?: string;
  documentation?: string;
  summary: string;
  highlights: string[];
  challenges: string[];
  lessonsLearned: string[];
  featured?: boolean;
}
