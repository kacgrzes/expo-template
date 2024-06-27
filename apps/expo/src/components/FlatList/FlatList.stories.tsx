import React from "react";
import type { Meta, StoryObj } from "@storybook/react";

import { FlatList } from "./FlatList";
import { Clipboard, FileCheck, LockKeyhole } from "lucide-react-native";
import { ListItem } from "../ListItem";

const data = [
  { id: "0", icon: Clipboard, title: "Terms and conditions" },
  { id: "1", icon: LockKeyhole, title: "Privacy policy" },
  { id: "2", icon: FileCheck, title: "Licenses" },
];

const FlatListMeta: Meta<typeof FlatList> = {
  title: "FlatList",
  component: FlatList,
  argTypes: {},
  args: {
    data,
    renderItem: ({ item }: { item: any }) => {
      return (
        <ListItem title={item.title} icon={item.icon} onPress={() => {}} />
      );
    },
  },
};

export default FlatListMeta;

export const Default: StoryObj<typeof FlatList> = {};
