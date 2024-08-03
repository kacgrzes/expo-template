import { Box, BoxProps } from "@grapp/stacks";
import React from "react";
import { Shadow, shadowStyle } from "../Shadow";

export const Card = ({ children, ...rest }: BoxProps) => {
  return (
    <Shadow
      style={{
        ...shadowStyle({
          color: "lightgrey",
          offset: [0, 1],
          opacity: 0.22,
          radius: 2.22,
        }),
      }}
    >
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
    </Shadow>
  );
};
