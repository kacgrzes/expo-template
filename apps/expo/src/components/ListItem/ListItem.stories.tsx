import type { Meta, StoryObj } from "@storybook/react";

import { AlarmClock } from "lucide-react-native";
import { ListItem } from "./ListItem";

const ListItemMeta: Meta<typeof ListItem> = {
  title: "ListItem",
  component: ListItem,
  argTypes: {},
  args: {
    title: "List item",
  },
};

export default ListItemMeta;

export const Default: StoryObj<typeof ListItem> = {};

export const WithIcon: StoryObj<typeof ListItem> = {
  args: {
    icon: AlarmClock,
  },
};
