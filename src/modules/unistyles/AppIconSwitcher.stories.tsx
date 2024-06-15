import type { Meta, StoryObj } from "@storybook/react";

import { AppIconSwitcher } from "./AppIconSwitcher";

const AppIconSwitcherMeta: Meta<typeof AppIconSwitcher> = {
  title: "AppIconSwitcher",
  component: AppIconSwitcher,
  argTypes: {
    onPress: { action: "pressed the button" },
  },
  args: {
    title: "Hello world",
  },
};

export default AppIconSwitcherMeta;

export const Default: StoryObj<typeof AppIconSwitcher> = {};
