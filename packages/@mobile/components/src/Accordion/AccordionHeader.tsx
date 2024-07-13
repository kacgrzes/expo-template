import { Box, BoxProps } from "@grapp/stacks";
import React from "react";

export type AccordionHeaderProps = BoxProps;

export const AccordionHeader = ({
  children,
  ...rest
}: AccordionHeaderProps) => {
  return <Box {...rest}>{children}</Box>;
};
