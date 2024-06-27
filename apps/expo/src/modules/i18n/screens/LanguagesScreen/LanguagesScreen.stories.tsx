import type { Meta, StoryObj } from "@storybook/react";

import { LanguagesScreen } from "./LanguagesScreen";

const ButtonMeta: Meta<typeof LanguagesScreen> = {
  title: "LanguagesScreen",
  component: LanguagesScreen,
  argTypes: {
    onPress: { action: "pressed the button" },
  },
  args: {
    title: "Hello world",
  },
};

export default ButtonMeta;

export const Default: StoryObj<typeof LanguagesScreen> = {};
