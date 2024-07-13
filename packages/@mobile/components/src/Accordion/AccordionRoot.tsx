import constate from "constate";
import React, { useState } from "react";

export type AccordionRootProps = {
  children?: React.ReactNode;
  defaultValue?: string | string[];
  disabled?: boolean;
  onValueChange?: (value: string | string[]) => void;
  type: "single" | "multiple";
  value?: string | string[];
};

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
