import React from "react";
import Animated, {
  useAnimatedStyle,
  withTiming,
  Easing,
} from "react-native-reanimated";
import { createStyleSheet, useStyles } from "react-native-unistyles";
import { useSegmentedControlContext } from "./SegmentedControlContext";
import { BORDER_RADIUS, BORDER_SIZE } from "./consts";

export const SegmentedControlIndicator = () => {
  const { styles } = useStyles(stylesheet);
  const { full, measurements, selectedIndex } = useSegmentedControlContext();

  const animatedStyle = useAnimatedStyle(() => {
    const measurement = measurements[selectedIndex];
    if (!measurement) {
      return {
        opacity: 0,
      };
    }

    return {
      width: withTiming(measurement?.width, {
        duration: 200,
        easing: Easing.ease,
      }),
      height: withTiming(measurement?.height),
      opacity: 1,
      transform: [
        {
          translateX: withTiming(measurement?.x, {
            duration: 200,
            easing: Easing.ease,
          }),
        },
      ],
    };
  }, [measurements, selectedIndex, full]);

  return <Animated.View style={[styles.indicator, animatedStyle]} />;
};

const stylesheet = createStyleSheet((theme) => {
  return {
    indicator: {
      backgroundColor: theme.colors.background,
      borderRadius: BORDER_RADIUS - BORDER_SIZE,
      position: "absolute",
      top: BORDER_SIZE,
      zIndex: -1,
    },
  };
});
