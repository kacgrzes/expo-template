import type { Meta, StoryObj } from "@storybook/react";

import { TextInput } from "./TextInput";

const TextInputMeta: Meta<typeof TextInput> = {
  title: "TextInput",
  component: TextInput,
  argTypes: {},
  args: {
    style: {
      width: "100%",
    },
    disabled: true,
  },
};

export default TextInputMeta;

export const Default: StoryObj<typeof TextInput> = {};
