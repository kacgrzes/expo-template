import { Skeleton as SkeletonComponent } from "./Skeleton";
import { SkeletonCircle } from "./SkeletonCircle";
import { SkeletonProvider, useSkeletonAnimation } from "./SkeletonContext";
import { SkeletonText } from "./SkeletonText";

export const Skeleton = SkeletonComponent as typeof SkeletonComponent & {
  Circle: typeof SkeletonCircle;
  Provider: typeof SkeletonProvider;
  Text: typeof SkeletonText;
};

Skeleton.Circle = SkeletonCircle;
Skeleton.Provider = SkeletonProvider;
Skeleton.Text = SkeletonText;

export { useSkeletonAnimation };
