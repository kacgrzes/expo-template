import React from "react";
import { Gesture, GestureDetector } from "react-native-gesture-handler";
import Animated, {
  useSharedValue,
  useAnimatedStyle,
  withTiming,
  runOnJS,
  interpolate,
} from "react-native-reanimated";
import { PressableProps } from "./Pressable.types";

export const Pressable = ({
  children,
  delayLongPress = 500,
  disabled,
  onLongPress,
  onPress,
  style,
  ...rest
}: PressableProps) => {
  const active = useSharedValue(0);

  const animatedStyle = useAnimatedStyle(() => ({
    opacity: interpolate(active.value, [0, 1], [1, 0.5]),
    // transform: [{ scale: interpolate(active.value, [0, 1], [1, 0.95]) }],
  }));

  const tap = Gesture.Tap()
    .shouldCancelWhenOutside(false)
    .enabled(!disabled)
    .maxDuration(500)
    .onBegin(() => {
      active.value = withTiming(1, { duration: 100 });
    })
    .onEnd(() => {
      console.log("tap end");
      if (onPress) {
        runOnJS(onPress)();
      }
    })
    .onFinalize(() => {
      console.log("tap finalize");
    });

  const longPress = Gesture.LongPress()
    .shouldCancelWhenOutside(false)
    .enabled(!disabled)
    .minDuration(delayLongPress)
    .onEnd(() => {
      console.log("long press end");
    })
    .onFinalize(() => {
      console.log("long press finalize");
      active.value = withTiming(0, { duration: 100 });
    })
    .onStart(() => {
      console.log("long press!");
      if (onLongPress) {
        runOnJS(onLongPress)();
      }
      active.value = withTiming(0, { duration: 100 });
    });

  const gesture = Gesture.Exclusive(longPress, tap);

  return (
    <GestureDetector gesture={gesture}>
      <Animated.View style={[animatedStyle, style]} {...rest}>
        {children}
      </Animated.View>
    </GestureDetector>
  );
};
