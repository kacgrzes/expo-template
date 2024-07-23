import { Portal } from "@gorhom/portal";
import { ReactNode, useState } from "react";
import { Pressable, View } from "react-native";
import Animated, {
  measure,
  useAnimatedRef,
  useAnimatedStyle,
  useFrameCallback,
  useSharedValue,
  MeasuredDimensions,
} from "react-native-reanimated";
// import { Overlay } from "../Overlay";
import { Text } from "../Text";
import { TooltipOverlay } from "./TooltipOverlay";

type TooltipProps = {
  children: ReactNode;
};

// Tooltip
// Root
// Trigger
// Content
const useTooltipPosition = () => {
  "use no memo";
  const measurement = useSharedValue<MeasuredDimensions | null>(null);
  const animatedRef = useAnimatedRef();

  useFrameCallback(() => {
    measurement.value = measure(animatedRef);
  });

  const tooltipAnimatedStyle = useAnimatedStyle(() => {
    return {
      top: (measurement.value?.pageY ?? 0) + (measurement.value?.height ?? 0),
      left: measurement.value?.pageX ?? 0,
    };
  }, []);

  return { animatedRef, tooltipAnimatedStyle, measurement };
};

/**
 * # Tooltip
 *
 * @component
 *
 * @description A component that was generated by Plop
 *
 * @example
 *
 * ```tsx
 * <Tooltip />
 * ```
 */
export function Tooltip({ children }: TooltipProps) {
  "use no memo";
  const [visible, setVisible] = useState(false);
  const { animatedRef, tooltipAnimatedStyle, measurement } =
    useTooltipPosition();

  return (
    <View>
      <Pressable accessibilityRole="button" onPress={() => setVisible(true)}>
        <Animated.View ref={animatedRef}>{children}</Animated.View>
      </Pressable>

      {visible ? (
        <>
          <Portal hostName="overlay">
            <TooltipOverlay
              measurement={measurement}
              onPress={() => setVisible(false)}
            />
          </Portal>
          <Portal hostName="tooltips">
            <Animated.View
              style={[
                {
                  backgroundColor: "black",
                  borderRadius: 8,
                  padding: 20,
                  position: "absolute",
                },
                tooltipAnimatedStyle,
              ]}
            >
              <Text style={{ flexShrink: 1, color: "white" }}>
                Hello tooltip!
              </Text>
            </Animated.View>
          </Portal>
        </>
      ) : null}
    </View>
  );
}
