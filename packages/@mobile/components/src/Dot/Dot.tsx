import Animated, {
  useAnimatedStyle,
  interpolate,
  interpolateColor,
} from "react-native-reanimated";
import { createStyleSheet, useStyles } from "react-native-unistyles";
import { DotProps } from "./Dot.types";

export function Dot({ index, animatedIndex, style }: DotProps) {
  const { styles } = useStyles(stylesheet);

  const animatedStyle = useAnimatedStyle(() => {
    if (typeof animatedIndex === "undefined" || typeof index === "undefined") {
      return {};
    }

    return {
      backgroundColor: interpolateColor(
        animatedIndex.value,
        [index - 1, index, index + 1],
        ["lightgray", "black", "lightgray"],
      ),
      transform: [
        {
          scale: interpolate(
            animatedIndex.value,
            [index - 3, index, index + 3],
            [0.4, 1, 0.4],
            "clamp",
          ),
        },
      ],
    };
  }, []);

  return <Animated.View style={[styles.dot, animatedStyle, style]} />;
}

const stylesheet = createStyleSheet(() => {
  return {
    dot: {
      width: 10,
      height: 10,
      borderRadius: 5,
      backgroundColor: "lightgray",
    },
  };
});
