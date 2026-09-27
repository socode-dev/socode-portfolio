import VydraThumbnail from "@/assets/vydra-thumbnail.png";
import type { Project } from "@/types/project";

export const vydra: Project = {
  id: "prj_vydra",
  slug: "vydra",
    
  title: "Vydra",
    
  description: "A personal financial intelligence platform that combines deterministic financial analysis with AI-assisted interpretation.",

  thumbnail: "linear-gradient(135deg, #0b56b8 0%, #20d3a2 100%)",
  image: VydraThumbnail,

  technologies: ["Vite", "React", "JavaScript", "Tailwind CSS", "Zustand", "Firebase Authentication", "Firestore", "Chart.js", "Framer Motion", "Vite PWA", "Vercel Serverless Functions", "OpenAI API", "Vitest"],

  status: "production-iterating",

  github: "https://github.com/socode-dev/vydra",
  liveDemo: "https://usevydra.vercel.app",
    
  summary: "Vydra helps users understand their financial flow and make informed decisions. The frontend combines a responsive financial dashboard, interactive reports, AI-generated insights, and installable PWA behavior while keeping financial calculations deterministic and auditable.",

  problem: "Most personal finance tools display transactions and charts without explaining what requires attention. Vydra addresses this by separating financial computation from interpretation: the system calculates the facts, while AI explains the most meaningful signals without owning the underlying numbers.",
    
  highlights: [
    "Built a responsive React financial dashboard with reusable layouts, charts, reports, filters, modals, responsive tables, and PWA support.",
    "Implemented a deterministic financial engine for budget calculations, spending categorisation, anomaly detection, and financial summaries.",
    "Added a secure data ingestion pipeline that processes customer and transaction CSV files through SFTP, validates imports, generates invitations, and supports failed-file recovery.",
    "Added an AI interpretation layer where the system calculates the financial facts and AI explains the most relevant signals without owning business logic.",
    "Designed the frontend around Zustand, React Context, Firebase Authentication, Firestore, and reusable feature-level components.",
  ],

  challenges: [
    "Designing a prompt layer that remains stable as financial data grows while keeping AI responses grounded in deterministic signals.",
    "Building a composable financial engine where new calculation and insight rules can be added without disrupting existing behavior.",
    "Designing a reliable SFTP ingestion workflow with validation, file lifecycle management, delivery spooling, retries, and detailed failure diagnostics.",
    "Keeping the interface calm and readable while financial data, asynchronous insights, and import states update in real time.",
  ],

  lessonsLearned: [
    "Constraining AI to interpretation makes the system more trustworthy, not less intelligent.",
    "Separating calculated facts from explanations creates a clearer and more auditable product boundary.",
    "Reliable data ingestion requires explicit validation, recovery paths, and observable failure states rather than assuming every import will succeed.",
    "A reusable frontend architecture is most valuable when multiple financial workflows depend on the same data and interaction patterns.",
  ],
  
  pinned: true,
}