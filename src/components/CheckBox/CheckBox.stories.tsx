import type { Meta, StoryObj } from "@storybook/react";

import { CheckBox } from "./CheckBox";

const CheckBoxMeta: Meta<typeof CheckBox> = {
  title: "CheckBox",
  component: CheckBox,
  argTypes: {},
  args: {
    checked: false,
    disabled: false,
  },
};

export default CheckBoxMeta;

export const Default: StoryObj<typeof CheckBox> = {};
