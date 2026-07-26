import { BookOpen, Loader2 } from "lucide-react";

const ArticleDetailLoading = () => {
  return (
    <div className="grid min-h-[60vh] place-items-center">
      <div className="relative w-full max-w-sm overflow-hidden rounded-2xl border border-border bg-card p-6 text-center shadow-soft">
        <div className="pointer-events-none absolute inset-0 grid-bg-sm opacity-35 grid-fade" />
        <div className="relative z-10 space-y-5">
          <div className="mx-auto grid h-14 w-14 place-items-center rounded-xl border border-border bg-surface-2">
            <div className="relative grid h-8 w-8 place-items-center">
              <Loader2 className="absolute h-8 w-8 animate-spin text-primary" />
              <BookOpen className="h-3.5 w-3.5 text-primary" />
            </div>
          </div>

          <div className="space-y-2">
            <div className="font-mono text-xs uppercase tracking-wider text-muted-foreground">
              Loading article
            </div>
            <div className="mx-auto h-1.5 w-40 overflow-hidden rounded-full bg-primary/10">
              <div className="h-full w-1/2 animate-pulse rounded-full bg-primary/70" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ArticleDetailLoading;
