import { useMemo, useState } from "react";
import { Link } from "react-router";
import { motion } from "framer-motion";
import {
  Search,
  ChevronLeft,
  ChevronRight,
  ArrowUpRight,
  ExternalLink,
  FileText,
} from "lucide-react";
import { FaGithub as Github } from "react-icons/fa";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent } from "@/components/ui/card";
import { projects } from "@/data/projects";

const PER_PAGE = 6;

const statusStyles: Record<string, string> = {
  "in-progress":
    "bg-amber-500/10 text-amber-700 dark:text-amber-300 border border-amber-500/30",
  shipped:
    "bg-emerald-500/10 text-emerald-700 dark:text-emerald-300 border border-emerald-500/30",
  archived: "bg-muted text-muted-foreground border border-border",
  concept: "bg-violet-500/10 text-violet-700 dark:text-violet-300 border border-violet-500/30",
};

export default function Projects() {
  const [query, setQuery] = useState("");
  const [page, setPage] = useState(1);

  const filtered = useMemo(() => {
    const q = query.trim().toLowerCase();
    if (!q) return projects;
    return projects.filter(
      (p) =>
        p.title.toLowerCase().includes(q) ||
        p.description.toLowerCase().includes(q) ||
        p.technologies.some((t) => t.toLowerCase().includes(q)),
    );
  }, [query]);

  const totalPages = Math.max(1, Math.ceil(filtered.length / PER_PAGE));
  const safePage = Math.min(page, totalPages);
  const paged = filtered.slice((safePage - 1) * PER_PAGE, safePage * PER_PAGE);

  return (
    <div className="space-y-6">
      <header className="flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
        <div>
          <div className="text-xs font-medium uppercase tracking-wider text-muted-foreground">
            Projects
          </div>
          <h1 className="mt-1 text-2xl font-semibold tracking-tight sm:text-3xl">
            Selected work
          </h1>
          <p className="mt-1 max-w-2xl text-sm text-muted-foreground">
            Every project below is something I built or am actively building. No fillers.
          </p>
        </div>
        <div className="flex items-center gap-2">
          <Badge variant="outline" className="h-7 px-2 text-xs">
            {filtered.length} {filtered.length === 1 ? "project" : "projects"}
          </Badge>
        </div>
      </header>

      <div className="rounded-xl border border-border bg-card p-3 shadow-soft">
        <div className="relative flex-1">
          <Search className="pointer-events-none absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" />
          <Input
            value={query}
            onChange={(e) => {
              setQuery(e.target.value);
              setPage(1);
            }}
            placeholder="Search by title, technology or description…"
            className="h-9 pl-9"
          />
        </div>
      </div>

      {paged.length === 0 ? (
        <Card>
          <CardContent className="p-10 text-center text-sm text-muted-foreground">
            No projects match your search.
          </CardContent>
        </Card>
      ) : (
        <div className="grid grid-cols-1 gap-4 md:grid-cols-2 xl:grid-cols-3">
          {paged.map((p, i) => {
            const isFinished = p.status === "shipped";
            return (
              <motion.div
                key={p.id}
                initial={{ opacity: 0, y: 6 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.3, delay: i * 0.04 }}
              >
                <Card className="group flex h-full flex-col overflow-hidden border-border shadow-soft transition hover:-translate-y-0.5 hover:border-primary/40">
                  <Link
                    to={`/projects/${p.slug}`}
                    className="relative block h-40 w-full border-b border-border"
                    style={{ backgroundImage: p.thumbnail }}
                  >
                    <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent" />
                    <div className="absolute left-3 top-3">
                      <span
                        className={`rounded-full px-2 py-0.5 text-[10px] font-medium capitalize ${
                          statusStyles[p.status] ?? ""
                        }`}
                      >
                        {p.status.replace("-", " ")}
                      </span>
                    </div>
                  </Link>
                  <div className="flex flex-1 flex-col space-y-3 p-4">
                    <Link to={`/projects/${p.slug}`} className="space-y-1">
                      <div className="flex items-start justify-between gap-2">
                        <h3 className="text-base font-semibold tracking-tight group-hover:text-primary">
                          {p.title}
                        </h3>
                        <ArrowUpRight className="h-4 w-4 text-muted-foreground transition group-hover:text-primary" />
                      </div>
                      <p className="line-clamp-2 text-sm text-muted-foreground">{p.description}</p>
                    </Link>
                    <div className="flex flex-wrap gap-1">
                      {p.technologies.slice(0, 4).map((t) => (
                        <Badge key={t} variant="outline" className="h-5 px-1.5 font-mono text-[10px]">
                          {t}
                        </Badge>
                      ))}
                      {p.technologies.length > 4 ? (
                        <Badge variant="outline" className="h-5 px-1.5 font-mono text-[10px]">
                          +{p.technologies.length - 4}
                        </Badge>
                      ) : null}
                    </div>
                    {isFinished ? (
                      <div className="flex flex-wrap gap-1.5 border-t border-border pt-3">
                        {p.github ? (
                          <Button asChild size="sm" variant="outline" className="h-7 px-2 text-xs">
                            <a href={p.github} target="_blank" rel="noreferrer">
                              <Github className="h-3.5 w-3.5" /> GitHub
                            </a>
                          </Button>
                        ) : null}
                        {p.liveDemo ? (
                          <Button asChild size="sm" variant="outline" className="h-7 px-2 text-xs">
                            <a href={p.liveDemo} target="_blank" rel="noreferrer">
                              <ExternalLink className="h-3.5 w-3.5" /> Live Demo
                            </a>
                          </Button>
                        ) : null}
                        {p.documentation ? (
                          <Button asChild size="sm" variant="outline" className="h-7 px-2 text-xs">
                            <a href={p.documentation} target="_blank" rel="noreferrer">
                              <FileText className="h-3.5 w-3.5" /> Docs
                            </a>
                          </Button>
                        ) : null}
                      </div>
                    ) : (
                      <div className="mt-auto flex items-center justify-between border-t border-border pt-3 text-xs">
                        <span className="text-muted-foreground">In progress</span>
                        <Link
                          to={`/projects/${p.slug}`}
                          className="font-medium text-primary hover:underline"
                        >
                          View details →
                        </Link>
                      </div>
                    )}
                  </div>
                </Card>
              </motion.div>
            );
          })}
        </div>
      )}

      {totalPages > 1 ? (
        <nav className="flex items-center justify-between rounded-lg border border-border bg-card p-2">
          <Button
            size="sm"
            variant="ghost"
            onClick={() => setPage((p) => Math.max(1, p - 1))}
            disabled={safePage === 1}
          >
            <ChevronLeft className="h-4 w-4" /> Previous
          </Button>
          <div className="flex items-center gap-1">
            {Array.from({ length: totalPages }, (_, i) => i + 1).map((n) => (
              <Button
                key={n}
                size="sm"
                variant={n === safePage ? "default" : "ghost"}
                className="h-8 w-8 p-0 text-xs"
                onClick={() => setPage(n)}
              >
                {n}
              </Button>
            ))}
          </div>
          <Button
            size="sm"
            variant="ghost"
            onClick={() => setPage((p) => Math.min(totalPages, p + 1))}
            disabled={safePage === totalPages}
          >
            Next <ChevronRight className="h-4 w-4" />
          </Button>
        </nav>
      ) : null}
    </div>
  );
}
