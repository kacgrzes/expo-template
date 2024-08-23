import type { Meta, StoryObj } from "@storybook/react";
import React from "react";
import { Text } from "../Text";
import { Card } from "./Card";

const CardMeta: Meta<typeof Card> = {
  title: "Card",
  component: Card,
  argTypes: {},
  args: {
    children: <Text>Card Content</Text>,
  },
};

export default CardMeta;

export const Default: StoryObj<typeof Card> = {
  args: {
    children: <Text>Default Card</Text>,
  },
};

export const WithPadding: StoryObj<typeof Card> = {
  args: {
    children: <Text>Card with Extra Padding</Text>,
    padding: 5,
  },
};

export const CustomBackground: StoryObj<typeof Card> = {
  args: {
    children: <Text>Card with Custom Background</Text>,
    backgroundColor: "lightblue",
  },
};

export const All = () => {
  return (
    <>
      <Card margin={2}>
        <Text>Default Card</Text>
      </Card>
      <Card margin={2} padding={5}>
        <Text>Card with Extra Padding</Text>
      </Card>
      <Card margin={2} backgroundColor="lightgreen">
        <Text>Card with Custom Background</Text>
      </Card>
      <Card margin={2} borderColor="blue" borderWidth={2}>
        <Text>Card with Custom Border</Text>
      </Card>
    </>
  );
};
