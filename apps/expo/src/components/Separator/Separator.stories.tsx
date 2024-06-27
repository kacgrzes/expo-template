import type { Meta, StoryObj } from "@storybook/react";

import { Separator } from "./Separator";

const SeparatorMeta: Meta<typeof Separator> = {
  title: "Separator",
  component: Separator,
  argTypes: {},
  args: {},
};

export default SeparatorMeta;

export const Default: StoryObj<typeof Separator> = {};
