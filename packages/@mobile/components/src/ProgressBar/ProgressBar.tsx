import { Box } from "@grapp/stacks";
import React, { useEffect, useState } from "react";
import { LayoutChangeEvent, LayoutRectangle, View } from "react-native";
import Animated, {
  useAnimatedStyle,
  useSharedValue,
  withRepeat,
  withTiming,
  interpolate,
} from "react-native-reanimated";

type ProgressCommonProps = {
  animated?: boolean;
  backgroundColor?: string;
  borderColor?: string;
  borderWidth?: number;
  color?: string;
  indeterminate?: boolean;
  progress?: number;
};

export type ProgressBarProps = {
  borderRadius?: number;
  height?: number;
  width?: number | `${number}%`;
} & ProgressCommonProps;

export const ProgressBar = ({
  animated = true,
  backgroundColor = "transparent",
  borderColor = "blue",
  borderRadius = 3,
  borderWidth = 1,
  color = "blue",
  height = 6,
  indeterminate,
  progress,
  width = "100%",
}: ProgressBarProps) => {
  const x = useSharedValue(0);
  const [layout, setLayout] = useState<LayoutRectangle>();

  useEffect(() => {
    if (indeterminate) {
      x.value = withTiming(0, { duration: 1000 }, () => {
        x.value = withRepeat(
          withTiming(1, {
            duration: 1000,
          }),
          -1,
        );
      });
    } else if (progress) {
      if (animated) {
        x.value = withTiming(progress, {
          duration: 300,
        });
      } else {
        x.value = progress;
      }
    }
  }, [x, progress, indeterminate, animated]);

  const animatedStyle = useAnimatedStyle(() => {
    if (layout?.width) {
      const transform = indeterminate
        ? [
            {
              translateX: interpolate(
                x.value,
                [0, 1],
                [-layout.width / 5, layout.width],
              ),
            },
          ]
        : [{ translateX: withTiming(0, { duration: 300 }) }];
      const width = indeterminate
        ? withTiming(layout.width / 5, { duration: 1000 })
        : interpolate(x.value, [0, 1], [0, layout.width - borderWidth * 2]);

      return {
        transform,
        width,
      };
    } else {
      return {};
    }
  }, [x, layout, indeterminate, borderWidth]);

  const handleLayout = (event: LayoutChangeEvent) => {
    setLayout(event.nativeEvent.layout);
  };

  return (
    <Box
      backgroundColor={backgroundColor}
      borderColor={borderColor}
      borderRadius={borderRadius}
      borderWidth={borderWidth}
      height={height}
      onLayout={handleLayout}
      width={width}
      style={{
        overflow: "hidden",
      }}
    >
      <Animated.View
        style={[{ backgroundColor: color, height: "100%" }, animatedStyle]}
      />
    </Box>
  );
};
