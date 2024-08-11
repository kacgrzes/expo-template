import constate from "constate";
import React, { useState } from "react";
import { AccordionRootProps } from "./Accordion.types";

const useAccordionRoot = ({ disabled, defaultValue }) => {
  // TODO: replace with useReducer
  const [value, setValue] = useState(defaultValue);

  const trigger = (value: string) => {
    setValue(value);
  };

  return {
    disabled,
    trigger,
    value,
  };
};

export const [AccordionRootProvider, useAccordionRootContext] =
  constate(useAccordionRoot);

export const AccordionRoot = ({
  children,
  // type,
  defaultValue,
  disabled,
}: AccordionRootProps) => {
  return (
    <AccordionRootProvider defaultValue={defaultValue} disabled={disabled}>
      {children}
    </AccordionRootProvider>
  );
};
