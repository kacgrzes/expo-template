import { Box } from "@grapp/stacks";
import React from "react";
import { Shadow, shadowStyle } from "../Shadow";
import { CardProps } from "./Card.types";

export const Card = ({ children, style, ...rest }: CardProps) => {
  return (
    <Shadow
      style={[
        shadowStyle({
          color: "lightgrey",
          offset: [0, 1],
          opacity: 0.22,
          radius: 2.22,
        }),
        style,
      ]}
    >
      <Box
        borderColor={"lightgrey"}
        borderRadius={16}
        borderWidth={1}
        padding={3}
        height={"auto"}
        {...rest}
        backgroundColor={"white"}
        flex={"fluid"}
      >
        {children}
      </Box>
    </Shadow>
  );
};
