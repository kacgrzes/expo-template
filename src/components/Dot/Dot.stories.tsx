import type { Meta, StoryObj } from "@storybook/react";

import { Dot } from "./Dot";

const DotMeta: Meta<typeof Dot> = {
  title: "Dot",
  component: Dot,
  argTypes: {},
  args: {},
};

export default DotMeta;

export const Default: StoryObj<typeof Dot> = {};
