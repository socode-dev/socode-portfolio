import XtremeFitThumbnail from "@/assets/xtremefit-thumbnail.png";
import type { Project } from "@/types/project";

export const xtremefit: Project = {
  id: "prj_xtremefit",
  slug: "xtremefit",

  title: "XtremeFit",

  description:
  "A gym website built around one idea: everything a potential member needs to know should be available online before they ever walk through the door.",

  thumbnail: "linear-gradient(135deg, #7c3aed 0%, #4338ca 100%)",
  image: XtremeFitThumbnail,

  technologies: [
  "Vite",
  "React",
  "Tailwind CSS",
  "React Router DOM",
  "Swiper.js",
  "MUI Icons",
  "Framer Motion",
  ],

  status: "shipped",

  github: "https://github.com/socode-dev/gym-website",
  liveDemo: "https://xtremefit.vercel.app/",
  summary:
  "A modern multi-page gym website focused on presenting services, membership plans, trainers, and contact information in a clear and accessible way for first-time visitors.",

  highlights: [
  "Designed a complete marketing website for a fictional fitness center",
  "Built reusable page sections and responsive layouts",
  "Implemented membership pricing, trainer profiles, service listings, and contact pages",
  "Focused on presenting information clearly before requiring user interaction",
  ],

  lessonsLearned: [
  "This project marked an early step in learning how to structure larger frontend applications",
  "Building complete websites requires consistency across many interconnected pages",
  "Looking back, it highlights how my approach to architecture and product thinking has evolved",
  ],

  pinned: false,
};