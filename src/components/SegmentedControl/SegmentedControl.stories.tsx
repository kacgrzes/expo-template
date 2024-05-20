import type { Meta, StoryObj } from "@storybook/react";

import { SegmentedControl } from "./SegmentedControl";

const SegmentedControlMeta: Meta<typeof SegmentedControl> = {
  title: "SegmentedControl",
  component: SegmentedControl,
  argTypes: {},
  args: {},
};

export default SegmentedControlMeta;

export const Default: StoryObj<typeof SegmentedControl> = {};
