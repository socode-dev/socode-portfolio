import SkillForgeThumbnail from "@/assets/skillforge-thumbnail.png";
import type { Project } from "@/types/project";

export const skillforge: Project = {
  id: "prj_skillforge",
  slug: "skillforge",
  
  title: "SkillForge",
  
  description: "A peer-to-peer skill marketplace with real-time chat, coin-based escrow for requests, Firebase backend transactions, and performance-optimized frontend architecture.",
  
  thumbnail: "linear-gradient(135deg, #06b6d4 0%, #7c3aed 100%)",
  image: SkillForgeThumbnail,
  
  technologies: ["Vite", "React", "TypeScript", "Tailwind CSS", "Firebase", "Firestore", "Cloud Functions", "Jest", "Playwright", "Github Actions(CI)"],
  
  status: "shipped",
  
  github: "https://github.com/socode-dev/skillforge",
  liveDemo: "https://skillforge-hub.vercel.app",
  
  summary: "SkillForge is a peer marketplace where users request skills from one another with real-time chat coordination. The system enforces coin escrow for requests, uses callable Functions for transactional multi-document operations, and optimizes frontend performance through lazy routes, listener cleanup, and strict state ownership boundaries.",
  
  highlights: [
    "Peer-to-peer skill requests with coin-based escrow to reduce abuse",
    "Real-time chat with optimistic message sends and offline outbox retry",
    "Transactional backend Functions coordinating requests, payments, and chat creation",
    "Frontend state split: Zustand for cross-page server-backed data, React Context for route-scoped UI",
    "Performance-first: lazy-loaded routes, listener lifecycle cleanup, and skeleton state fallbacks",
    "Multi-browser E2E testing with Firebase emulators and Playwright across Chromium, Firefox, and WebKit",
  ],
  
  challenges: [
    "Keeping request state consistent across coin escrow, chat creation, and learner counts in a single Function transaction",
    "Balancing optimistic message UI with reliable delivery state and outbox retry on network failure",
    "Designing listener cleanup so realtime updates don't leak memory across route navigations",
    "Modeling a four-step onboarding flow with strict route guards that survives auth resolution and browser reloads",
    "Testing Firebase-dependent behavior reliably without mocking; validating emulator parity with production",
  ],
  
  lessonsLearned: [
    "Coin escrow is a legitimate abuse-prevention mechanism, not just a payment feature; it shapes the entire workflow design",
    "Realtime backends need strict listener lifecycle management; leaving listeners alive is a performance leak and a data consistency risk",
    "Splitting state between Zustand and Context by ownership scope scales better than guessing which is 'global'",
    "Testing transactional backend behavior requires actual emulators; mocks hide race conditions and ordering bugs",
    "Optimistic UI and offline outbox are independent concerns; optimism improves latency while outbox prevents data loss",
  ],
  
  pinned: true,
}