import { Box, BoxProps } from "@grapp/stacks";
import React, { ReactNode } from "react";
import { ScrollView } from "../ScrollView";

type ChipGroupProps = {
  children?: ReactNode;
} & Pick<BoxProps, "gap">;

export const ChipScrollView = ({ children }: ChipGroupProps) => {
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
