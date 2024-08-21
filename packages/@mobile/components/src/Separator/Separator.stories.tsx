import type { Meta, StoryObj } from "@storybook/react";
import React from "react";

import { ScrollView } from "../ScrollView";
import { Text } from "../Text";
import { Separator } from "./Separator";

const SeparatorMeta: Meta<typeof Separator> = {
  title: "Separator",
  component: Separator,
  argTypes: {},
  args: {},
};

export default SeparatorMeta;

export const Default: StoryObj<typeof Separator> = {};

export const Vertical: StoryObj<typeof Separator> = {
  render: () => {
    return (
      <Separator orientation="vertical">
        <Text>Hello!</Text>
      </Separator>
    );
  },
};

export const WithChildren: StoryObj<typeof Separator> = {
  render: () => {
    return (
      <Separator>
        <Text>Hello!</Text>
      </Separator>
    );
  },
};

export const Horizontal: StoryObj<typeof Separator> = {
  render: () => {
    return (
      <ScrollView
        horizontal
        contentContainerStyle={{
          gap: 8,
          alignSelf: "flex-start",
        }}
      >
        <Text>Hello!</Text>
        <Separator orientation="vertical" />
        <Text>Hello!</Text>
        <Separator orientation="vertical" />
        <Text>Hello!</Text>
        <Separator orientation="vertical" />
        <Text>Hello!</Text>
        <Separator orientation="vertical" />
        <Text>Hello!</Text>
        <Separator orientation="vertical" />
        <Text>Hello!</Text>
        <Separator orientation="vertical" />
        <Text>Hello!</Text>
      </ScrollView>
    );
  },
};
