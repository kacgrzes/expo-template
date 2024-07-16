import { Box, BoxProps } from "@grapp/stacks";
import { ReactNode } from "react";

type ChipGroupProps = {
  children?: ReactNode;
} & Pick<BoxProps, "gap">;

export const ChipGroup = ({ children, gap = 2 }: ChipGroupProps) => {
  return (
    <Box direction={"row"} gap={gap} wrap={"wrap"}>
      {children}
    </Box>
  );
};
