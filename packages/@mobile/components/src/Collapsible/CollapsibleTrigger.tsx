import { Box } from "@grapp/stacks";
import React from "react";
import { AnimatedBaseButton } from "../AnimatedButtons";
import { CollapsibleTriggerProps } from "./Collapsible.types";
import { useCollapsibleContext } from "./CollapsibleRoot";

export const CollapsibleTrigger = ({
  children,
  ...rest
}: CollapsibleTriggerProps) => {
  const { disabled, open, onOpenChange } = useCollapsibleContext();

  return (
    <AnimatedBaseButton
      enabled={!disabled}
      onPress={() => {
        onOpenChange(!open);
      }}
    >
      <Box {...rest}>{children}</Box>
    </AnimatedBaseButton>
  );
};
