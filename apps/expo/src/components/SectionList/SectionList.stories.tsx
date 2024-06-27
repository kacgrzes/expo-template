import type { Meta, StoryObj } from "@storybook/react";

import { SectionList } from "./SectionList";

const SectionListMeta: Meta<typeof SectionList> = {
  title: "SectionList",
  component: SectionList,
  argTypes: {},
  args: {},
};

export default SectionListMeta;

export const Default: StoryObj<typeof SectionList> = {};
