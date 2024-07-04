import type { Meta, StoryObj } from "@storybook/react";

import { Button } from "./Button";

const ButtonMeta: Meta<typeof Button> = {
  title: "Button",
  component: Button,
  argTypes: {
    onPress: { action: "pressed the button" },
  },
  args: {
    title: "Hello world",
    disabled: false,
  },
};

export default ButtonMeta;

export const Default: StoryObj<typeof Button> = {};

export const Disabled: StoryObj<typeof Button> = {
  args: {
    disabled: true,
  },
};

export const Loading: StoryObj<typeof Button> = {
  args: {
    loading: true,
  },
};

export const Outline: StoryObj<typeof Button> = {
  args: {
    title: "Outline Button",
    variant: "outline",
  },
};

export const Link: StoryObj<typeof Button> = {
  args: {
    title: "Link Button",
    variant: "link",
  },
};

export const VeryLongTitle: StoryObj<typeof Button> = {
  args: {
    title: "Very long title in this button that should wrap to the next line",
  },
};

export const FullWidth: StoryObj<typeof Button> = {
  args: {
    full: true,
    title: "Full Width Button",
  },
};
