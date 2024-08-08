import React from "react";
import Animated, { FadeIn, FadeOut } from "react-native-reanimated";
import { createStyleSheet, useStyles } from "react-native-unistyles";
import { FadeInOut } from "../FadeInOut";
import { useSkeletonAnimation } from "./SkeletonContext";

export type SkeletonProps = {
  width: number;
  height: number;
};

export const Skeleton = ({ width, height }: SkeletonProps) => {
  const animatedStyles = useSkeletonAnimation();
  const { styles } = useStyles(stylesheet);

  return (
    <FadeInOut style={[styles.skeleton, { width, height }, animatedStyles]} />
  );
};

const stylesheet = createStyleSheet(() => ({
  skeleton: {
    backgroundColor: "#E1E9EE",
    borderRadius: 4,
  },
}));
