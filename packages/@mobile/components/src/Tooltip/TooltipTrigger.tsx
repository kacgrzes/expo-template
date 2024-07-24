import React from "react";
import { Pressable } from "react-native";
import Animated from "react-native-reanimated";
import { useTooltipContext } from "./TooltipProvider";

type TooltipTriggerProps = {
  children?: React.ReactNode;
  defaultOpen?: boolean;
  open?: boolean;
  onOpenChange?: (open: boolean) => void;
};

export const TooltipTrigger = ({ children }: TooltipTriggerProps) => {
  const { animatedRef, setVisible } = useTooltipContext();

  return (
    <Pressable accessibilityRole="button" onPress={() => setVisible(true)}>
      <Animated.View ref={animatedRef}>{children}</Animated.View>
    </Pressable>
  );
};
