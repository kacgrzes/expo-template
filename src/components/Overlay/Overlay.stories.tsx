import type { Meta, StoryObj } from "@storybook/react";

import { Overlay } from "./Overlay";

const OverlayMeta: Meta<typeof Overlay> = {
  title: "Overlay",
  component: Overlay,
  argTypes: {},
  args: {},
};

export default OverlayMeta;

export const Default: StoryObj<typeof Overlay> = {};
