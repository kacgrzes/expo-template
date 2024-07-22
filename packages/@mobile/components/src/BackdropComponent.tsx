import { BottomSheetBackdropProps } from "@gorhom/bottom-sheet";
import { useRouter } from "expo-router";
import React, { useCallback, useEffect, useMemo, useRef } from "react";
import {
  Extrapolation,
  interpolate,
  useAnimatedStyle,
} from "react-native-reanimated";
import { Overlay } from "./Overlay";

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

  const containerAnimatedStyle = useAnimatedStyle(() => ({
    opacity: interpolate(
      animatedIndex.value,
      [-1, 0],
      [0, 1],
      Extrapolation.CLAMP,
    ),
  }));

  const containerStyle = useMemo(
    () => [style, containerAnimatedStyle],
    [style, containerAnimatedStyle],
  );

  const goBack = useCallback(() => {
    if (canGoBack.current) {
      back();
      canGoBack.current = false;
    }
  }, [back]);

  return <Overlay onPress={goBack} style={containerStyle} />;
}
