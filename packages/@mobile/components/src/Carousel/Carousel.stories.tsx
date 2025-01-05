import type { Meta, StoryObj } from "@storybook/react";

import { Carousel } from "./Carousel";

const CarouselMeta: Meta<typeof Carousel> = {
  title: "Carousel",
  component: Carousel,
  argTypes: {},
  args: {},
};

export default CarouselMeta;

export const Default: StoryObj<typeof Carousel> = {};
