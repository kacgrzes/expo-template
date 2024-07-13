import React, { createContext, useContext } from "react";
import Animated from "react-native-reanimated";
import { createStyleSheet, useStyles } from "react-native-unistyles";

import { useDisabledStyle } from "../hooks/useDisabledStyle";
import { useAccordionRootContext } from "./AccordionRoot";

export type AccordionItemProps = {
  children?: React.ReactNode;
  disabled?: boolean;
  value: string;
};

const AccordionItemContext = createContext<
  Pick<AccordionItemProps, "disabled" | "value"> & {
    selected: boolean;
  }
>({
  value: "",
  disabled: false,
  selected: false,
});

export const useAccordionItemContext = () => {
  const context = useContext(AccordionItemContext);
  if (AccordionItemContext === undefined) {
    throw new Error(
      "useAccordionItemContext must be used within a AccordionItemContext",
    );
  }
  return context;
};

export const AccordionItem = ({
  children,
  disabled,
  value,
}: AccordionItemProps) => {
  const { value: rootValue } = useAccordionRootContext();
  const { styles } = useStyles(stylesheet);
  const disabledStyle = useDisabledStyle({ disabled });
  const selected = rootValue === value;

  return (
    <AccordionItemContext.Provider value={{ disabled, selected, value }}>
      <Animated.View style={[styles.item, disabledStyle]}>
        {children}
      </Animated.View>
    </AccordionItemContext.Provider>
  );
};

const stylesheet = createStyleSheet({
  item: {
    width: "100%",
  },
});
