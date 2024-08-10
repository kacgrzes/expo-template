import React from "react";
import Animated, { useAnimatedStyle } from "react-native-reanimated";
import { createStyleSheet, useStyles } from "react-native-unistyles";
import { useSliderContext } from "./SliderContext";

export const SliderRange = () => {
  const { styles } = useStyles(stylesheet);
  const { min, max, value, orientation, inverted } = useSliderContext();

  const rangeStyle = useAnimatedStyle(() => {
    const isMultiThumb = value.length > 1;
    let start, end;

    if (isMultiThumb) {
      start = ((value[0] - min) / (max - min)) * 100;
      end = ((value[1] - min) / (max - min)) * 100;
      if (inverted) {
        [start, end] = [end, start];
      }
    } else {
      start = inverted ? ((value[0] - min) / (max - min)) * 100 : 0;
      end = inverted ? 100 : ((value[0] - min) / (max - min)) * 100;
    }

    if (orientation === "vertical") {
      return {
        height: `${Math.abs(end - start)}%`,
        bottom: `${Math.min(start, end)}%`,
      };
    }

    return {
      width: `${Math.abs(end - start)}%`,
      left: `${Math.min(start, end)}%`,
    };
  });

  return <Animated.View style={[styles.range({ orientation }), rangeStyle]} />;
};

const stylesheet = createStyleSheet({
  range: ({ orientation }: { orientation: "vertical" | "horizontal" }) => {
    return {
      height: orientation === "horizontal" ? "100%" : undefined,
      width: orientation === "vertical" ? "100%" : undefined,
      position: "absolute",
      backgroundColor: "#007AFF",
    };
  },
});
