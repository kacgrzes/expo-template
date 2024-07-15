import { Box, BoxProps } from "@grapp/stacks";
import React from "react";
import { SharedValue } from "react-native-reanimated";
import { Dot } from "../Dot";

type PageControlProps = Pick<BoxProps, "gap"> & {
  currentPage: SharedValue<number>;
  numberOfPages: number;
};

export const PageControl = ({
  currentPage,
  numberOfPages,
  ...props
}: PageControlProps) => {
  return (
    <Box direction={"row"} gap={1} {...props}>
      {Array.from({ length: numberOfPages })
        .fill(null)
        .map((_, index) => {
          return <Dot index={index} animatedIndex={currentPage} key={index} />;
        })}
    </Box>
  );
};
