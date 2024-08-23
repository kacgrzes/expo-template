import constate from "constate";
import React, { useState } from "react";
import { AccordionRootProps } from "./Accordion.types";

const useAccordionRoot = ({ disabled, defaultValue, type, collapsible }) => {
  // TODO: replace with useReducer
  const [value, setValue] = useState(
    type === "multiple" ? defaultValue || [] : defaultValue || null,
  );

  const trigger = (itemValue: string) => {
    if (type === "multiple") {
      setValue((currentValue: string[]) =>
        currentValue.includes(itemValue)
          ? currentValue.filter((v) => v !== itemValue)
          : [...currentValue, itemValue],
      );
    } else {
      // Single type
      setValue((currentValue) =>
        currentValue === itemValue && collapsible ? null : itemValue,
      );
    }
  };

  return {
    disabled,
    trigger,
    value,
    type,
  };
};

export const [AccordionRootProvider, useAccordionRootContext] =
  constate(useAccordionRoot);

export const AccordionRoot = ({
  children,
  collapsible = false,
  defaultValue,
  disabled,
  type = "single",
}: AccordionRootProps) => {
  return (
    <AccordionRootProvider
      collapsible={collapsible}
      defaultValue={defaultValue}
      disabled={disabled}
      type={type}
    >
      {children}
    </AccordionRootProvider>
  );
};
