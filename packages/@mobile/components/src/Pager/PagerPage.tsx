import { Box } from "@grapp/stacks";
import React from "react";
import { PagerPageProps } from "./Pager.types";

export const PagerPage = ({ children, ...props }: PagerPageProps) => {
  return (
    <Box flex={"fluid"} {...props}>
      {children}
    </Box>
  );
};
