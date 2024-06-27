import type { Meta, StoryObj } from "@storybook/react";

import { Picker } from "./Picker";

const PickerMeta: Meta<typeof Picker> = {
  title: "Picker",
  component: Picker,
  argTypes: {},
  args: {},
};

export default PickerMeta;

export const Default: StoryObj<typeof Picker> = {};
