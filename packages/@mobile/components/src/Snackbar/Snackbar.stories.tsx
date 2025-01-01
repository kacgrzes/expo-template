import type { Meta, StoryObj } from "@storybook/react";
import React from "react";

import { Snackbar } from "./Snackbar";

const SnackbarMeta: Meta<typeof Snackbar> = {
  title: "Snackbar",
  component: Snackbar,
  argTypes: {},
  args: {
    isVisible: true,
    onDismiss: () => {},
    message: "This is a snackbar message.",
  },
};

export default SnackbarMeta;

export const Default: StoryObj<typeof Snackbar> = {};
