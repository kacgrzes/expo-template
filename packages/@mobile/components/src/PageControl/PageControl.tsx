import { Box, BoxProps } from "@grapp/stacks";
import React from "react";
import { SharedValue } from "react-native-reanimated";
import { Dot } from "../Dot";

export type PageControlProps = Pick<BoxProps, "gap"> & {
  currentPage: SharedValue<number>;
  numberOfPages: number;
  hidesForSinglePage?: boolean;
};

export const PageControl = ({
  currentPage,
  hidesForSinglePage,
  numberOfPages,
  ...props
}: PageControlProps) => {
  if (hidesForSinglePage && numberOfPages === 1) {
    return null;
  }

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
