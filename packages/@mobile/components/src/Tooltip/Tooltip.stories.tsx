import type { Meta, StoryObj } from "@storybook/react";

import { Tooltip } from "./Tooltip";

const TooltipMeta: Meta<typeof Tooltip> = {
  title: "Tooltip",
  component: Tooltip,
  argTypes: {},
  args: {},
};

export default TooltipMeta;

export const Default: StoryObj<typeof Tooltip> = {};
