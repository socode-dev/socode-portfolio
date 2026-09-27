import ResolveOSThumbnail from "@/assets/resolveos-thumbnail.png";
import type { Project } from "@/types/project";

export const resolveos: Project = {
  id: "prj_resolveos",
  slug: "resolveos",

  title: "ResolveOS",

  description:
    "An incident investigation platform currently being built by a two-person engineering team, with frontend engineering owned by me.",

  thumbnail:
    "linear-gradient(135deg, #6366f1 0%, #312e81 100%)",

  image: ResolveOSThumbnail,

  technologies: [ "React", "TypeScript", "Vite", "Tailwind CSS", "TanStack Query", "Axios", "Zod", "React Hook Form", "Vite PWA", "shadcn/ui", "Base UI", "MSW", "Vitest", "React Testing Library"],

  status: "in-progress",

  github: "https://github.com/nexuslabs-eng/resolve-os",

  summary:
    "ResolveOS is an incident investigation platform currently being built by a two-person engineering team. I own the frontend engineering, while my teammate owns the backend and platform domain. The frontend is being developed incrementally around production-shaped contracts, authentication, testing, and an operational workspace foundation.",

  problem:
    "Incident-response software needs to present complex operational state without making investigation workflows difficult to follow. ResolveOS is being designed around a clear workspace for incidents and investigations, with the frontend structured to support the product as it grows.",

  highlights: [
    "Built the React + TypeScript frontend architecture around React Router, TanStack Query, Axios, Zod, and reusable UI components",
    "Implemented the complete authentication and onboarding flow, including account creation, email verification, workspace setup, profile setup, password recovery, session handling, and protected navigation",
    "Established shared API and domain contracts with Zod so frontend and backend development can progress independently against the same interfaces",
    "Built production-shaped MSW handlers and integration tests so authentication and recovery flows can be developed and tested before the real backend endpoints are complete",
    "Established a frontend testing foundation with Vitest, React Testing Library, and MSW",
    "Built the PWA foundation with install and update behavior designed not to interrupt an active user session",
  ],

  challenges: [
    "Designing the frontend against shared contracts while the backend was being developed separately",
    "Building realistic API behavior with MSW without coupling the frontend to temporary mock implementations",
  ],

  lessonsLearned: [
    "Shared contracts create a cleaner boundary between frontend and backend development",
    "Authentication flows require careful handling of session, onboarding, loading, and error states",
    "A realistic mock API is most useful when it follows the same contracts and error behavior as the eventual backend",
    "For operational software, information hierarchy is as important as the individual UI components",
  ],

  pinned: true,
};