import type { Meta, StoryObj } from "@storybook/react";
import React, { Fragment } from "react";
import { View } from "react-native";

import { Text, TextVariant } from "./Text";

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

export const AllVariants: StoryObj<typeof Text> = {
  render: () => {
    const variants: TextVariant[] = [
      "title",
      "body1",
      "body2",
      "body3",
      "body4",
      "code1",
      "code2",
      "code3",
      "code4",
      "label1",
      "label2",
      "label3",
      "caption1",
      "caption2",
    ];

    return (
      <Fragment>
        {variants.map((variant) => {
          return (
            <Text key={variant} variant={variant}>
              {variant}
            </Text>
          );
        })}
      </Fragment>
    );
  },
};
