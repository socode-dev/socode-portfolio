import type { Project } from "@/types/project";
import { vydra } from "./vydra";
import { skillforge } from "./skillforge";
import { portfolio } from "./portfolio";
import { skillsync } from "./skillsync";
import { gtstore } from "./gtstore";
import { xtremefit } from "./xtremefit";
import { resolveos } from "./resolveos";

export const projects: Project[] = [
  resolveos,
  vydra,
  skillforge,
  portfolio,
  skillsync,
  gtstore,
  xtremefit
];

export function getProjectBySlug(slug: string): Project | undefined {
  return projects.find((p) => p.slug === slug);
}

export function getPinnedProjects(): Project[] {
  return projects.filter((p) => p.pinned);
}