import type { Meta, StoryObj } from "@storybook/react";

import { Notification } from "./Notification";

const NotificationMeta: Meta<typeof Notification> = {
  title: "Notification",
  component: Notification,
  argTypes: {},
  args: {},
};

export default NotificationMeta;

export const Default: StoryObj<typeof Notification> = {};
