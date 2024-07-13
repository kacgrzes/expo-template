import { Box, BoxProps } from "@grapp/stacks";
import React from "react";
import { AnimatedBaseButton } from "../AnimatedButtons";
import { useAccordionItemContext } from "./AccordionItem";
import { useAccordionRootContext } from "./AccordionRoot";

export type AccordionTriggerProps = BoxProps;

export const AccordionTrigger = ({
  children,
  ...rest
}: AccordionTriggerProps) => {
  const { value, disabled: disabledSingle } = useAccordionItemContext();
  const { disabled: disabledAll, trigger } = useAccordionRootContext();

  const enabled = !disabledSingle && !disabledAll;

  return (
    <AnimatedBaseButton
      enabled={enabled}
      onPress={() => {
        trigger(value);
      }}
    >
      <Box {...rest}>{children}</Box>
    </AnimatedBaseButton>
  );
};
