import { Box } from "@grapp/stacks";
import React, { ReactNode } from "react";
import { ScrollView } from "../ScrollView";

export const TabsScrollView = ({ children }: { children: ReactNode }) => {
  return (
    <Box>
      <ScrollView horizontal contentContainerStyle={{ gap: 8, padding: 12 }}>
        {children}
      </ScrollView>
    </Box>
  );
};
