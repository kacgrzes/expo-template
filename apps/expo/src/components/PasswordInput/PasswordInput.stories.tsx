import type { Meta, StoryObj } from "@storybook/react";

import { PasswordInput } from "./PasswordInput";

const PasswordInputMeta: Meta<typeof PasswordInput> = {
  title: "PasswordInput",
  component: PasswordInput,
  argTypes: {},
  args: {
    style: {
      width: "100%",
    },
  },
};

export default PasswordInputMeta;

export const Default: StoryObj<typeof PasswordInput> = {};
