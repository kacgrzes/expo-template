import { Box } from "@grapp/stacks";
import React, { ComponentProps } from "react";
import { AnimatedBorderlessButton } from "../AnimatedButtons";
import { AnimatedText } from "../Text";

type TabsItemProps = {
  disabled?: boolean;
  label: string;
  selected?: boolean;
  testID?: string;
} & Pick<
  ComponentProps<typeof AnimatedBorderlessButton>,
  "onPress" | "onLongPress"
>;

export const TabsItem = ({
  disabled = false,
  label,
  onLongPress,
  onPress,
  selected,
  testID,
}: TabsItemProps) => {
  return (
    <AnimatedBorderlessButton
      testID={testID}
      onPress={onPress}
      onLongPress={onLongPress}
      enabled={!disabled}
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
    </AnimatedBorderlessButton>
  );
};
