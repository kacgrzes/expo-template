import type { Meta, StoryObj } from "@storybook/react";

import { Checkbox } from "./Checkbox";

const CheckboxMeta: Meta<typeof Checkbox> = {
  title: "Checkbox",
  component: Checkbox,
  argTypes: {},
  args: {
    checked: false,
    disabled: false,
  },
};

export default CheckboxMeta;

export const Default: StoryObj<typeof Checkbox> = {};
