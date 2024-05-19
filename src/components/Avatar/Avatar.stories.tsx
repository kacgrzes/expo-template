import type { Meta, StoryObj } from "@storybook/react";

import { Avatar } from "./Avatar";

const AvatarMeta: Meta<typeof Avatar> = {
  title: "Avatar",
  component: Avatar,
  argTypes: {},
  args: {},
};

export default AvatarMeta;

export const Default: StoryObj<typeof Avatar> = {};
