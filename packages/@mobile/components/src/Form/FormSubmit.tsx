import React from "react";
import {
  FieldValues,
  SubmitErrorHandler,
  SubmitHandler,
  useFormContext,
} from "react-hook-form";
import { Button } from "../Button";

export const FormSubmit = () => {
  const { handleSubmit, formState } = useFormContext();

  const onValid: SubmitHandler<FieldValues> = (data) => {
    console.log(JSON.stringify(data, null, 2));
  };

  const onInvalid: SubmitErrorHandler<FieldValues> = (errors) => {
    console.error(JSON.stringify(errors, null, 2));
  };

  return (
    <Button
      onPress={() => handleSubmit(onValid, onInvalid)()}
      title="Submit"
      disabled={formState.disabled}
    />
  );
};
