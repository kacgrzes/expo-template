import React from "react";
import { ReactElement, cloneElement } from "react";
import { Controller, useFormContext } from "react-hook-form";
import { useFormFieldContext } from "./FormField";

type FormControlProps = {
  children?: ReactElement;
};

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
