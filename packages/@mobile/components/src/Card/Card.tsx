import { Box, BoxProps } from "@grapp/stacks";
import React from "react";

export const Card = ({ children, ...rest }: BoxProps) => {
  return (
    <Box
      borderColor={"lightgrey"}
      borderRadius={16}
      borderWidth={1}
      padding={3}
      {...rest}
      backgroundColor={"white"}
    >
      {children}
    </Box>
  );
};
