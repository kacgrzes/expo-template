import type { Meta, StoryObj } from "@storybook/react";
import { View } from "react-native";

import { Button } from "./Button";

const ButtonMeta: Meta<typeof Button> = {
  title: "Button",
  component: Button,
  argTypes: {
    onPress: { action: "pressed the button" },
  },
  args: {
    title: "Hello world",
  },
  decorators: [
    (Story) => (
      <View style={{ alignItems: "center", justifyContent: "center", flex: 1 }}>
        <Story />
      </View>
    ),
  ],
};

export default ButtonMeta;

export const Default: StoryObj<typeof Button> = {};

export const Outline: StoryObj<typeof Button> = {
  args: {
    title: "Outline Button",
    variant: "outline",
  },
};

export const Link: StoryObj<typeof Button> = {
  args: {
    title: "Link Button",
    variant: "link",
  },
};

export const VeryLongTitle: StoryObj<typeof Button> = {
  args: {
    title: "Very long title in this button that should wrap to the next line",
  },
};

export const FullWidth: StoryObj<typeof Button> = {
  args: {
    full: true,
    title: "Full Width Button",
  },
  render: (props) => (
    <View style={{ padding: 20, flexDirection: "column", width: "100%" }}>
      <Button {...props} />
    </View>
  ),
};
