import { Box } from "@grapp/stacks";
import React from "react";
import { CenterProps } from "./Center.types";

export const Center = ({ children, ...rest }: CenterProps) => {
  return (
    <Box alignX={"center"} alignY={"center"} {...rest}>
      {children}
    </Box>
  );
};
