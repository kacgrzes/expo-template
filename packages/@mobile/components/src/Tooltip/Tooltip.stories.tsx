import { PortalProvider } from "@gorhom/portal";
import { Box } from "@grapp/stacks";
import { Overlays } from "@mobile/root";
import type { Meta, StoryObj } from "@storybook/react";
import React from "react";
import { Button } from "../Button";

import { Tooltip } from "./index";

const TooltipMeta: Meta<typeof Tooltip> = {
  title: "Tooltip",
  // component: Tooltip,
  argTypes: {},
  args: {},
  decorators: (Story) => {
    return (
      <PortalProvider>
        <Box width={"100%"} flex={"fluid"}>
          <Story />
          <Overlays />
        </Box>
      </PortalProvider>
    );
  },
};

export default TooltipMeta;

export const Default: StoryObj<typeof Tooltip> = {
  render: () => {
    return (
      <Tooltip.Provider>
        <Tooltip.Root>
          <Tooltip.Trigger>
            <Button title="Tooltip trigger" />
          </Tooltip.Trigger>
          <Tooltip.Overlay />
          <Tooltip.Portal>
            <Tooltip.Content />
          </Tooltip.Portal>
        </Tooltip.Root>
      </Tooltip.Provider>
    );
  },
};
