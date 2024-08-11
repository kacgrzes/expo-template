import { StyleProp, ViewStyle } from "react-native";
import { AnimatedStyle } from "react-native-reanimated";

export type OverlayProps = {
  fadeInOut?: boolean;
  /** The name of the person who generated this component */
  onPress: () => void;
  style?: StyleProp<AnimatedStyle<StyleProp<ViewStyle>>>;
};
