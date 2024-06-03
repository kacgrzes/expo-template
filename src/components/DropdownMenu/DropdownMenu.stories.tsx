import type { Meta, StoryObj } from "@storybook/react";

import { DropdownMenu } from "./DropdownMenu";
import { Button } from "../Button";

const DropdownMenuMeta: Meta<typeof DropdownMenu> = {
  title: "DropdownMenu",
  component: () => {
    return (
      <DropdownMenu.Root style={{ width: "100%" }}>
        <DropdownMenu.Trigger>
          <Button title="DropdownMenu example" full />
        </DropdownMenu.Trigger>

        <DropdownMenu.Content>
          <DropdownMenu.Label>Label #1</DropdownMenu.Label>
          <DropdownMenu.Item key="test-1">
            <DropdownMenu.ItemTitle>Test #1</DropdownMenu.ItemTitle>
          </DropdownMenu.Item>

          <DropdownMenu.Group>
            <DropdownMenu.Item key="test-2">
              <DropdownMenu.ItemTitle>Test #2</DropdownMenu.ItemTitle>
            </DropdownMenu.Item>
            <DropdownMenu.Item key="test-3">
              <DropdownMenu.ItemTitle>Test #3</DropdownMenu.ItemTitle>
            </DropdownMenu.Item>
          </DropdownMenu.Group>
        </DropdownMenu.Content>
      </DropdownMenu.Root>
    );
  },
  argTypes: {},
  args: {},
};

export default DropdownMenuMeta;

export const Default: StoryObj<typeof DropdownMenu> = {};
