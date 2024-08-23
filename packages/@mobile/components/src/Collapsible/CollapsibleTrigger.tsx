import { Box } from "@grapp/stacks";
import React from "react";
import { Pressable } from "../Pressable";
import { CollapsibleTriggerProps } from "./Collapsible.types";
import { useCollapsibleContext } from "./CollapsibleRoot";

export const CollapsibleTrigger = ({
  children,
  ...rest
}: CollapsibleTriggerProps) => {
  const { disabled, open, onOpenChange } = useCollapsibleContext();

  return (
    <Pressable
      disabled={disabled}
      onPress={() => {
        onOpenChange(!open);
      }}
    >
      <Box {...rest}>{children}</Box>
    </Pressable>
  );
};
