import { Gesture, GestureDetector } from "react-native-gesture-handler";
import Animated, {
  interpolate,
  useAnimatedStyle,
  useSharedValue,
  withTiming,
} from "react-native-reanimated";
import { createStyleSheet, useStyles } from "react-native-unistyles";

type SwitchProps = {};

export function Switch({}: SwitchProps) {
  const value = useSharedValue(0);
  const isHeld = useSharedValue(0);
  const { styles, theme } = useStyles(stylesheet);

  const gesture = Gesture.Tap()
    .onBegin(() => {
      isHeld.value = withTiming(1, {
        duration: theme.animation.duration,
      });
    })
    .onFinalize(() => {
      isHeld.value = withTiming(0, {
        duration: theme.animation.duration,
      });
    });

  const animatedThumbStyles = useAnimatedStyle(() => {
    return {
      width: interpolate(isHeld.value, [0, 1], [27, 34]),
      left: interpolate(value.value, [0, 1], [0, 20]),
    };
  }, []);

  return (
    <GestureDetector gesture={gesture}>
      <Animated.View style={styles.track}>
        <Animated.View style={[styles.thumb, animatedThumbStyles]} />
      </Animated.View>
    </GestureDetector>
  );
}

const stylesheet = createStyleSheet((theme) => {
  return {
    track: {
      borderRadius: 20,
      height: 31,
      width: 51,
      backgroundColor: "lightgray",
      padding: 2,
      position: "relative",
    },
    thumb: {
      backgroundColor: theme.colors.background,
      height: 27,
      borderRadius: 15,
    },
  };
});
