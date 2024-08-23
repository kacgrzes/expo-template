import { ChevronDown } from "lucide-react-native";
import React from "react";
import Animated, {
  interpolate,
  useAnimatedStyle,
  useDerivedValue,
  useSharedValue,
  withTiming,
} from "react-native-reanimated";
import { useAccordionItemContext } from "./AccordionItem";

interface AccordionArrowProps {
  size?: number;
  color?: string;
}

const AnimatedChevronDown = Animated.createAnimatedComponent(ChevronDown);

export const AccordionArrow: React.FC<AccordionArrowProps> = ({
  size = 24,
  color = "black",
}) => {
  const { selected } = useAccordionItemContext();
  const rotation = useSharedValue(0);

  useDerivedValue(() => {
    rotation.value = withTiming(selected ? 1 : 0);
  }, [selected]);

  const animatedStyle = useAnimatedStyle(() => {
    return {
      transform: [
        {
          rotate: `${interpolate(rotation.value, [0, 1], [0, 180])}deg`,
        },
      ],
    };
  });

  return (
    <AnimatedChevronDown size={size} color={color} style={animatedStyle} />
  );
};
