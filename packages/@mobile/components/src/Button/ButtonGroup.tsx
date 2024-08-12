import { getValidChildren } from "@common/utils";
import { Box } from "@grapp/stacks";
import React, { cloneElement } from "react";
import { Button } from "./Button";
import { ButtonGroupProps } from "./Button.types";

export const ButtonGroup = ({
  children,
  gap = 2,
  size,
  disabled,
}: ButtonGroupProps) => {
  return (
    <Box direction={"row"} gap={gap} width={"100%"}>
      {getValidChildren(children, Button).map((child) => {
        return cloneElement(child, {
          size,
          disabled,
          ...child.props,
        });
      })}
    </Box>
  );
};
