import type { Meta, StoryObj } from "@storybook/react";

import { ListItem } from "./ListItem";
import { AlarmClock } from "lucide-react-native";

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
