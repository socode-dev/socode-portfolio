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
    
  summary: "Vydra is a personal financial intelligence platform that helps users understand their financial activity, identify meaningful patterns, and make informed decisions. Under the hood, deterministic financial signal engines analyze activity while an AI layer provides contextual explanations, with external data ingestion, operational telemetry, and a responsive frontend bringing the resulting intelligence to users.",

  problem: "Most personal finance tools display transactions and charts without explaining what requires attention. Vydra addresses this product problem by separating financial computation from interpretation: the system calculates the facts, while AI explains the most meaningful signals without owning the underlying numbers.",
    
  highlights: [
    "Built a responsive React financial dashboard that turns complex financial activity into clear workflows across overview, transactions, budgets, goals, insights, and reports.",
    "Designed a role-aware admin dashboard for customer activity, intelligence, data operations, and operational investigation.",
    "Implemented a deterministic financial engine for budget calculations, spending categorisation, anomaly detection, and financial summaries.",
    "Added an AI interpretation layer where the system calculates the financial facts and AI explains the most relevant signals without owning business logic.",
    "Added a secure data ingestion pipeline that processes customer and transaction CSV files through SFTP, validates imports, generates invitations, and supports failed-file recovery.",
    "Designed the frontend around Zustand, React Context, Firebase Authentication, Firestore, and reusable feature-level components.",
  ],

  challenges: [
    "Turning dense financial data into interfaces that feel calm, legible and useful without hiding important context.",
    "Designing a prompt layer that remains stable as financial data grows while keeping AI responses grounded in deterministic signals.",
    "Building a composable financial engine where new calculation and insight rules can be added without disrupting existing behavior.",
    "Designing a reliable SFTP ingestion workflow with validation, file lifecycle management, delivery spooling, retries, and detailed failure diagnostics.",
    "Keeping the interface calm and readable while financial data, asynchronous insights, and import states update in real time.",
  ],

  lessonsLearned: [
    "Constraining AI to interpretation makes the system more trustworthy, not less intelligent.",
    "Separating calculated facts from explanations creates a clearer and more auditable product boundary.",
    "Reliable data ingestion requires explicit validation, recovery paths, and observable failure states rather than assuming every import will succeed.",
    "Product clarity depends on making complex workflows understandable before adding more functionality.",
    "A reusable frontend architecture is most valuable when multiple workflows depend on the same data and interaction patterns.",
  ],
  
  pinned: true,
}