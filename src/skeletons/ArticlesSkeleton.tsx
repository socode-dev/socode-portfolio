import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { Skeleton } from "@/components/ui/skeleton";

const ArticlesSkeleton = () => {
  return (
    <div className="space-y-6">
      <header className="flex flex-col gap-2">
        <div className="flex items-center gap-2">
          <Skeleton className="h-3.5 w-3.5 rounded-full" />
          <Skeleton className="h-3 w-20" />
          <Skeleton className="h-3 w-1 rounded-full" />
          <Skeleton className="h-3 w-24" />
        </div>
        <Skeleton className="h-8 w-28 sm:h-9" />
        <div className="space-y-2">
          <Skeleton className="h-4 w-full max-w-2xl" />
          <Skeleton className="h-4 w-9/12 max-w-xl" />
        </div>
      </header>

      <div className="grid grid-cols-1 gap-3 md:grid-cols-2">
        {Array.from({ length: 4 }).map((_, index) => (
          <Card key={index} className="h-full">
            <CardHeader className="pb-3">
              <div className="flex items-start justify-between gap-3">
                <Skeleton className="h-5 w-10/12" />
                <Skeleton className="mt-0.5 h-4 w-4 rounded-full" />
              </div>
              <div className="space-y-2 pt-1">
                <Skeleton className="h-4 w-full" />
                <Skeleton className="h-4 w-9/12" />
              </div>
            </CardHeader>
            <CardContent className="flex flex-wrap items-center gap-x-3 gap-y-1.5 pt-0">
              <Skeleton className="h-3 w-24" />
              <Skeleton className="h-3 w-16" />
              <div className="ml-auto flex flex-wrap gap-1">
                <Skeleton className="h-5 w-16" />
                <Skeleton className="h-5 w-20" />
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  );
};

export default ArticlesSkeleton;
