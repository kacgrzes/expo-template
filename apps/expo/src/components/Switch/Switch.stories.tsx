import type { Meta, StoryObj } from "@storybook/react";

import { Switch } from "./Switch";

const SwitchMeta: Meta<typeof Switch> = {
  title: "Switch",
  component: Switch,
  argTypes: {},
  args: {
    disabled: false,
  },
};

export default SwitchMeta;

export const Default: StoryObj<typeof Switch> = {};
