import type { Meta, StoryObj } from "@storybook/react";

import { Avatar } from "./Avatar";

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
