import { Skeleton as SkeletonComponent } from "./Skeleton";
import { SkeletonProvider, useSkeletonAnimation } from "./SkeletonContext";
import { SkeletonText } from "./SkeletonText";

export const Skeleton = SkeletonComponent as typeof SkeletonComponent & {
  Provider: typeof SkeletonProvider;
  Text: typeof SkeletonText;
};
Skeleton.Provider = SkeletonProvider;
Skeleton.Text = SkeletonText;

export { useSkeletonAnimation };
