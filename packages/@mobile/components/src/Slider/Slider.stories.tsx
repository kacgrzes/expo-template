import type { Meta, StoryObj } from "@storybook/react";
import React from "react";

import { Slider } from "./Slider";

const SliderMeta: Meta<typeof Slider> = {
  title: "Slider",
  component: Slider,
  argTypes: {},
  args: {},
};

export default SliderMeta;

export const Default: StoryObj<typeof Slider> = {
  render: () => {
    return (
      <Slider.Root defaultValue={[40]} min={0} max={80} step={20}>
        <Slider.Track>
          <Slider.Range />
          <Slider.Ticks />
        </Slider.Track>
        <Slider.Thumb />
      </Slider.Root>
    );
  },
};
