import type { Meta, StoryObj } from "@storybook/react";

import { SafeAreaView } from "./SafeAreaView";

const SafeAreaViewMeta: Meta<typeof SafeAreaView> = {
  title: "SafeAreaView",
  component: SafeAreaView,
  argTypes: {},
  args: {},
};

export default SafeAreaViewMeta;

export const Default: StoryObj<typeof SafeAreaView> = {};
