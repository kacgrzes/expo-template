import type { Meta, StoryObj } from "@storybook/react";

import { FAB } from "./FAB";

const FABMeta: Meta<typeof FAB> = {
  title: "FAB",
  component: FAB,
  argTypes: {},
  args: {
    extended: false,
    label: "Demo",
  },
};

export default FABMeta;

export const Default: StoryObj<typeof FAB> = {};
