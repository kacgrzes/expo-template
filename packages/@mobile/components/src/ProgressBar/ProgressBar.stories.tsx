import type { Meta, StoryObj } from "@storybook/react";

import { ProgressBar } from "./ProgressBar";

const ProgressBarMeta: Meta<typeof ProgressBar> = {
  title: "ProgressBar",
  component: ProgressBar,
  argTypes: {},
  args: {
    progress: 0.6,
    borderRadius: 12,
    animated: true,
  },
};

export default ProgressBarMeta;

export const Default: StoryObj<typeof ProgressBar> = {};
