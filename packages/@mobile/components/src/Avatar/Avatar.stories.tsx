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
