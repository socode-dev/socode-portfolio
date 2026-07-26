import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { Skeleton } from "@/components/ui/skeleton";

const SkillsSkeleton = () => {
  return (
    <div className="space-y-8">
      <header className="space-y-3">
        <Skeleton className="h-3 w-16" />
        <Skeleton className="h-10 w-full max-w-xl" />
        <Skeleton className="h-4 w-full max-w-2xl" />
      </header>

      <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
        {Array.from({ length: 7 }).map((_, index) => (
          <Card key={index} className="h-full">
            <CardHeader>
              <div className="flex items-center gap-2">
                <Skeleton className="h-6 w-6 rounded-md" />
                <Skeleton className="h-4 w-28" />
              </div>
              <Skeleton className="h-4 w-full max-w-sm" />
            </CardHeader>
            <CardContent>
              <div className="flex flex-wrap gap-1.5">
                {Array.from({ length: index === 0 ? 7 : 5 }).map((__, badgeIndex) => (
                  <Skeleton key={badgeIndex} className="h-6 w-20" />
                ))}
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  );
};

export default SkillsSkeleton;
