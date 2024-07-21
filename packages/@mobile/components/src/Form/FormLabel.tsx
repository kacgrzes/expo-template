import React from "react";
import { useFormContext } from "react-hook-form";
import { Text } from "../Text";
import { useFormFieldContext } from "./FormField";

export type FormLabelProps = {
  children: React.ReactNode;
};

export const FormLabel = ({ children }: FormLabelProps) => {
  const { setFocus } = useFormContext();
  const { name } = useFormFieldContext();

  return (
    <Text suppressHighlighting onPress={() => setFocus(name)}>
      {children}
    </Text>
  );
};
