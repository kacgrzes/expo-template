import type { Meta, StoryObj } from "@storybook/react";
import React from "react";
import { Text } from "../Text";

import { Accordion } from "./index";

const AccordionMeta: Meta<typeof Accordion> = {
  title: "Accordion",
  // component: Accordion,
  argTypes: {},
  args: {},
};

export default AccordionMeta;

export const Default: StoryObj<typeof Accordion> = {
  render: (args) => {
    return (
      <Accordion.Root type="single" defaultValue={"1"}>
        <Accordion.Item value="1">
          <Accordion.Header>
            <Accordion.Trigger>
              <Text>Hello!</Text>
            </Accordion.Trigger>
          </Accordion.Header>
          <Accordion.Content>
            <Text>
              A long time ago in a galaxy far, far away… Lorem Ipsum est planeta
              deserta, vasti campi arenosi, et vasto spatio siderum. Saga erat
              ex repugnantia rebellium et imperii tyrannici. Pax in terris rara,
              cum Sith Dominis et Jedi Equitum perpetuo in conflictu. Per vias
              lacteas et nebulas, Yoda magister et Obi-Wan Kenobi sapientiam
              tradiderunt.
            </Text>
          </Accordion.Content>
        </Accordion.Item>
        <Accordion.Item value="2">
          <Accordion.Content>
            <Text>
              A long time ago in a galaxy far, far away… Lorem Ipsum est planeta
              deserta, vasti campi arenosi, et vasto spatio siderum. Saga erat
              ex repugnantia rebellium et imperii tyrannici. Pax in terris rara,
              cum Sith Dominis et Jedi Equitum perpetuo in conflictu. Per vias
              lacteas et nebulas, Yoda magister et Obi-Wan Kenobi sapientiam
              tradiderunt.
            </Text>
          </Accordion.Content>
          <Accordion.Header>
            <Accordion.Trigger>
              <Text>Hello!</Text>
            </Accordion.Trigger>
          </Accordion.Header>
        </Accordion.Item>
      </Accordion.Root>
    );
  },
};
