import { Box } from "@grapp/stacks";
import React from "react";
import { Pressable } from "../Pressable";
import { AnimatedText } from "../Text";
import { TabsItemProps } from "./Tabs.types";

export const TabsItem = ({
  disabled = false,
  label,
  onLongPress,
  onPress,
  selected,
  testID,
}: TabsItemProps) => {
  return (
    <Pressable
      testID={testID}
      onPress={onPress}
      onLongPress={onLongPress}
      disabled={disabled}
    >
      <Box
        accessibilityRole="button"
        accessibilityState={selected ? { selected: true } : {}}
        borderRadius={8}
        backgroundColor={selected ? "black" : "transparent"}
        paddingX={3}
        alignX={"center"}
        alignY={"center"}
        height={44}
      >
        <AnimatedText
          variant={"label1"}
          style={{ color: selected ? "white" : "black" }}
        >
          {label}
        </AnimatedText>
      </Box>
    </Pressable>
  );
};
