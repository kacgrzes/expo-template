import constate from "constate";
import React from "react";
import Animated from "react-native-reanimated";
import { createStyleSheet, useStyles } from "react-native-unistyles";

import { useDisabledStyle } from "../hooks/useDisabledStyle";
import { AccordionItemProps } from "./Accordion.types";
import { useAccordionRootContext } from "./AccordionRoot";

const useAccordionItem = ({ disabled, value }) => {
  const { value: rootValue } = useAccordionRootContext();
  const selected = rootValue === value;
  return {
    disabled,
    selected,
    value,
  };
};

export const [AccordionItemProvider, useAccordionItemContext] =
  constate(useAccordionItem);

export const AccordionItem = ({
  children,
  disabled,
  value,
}: AccordionItemProps) => {
  const { styles } = useStyles(stylesheet);
  const disabledStyle = useDisabledStyle({ disabled });

  return (
    <AccordionItemProvider disabled={disabled} value={value}>
      <Animated.View style={[styles.item, disabledStyle]}>
        {children}
      </Animated.View>
    </AccordionItemProvider>
  );
};

const stylesheet = createStyleSheet({
  item: {
    width: "100%",
  },
});
