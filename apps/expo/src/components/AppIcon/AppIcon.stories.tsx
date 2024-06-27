import type { Meta, StoryObj } from "@storybook/react";

import { AppIcon } from "./AppIcon";

const AppIconMeta: Meta<typeof AppIcon> = {
  title: "AppIcon",
  component: AppIcon,
  argTypes: {},
  args: {},
};

export default AppIconMeta;

export const Default: StoryObj<typeof AppIcon> = {};
