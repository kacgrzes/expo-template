import { Box } from "@grapp/stacks";
import type { Meta, StoryObj } from "@storybook/react";
import React from "react";

import { Status } from "../types";
import { ActivityIndicator } from "./ActivityIndicator";

const ActivityIndicatorMeta: Meta<typeof ActivityIndicator> = {
  title: "ActivityIndicator",
  component: ActivityIndicator,
  args: {
    size: "s",
  },
};

export default ActivityIndicatorMeta;

export const Default: StoryObj<typeof ActivityIndicator> = {};

export const AllStatuses: StoryObj<typeof ActivityIndicator> = {
  render: () => {
    const statuses: Status[] = ["success", "error", "warning", "info", "muted"];
    return (
      <Box direction={"row"} alignX={"around"}>
        {statuses.map((status) => (
          <Box gap={2} key={status} alignX={"center"}>
            <ActivityIndicator status={status} size="s" />
            <ActivityIndicator status={status} size="l" />
          </Box>
        ))}
      </Box>
    );
  },
};
