import type { Meta, StoryObj } from "@storybook/react";

import { ContextMenu } from "./ContextMenu";
import { ContextMenuExample } from "./ContextMenuExample";

const ContextMenuMeta: Meta<typeof ContextMenu> = {
  title: "ContextMenu",
  component: ContextMenuExample,
  argTypes: {},
  args: {},
};

export default ContextMenuMeta;

export const Default: StoryObj<typeof ContextMenu> = {};
