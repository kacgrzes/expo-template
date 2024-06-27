import type { Meta, StoryObj } from "@storybook/react";

import { Badge } from "./Badge";
import { Box } from "@grapp/stacks";

const BadgeMeta: Meta<typeof Badge> = {
  title: "Badge",
  component: Badge,
  argTypes: {},
  args: {
    label: 24,
    max: 99,
    outline: false,
    status: "default",
  },
};

export default BadgeMeta;

export const Default: StoryObj<typeof Badge> = {
  args: {
    label: 24,
  },
};

export const Dot: StoryObj<typeof Badge> = {};

export const Label: StoryObj<typeof Badge> = {
  args: {
    label: "New",
  },
};

export const All = () => {
  return (
    <Box direction={"row"} gap={2} wrap={"wrap"} margin={4}>
      <Badge status="default" label={"default"} />
      <Badge status="error" label={"error"} />
      <Badge status="info" label={"info"} />
      <Badge status="muted" label={"muted"} />
      <Badge status="success" label={"success"} />
      <Badge status="warning" label={"warning"} />
    </Box>
  );
};
