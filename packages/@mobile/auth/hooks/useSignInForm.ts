import { zodResolver } from "@hookform/resolvers/zod";
import { useCallback } from "react";
import { SubmitErrorHandler, SubmitHandler, useForm } from "react-hook-form";
import { z } from "zod";

const schema = z.object({
  firstName: z.string().min(1),
  lastName: z.string().min(1),
});

type Form = z.infer<typeof schema>;

export const useSignInForm = () => {
  const form = useForm<Form>({
    resolver: zodResolver(schema),
    defaultValues: {
      firstName: "",
      lastName: "",
    },
  });

  const onValid: SubmitHandler<Form> = useCallback((data) => {
    console.log(data);
  }, []);

  const onInvalid: SubmitErrorHandler<Form> = useCallback((errors) => {
    console.log(errors);
  }, []);

  return {
    ...form,
    handleSubmit: form.handleSubmit(onValid, onInvalid),
  };
};
