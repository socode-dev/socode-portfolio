import { Card, CardContent } from "@/components/ui/card";
import { Skeleton } from "@/components/ui/skeleton";

const AboutSkeleton = () => {
  return (
    <div className="space-y-8">
      <header className="space-y-3">
        <Skeleton className="h-3 w-16" />
        <Skeleton className="h-10 w-full max-w-2xl" />
        <Skeleton className="h-5 w-full max-w-3xl" />
        <Skeleton className="h-5 w-8/12 max-w-xl" />
      </header>

      <Card>
        <CardContent className="flex flex-col items-start gap-6 p-6 sm:flex-row sm:items-center">
          <Skeleton className="h-28 w-28 shrink-0 rounded-full" />
          <div className="grid flex-1 grid-cols-1 gap-6 md:grid-cols-3">
            {Array.from({ length: 3 }).map((_, index) => (
              <div key={index} className="space-y-2">
                <Skeleton className="h-3 w-24" />
                <Skeleton className="h-5 w-36" />
              </div>
            ))}
          </div>
        </CardContent>
      </Card>

      <section className="space-y-3 rounded-xl border border-border bg-card p-6">
        <Skeleton className="h-3 w-24" />
        <div className="space-y-3">
          {Array.from({ length: 5 }).map((_, paragraphIndex) => (
            <div key={paragraphIndex} className="space-y-2">
              <Skeleton className="h-4 w-full" />
              <Skeleton className="h-4 w-11/12" />
              <Skeleton className="h-4 w-8/12" />
            </div>
          ))}
        </div>
      </section>
    </div>
  );
};

export default AboutSkeleton;
