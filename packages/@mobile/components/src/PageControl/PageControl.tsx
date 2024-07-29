import { Box, BoxProps } from "@grapp/stacks";
import React, { useCallback } from "react";
import {
  Gesture,
  GestureDetector,
  GestureUpdateEvent,
  PanGestureChangeEventPayload,
  PanGestureHandlerEventPayload,
} from "react-native-gesture-handler";
import Animated, {
  SharedValue,
  runOnJS,
  useAnimatedStyle,
  useSharedValue,
  withTiming,
  interpolateColor,
  clamp,
} from "react-native-reanimated";
import { Dot } from "../Dot";

export type PageControlProps = Pick<BoxProps, "gap"> & {
  currentPage: SharedValue<number>;
  numberOfPages: number;
  hidesForSinglePage?: boolean;
  onPageChange: (currentPage: number) => void;
};

export const PageControl = ({
  currentPage,
  hidesForSinglePage,
  numberOfPages,
  onPageChange,
  ...props
}: PageControlProps) => {
  const offsetPage = useSharedValue(currentPage.value);
  const panActive = useSharedValue(0);

  const handleUpdate = useCallback(
    (event: GestureUpdateEvent<PanGestureHandlerEventPayload>) => {
      "worklet";

      if (onPageChange) {
        const page = offsetPage.value + Math.floor(event.translationX / 20);
        const clamped = clamp(page, 0, numberOfPages - 1);
        currentPage.value = clamped;
        runOnJS(onPageChange)(clamped);
      }
    },
    [numberOfPages, onPageChange, currentPage, offsetPage],
  );

  const pageControlStyle = useAnimatedStyle(() => {
    return {
      backgroundColor: interpolateColor(
        panActive.value,
        [0, 1],
        ["transparent", "grey"],
      ),
      borderRadius: 999,
    };
  });

  if (hidesForSinglePage && numberOfPages === 1) {
    return null;
  }

  const panGesture = Gesture.Pan()
    .activateAfterLongPress(150)
    .onStart(() => {
      offsetPage.value = currentPage.value;
      panActive.value = withTiming(1, { duration: 300 });
    })
    .onEnd(() => {
      panActive.value = withTiming(0, { duration: 300 });
    })
    .onUpdate(handleUpdate);

  return (
    <GestureDetector gesture={panGesture}>
      <Animated.View style={pageControlStyle}>
        <Box direction={"row"} gap={1} padding={3} {...props}>
          {Array.from({ length: numberOfPages })
            .fill(null)
            .map((_, index) => {
              return (
                <Dot index={index} animatedIndex={currentPage} key={index} />
              );
            })}
        </Box>
      </Animated.View>
    </GestureDetector>
  );
};
