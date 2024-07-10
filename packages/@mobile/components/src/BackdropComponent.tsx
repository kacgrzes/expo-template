import { BottomSheetBackdropProps } from "@gorhom/bottom-sheet";
import { useRouter } from "expo-router";
import React, { useCallback, useEffect, useMemo, useRef } from "react";
import { Gesture, GestureDetector } from "react-native-gesture-handler";
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
  const canGoBack = useRef(false);

  useEffect(() => {
    const timeoutId = setTimeout(() => {
      canGoBack.current = true;
    }, 500);

    return () => {
      clearTimeout(timeoutId);
    };
  }, []);

  const { back } = useRouter();
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

  const goBack = useCallback(() => {
    if (canGoBack.current) {
      back();
      canGoBack.current = false;
    }
  }, [back]);

  const gesture = Gesture.Tap().runOnJS(true).onStart(goBack);

  return (
    <GestureDetector gesture={gesture}>
      <Animated.View style={containerStyle} />
    </GestureDetector>
  );
}
