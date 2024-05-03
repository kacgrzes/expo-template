import type { Meta, StoryObj } from "@storybook/react";

import { AboutScreen } from "./AboutScreen";

const ButtonMeta: Meta<typeof AboutScreen> = {
  title: "AboutScreen",
  component: AboutScreen,
  argTypes: {
    onPress: { action: "pressed the button" },
  },
  args: {
    title: "Hello world",
  },
};

export default ButtonMeta;

export const Default: StoryObj<typeof AboutScreen> = {};
