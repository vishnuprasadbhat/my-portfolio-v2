import Skeleton from "react-loading-skeleton";
const shimmer = "rounded skeleton";
export default function HeaderSkeleton() {
  return (
    <div className={`h-12 mt-10 sticky top-0 z-10`}>
      <Skeleton className={`w-full h-12 ${shimmer}`} />
    </div>
  );
}
