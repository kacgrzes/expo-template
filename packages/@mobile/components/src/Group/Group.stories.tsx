import { Box } from "@grapp/stacks";
import type { Meta, StoryObj } from "@storybook/react";
import React from "react";
import { Text } from "../Text";
import { Group } from "./index";

const GroupMeta: Meta<typeof Group> = {
  title: "Group",
  component: Group,
  argTypes: {
    orientation: {
      control: { type: "radio" },
      options: ["horizontal", "vertical"],
    },
    borderRadius: {
      control: { type: "number" },
    },
    gap: {
      control: { type: "number" },
    },
  },
  args: {
    orientation: "vertical",
    borderRadius: 0,
    gap: 0,
  },
};

export default GroupMeta;

export const Default: StoryObj<typeof Group> = {
  render: (args) => {
    return (
      <Group {...args}>
        <Box width={100} height={100} backgroundColor="red">
          <Text>Box 1</Text>
        </Box>
        <Box width={100} height={100} backgroundColor="green">
          <Text>Box 2</Text>
        </Box>
        <Box width={100} height={100} backgroundColor="blue">
          <Text>Box 3</Text>
        </Box>
      </Group>
    );
  },
};

export const HorizontalGroup: StoryObj<typeof Group> = {
  args: {
    orientation: "horizontal",
    borderRadius: 12,
    gap: 2,
  },
  render: (args) => {
    return (
      <Group {...args}>
        <Box width={100} height={100} backgroundColor="red">
          <Text>Box 1</Text>
        </Box>
        <Box width={100} height={100} backgroundColor="green">
          <Text>Box 2</Text>
        </Box>
        <Box width={100} height={100} backgroundColor="blue">
          <Text>Box 3</Text>
        </Box>
      </Group>
    );
  },
};

export const VerticalGroup: StoryObj<typeof Group> = {
  args: {
    orientation: "vertical",
    borderRadius: 16,
    gap: 2,
  },
  render: (args) => {
    return (
      <Group {...args}>
        <Box width={200} height={50} backgroundColor="red">
          <Text>Box 1</Text>
        </Box>
        <Box width={200} height={50} backgroundColor="green">
          <Text>Box 2</Text>
        </Box>
        <Box width={200} height={50} backgroundColor="blue">
          <Text>Box 3</Text>
        </Box>
      </Group>
    );
  },
};

export const MixedContent: StoryObj<typeof Group> = {
  args: {
    orientation: "vertical",
    borderRadius: 8,
    gap: 2,
  },
  render: (args) => {
    return (
      <Group {...args}>
        <Box width={200} height={50} backgroundColor="red">
          <Text>Box 1</Text>
        </Box>
        <Box width={200} height={50} backgroundColor="green">
          <Text>Box 2</Text>
        </Box>
        <Box width={200} height={50} backgroundColor="blue">
          <Text>Box 3</Text>
        </Box>
      </Group>
    );
  },
};

export const InvalidType: StoryObj<typeof Group> = {
  args: {
    orientation: "vertical",
    borderRadius: 8,
    gap: 2,
  },
  render: (args) => {
    return (
      <Group {...args}>
        <Box width={200} height={50} backgroundColor="red">
          <Text>Box 1</Text>
        </Box>
        <Text>This text should not be rendered in the group</Text>
        <Text>Box 2</Text>
        <Box width={200} height={50} backgroundColor="blue">
          <Text>Box 3</Text>
        </Box>
      </Group>
    );
  },
};

export const OnlyOneItem: StoryObj<typeof Group> = {
  args: {
    orientation: "vertical",
    borderRadius: 8,
    gap: 2,
  },
  render: (args) => {
    return (
      <Group {...args}>
        <Box width={200} height={50} backgroundColor="red">
          <Text>Box 1</Text>
        </Box>
        <Text>This text should not be rendered in the group</Text>
        <Text>Box 2</Text>
      </Group>
    );
  },
};
