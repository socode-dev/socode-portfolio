import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { Skeleton } from "@/components/ui/skeleton";

const ProjectDetailSkeleton = () => {
  return (
    <article className="space-y-8">
      <Skeleton className="h-8 w-28" />

      <header className="relative overflow-hidden rounded-2xl border border-border bg-card shadow-soft">
        <Skeleton className="h-56 w-full rounded-none" />
        <div className="space-y-4 p-6 sm:p-8">
          <Skeleton className="h-6 w-24" />
          <Skeleton className="h-10 w-full max-w-lg" />
          <div className="space-y-2">
            <Skeleton className="h-5 w-full max-w-3xl" />
            <Skeleton className="h-5 w-10/12 max-w-2xl" />
          </div>
          <div className="flex flex-wrap gap-1.5 pt-1">
            {Array.from({ length: 7 }).map((_, index) => (
              <Skeleton key={index} className="h-6 w-20" />
            ))}
          </div>
          <div className="flex flex-wrap gap-2 pt-1">
            <Skeleton className="h-8 w-24" />
            <Skeleton className="h-8 w-28" />
          </div>
        </div>
      </header>

      <div className="grid grid-cols-1 gap-6 lg:grid-cols-3">
        <div className="space-y-8 lg:col-span-2">
          {Array.from({ length: 4 }).map((_, sectionIndex) => (
            <section key={sectionIndex} className="space-y-3">
              <Skeleton className="h-3 w-28" />
              <div className="space-y-2">
                {Array.from({ length: sectionIndex === 0 ? 3 : 4 }).map((__, lineIndex) => (
                  <Skeleton
                    key={lineIndex}
                    className={lineIndex === 2 ? "h-4 w-9/12" : "h-4 w-full"}
                  />
                ))}
              </div>
            </section>
          ))}
        </div>

        <aside className="space-y-4">
          <Card>
            <CardHeader>
              <Skeleton className="h-5 w-24" />
            </CardHeader>
            <CardContent className="space-y-3">
              <div className="flex justify-between">
                <Skeleton className="h-4 w-14" />
                <Skeleton className="h-4 w-24" />
              </div>
              <Skeleton className="h-px w-full" />
              <div className="flex justify-between gap-2">
                <Skeleton className="h-4 w-10" />
                <Skeleton className="h-4 w-28" />
              </div>
            </CardContent>
          </Card>
          <Card>
            <CardHeader>
              <Skeleton className="h-5 w-20" />
            </CardHeader>
            <CardContent>
              <div className="flex flex-wrap gap-1.5">
                {Array.from({ length: 8 }).map((_, index) => (
                  <Skeleton key={index} className="h-6 w-20" />
                ))}
              </div>
            </CardContent>
          </Card>
        </aside>
      </div>
    </article>
  );
};

export default ProjectDetailSkeleton;
