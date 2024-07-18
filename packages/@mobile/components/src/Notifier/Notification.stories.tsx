import { Box } from "@grapp/stacks";
import type { Meta, StoryObj } from "@storybook/react";
import React from "react";

import { Notification } from "./Notification";

const NotificationMeta: Meta<typeof Notification> = {
  title: "Notification",
  component: Notification,
  argTypes: {},
  args: {},
  decorators: (Story) => {
    return (
      <Box width={"100%"}>
        <Story />
      </Box>
    );
  },
};

export default NotificationMeta;

export const Default: StoryObj<typeof Notification> = {
  args: {
    title: "Hello!",
    description: "This is an example of a notification description",
  },
};

export const All: StoryObj<typeof Notification> = {
  render: () => {
    const notification = {
      title: "Hello!",
      description: "This is an example of a notification description",
    };

    return (
      <>
        {["info", "success", "warning", "error"].map((status) => {
          return (
            <Notification
              key={status}
              status={status as any}
              {...notification}
            />
          );
        })}
      </>
    );
  },
};
