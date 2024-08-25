import type { Meta, StoryObj } from "@storybook/react";
import React from "react";
import { View } from "react-native";
import { Button } from "../Button";
import { Text } from "../Text";
import { Tile } from "./index"; // Assuming you have a Tile component

const TileMeta: Meta<typeof Tile> = {
  title: "Tile",
  component: Tile,
  argTypes: {
    disabled: { control: "boolean" },
    selected: { control: "boolean" },
  },
};

export default TileMeta;

type Story = StoryObj<typeof Tile>;

export const Default: Story = {
  args: {
    children: <Text>Default Tile</Text>,
  },
};

export const WithIcon: Story = {
  args: {
    children: (
      <View>
        <Text>Icon Tile</Text>
        {/* Add your icon component here */}
      </View>
    ),
  },
};

export const WithRenderProp: Story = {
  args: {
    children: ({ selected, disabled }) => (
      <View>
        <Text>{selected ? "Selected" : "Not Selected"}</Text>
        <Text>{disabled ? "Disabled" : "Enabled"}</Text>
      </View>
    ),
  },
};

export const Interactive: Story = {
  args: {
    children: ({ selected, disabled }) => (
      <Button
        onPress={() => console.log("Tile pressed")}
        disabled={disabled}
        title={selected ? "Selected Tile" : "Click me!"}
      />
    ),
  },
};

export const DisabledTile: Story = {
  args: {
    disabled: true,
    children: <Text>Disabled Tile</Text>,
  },
};

export const SelectedTile: Story = {
  args: {
    selected: true,
    children: <Text>Selected Tile</Text>,
  },
};

export const MultipleTiles: Story = {
  render: () => {
    const catWords = [
      "Purring Whiskers",
      "Feline Paws",
      "Meowing Tail",
      "Playful Kitten",
      "Fluffy Fur",
      "Curious Ears",
      "Sleepy Nap",
      "Agile Hunter",
      "Graceful Leap",
    ];

    return (
      <Tile.Group orientation="vertical">
        {catWords.map((words, index) => (
          <Tile
            key={index}
            selected={index % 3 === 0}
            disabled={index % 4 === 0}
          >
            <Text>{words}</Text>
          </Tile>
        ))}
      </Tile.Group>
    );
  },
};
