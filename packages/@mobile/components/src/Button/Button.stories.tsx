import { Box } from "@grapp/stacks";
import type { Meta, StoryObj } from "@storybook/react";
import React from "react";

import { useToggle } from "@common/hooks";
import { ArrowDown, Pause } from "lucide-react-native";
import { AppleAuthenticationButton } from "./AppleAuthenticationButton";
import { Button } from "./Button";
import { GoogleAuthenticationButton } from "./GoogleAuthenticationButton";

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

export const AllButtons: StoryObj<typeof Button> = {
  render: () => {
    return (
      <Box gap={1} width={"100%"}>
        <AppleAuthenticationButton />
        <GoogleAuthenticationButton />
        <Button title="Link" variant="link" />
        <Button title="Outline" variant="outline" />
        <Button title="Solid" variant="solid" />
      </Box>
    );
  },
};

export const AllSizes: StoryObj<typeof Button> = {
  render: () => {
    return (
      <Box gap={1} width={"100%"}>
        <Button title="Small" size="s" />
        <Button title="Medium" size="m" />
        <Button title="Large" size="l" />
      </Box>
    );
  },
};

export const ButtonGroupStory: StoryObj<typeof Button> = {
  render: () => {
    const [visible, toggleVisibility] = useToggle(true);
    return (
      <Button.Group size="l">
        {visible ? <Button icon={Pause} /> : null}
        <Button title="Button 2" full onPress={toggleVisibility} />
      </Button.Group>
    );
  },
};

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

export const IconButton: StoryObj<typeof Button> = {
  args: {
    title: undefined,
    icon: ArrowDown,
  },
};

export const AppleAuthenticationButtonStory: StoryObj<typeof Button> = {
  render: () => {
    return <AppleAuthenticationButton />;
  },
};

export const GoogleAuthenticationButtonStory: StoryObj<typeof Button> = {
  render: () => {
    return <GoogleAuthenticationButton />;
  },
};

export const Progress: StoryObj<typeof Button> = {
  args: {
    title: "Hello",
    full: true,
    progress: true,
  },
};
