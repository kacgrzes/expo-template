import type { Meta, StoryObj } from "@storybook/react";

import { SearchBar } from "./SearchBar";

const SearchBarMeta: Meta<typeof SearchBar> = {
  title: "SearchBar",
  component: SearchBar,
  argTypes: {},
  args: {
    style: {
      width: "100%",
    },
  },
};

export default SearchBarMeta;

export const Default: StoryObj<typeof SearchBar> = {};
