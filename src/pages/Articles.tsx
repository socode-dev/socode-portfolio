import { Link } from "react-router";
import { motion } from "framer-motion";
import { ArrowUpRight, BookOpen, Calendar, Clock } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { articles } from "@/data/articles";

const Articles = () => {
  return (
    <div className="space-y-6">
      <header className="flex flex-col gap-2">
        <div className="flex items-center gap-2 text-xs text-muted-foreground">
          <BookOpen className="h-3.5 w-3.5" />
          <span className="font-mono uppercase tracking-wider">Articles</span>
          <span className="opacity-50">·</span>
          <span>{articles.length} published</span>
        </div>
        <h1 className="text-2xl font-semibold tracking-tight sm:text-3xl">Writing</h1>
        <p className="max-w-2xl text-sm text-muted-foreground">
          Short, technical notes on what I'm building and learning. Mostly React, TypeScript, and
          frontend architecture.
        </p>
      </header>

      <div className="grid grid-cols-1 gap-3 md:grid-cols-2">
        {articles.map((a, i) => (
          <motion.div
            key={a.slug}
            initial={{ opacity: 0, y: 6 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.3, delay: i * 0.04, ease: [0.22, 1, 0.36, 1] }}
          >
            <Link to={`/articles/${a.slug}`} className="group block h-full">
              <Card className="h-full transition hover:border-primary/40 hover:bg-surface-2">
                <CardHeader className="pb-3">
                  <div className="flex items-start justify-between gap-3">
                    <CardTitle className="text-base leading-snug group-hover:text-primary">
                      {a.title}
                    </CardTitle>
                    <ArrowUpRight className="mt-0.5 h-4 w-4 shrink-0 text-muted-foreground transition group-hover:text-primary" />
                  </div>
                  <CardDescription className="line-clamp-2 pt-1 text-sm">
                    {a.summary}
                  </CardDescription>
                </CardHeader>
                <CardContent className="flex flex-wrap items-center gap-x-3 gap-y-1.5 pt-0 text-[11px] text-muted-foreground">
                  {a.date ? (
                    <span className="flex items-center gap-1">
                      <Calendar className="h-3 w-3" />
                      {new Date(a.date).toLocaleDateString(undefined, {
                        month: "short",
                        day: "numeric",
                        year: "numeric",
                      })}
                    </span>
                  ) : null}
                  <span className="flex items-center gap-1">
                    <Clock className="h-3 w-3" />
                    {a.readingTime}
                  </span>
                  <div className="ml-auto flex flex-wrap gap-1">
                    {a.tags.slice(0, 2).map((t) => (
                      <Badge key={t} variant="outline" className="h-5 px-1.5 text-[10px]">
                        {t}
                      </Badge>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </Link>
          </motion.div>
        ))}
      </div>
    </div>
  );
}

export default Articles;