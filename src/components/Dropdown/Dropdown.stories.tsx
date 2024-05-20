import type { Meta, StoryObj } from "@storybook/react";

import { Dropdown } from "./Dropdown";

const DropdownMeta: Meta<typeof Dropdown> = {
  title: "Dropdown",
  component: Dropdown,
  argTypes: {},
  args: {},
};

export default DropdownMeta;

export const Default: StoryObj<typeof Dropdown> = {};
