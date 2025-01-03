import type { Meta, StoryObj } from "@storybook/react";
import React from "react";
import { Card } from "../Card";
import { ScrollView } from "../ScrollView";
import { LinearGradient } from "./LinearGradient";

const LinearGradientMeta: Meta<typeof LinearGradient> = {
  title: "LinearGradient",
  component: LinearGradient,
  argTypes: {},
};

export default LinearGradientMeta;

export const Default: StoryObj<typeof LinearGradient> = {
  render: () => {
    return (
      <ScrollView
        contentContainerStyle={{
          width: "100%",
        }}
      >
        {gradients}
      </ScrollView>
    );
  },
};

const gradients = [
  // 1. Sunset Gradient:
  <LinearGradient
    key={"1"}
    colors={["#FF9966", "#FF5E62", "#6E48AA"]}
    start={{ x: 0, y: 0 }}
    end={{ x: 1, y: 1 }}
    style={{
      height: 200,
      width: 300,
    }}
  />,
  // 2. Ocean Gradient:
  <LinearGradient
    key={"2"}
    colors={["#4CA1AF", "#2C3E50"]}
    start={{ x: 0, y: 0 }}
    end={{ x: 0, y: 1 }}
    style={{
      height: 200,
      width: 300,
    }}
  />,
  // 3. Forest Gradient:
  <LinearGradient
    key={"3"}
    colors={["#134E5E", "#71B280"]}
    start={{ x: 0, y: 1 }}
    end={{ x: 1, y: 0 }}
    style={{
      height: 200,
      width: 300,
    }}
  />,
  // 4. Sky Gradient:
  <LinearGradient
    key={"4"}
    colors={["#87CEEB", "#4682B4"]}
    start={{ x: 0, y: 0 }}
    end={{ x: 0, y: 1 }}
    style={{
      height: 200,
      width: 300,
    }}
  />,
  // 5. Autumn Leaves Gradient:
  <LinearGradient
    key={"5"}
    colors={["#DAA520", "#D2691E", "#8B4513"]}
    start={{ x: 0, y: 0 }}
    end={{ x: 1, y: 1 }}
    style={{
      height: 200,
      width: 300,
    }}
  />,
  // 6. Northern Lights Gradient:
  <LinearGradient
    key={"6"}
    colors={["#3A1C71", "#D76D77", "#FFAF7B"]}
    start={{ x: 0, y: 0 }}
    end={{ x: 1, y: 1 }}
    style={{
      height: 200,
      width: 300,
    }}
  />,
  // 7. Desert Sand Gradient:
  <LinearGradient
    key={"7"}
    colors={["#F4A460", "#D2691E"]}
    start={{ x: 0, y: 0 }}
    end={{ x: 0, y: 1 }}
    style={{
      height: 200,
      width: 300,
    }}
  />,
  // Bupe
  <LinearGradient
    key={"7"}
    colors={["#00416A", "#E4E5E6"]}
    start={{ x: 0, y: 0 }}
    end={{ x: 1, y: 0 }}
    style={{
      height: 200,
      width: 300,
    }}
  />,
  // Blu
  <LinearGradient
    key={"7"}
    colors={["#00416A", "#E4E5E6"]}
    start={{ x: 0, y: 0 }}
    end={{ x: 0, y: 1 }}
    style={{
      height: 200,
      width: 300,
    }}
  />,
  // Evening night
  <LinearGradient
    key={"7"}
    colors={["#005AA7", "#FFFDE4"]}
    start={{ x: 0, y: 0 }}
    end={{ x: 1, y: 0 }}
    style={{
      height: 200,
      width: 300,
    }}
  />,
];
