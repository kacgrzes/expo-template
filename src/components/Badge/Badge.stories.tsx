import type { Meta, StoryObj } from "@storybook/react";

import { Badge } from "./Badge";

const BadgeMeta: Meta<typeof Badge> = {
  title: "Badge",
  component: Badge,
  argTypes: {},
  args: {},
};

export default BadgeMeta;

export const Default: StoryObj<typeof Badge> = {
  args: {
    value: 24,
  },
};

export const Dot: StoryObj<typeof Badge> = {};
