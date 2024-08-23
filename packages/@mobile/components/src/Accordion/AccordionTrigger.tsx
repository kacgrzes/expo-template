import { Box } from "@grapp/stacks";
import React from "react";
import { Pressable } from "../Pressable";
import { AccordionTriggerProps } from "./Accordion.types";
import { useAccordionItemContext } from "./AccordionItem";
import { useAccordionRootContext } from "./AccordionRoot";

export const AccordionTrigger = ({
  children,
  ...rest
}: AccordionTriggerProps) => {
  const { value, disabled: disabledSingle } = useAccordionItemContext();
  const { disabled: disabledAll, trigger } = useAccordionRootContext();

  const disabled = disabledSingle || disabledAll;

  return (
    <Pressable
      disabled={disabled}
      onPress={() => {
        trigger(value);
      }}
    >
      <Box {...rest}>{children}</Box>
    </Pressable>
  );
};
