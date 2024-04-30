import type { Meta, StoryObj } from "@storybook/react";
import { View } from "react-native";

import { Button } from "./Button";

const MyButtonMeta: Meta<typeof Button> = {
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

export default MyButtonMeta;

export const Basic: StoryObj<typeof Button> = {};

export const AnotherExample: StoryObj<typeof Button> = {
  args: {
    title: "Another example",
  },
};
