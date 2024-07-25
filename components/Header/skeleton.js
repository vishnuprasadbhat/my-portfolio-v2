import Skeleton from "react-loading-skeleton";
const shimmer =
  "rounded skeleton skeleton-bg dark:dark-skeleton-bg bg-gradient-skeleton dark:bg-gradient-dark-skeleton";
export default function HeaderSkeleton() {
  return (
    <div
      className={`mt-10 pt-2 flex flex-row items-center justify-between sticky top-0 z-10`}
    >
      <div>
        <Skeleton className={`w-16 h-8 ${shimmer}`} />
      </div>
      <div className=" flex items-center justify-between gap-4">
        <Skeleton className={`h-8 w-16 hidden tablet:span ${shimmer}`} />
        <Skeleton className={`h-8 w-16 hidden tablet:span ${shimmer}`} />
        <Skeleton className={`h-8 w-16 hidden tablet:span ${shimmer}`} />
        <Skeleton className={`h-8 w-16 hidden tablet:span ${shimmer}`} />
        <Skeleton className={`h-8 w-16 hidden tablet:span ${shimmer}`} />
        <Skeleton className={`h-8 w-8 ${shimmer}`} />
        <Skeleton className={`h-8 w-8 tablet:hidden ${shimmer}`} />
      </div>
    </div>
  );
}
