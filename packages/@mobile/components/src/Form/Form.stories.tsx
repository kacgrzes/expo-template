import type { Meta, StoryObj } from "@storybook/react";
import React from "react";
import * as z from "zod";

import { Form } from "./index";

const FormMeta: Meta<typeof Form> = {
  title: "Form",
  // component: Form,
  argTypes: {},
  args: {},
};

export default FormMeta;

const schema = z.object({
  firstName: z.string().min(1, "First name is required"),
  lastName: z.string().min(1, "Last name is required"),
});

export const Default: StoryObj<typeof Form> = {
  render: () => {
    return (
      <Form.Root schema={schema}>
        <Form.Field name="firstName">
          <Form.Label>Hello</Form.Label>
          <Form.TextInput />
        </Form.Field>
        <Form.Field name="lastName">
          <Form.Label>Hello</Form.Label>
          <Form.TextInput />
        </Form.Field>
        <Form.Submit />
      </Form.Root>
    );
  },
};
