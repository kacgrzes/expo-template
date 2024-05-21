import type { Meta, StoryObj } from "@storybook/react";

import { Slider } from "./Slider";

const SliderMeta: Meta<typeof Slider> = {
  title: "Slider",
  component: Slider,
  argTypes: {},
  args: {},
};

export default SliderMeta;

export const Default: StoryObj<typeof Slider> = {};
