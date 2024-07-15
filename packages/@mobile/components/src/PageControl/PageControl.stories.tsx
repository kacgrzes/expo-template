import type { Meta, StoryObj } from "@storybook/react";

import { PageControl } from "./PageControl";

const PageControlMeta: Meta<typeof PageControl> = {
  title: "PageControl",
  component: PageControl,
  argTypes: {},
  args: {
    numberOfPages: 5,
  },
};

export default PageControlMeta;

export const Default: StoryObj<typeof PageControl> = {};
