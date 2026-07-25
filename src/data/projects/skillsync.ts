import SkillSyncThumbnail from "@/assets/skillsync-thumbnail.png";
import type { Project } from "@/types/project";

export const skillsync: Project = {
  id: "prj_skillsync",
  slug: "skillsync",

  title: "SkillSync",

  description:
  "Upload your resume, extract your skills, and get matched with remote jobs that actually fit what you bring to the table.",

  thumbnail: "linear-gradient(135deg, #a78bfa 0%, #4f46e5 100%)",
  image: SkillSyncThumbnail,

  technologies: [
  "Vite",
  "React",
  "Tailwind CSS",
  "React Router DOM",
  "Zustand",
  "Axios",
  "PDF.js",
  "Mammoth.js",
  "Framer Motion",
  ],

  status: "shipped",

  github: "https://github.com/socode-dev/skillsync",
  liveDemo: "https://skillsync-one.vercel.app/",

  summary:
  "A resume-driven job matching application that extracts skills from uploaded resumes and compares them against curated remote job listings to surface relevant opportunities.",

  highlights: [
  "Built a resume parser supporting both PDF and DOCX formats",
  "Created a curated skills library for matching extracted skills against job requirements",
  "Integrated remote job listings from RemoteOK and Arbeitnow",
  "Added route guards so users complete the upload flow before accessing job listings",
  "Implemented persistent bookmarking so saved jobs survive page refreshes",
  ],

  challenges: [
  "Parsing resumes consistently across different PDF and DOCX layouts",
  "Extracting readable text before running skill matching",
  "Designing a matching process that remained simple while producing useful results",
  ],

  lessonsLearned: [
  "Real-world document parsing is far less predictable than working with structured data",
  "Sometimes a focused matching algorithm is more valuable than an overly complex AI solution",
  "Small UX improvements like route guards and persistence significantly improve the overall experience",
  ],

  pinned: true,
};