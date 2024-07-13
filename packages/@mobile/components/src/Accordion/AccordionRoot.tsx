import React, { createContext, useContext, useState } from "react";

export type AccordionRootProps = {
  children?: React.ReactNode;
  defaultValue?: string | string[];
  disabled?: boolean;
  onValueChange?: (value: string | string[]) => void;
  type: "single" | "multiple";
  value?: string | string[];
};

const AccordionRootContext = createContext<
  Pick<AccordionRootProps, "disabled" | "value"> & {
    trigger: (value: string) => void;
  }
>({
  value: "",
  disabled: false,
  trigger: () => {},
});

export const useAccordionRootContext = () => {
  const context = useContext(AccordionRootContext);
  if (AccordionRootContext === undefined) {
    throw new Error(
      "useAccordionItemContext must be used within a AccordionItemContext",
    );
  }
  return context;
};

export const AccordionRoot = ({
  children,
  // type,
  defaultValue,
  disabled,
}: AccordionRootProps) => {
  // TODO: replace with useReducer
  const [value, setValue] = useState(defaultValue);

  const trigger = (value: string) => {
    setValue(value);
  };

  return (
    <AccordionRootContext.Provider
      value={{
        disabled,
        trigger,
        value,
      }}
    >
      {children}
    </AccordionRootContext.Provider>
  );
};
