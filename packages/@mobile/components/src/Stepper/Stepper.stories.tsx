import type { Meta, StoryObj } from "@storybook/react";
import React from "react";

import { Trash2 } from "lucide-react-native";
import { Stepper } from "./index";

const StepperMeta: Meta<typeof Stepper.Root> = {
  title: "Stepper",
  // component: Stepper,
  argTypes: {},
  args: {
    size: "s",
    defaultValue: 0,
    min: -5,
    max: 5,
  },
};

export default StepperMeta;

export const Default: StoryObj<typeof Stepper> = {
  render: (args) => {
    return (
      <Stepper.Root {...args}>
        <Stepper.Decrement />
        <Stepper.Display />
        <Stepper.Increment />
      </Stepper.Root>
    );
  },
};

export const RenderProp: StoryObj<typeof Stepper> = {
  render: (args) => {
    return (
      <Stepper.Root {...args} min={0} max={5}>
        {({ decrement, increment, reset, set, value }) => {
          return (
            <>
              {value > 1 ? (
                <Stepper.Decrement />
              ) : (
                <Stepper.Icon
                  onPress={decrement}
                  icon={<Trash2 color="black" />}
                  disabled={value === 0}
                />
              )}
              <Stepper.Display />
              <Stepper.Increment />
            </>
          );
        }}
      </Stepper.Root>
    );
  },
};
