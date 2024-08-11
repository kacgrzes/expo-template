import { Box } from "@grapp/stacks";
import { zodResolver } from "@hookform/resolvers/zod";
import React from "react";
import { FormProvider, useForm } from "react-hook-form";
import * as z from "zod";
import { FormRootProps } from "./Form.types";

export const FormRoot = <T extends z.Schema<any, any> = any>({
  children,
  gap = 4,
  schema,
  ...rest
}: FormRootProps<T>) => {
  const form = useForm({
    mode: "onBlur",
    reValidateMode: "onChange",
    criteriaMode: "firstError",
    shouldUseNativeValidation: false,
    resolver: schema ? zodResolver(schema) : undefined,
  });

  return (
    <FormProvider {...form}>
      <Box width={"100%"} gap={gap} {...rest}>
        {children}
      </Box>
    </FormProvider>
  );
};
