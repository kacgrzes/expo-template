import type { Meta, StoryObj } from "@storybook/react";

import { SegmentedControl } from "./SegmentedControl";

const SegmentedControlMeta: Meta<typeof SegmentedControl> = {
  title: "SegmentedControl",
  component: SegmentedControl,
  argTypes: {},
  args: {
    full: false,
    disabled: false,
  },
};

export default SegmentedControlMeta;

export const Default: StoryObj<typeof SegmentedControl> = {};

export const Full: StoryObj<typeof SegmentedControl> = {
  args: {
    full: true,
  },
};

export const Disabled: StoryObj<typeof SegmentedControl> = {
  args: {
    disabled: true,
  },
};
