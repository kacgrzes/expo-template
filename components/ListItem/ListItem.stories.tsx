import type { Meta, StoryObj } from "@storybook/react";

import { ListItem } from "./ListItem";

const ListItemMeta: Meta<typeof ListItem> = {
  title: "ListItem",
  component: ListItem,
  argTypes: {},
  args: {},
};

export default ListItemMeta;

export const Default: StoryObj<typeof ListItem> = {};
