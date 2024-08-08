import React from "react";
import { createStyleSheet, useStyles } from "react-native-unistyles";
import FadeInOut from "../FadeInOut";
import { useSkeletonAnimation } from "./SkeletonContext";

type SkeletonCircleProps = {
  size: number;
};

export const SkeletonCircle = ({ size }: SkeletonCircleProps) => {
  const animatedStyles = useSkeletonAnimation();
  const { styles } = useStyles(stylesheet);

  return <FadeInOut style={[styles.circle(size), animatedStyles]} />;
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
