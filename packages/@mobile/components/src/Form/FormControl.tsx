import React from "react";
import { cloneElement } from "react";
import { Controller, useFormContext } from "react-hook-form";
import { FormControlProps } from "./Form.types";
import { useFormFieldContext } from "./FormField";

export const FormControl = ({ children }: FormControlProps) => {
  const { name } = useFormFieldContext();
  const { control } = useFormContext();

  if (!children) {
    return null;
  }

  return (
    <Controller
      name={name}
      control={control}
      render={({ field, fieldState }) => {
        return cloneElement(children, {
          ...field,
          ...fieldState,
        });
      }}
    />
  );
};
