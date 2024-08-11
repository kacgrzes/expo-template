import { Box } from "@grapp/stacks";
import React from "react";
import { ScrollView } from "../ScrollView";
import { TabsScrollViewProps } from "./Tabs.types";

export const TabsScrollView = ({ children }: TabsScrollViewProps) => {
  return (
    <Box>
      <ScrollView horizontal contentContainerStyle={{ gap: 8, padding: 12 }}>
        {children}
      </ScrollView>
    </Box>
  );
};
