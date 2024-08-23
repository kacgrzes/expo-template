import type { Meta, StoryObj } from "@storybook/react";
import React from "react";

import { AppNotification } from "./AppNotification";
import { AppNotificationStack } from "./AppNotificationStack";

const AppNotificationMeta: Meta<typeof AppNotification> = {
  title: "AppNotification",
  component: AppNotification,
  argTypes: {
    appName: { control: "text" },
    title: { control: "text" },
    message: { control: "text" },
    time: { control: "text" },
    appIconSource: { control: "text" },
  },
  args: {
    appName: "Messages",
    title: "Hello!",
    message: "John: Hey, are we still on for lunch?",
    time: "now",
    appIconSource: "https://example.com/app-icon.png", // placeholder URL
  },
};

export default AppNotificationMeta;

type Story = StoryObj<typeof AppNotification>;

export const Default: Story = {};

export const LongMessage: Story = {
  args: {
    message:
      "This is a very long message that should wrap to multiple lines in the notification. It demonstrates how the component handles longer content.",
  },
};

export const DifferentApp: Story = {
  args: {
    appName: "Calendar",
    message: "Reminder: Team meeting in 15 minutes",
    appIconSource: "https://example.com/calendar-icon.png", // placeholder URL
  },
};

export const PastTime: Story = {
  args: {
    time: "2h ago",
  },
};

export const Stack: Story = {
  render: () => (
    <AppNotificationStack
      appName="Messages"
      title="Hello!"
      message="John: Hey, are we still on for lunch? I was thinking we could try that new Italian place downtown. I've heard great things about their pasta dishes. Let me know if that works for you!"
      time="now"
      appIconSource="https://example.com/app-icon.png"
      stackDepth={3}
    />
  ),
};
