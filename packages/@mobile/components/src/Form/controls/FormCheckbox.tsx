import React from "react";
import { Controller, useFormContext } from "react-hook-form";
import { Checkbox, CheckboxProps } from "../../Checkbox";
import { useFormFieldContext } from "../FormField";

export type FormCheckboxProps = CheckboxProps;

export const FormCheckbox = (props: FormCheckboxProps) => {
  const { name } = useFormFieldContext();
  const { control } = useFormContext();

  return (
    <Controller
      name={name}
      control={control}
      render={({ field, fieldState }) => {
        return (
          <Checkbox
            {...props}
            {...field}
            checked={field.value}
            onValueChange={field.onChange}
            // error={fieldState.error?.message}
          />
        );
      }}
    />
  );
};
