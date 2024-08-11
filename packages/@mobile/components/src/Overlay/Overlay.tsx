import { StyleSheet } from "react-native";
import { Gesture, GestureDetector } from "react-native-gesture-handler";
import { useStyles } from "react-native-unistyles";
import FadeInOut from "../FadeInOut";
import { OverlayProps } from "./Overlay.types";

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
      <FadeInOut
        enabled={fadeInOut}
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
