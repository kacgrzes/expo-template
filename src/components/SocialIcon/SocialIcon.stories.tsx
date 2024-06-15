import type { Meta, StoryObj } from "@storybook/react";

import { SocialIcon } from "./SocialIcon";

const SocialIconMeta: Meta<typeof SocialIcon> = {
  title: "SocialIcon",
  component: SocialIcon,
  argTypes: {},
  args: {},
};

export default SocialIconMeta;

export const Default: StoryObj<typeof SocialIcon> = {};

export const Facebook: StoryObj<typeof SocialIcon> = {
  args: {
    name: "Facebook",
  },
};
