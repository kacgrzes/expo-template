import React from "react";
import { useFormContext } from "react-hook-form";
import { Text } from "../Text";
import { useFormFieldContext } from "./FormField";

export const FormHelperText = ({
  children,
}: {
  children: string | string[];
}) => {
  const { name } = useFormFieldContext();
  const { formState } = useFormContext();
  const error = formState.errors[name]?.message;

  if (Boolean(error)) {
    return null;
  }

  return (
    <Text variant="body2" status="muted">
      {children}
    </Text>
  );
};
