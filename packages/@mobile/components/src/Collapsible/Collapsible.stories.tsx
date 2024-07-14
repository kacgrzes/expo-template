import type { Meta, StoryObj } from "@storybook/react";
import React from "react";
import { Text } from "../Text";

import { Collapsible } from "./index";

const CollapsibleMeta: Meta<typeof Collapsible> = {
  title: "Collapsible",
  // component: Collapsible,
  argTypes: {},
  args: {},
};

export default CollapsibleMeta;

export const Default: StoryObj<typeof Collapsible> = {
  render: (args) => {
    return (
      <Collapsible.Root defaultOpen={false}>
        <Collapsible.Trigger>
          <Text>Collapsible trigger</Text>
        </Collapsible.Trigger>
        <Collapsible.Content>
          <Text>
            A long time ago in a galaxy far, far away… Lorem Ipsum est planeta
            deserta, vasti campi arenosi, et vasto spatio siderum. Saga erat ex
            repugnantia rebellium et imperii tyrannici. Pax in terris rara, cum
            Sith Dominis et Jedi Equitum perpetuo in conflictu. Per vias lacteas
            et nebulas, Yoda magister et Obi-Wan Kenobi sapientiam tradiderunt.
          </Text>
        </Collapsible.Content>
      </Collapsible.Root>
    );
  },
};
