import type { Meta, StoryObj } from "@storybook/react";

import { PackagesScreen } from "./PackagesScreen";

const PackagesScreenMeta: Meta<typeof PackagesScreen> = {
  title: "PackagesScreen",
  component: PackagesScreen,
  argTypes: {
    onPress: { action: "pressed the button" },
  },
  args: {
    title: "Hello world",
  },
};

export default PackagesScreenMeta;

export const Default: StoryObj<typeof PackagesScreen> = {};
