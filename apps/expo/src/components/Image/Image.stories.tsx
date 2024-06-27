import type { Meta, StoryObj } from "@storybook/react";

import { Image } from "./Image";

const ImageMeta: Meta<typeof Image> = {
  title: "Image",
  component: Image,
  argTypes: {},
  args: {},
};

export default ImageMeta;

export const Default: StoryObj<typeof Image> = {};
