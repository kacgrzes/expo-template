import type { Meta, StoryObj } from "@storybook/react";

import { Notifier } from "./Notifier";

const NotifierMeta: Meta<typeof Notifier> = {
  title: "Notifier",
  component: Notifier,
  argTypes: {},
  args: {},
};

export default NotifierMeta;

export const Default: StoryObj<typeof Notifier> = {};
