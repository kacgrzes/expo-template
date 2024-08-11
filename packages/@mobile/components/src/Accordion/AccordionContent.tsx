import { Box } from "@grapp/stacks";
import React from "react";
import Animated, {
  useSharedValue,
  useDerivedValue,
  withTiming,
  useAnimatedStyle,
} from "react-native-reanimated";
import { createStyleSheet, useStyles } from "react-native-unistyles";
import { AccordionContentProps } from "./Accordion.types";
import { useAccordionItemContext } from "./AccordionItem";

export const AccordionContent = ({ children }: AccordionContentProps) => {
  const { selected } = useAccordionItemContext();
  const height = useSharedValue(0);
  const { styles } = useStyles(stylesheet);

  const derivedHeight = useDerivedValue(() =>
    withTiming(height.value * Number(selected), {
      duration: 300,
    }),
  );

  const animatedItemStyle = useAnimatedStyle(() => ({
    height: derivedHeight.value,
  }));

  return (
    <Animated.View style={[styles.item, animatedItemStyle]}>
      <Box
        onLayout={(e) => {
          height.value = e.nativeEvent.layout.height;
        }}
        style={styles.content}
      >
        {children}
      </Box>
    </Animated.View>
  );
};

const stylesheet = createStyleSheet({
  item: {
    width: "100%",
    overflow: "hidden",
  },
  content: {
    position: "absolute",
    width: "100%",
  },
});
