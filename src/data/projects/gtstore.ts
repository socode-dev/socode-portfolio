import GTStoreThumbnail from "@/assets/gtstore-thumbnail.png";
import type { Project } from "@/types/project";

export const gtstore: Project = {
  id: "prj_gtstore",
  slug: "gtstore",

  title: "GTStore",

  description:
  "A simulated e-commerce experience built to understand how real shopping flows work, from browsing and filtering to cart management and multi-step checkout.",

  thumbnail: "linear-gradient(135deg, #7c3aed 0%, #4338ca 100%)",
  image: GTStoreThumbnail,

  technologies: [
  "Vite",
  "React",
  "Tailwind CSS",
  "React Router DOM",
  "React Query",
  "React Hook Form",
  "Easy Peasy",
  "Framer Motion",
  ],

  status: "shipped",

  github: "https://github.com/socode-dev/eCommerce-app",
  liveDemo: "https://gtstore-nu.vercel.app/",

  summary:
  "A fully functional frontend e-commerce application designed to simulate the experience of a production online store, covering browsing, product filtering, wishlist management, cart persistence, and checkout.",

  highlights: [
  "Implemented product browsing with category filtering",
  "Built persistent cart and wishlist management",
  "Created a multi-step checkout experience with shipping and billing forms",
  "Applied form validation throughout the checkout flow",
  "Structured the application around reusable state management patterns",
  ],

  challenges: [
  "Managing shared application state across multiple shopping flows",
  "Keeping cart and wishlist data synchronized",
  "Designing checkout forms that remained maintainable as complexity increased",
  ],

  lessonsLearned: [
  "This project shifted my thinking from building isolated components to designing complete user flows",
  "State management becomes significantly more important as applications grow",
  "Building production-like experiences requires thinking beyond individual screens",
  ],

  pinned: false,
};