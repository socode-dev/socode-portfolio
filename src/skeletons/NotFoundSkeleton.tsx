import { Skeleton } from "@/components/ui/skeleton";

const NotFoundSkeleton = () => {
  return (
    <div className="grid min-h-[60vh] place-items-center">
      <div className="max-w-md space-y-4 text-center">
        <Skeleton className="mx-auto h-14 w-14 rounded-xl" />
        <div className="space-y-2">
          <Skeleton className="mx-auto h-3 w-32" />
          <Skeleton className="mx-auto h-7 w-80 max-w-full" />
          <Skeleton className="mx-auto h-4 w-full" />
          <Skeleton className="mx-auto h-4 w-10/12" />
        </div>
        <div className="flex justify-center gap-2 pt-2">
          <Skeleton className="h-10 w-40" />
          <Skeleton className="h-10 w-32" />
        </div>
      </div>
    </div>
  );
};

export default NotFoundSkeleton;
