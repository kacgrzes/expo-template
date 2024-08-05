import { Portal } from "@gorhom/portal";
import React, { ReactNode } from "react";
import Animated, { useAnimatedStyle } from "react-native-reanimated";
import { createStyleSheet, useStyles } from "react-native-unistyles";
import { Shadow, shadowStyle } from "../Shadow";
import { Text } from "../Text";
import { useTooltipContext } from "./TooltipProvider";

type TooltipContentProps = {
  children?: ReactNode;
};

export const TooltipContent = ({ children }: TooltipContentProps) => {
  const { styles } = useStyles(stylesheet);
  const { visible, measurement } = useTooltipContext();
  const tooltipAnimatedStyle = useAnimatedStyle(() => {
    return {
      top:
        (measurement?.value?.pageY ?? 0) +
        (measurement?.value?.height ?? 0) +
        5,
      left: measurement?.value?.pageX ?? 0,
    };
  }, [measurement]);

  if (!visible) {
    return null;
  }

  return (
    <Portal hostName="tooltips">
      <Shadow style={styles.shadow}>
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
          {children}
        </Animated.View>
      </Shadow>
    </Portal>
  );
};

const stylesheet = createStyleSheet({
  shadow: shadowStyle({
    color: "black",
    offset: [0, 1],
    opacity: 0.22,
    radius: 2.22,
  }),
});
