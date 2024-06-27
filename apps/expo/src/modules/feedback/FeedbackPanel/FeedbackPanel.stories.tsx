import type { Meta, StoryObj } from "@storybook/react";
import BottomSheet from "@gorhom/bottom-sheet";

import { FeedbackPanel } from "./FeedbackPanel";

const FeedbackPanelMeta: Meta<typeof FeedbackPanel> = {
  title: "FeedbackPanel",
  component: FeedbackPanel,
  argTypes: {},
  args: {},
  decorators: [
    (Story) => (
      <BottomSheet enableDynamicSizing={false} snapPoints={["25%", "50%"]}>
        <Story />
      </BottomSheet>
    ),
  ],
};

export default FeedbackPanelMeta;

export const Default: StoryObj<typeof FeedbackPanel> = {};
