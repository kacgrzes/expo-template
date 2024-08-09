import { Box, BoxProps } from "@grapp/stacks";
import { ReactNode } from "react";

type ChipGroupProps = {
  children?: ReactNode;
  // multiple?: boolean;
} & Pick<BoxProps, "gap">;

export const ChipGroup = ({ children }: ChipGroupProps) => {
  return (
    <Box direction={"row"} columnGap={2} rowGap={3} wrap={"wrap"}>
      {children}
    </Box>
  );
};
