import { Box } from "@grapp/stacks";
import type { Preview } from "@storybook/react";
import React from "react";

const preview: Preview = {
  parameters: {
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/,
      },
    },
  },
  decorators: [
    (Story) => (
      <Box padding={4} flex="fluid" alignX={"left"}>
        <Story />
      </Box>
    ),
  ],
};

export default preview;
