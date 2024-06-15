import React from "react";
import type { Preview } from "@storybook/react";
import { Box } from "@grapp/stacks";

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
