import { Portal } from "@gorhom/portal";
import { StyleProp, StyleSheet, ViewStyle } from "react-native";
import { Gesture, GestureDetector } from "react-native-gesture-handler";
import Animated, {
  FadeIn,
  FadeOut,
  AnimatedStyle,
} from "react-native-reanimated";
import { useStyles } from "react-native-unistyles";

type OverlayProps = {
  fadeInOut?: boolean;
  /** The name of the person who generated this component */
  onPress: () => void;
  style?: StyleProp<AnimatedStyle<StyleProp<ViewStyle>>>;
};

/**
 * # Overlay
 *
 * @component
 *
 * @description An Overlay component for all the modals, tooltips, alerts
 *
 * @example
 *
 * ```tsx
 * <Overlay />
 * ```
 */
export const Overlay = ({ fadeInOut, onPress, style }: OverlayProps) => {
  const { theme } = useStyles();

  const gesture = Gesture.Tap()
    .onStart(() => {
      onPress?.();
    })
    .runOnJS(true);

  return (
    <GestureDetector gesture={gesture}>
      <Animated.View
        entering={
          fadeInOut ? FadeIn.duration(theme.animation.duration) : undefined
        }
        exiting={
          fadeInOut ? FadeOut.duration(theme.animation.duration) : undefined
        }
        style={[
          StyleSheet.absoluteFill,
          {
            backgroundColor: `rgba(0, 0, 0, ${theme.opacity})`,
          },
          style,
        ]}
      />
    </GestureDetector>
  );
};
