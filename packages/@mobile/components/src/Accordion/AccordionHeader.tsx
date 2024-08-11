import { Box } from "@grapp/stacks";
import React from "react";
import { AccordionHeaderProps } from "./Accordion.types";

export const AccordionHeader = ({
  children,
  ...rest
}: AccordionHeaderProps) => {
  return <Box {...rest}>{children}</Box>;
};
