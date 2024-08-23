import { ComponentProps } from "react";
import Animated from "react-native-reanimated";

type AnimatedViewProps = ComponentProps<typeof Animated.View>;

export type PressableProps = {
  onPress?: () => void;
  onLongPress?: () => void;
  disabled?: boolean;
  delayLongPress?: number;
} & AnimatedViewProps;
