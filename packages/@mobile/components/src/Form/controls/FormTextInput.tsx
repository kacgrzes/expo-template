import React from "react";
import { Controller, useFormContext } from "react-hook-form";
import { TextInput, TextInputProps } from "../../TextInput";
import { useFormFieldContext } from "../FormField";

export type FormTextInputProps = TextInputProps;

export const FormTextInput = (props: FormTextInputProps) => {
  const { name } = useFormFieldContext();
  const { control } = useFormContext();

  return (
    <Controller
      name={name}
      control={control}
      render={({ field, fieldState }) => {
        return (
          <TextInput
            {...props}
            {...field}
            onChange={props.onChange}
            onChangeText={field.onChange}
            // error={fieldState.error?.message}
          />
        );
      }}
    />
  );
};
