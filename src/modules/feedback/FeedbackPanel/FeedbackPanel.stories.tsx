import type { Meta, StoryObj } from "@storybook/react";

import { FeedbackPanel } from "./FeedbackPanel";

const FeedbackPanelMeta: Meta<typeof FeedbackPanel> = {
  title: "FeedbackPanel",
  component: FeedbackPanel,
  argTypes: {},
  args: {},
};

export default FeedbackPanelMeta;

export const Default: StoryObj<typeof FeedbackPanel> = {};
