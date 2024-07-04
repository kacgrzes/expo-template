import type { Meta, StoryObj } from "@storybook/react";

import { ScrollView } from "./ScrollView";

const ScrollViewMeta: Meta<typeof ScrollView> = {
  title: "ScrollView",
  component: ScrollView,
  argTypes: {},
  args: {},
};

export default ScrollViewMeta;

export const Default: StoryObj<typeof ScrollView> = {};
