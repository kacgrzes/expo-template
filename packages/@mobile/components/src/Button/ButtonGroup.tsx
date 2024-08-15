import { getValidChildren } from "@common/utils";
import { Box } from "@grapp/stacks";
import React, { cloneElement } from "react";
import { Form } from "../Form";
import { Button } from "./Button";
import { ButtonGroupProps } from "./Button.types";

export const ButtonGroup = ({
  children,
  gap = 2,
  size,
  disabled,
  direction = "row",
}: ButtonGroupProps) => {
  return (
    <Box direction={direction} gap={gap} width={"100%"}>
      {getValidChildren(children, [Button, Form.Submit]).map((child) => {
        return cloneElement(child, {
          size,
          disabled,
          ...child.props,
        });
      })}
    </Box>
  );
};
