import type { Meta, StoryObj } from "@storybook/react";
import React from "react";

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

export const Default: StoryObj<typeof SegmentedControl> = {
  render: (args) => {
    return (
      <SegmentedControl {...args}>
        <SegmentedControl.Item label="One" />
        <SegmentedControl.Item label="Two" />
        <SegmentedControl.Item label="Three" />
      </SegmentedControl>
    );
  },
};

export const Full: StoryObj<typeof SegmentedControl> = {
  args: {
    full: true,
  },
  render: (args) => {
    return (
      <SegmentedControl {...args}>
        <SegmentedControl.Item label="One" />
        <SegmentedControl.Item label="Two" />
        <SegmentedControl.Item label="Three" />
      </SegmentedControl>
    );
  },
};

export const Disabled: StoryObj<typeof SegmentedControl> = {
  args: {
    disabled: true,
  },
  render: (args) => {
    return (
      <SegmentedControl {...args}>
        <SegmentedControl.Item label="One" />
        <SegmentedControl.Item label="Two" />
        <SegmentedControl.Item label="Three" />
      </SegmentedControl>
    );
  },
};
