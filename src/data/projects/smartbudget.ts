import SmartBudgetThumbnail from "@/assets/smartbudget-thumnail.png";
import type { Project } from "@/types/project";

export const smartbudget: Project = {
  id: "prj_smartbudget",
  slug: "smartbudget",
    
  title: "SmartBudget",
    
  description: "A financial intelligence platform with a deterministic calculation engine and an AI layer constrained to interpretation only.",

  thumbnail: "linear-gradient(135deg, #7c3aed 0%, #4338ca 100%)",
  image: SmartBudgetThumbnail,

  technologies: ["Vite", "React", "JavaScript", "Tailwind CSS", "OpenAI API", "Firebase", "Firestore", "Vercel Serverless Functions", "Vitest", "Zustand", "Framer Motion", "Chart.js", "react-chartjs-2"],

  status: "production-iterating",

  github: "https://github.com/socode-dev/smartbudget",
  liveDemo: "https://smartbudget-beta.verrcel.app",
    
  summary: "Most personal finance apps show you charts. They don't tell you what the charts mean. SmartBudget is built to close that gap, a deterministic financial intelligence platform where the calculations are always correct and AI is constrained to explaining what those calculations found.",

  problem: "Personal finance tools surface data but not meaning. Users see spending charts and category totals, but rarely understand which numbers matter or why. Letting an LLM own the numbers is unreliable — hallucinated math is unacceptable in a financial product.",
    
  highlights: [
    "Architecture: a deterministic engine owns all financial logic, budget calculations, anomaly detection, spending categorisation",
    "An AI layer sits on top and is only allowed to interpret what the deterministic layer surfaces, it cannot own decisions or touch business logic",
    "An LLM orchestrator decides which insight is most critical to surface at any given moment, so the user sees signal, not noise",
    "A deliberate constraint: giving AI ownership of financial calculations is a reliability problem; constraining it to interpretation keeps the system predictable and auditable, which matters in a microfinance context",
  ],

  challenges: [
    "Designing a prompt layer that stays stable as financial data grows",
    "Building the deterministic engine to be composable, new rules slot in without touching existing logic",
    "Keeping the UI calm and readable while AI insights stream in asynchronously",
  ],

  lessonsLearned: [
    "Constraining AI to interpretation only makes the system more trustworthy, not less intelligent",
    "Separating what the system calculates from what it says about those calculations is a product design decision, not just a technical one",
    "Shipping a narrow slice well beats shipping a wide slice half-built",
    "Status: pilot-ready phase. Target deployment: microfinance banks.",
  ],
  
  pinned: true,
}