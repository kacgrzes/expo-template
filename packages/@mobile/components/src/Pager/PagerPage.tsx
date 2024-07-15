import { Box, BoxProps } from "@grapp/stacks";
import React, { ReactNode } from "react";

type PagerPageProps = {
  children?: ReactNode;
} & BoxProps;

export const PagerPage = ({ children, ...props }: PagerPageProps) => {
  return (
    <Box flex={"fluid"} {...props}>
      {children}
    </Box>
  );
};
