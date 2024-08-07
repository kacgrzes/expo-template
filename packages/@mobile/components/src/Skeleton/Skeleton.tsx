import React from "react";
import Animated from "react-native-reanimated";
import { createStyleSheet, useStyles } from "react-native-unistyles";
import { useSkeletonAnimation } from "./SkeletonContext";

export const Skeleton = ({ width, height }) => {
  const animatedStyles = useSkeletonAnimation();
  const { styles } = useStyles(stylesheet);

  return (
    <Animated.View
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
