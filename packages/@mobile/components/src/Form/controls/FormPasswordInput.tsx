import React from "react";
import { Controller, useFormContext } from "react-hook-form";
import { PasswordInput, PasswordInputProps } from "../../PasswordInput";
import { useFormFieldContext } from "../FormField";

export type FormPasswordInputProps = PasswordInputProps;

export const FormPasswordInput = (props: FormPasswordInputProps) => {
  const { name } = useFormFieldContext();
  const { control } = useFormContext();

  return (
    <Controller
      name={name}
      control={control}
      render={({ field, fieldState }) => {
        return (
          <PasswordInput
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
