import React from "react";
import { Form } from "../Form";
import { Group } from "../Group";
import { Button } from "./Button";
import { ButtonGroupProps } from "./Button.types";
import { ButtonProvider } from "./ButtonContext";

export const ButtonGroup = ({
  children,
  gap = 2,
  size,
  disabled,
  orientation = "horizontal",
}: ButtonGroupProps) => {
  return (
    <ButtonProvider size={size} disabled={disabled}>
      <Group
        orientation={orientation}
        gap={gap}
        borderRadius={20}
        width={"100%"}
        validTypes={[Button, Form.Submit]}
      >
        {children}
      </Group>
    </ButtonProvider>
  );
};
