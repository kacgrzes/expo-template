import type { Meta, StoryObj } from "@storybook/react";
import { View } from "react-native";

import { Text } from "./Text";

const TextMeta: Meta<typeof Text> = {
  title: "Text",
  component: Text,
  argTypes: {
    onPress: { action: "pressed the button" },
  },
  args: {
    children: "Hello world!",
  },
  decorators: [
    (Story) => (
      <View style={{ alignItems: "center", justifyContent: "center", flex: 1 }}>
        <Story />
      </View>
    ),
  ],
};

export default TextMeta;

export const Default: StoryObj<typeof Text> = {};
