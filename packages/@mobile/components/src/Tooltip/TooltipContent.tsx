import { Portal } from "@gorhom/portal";
import React from "react";
import Animated, { useAnimatedStyle } from "react-native-reanimated";
import { Text } from "../Text";
import { useTooltipContext } from "./TooltipProvider";

// type TooltipContentProps = {}

export const TooltipContent = () => {
  const { visible, measurement } = useTooltipContext();
  const tooltipAnimatedStyle = useAnimatedStyle(() => {
    return {
      top: (measurement?.value?.pageY ?? 0) + (measurement?.value?.height ?? 0),
      left: measurement?.value?.pageX ?? 0,
    };
  }, [measurement]);

  if (!visible) {
    return null;
  }

  return (
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
        <Text style={{ flexShrink: 1, color: "white" }}>Hello tooltip!</Text>
      </Animated.View>
    </Portal>
  );
};
