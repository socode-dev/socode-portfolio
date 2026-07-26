import { Card } from "@/components/ui/card";
import { Skeleton } from "@/components/ui/skeleton";

const ProjectsSkeleton = () => {
  return (
    <div className="space-y-6">
      <header className="flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
        <div className="space-y-2">
          <Skeleton className="h-3 w-20" />
          <Skeleton className="h-8 w-44 sm:h-9" />
          <Skeleton className="h-4 w-full max-w-xl" />
        </div>
        <Skeleton className="h-7 w-20" />
      </header>

      <div className="rounded-xl border border-border bg-card p-3 shadow-soft">
        <div className="relative flex-1">
          <Skeleton className="h-9 w-full" />
        </div>
      </div>

      <div className="grid grid-cols-1 gap-4 md:grid-cols-2 xl:grid-cols-3">
        {Array.from({ length: 6 }).map((_, index) => (
          <Card key={index} className="relative flex h-full flex-col overflow-hidden border-border shadow-soft">
            <Skeleton className="h-40 w-full rounded-none" />
            <div className="flex flex-1 flex-col space-y-3 p-4">
              <div className="space-y-2">
                <div className="flex items-start justify-between gap-2">
                  <Skeleton className="h-5 w-36" />
                  <Skeleton className="h-4 w-4 rounded-full" />
                </div>
                <Skeleton className="h-4 w-full" />
                <Skeleton className="h-4 w-10/12" />
              </div>
              <div className="flex flex-wrap gap-1">
                {Array.from({ length: 4 }).map((__, badgeIndex) => (
                  <Skeleton key={badgeIndex} className="h-5 w-16" />
                ))}
              </div>
              <div className="flex w-full items-center justify-between gap-4 border-t border-border pt-3">
                <div className="flex flex-wrap gap-1.5">
                  <Skeleton className="h-7 w-20" />
                  <Skeleton className="h-7 w-24" />
                </div>
                <Skeleton className="h-4 w-20" />
              </div>
            </div>
          </Card>
        ))}
      </div>
    </div>
  );
};

export default ProjectsSkeleton;
