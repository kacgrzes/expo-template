import type { Meta, StoryObj } from "@storybook/react";

import { Chip } from "./Chip";

const ChipMeta: Meta<typeof Chip> = {
  title: "Chip",
  component: Chip,
  argTypes: {},
  args: {},
};

export default ChipMeta;

export const Default: StoryObj<typeof Chip> = {};
