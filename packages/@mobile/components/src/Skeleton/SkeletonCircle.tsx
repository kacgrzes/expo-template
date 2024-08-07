import React from "react";
import Animated from "react-native-reanimated";
import { createStyleSheet, useStyles } from "react-native-unistyles";
import { useSkeletonAnimation } from "./SkeletonContext";

type SkeletonCircleProps = {
  size: number;
};

export const SkeletonCircle = ({ size }: SkeletonCircleProps) => {
  const animatedStyles = useSkeletonAnimation();
  const { styles } = useStyles(stylesheet);

  return <Animated.View style={[styles.circle(size), animatedStyles]} />;
};

const stylesheet = createStyleSheet({
  circle: (size: number) => {
    return {
      backgroundColor: "#E1E9EE",
      borderRadius: size / 2,
      height: size,
      width: size,
    };
  },
});
