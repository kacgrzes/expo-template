import type { Meta, StoryObj } from "@storybook/react";

import { EmptyState } from "./EmptyState";

const EmptyStateMeta: Meta<typeof EmptyState> = {
  title: "EmptyState",
  component: EmptyState,
  argTypes: {},
  args: {},
};

export default EmptyStateMeta;

export const Default: StoryObj<typeof EmptyState> = {
  args: {
    title: "No data available",
    explanation: "There is no data available for this period.",
    cta: {
      title: "Add data",
      onPress: () => {},
    },
  },
};
