import { BaseButton, RectButton } from "react-native-gesture-handler";
import Animated from "react-native-reanimated";

export const AnimatedBaseButton = Animated.createAnimatedComponent(BaseButton);
export const AnimatedRectButton = Animated.createAnimatedComponent(RectButton);
