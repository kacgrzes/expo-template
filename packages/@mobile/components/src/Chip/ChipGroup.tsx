import { Box } from "@grapp/stacks";
import { ChipGroupProps } from "./Chip.types";

export const ChipGroup = ({ children }: ChipGroupProps) => {
  return (
    <Box direction={"row"} columnGap={2} rowGap={3} wrap={"wrap"}>
      {children}
    </Box>
  );
};
