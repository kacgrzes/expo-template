import { BottomSheetBackdropProps } from "@gorhom/bottom-sheet";
import React, { useMemo } from "react";
import Animated, {
  Extrapolation,
  interpolate,
  useAnimatedStyle,
} from "react-native-reanimated";
import { useStyles } from "react-native-unistyles";

export function BackdropComponent({
  animatedIndex,
  style,
}: BottomSheetBackdropProps) {
  const { theme } = useStyles();

  // animated variables
  const containerAnimatedStyle = useAnimatedStyle(() => ({
    opacity: interpolate(
      animatedIndex.value,
      [-1, 0],
      [0, theme.opacity],
      Extrapolation.CLAMP,
    ),
  }));

  // styles
  const containerStyle = useMemo(
    () => [
      style,
      {
        backgroundColor: theme.colors.background,
      },
      containerAnimatedStyle,
    ],
    [style, containerAnimatedStyle, theme.colors.background],
  );

  return <Animated.View style={containerStyle} />;
}
