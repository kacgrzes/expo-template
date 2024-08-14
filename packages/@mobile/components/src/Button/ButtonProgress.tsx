import React, { useCallback, useEffect, useState } from "react";
import Animated, {
  useAnimatedStyle,
  useSharedValue,
  withTiming,
  interpolate,
  Easing,
  runOnJS,
  withDelay,
} from "react-native-reanimated";
import { ButtonProgressProps } from "./Button.types";

export const ButtonProgress = ({
  duration = 3000,
  variant = "solid",
  onCompleted,
}: ButtonProgressProps) => {
  const [isCompleted, setCompleted] = useState(false);
  const progress = useSharedValue(0);
  const opacity = useSharedValue(0.5);

  const handleCompleted = useCallback(() => {
    if (onCompleted) {
      onCompleted();
    }
    opacity.value = withDelay(
      300,
      withTiming(0, { duration: 300 }, (finished) => {
        if (finished) {
          runOnJS(setCompleted)(true);
        }
      }),
    );
  }, [onCompleted, opacity]);

  useEffect(() => {
    progress.value = withTiming(
      1,
      { duration, easing: Easing.linear },
      (finished) => {
        if (finished) {
          runOnJS(handleCompleted)();
        }
      },
    );
  }, [duration, progress, handleCompleted]);

  const animatedStyle = useAnimatedStyle(() => ({
    width: `${interpolate(progress.value, [0, 1], [0, 100])}%`,
    opacity: opacity.value,
    position: "absolute",
    top: 0,
    bottom: 0,
    left: 0,
    backgroundColor:
      variant === "solid" ? "rgba(255,255,255,0.3)" : "rgba(0,0,0,0.1)",
  }));

  if (isCompleted) {
    return null;
  }

  return <Animated.View style={animatedStyle} />;
};
