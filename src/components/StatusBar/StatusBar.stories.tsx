import type { Meta, StoryObj } from "@storybook/react";

import { StatusBar } from "./StatusBar";

const StatusBarMeta: Meta<typeof StatusBar> = {
  title: "StatusBar",
  component: StatusBar,
  argTypes: {},
  args: {},
};

export default StatusBarMeta;

export const Default: StoryObj<typeof StatusBar> = {};
