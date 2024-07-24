import { BottomSheetHandleProps } from "@gorhom/bottom-sheet";
import { Box } from "@grapp/stacks";
import React from "react";

export const HandleComponent = (props: BottomSheetHandleProps) => {
  return (
    <Box alignX={"center"} alignY={"center"} paddingY={2.5}>
      <Box
        {...props}
        style={{
          backgroundColor: "black",
          width: 48,
          height: 4,
          borderRadius: 3,
        }}
      />
    </Box>
  );
};
