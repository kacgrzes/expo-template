import type { Meta, StoryObj } from "@storybook/react";

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
