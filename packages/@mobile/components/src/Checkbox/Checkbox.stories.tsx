import type { Meta, StoryObj } from "@storybook/react";
import React from "react";

import { Checkbox } from "./Checkbox";

const CheckboxMeta: Meta<typeof Checkbox> = {
  title: "Checkbox",
  component: Checkbox,
  argTypes: {},
  args: {
    checked: false,
    disabled: false,
  },
};

export default CheckboxMeta;

export const Controlled: StoryObj<typeof Checkbox> = {};

export const Uncontrolled: StoryObj<typeof Checkbox> = {
  args: {
    disabled: false,
  },
  render: (args) => {
    return <Checkbox disabled={args.disabled} />;
  },
};
