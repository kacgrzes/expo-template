import type { Meta, StoryObj } from "@storybook/react";

import { DropdownMenu } from "./DropdownMenu";
import { DropdownMenuExample } from "./DropdownMenuExample";

const DropdownMenuMeta: Meta<typeof DropdownMenu> = {
  title: "DropdownMenu",
  component: DropdownMenuExample,
  argTypes: {},
  args: {},
};

export default DropdownMenuMeta;

export const Default: StoryObj<typeof DropdownMenu> = {};
