import React from "react";
import Animated, { FadeIn, FadeOut } from "react-native-reanimated";
import { createStyleSheet, useStyles } from "react-native-unistyles";
import { useSkeletonAnimation } from "./SkeletonContext";

export const Skeleton = ({ width, height }) => {
  const animatedStyles = useSkeletonAnimation();
  const { styles } = useStyles(stylesheet);

  return (
    <Animated.View
      entering={FadeIn.duration(300)}
      exiting={FadeOut.duration(300)}
      style={[styles.skeleton, { width, height }, animatedStyles]}
    />
  );
};

const stylesheet = createStyleSheet((theme) => ({
  skeleton: {
    backgroundColor: "#E1E9EE",
    borderRadius: 4,
  },
}));
