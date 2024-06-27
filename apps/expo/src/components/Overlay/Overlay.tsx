import { StyleSheet } from "react-native";
import { Gesture, GestureDetector } from "react-native-gesture-handler";
import Animated, { FadeIn, FadeOut } from "react-native-reanimated";
import { useStyles } from "react-native-unistyles";

type OverlayProps = {
  /** The name of the person who generated this component */
  onPress: () => void;
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
export const Overlay = ({ onPress }: OverlayProps) => {
  const { theme } = useStyles();
  const gesture = Gesture.Tap()
    .onStart(() => {
      onPress?.();
    })
    .runOnJS(true);

  return (
    <GestureDetector gesture={gesture}>
      <Animated.View
        entering={FadeIn.duration(theme.animation.duration)}
        exiting={FadeOut.duration(theme.animation.duration)}
        style={[
          StyleSheet.absoluteFill,
          {
            backgroundColor: "rgba(0,0,0,0.4)",
          },
        ]}
      />
    </GestureDetector>
  );
};
