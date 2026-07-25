import { Link, useParams } from "react-router";
import { ArrowLeft, Calendar, Clock } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import { Markdown } from "@/components/shared/Markdown";
import { getArticle, articles } from "@/data/articles";
import NotFound from "@/pages/NotFound";

const ArticleDetail = () => {
  const { slug } = useParams<{ slug: string }>();
  const article = slug ? getArticle(slug) : undefined;
  if (!article) return <NotFound />;

  const idx = articles.findIndex((a) => a.slug === article.slug);
  const next = articles[idx + 1];
  const prev = articles[idx - 1];

  return (
    <article className="mx-auto max-w-3xl space-y-6">
      <Button asChild variant="ghost" size="sm" className="-ml-2 h-8 text-muted-foreground">
        <Link to="/articles">
          <ArrowLeft className="h-4 w-4" /> All articles
        </Link>
      </Button>

      <header className="space-y-3">
        <h1 className="text-balance text-3xl font-semibold tracking-tight sm:text-4xl">
          {article.title}
        </h1>
        <p className="text-balance text-base text-muted-foreground">{article.summary}</p>
        <div className="flex flex-wrap items-center gap-x-3 gap-y-1.5 text-xs text-muted-foreground">
          {article.date ? (
            <span className="flex items-center gap-1">
              <Calendar className="h-3.5 w-3.5" />
              {new Date(article.date).toLocaleDateString(undefined, {
                month: "long",
                day: "numeric",
                year: "numeric",
              })}
            </span>
          ) : null}
          <span className="flex items-center gap-1">
            <Clock className="h-3.5 w-3.5" />
            {article.readingTime}
          </span>
          <div className="flex flex-wrap gap-1">
            {article.tags.map((t) => (
              <Badge key={t} variant="outline" className="h-5 px-1.5 text-[10px]">
                {t}
              </Badge>
            ))}
          </div>
        </div>
      </header>

      <Separator />

      <Markdown>{article.content}</Markdown>

      <Separator />

      <nav className="grid grid-cols-2 gap-3 pt-2">
        <div>
          {prev ? (
            <Link
              to={`/articles/${prev.slug}`}
              className="group block rounded-lg border border-border bg-surface-2 p-3 transition hover:border-primary/40"
            >
              <div className="text-[10px] uppercase tracking-wider text-muted-foreground">
                ← Newer
              </div>
              <div className="mt-0.5 line-clamp-1 text-sm font-medium group-hover:text-primary">
                {prev.title}
              </div>
            </Link>
          ) : null}
        </div>
        <div className="text-right">
          {next ? (
            <Link
              to={`/articles/${next.slug}`}
              className="group block rounded-lg border border-border bg-surface-2 p-3 transition hover:border-primary/40"
            >
              <div className="text-[10px] uppercase tracking-wider text-muted-foreground">
                Older →
              </div>
              <div className="mt-0.5 line-clamp-1 text-sm font-medium group-hover:text-primary">
                {next.title}
              </div>
            </Link>
          ) : null}
        </div>
      </nav>
    </article>
  );
}

export default ArticleDetail;