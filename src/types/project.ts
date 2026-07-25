export type ProjectStatus = "in-progress" | "shipped" | "archived" | "concept" | "production-iterating";

export interface Project {
  id: string;
  slug: string;

  title: string;
  description: string;
  
  thumbnail: string;
  image: string;

  technologies: string[];

  status: ProjectStatus;

  github?: string;
  liveDemo?: string;
  documentation?: string;
  
  summary: string;
  
  problem?: string;

  highlights?: string[];

  challenges?: string[];
  
  lessonsLearned?: string[];
  
  pinned?: boolean;
}
