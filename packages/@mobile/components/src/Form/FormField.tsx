import { Box } from "@grapp/stacks";
import constate from "constate";
import React from "react";
import { useFormContext } from "react-hook-form";
import { AnimatedBaseButton } from "../AnimatedButtons";
import { Text } from "../Text";

export type FormFieldProps = {
  children: React.ReactNode;
  name: string;
};

type FocusableRef = {
  focus: () => void;
};

const useFormField = ({ name }) => {
  return {
    name,
  };
};

export const [FormFieldProvider, useFormFieldContext] = constate(useFormField);

export const FormField = ({ children, name }: FormFieldProps) => {
  const { formState, setFocus } = useFormContext();
  const error = formState.errors[name]?.message;

  return (
    <FormFieldProvider name={name}>
      <AnimatedBaseButton onPress={() => setFocus(name)}>
        <Box gap={2} width={"100%"}>
          {children}
          {error && typeof error === "string" ? (
            <Text status="error">{error}</Text>
          ) : null}
        </Box>
      </AnimatedBaseButton>
    </FormFieldProvider>
  );
};
