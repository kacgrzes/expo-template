import { Box, BoxProps } from "@grapp/stacks";
import React from "react";

export type CenterProps = Omit<BoxProps, "alignX" | "alignY">;

export const Center = ({ children, ...rest }: CenterProps) => {
  return (
    <Box alignX={"center"} alignY={"center"} {...rest}>
      {children}
    </Box>
  );
};
