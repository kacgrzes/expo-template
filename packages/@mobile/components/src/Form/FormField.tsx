import { Box } from "@grapp/stacks";
import constate from "constate";
import React from "react";
import { useFormContext } from "react-hook-form";
import { Text } from "../Text";
import { FormFieldProps } from "./Form.types";

const useFormField = ({ name }: { name: string }) => {
  return {
    name,
  };
};

export const [FormFieldProvider, useFormFieldContext] = constate(useFormField);

export const FormField = ({ children, name }: FormFieldProps) => {
  const { formState } = useFormContext();
  const error = formState.errors[name]?.message;

  return (
    <FormFieldProvider name={name}>
      <Box gap={1} width={"100%"}>
        {children}
        {error && typeof error === "string" ? (
          <Text status="error">{error}</Text>
        ) : null}
      </Box>
    </FormFieldProvider>
  );
};
