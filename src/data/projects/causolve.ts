import CausolveThumbnail from "@/assets/causolve-thumbnail.webp";
import type { Project } from "@/types/project";

export const causolve: Project = {
  id: "prj_causolve",
  slug: "causolve",

  title: "Causolve",

  description:
    "A full-stack incident investigation and response platform that helps engineering teams investigate complex failures through structured evidence, competing hypotheses, and human-controlled remediation.",

  thumbnail:
    "linear-gradient(135deg, #6366f1 0%, #312e81 100%)",

  image: CausolveThumbnail,

  featuredStack: ["React", "TypeScript", "TanStack Query", "Playwright"],
  
  technologies: {
    "Frontend": ["React", "TypeScript", "Vite", "Tailwind CSS", "React Router", "shadcn/ui", "Vite PWA"],
    "State, Data & Forms": ["TanStack Query", "Zustand", "Axios", "Zod", "React Hook Form"],
    "Backend & Database": ["Node.js", "Express", "PostgreSQL", "Prisma"],
    "AI Service": ["Python", "FastAPI", "LangGraph", "Gemini", "Pydantic"],
    "Testing & CI": ["MSW", "Vitest", "React Testing Library", "Playwright", "Pytest", "GitHub Actions"],
  },

  status: "production-iterating",

  github: "https://github.com/nexuslabs-eng/causolve",
  liveDemo: "https://causolve.vercel.app",

  summary:
    "Causolve is a full-stack incident investigation and response platform designed to help engineering teams reason through complex operational failures. The system combines a React-based engineering workspace, an Express and PostgreSQL backend, and a Python AI service built with FastAPI, LangGraph, and Gemini. I engineer the frontend and AI service, collaborating on API contracts, authentication integration, testing, and deployment. All three services are deployed, with incident investigation capabilities under active development.",

  problem:
    "Investigating production incidents often involves fragmented telemetry, conflicting signals, and incomplete evidence. Existing workflows can make it difficult to evaluate competing explanations or determine whether a proposed remediation is justified. Causolve addresses this through structured investigations, evidence-aware reasoning, investigation integrity, and human-authorized remediation.",

  highlights: [
    "Architected and deployed a responsive React and TypeScript engineering workspace using React Router, TanStack Query, Zustand, Axios, and reusable UI components.",
    "Implemented authentication and organization onboarding interfaces covering email/password, Google and GitHub OAuth, email verification, password recovery, session restoration, and protected navigation.",
    "Integrated production REST APIs using shared Zod contracts, coordinating frontend and backend development around consistent request and response models.",
    "Developed an installable Progressive Web App with application update prompts and responsive workspace interfaces.",
    "Implemented 29 Playwright end-to-end tests covering authentication and onboarding workflows, with all tests passing on Chromium.",
    "Engineered a Python AI service foundation with FastAPI, Pydantic, LangGraph, and Gemini, including asynchronous provider integration, strict API validation, and cross-language contract compatibility tests.",
    "Established automated testing and CI checks across the frontend and AI service, supporting incremental integration and deployment.",
    "Deployed the frontend and AI service to Vercel and Render, collaborating on the production architecture and integration of the full-stack platform.",
  ],

  challenges: [
    "Coordinating independently developed frontend, backend, and AI services while maintaining consistent API contracts and clear ownership boundaries.",
    "Designing reliable session restoration and protected navigation that distinguish authentication failures from temporary backend unavailability.",
    "Building realistic MSW-backed development workflows while transitioning supported features to production APIs.",
    "Maintaining compatibility between Python/Pydantic and TypeScript/Zod contracts without coupling AI orchestration to backend authorization and persistence.",
  ],

  lessonsLearned: [
    "Clear service boundaries and shared contracts make independently developed systems easier to integrate and evolve.",
    "Reliable authentication requires explicit handling of session verification, network failures, onboarding state, and protected navigation.",
    "Automated contract and integration tests reduce regressions when multiple services evolve concurrently.",
    "Separating AI reasoning from authorization and remediation enforcement creates a safer and more maintainable architecture.",
    "Continuous deployment and automated testing support iterative development without waiting for every product capability to be complete.",
  ],

  pinned: true,
};