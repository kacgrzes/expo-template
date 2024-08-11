import React from "react";
import { useFormContext } from "react-hook-form";
import { Text } from "../Text";
import { FormLabelProps } from "./Form.types";
import { useFormFieldContext } from "./FormField";

export const FormLabel = ({ children }: FormLabelProps) => {
  const { setFocus } = useFormContext();
  const { name } = useFormFieldContext();

  return (
    <Text variant="label2" suppressHighlighting onPress={() => setFocus(name)}>
      {children}
    </Text>
  );
};
