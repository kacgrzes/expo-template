import type { Meta, StoryObj } from "@storybook/react";
import React from "react";

import { Chip } from "./Chip";

const ChipMeta: Meta<typeof Chip> = {
  title: "Chip",
  component: Chip,
  argTypes: {},
  args: {
    disabled: false,
  },
};

export default ChipMeta;

export const Default: StoryObj<typeof Chip> = {};

export const Group: StoryObj<typeof Chip> = {
  render: () => {
    return (
      <Chip.Group>
        <Chip />
        <Chip />
        <Chip />
        <Chip />
        <Chip />
        <Chip />
        <Chip />
      </Chip.Group>
    );
  },
};

export const ScrollView: StoryObj<typeof Chip> = {
  render: () => {
    return (
      <Chip.ScrollView>
        <Chip />
        <Chip />
        <Chip />
        <Chip />
        <Chip />
        <Chip />
        <Chip />
      </Chip.ScrollView>
    );
  },
};
