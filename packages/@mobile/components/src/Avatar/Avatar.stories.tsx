import type { Meta, StoryObj } from "@storybook/react";
import React from "react";

import { Box } from "@grapp/stacks";
import { Avatar } from "./Avatar";
import { ImageWithHole } from "./SkiaTest";

const AvatarMeta: Meta<typeof Avatar> = {
  title: "Avatar",
  component: Avatar,
  argTypes: {},
  args: {
    size: "m",
    loading: false,
  },
};

export default AvatarMeta;

export const Default: StoryObj<typeof Avatar> = {
  args: {
    source: {
      uri: "https://i.pravatar.cc/64",
    },
  },
};

export const Initials: StoryObj<typeof Image> = {};

export const SkiaImage: StoryObj<typeof Image> = {
  render: () => {
    return (
      <Box backgroundColor="white" flex={"fluid"} width={"100%"}>
        <ImageWithHole>
          <Box
            width={21}
            height={21}
            style={{
              position: "absolute",
              right: 0,
              bottom: 0,
              backgroundColor: "red",
              borderRadius: 20,
            }}
          />
        </ImageWithHole>
      </Box>
    );
  },
};

export const GroupedAvatars: StoryObj<typeof Avatar.Group> = {
  render: (args) => (
    <Avatar.Group {...args}>
      <Avatar source={{ uri: "https://i.pravatar.cc/64?img=1" }} />
      <Avatar source={{ uri: "https://i.pravatar.cc/64?img=2" }} />
      <Avatar source={{ uri: "https://i.pravatar.cc/64?img=3" }} />
      <Avatar source={{ uri: "https://i.pravatar.cc/64?img=4" }} />
    </Avatar.Group>
  ),
  args: {
    size: "m",
    overlap: 12,
    orientation: "horizontal",
    reverse: false,
  },
  argTypes: {
    size: {
      control: { type: "select" },
      options: ["xs", "s", "m", "l", "xl"],
    },
    overlap: {
      control: { type: "number" },
    },
    orientation: {
      control: { type: "radio" },
      options: ["horizontal", "vertical"],
    },
  },
};
