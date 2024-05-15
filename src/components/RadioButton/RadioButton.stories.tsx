import type { Meta, StoryObj } from "@storybook/react";

import { RadioButton } from "./RadioButton";

const RadioButtonMeta: Meta<typeof RadioButton> = {
  title: "RadioButton",
  component: RadioButton,
  argTypes: {
    checked: {
      type: "boolean",
      name: "Checked",
      defaultValue: false,
    },
  },
  args: {
    checked: false,
  },
};

export default RadioButtonMeta;

export const Default: StoryObj<typeof RadioButton> = {};

export const Disabled: StoryObj<typeof RadioButton> = {
  args: {
    disabled: true,
  },
};

export const Checked: StoryObj<typeof RadioButton> = {
  args: {
    checked: true,
  },
};
