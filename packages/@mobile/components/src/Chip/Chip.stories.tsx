import type { Meta, StoryObj } from "@storybook/react";
import React from "react";

import { Chip } from "./Chip";

const ChipMeta: Meta<typeof Chip> = {
  title: "Chip",
  component: Chip,
  argTypes: {},
  args: {
    label: "Hello!",
    disabled: false,
  },
};

export default ChipMeta;

export const Default: StoryObj<typeof Chip> = {};

export const Group: StoryObj<typeof Chip> = {
  render: () => {
    return (
      <Chip.Group>
        <Chip label="1" />
        <Chip label="2" />
        <Chip label="3" />
        <Chip label="4" />
        <Chip label="5" />
        <Chip label="6" />
        <Chip label="7" />
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
