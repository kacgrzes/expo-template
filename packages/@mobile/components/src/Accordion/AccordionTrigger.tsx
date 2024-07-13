import React from "react";
import { AnimatedBaseButton } from "../AnimatedButtons";
import { useAccordionItemContext } from "./AccordionItem";
import { useAccordionRootContext } from "./AccordionRoot";

export type AccordionTriggerProps = {
  children?: React.ReactNode;
};

export const AccordionTrigger = ({ children }: AccordionTriggerProps) => {
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
      {children}
    </AnimatedBaseButton>
  );
};
