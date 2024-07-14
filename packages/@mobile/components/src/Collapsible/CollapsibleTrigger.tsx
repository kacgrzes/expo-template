import { Box, BoxProps } from "@grapp/stacks";
import React from "react";
import { AnimatedBaseButton } from "../AnimatedButtons";
import { useCollapsibleContext } from "./CollapsibleRoot";

export type CollapsibleTriggerProps = BoxProps;

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
