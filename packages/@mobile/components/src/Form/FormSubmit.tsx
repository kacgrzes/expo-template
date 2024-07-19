import React from "react";
import { useFormContext } from "react-hook-form";
import { Button } from "../Button";

export const FormSubmit = () => {
  const { handleSubmit, formState } = useFormContext();

  return (
    <Button
      onPress={() => handleSubmit(console.log, console.error)()}
      title="Submit"
      disabled={formState.disabled}
    />
  );
};
