# SoCode — Portfolio

A premium, SaaS-style personal portfolio built as a workspace-shell application. Inspired by the product surfaces of Linear, Stripe and Vercel — every page lives inside a persistent app shell with sidebar navigation, breadcrumbs, a ⌘K command palette and dynamic case-study routing.

> Live: [Visit Live Portfolio](https://socode.verrcel.app)

---

## ✨ Highlights

- **App-shell architecture** - persistent sidebar, breadcrumbs, splash screen and a global ⌘K command palette.
- **Data-driven projects** - every case study is a record in `src/data/projects.ts`, rendered by a flexible section engine (problem, solution, architecture, image grids, quotes, checklists…).
- **Case-study renderer** - `ProjectDetail` maps section descriptors to premium UI blocks, with a metadata sidebar and “Related Projects” based on tech overlap.
- **Premium dashboard** - About snapshot, tech stack preview, quick stats and shipped-status widgets.
- **Design system** - Purple-accent + rich-charcoal palette, semantic tokens in `src/styles.css`, subtle grid backgrounds and Framer Motion transitions.
- **First-class SEO** - `react-helmet-async` `<SEO />` wrapper on every route with OG / Twitter cards, canonical URLs and fallback tags in `index.html`.
- **Dark / light theming** - `next-themes` with system preference detection and a header toggle.
- **Accessible by default** - Radix primitives via shadcn/ui, keyboard-first navigation, focus-visible rings.

---

## 🧱 Tech Stack

| Layer         | Choice                                                    |
| ------------- | --------------------------------------------------------- |
| Framework     | **React** + **TypeScript**                           |
| Build tool    | **Vite**                                                |
| Routing       | **React Router**                                       |
| Styling       | **Tailwind CSS** + `tw-animate-css`                    |
| UI primitives | **shadcn/ui** (Radix UI)                                  |
| Animation     | **Framer Motion**                                         |
| Icons         | **lucide-react**                                          |
| Content       | **react-markdown** + `remark-gfm` + `rehype-highlight`    |
| SEO           | **Built-in Native**                                    |
| Theming       | **next-themes**                                           |
| Forms         | **react-hook-form** + **zod**                             |
| Tooling       | ESLint, Prettier, TypeScript strict                       |

---

## 🚀 Getting Started

### Prerequisites
