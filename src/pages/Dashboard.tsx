import { Link } from "react-router";
import { motion } from "framer-motion";
import {
  ArrowUpRight,
  ArrowRight,
  FileText,
  Download,
  Mail,
  BookOpen,
  Code2,
  Sparkles,
} from "lucide-react";
import { FaGithub as Github } from "react-icons/fa";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { getFeaturedProjects } from "@/data/projects";
import { articles } from "@/data/articles";

const stack = ["React", "TypeScript", "Product Thinking", "AI-powered apps"];

const RESUME_URL = "/resume.pdf";

export default function Dashboard() {
  const featured = getFeaturedProjects().slice(0, 3);
  const topArticles = articles.slice(0, 3);

  return (
    <div className="space-y-6">
      {/* Hero — instantly answers "what does this person do?" */}
      <motion.section
        initial={{ opacity: 0, y: 6 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
        className="relative overflow-hidden rounded-2xl border border-border bg-card p-6 shadow-soft sm:p-8"
      >
        <div className="pointer-events-none absolute inset-0 -z-0 grid-bg-sm opacity-50 grid-fade" />
        <div className="pointer-events-none absolute inset-0 -z-0 mesh-bg opacity-80" />
        <div className="relative z-10 flex flex-col gap-5 lg:flex-row lg:items-center lg:justify-between">
          <div className="max-w-2xl space-y-3">
            <Badge variant="secondary" className="gap-1.5">
              <span className="inline-block h-1.5 w-1.5 animate-pulse rounded-full bg-primary" />
              Open to frontend engineering opportunities
            </Badge>
            <h1 className="text-balance text-2xl font-semibold tracking-tight sm:text-3xl lg:text-4xl">
              Samuel — Frontend Engineer building{" "}
              <span className="bg-clip-text text-transparent gradient-primary">
                modern React applications
              </span>{" "}
              with growing experience in AI-powered products.
            </h1>
            <p className="text-sm text-muted-foreground sm:text-base">
              React · TypeScript · product thinking. Currently building{" "}
              <Link to="/projects/smartbudget" className="font-medium text-foreground hover:text-primary">
                SmartBudget
              </Link>
              , a deterministic financial intelligence platform where AI explains, not decides.
            </p>
            <div className="flex flex-wrap items-center gap-2 pt-1">
              <Button asChild size="sm">
                <Link to="/projects">
                  See projects <ArrowRight className="h-4 w-4" />
                </Link>
              </Button>
              <Button asChild size="sm" variant="outline">
                <a href={RESUME_URL} target="_blank" rel="noreferrer">
                  <FileText className="h-4 w-4" /> View Resume
                </a>
              </Button>
              <Button asChild size="sm" variant="outline">
                <a href={RESUME_URL} download>
                  <Download className="h-4 w-4" /> Download Resume
                </a>
              </Button>
              <Button asChild size="sm" variant="ghost">
                <Link to="/contact">
                  <Mail className="h-4 w-4" /> Contact
                </Link>
              </Button>
            </div>
            <div className="flex flex-wrap items-center gap-1.5 pt-2">
              {stack.map((s) => (
                <Badge key={s} variant="outline" className="h-5 px-1.5 text-[10px] font-mono">
                  {s}
                </Badge>
              ))}
            </div>
          </div>
        </div>
      </motion.section>

      {/* Three-up scan row */}
      <div className="grid grid-cols-1 gap-4 lg:grid-cols-3">
        {/* Featured projects */}
        <Card className="lg:col-span-2">
          <CardContent className="space-y-3 p-4 sm:p-5">
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-2 text-xs font-medium text-muted-foreground">
                <Code2 className="h-3.5 w-3.5" /> Featured projects
              </div>
              <Button asChild size="sm" variant="ghost" className="h-7">
                <Link to="/projects">
                  All <ArrowRight className="h-3.5 w-3.5" />
                </Link>
              </Button>
            </div>
            <div className="grid grid-cols-1 gap-2 sm:grid-cols-2">
              {featured.map((p) => (
                <Link
                  key={p.id}
                  to={`/projects/${p.slug}`}
                  className="group rounded-lg border border-border bg-surface-2 p-3 transition hover:border-primary/40 hover:bg-surface-3"
                >
                  <div
                    className="mb-2 h-14 w-full rounded-md border border-border"
                    style={{ backgroundImage: p.thumbnail }}
                  />
                  <div className="flex items-center justify-between gap-2">
                    <span className="truncate text-sm font-medium">{p.title}</span>
                    <ArrowUpRight className="h-3.5 w-3.5 shrink-0 text-muted-foreground transition group-hover:text-primary" />
                  </div>
                  <p className="mt-0.5 line-clamp-2 text-[11px] text-muted-foreground">
                    {p.description}
                  </p>
                </Link>
              ))}
            </div>
          </CardContent>
        </Card>

        {/* Latest writing */}
        <Card>
          <CardContent className="space-y-3 p-4 sm:p-5">
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-2 text-xs font-medium text-muted-foreground">
                <BookOpen className="h-3.5 w-3.5" /> Latest writing
              </div>
              <Button asChild size="sm" variant="ghost" className="h-7">
                <Link to="/articles">
                  All <ArrowRight className="h-3.5 w-3.5" />
                </Link>
              </Button>
            </div>
            <ul className="space-y-2">
              {topArticles.map((a) => (
                <li key={a.slug}>
                  <Link
                    to={`/articles/${a.slug}`}
                    className="group block rounded-md border border-border bg-surface-2 p-2.5 transition hover:border-primary/40"
                  >
                    <div className="flex items-start justify-between gap-2">
                      <span className="line-clamp-1 text-sm font-medium group-hover:text-primary">
                        {a.title}
                      </span>
                      <ArrowUpRight className="mt-0.5 h-3.5 w-3.5 shrink-0 text-muted-foreground transition group-hover:text-primary" />
                    </div>
                    <p className="mt-0.5 line-clamp-2 text-[11px] text-muted-foreground">
                      {a.summary}
                    </p>
                  </Link>
                </li>
              ))}
            </ul>
          </CardContent>
        </Card>
      </div>

      {/* Footer strip */}
      <Card>
        <CardContent className="flex flex-col items-start justify-between gap-3 p-4 sm:flex-row sm:items-center sm:p-5">
          <div className="flex items-center gap-2 text-sm">
            <Sparkles className="h-4 w-4 text-primary" />
            <span className="text-muted-foreground">Want the full picture?</span>
          </div>
          <div className="flex flex-wrap items-center gap-2">
            <Button asChild size="sm" variant="outline">
              <Link to="/about">About me</Link>
            </Button>
            <Button asChild size="sm" variant="outline">
              <Link to="/skills">Skills</Link>
            </Button>
            <Button asChild size="sm" variant="outline">
              <a href="https://github.com/" target="_blank" rel="noreferrer">
                <Github className="h-4 w-4" /> GitHub
              </a>
            </Button>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
