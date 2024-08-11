import React from "react";
import { ScrollView } from "../ScrollView";
import { ChipScrollViewProps } from "./Chip.types";

export const ChipScrollView = ({ children }: ChipScrollViewProps) => {
  return (
    <ScrollView
      showsHorizontalScrollIndicator={false}
      horizontal
      contentContainerStyle={{ gap: 8 }}
    >
      {children}
    </ScrollView>
  );
};
