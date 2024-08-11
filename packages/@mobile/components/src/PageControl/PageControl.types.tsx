import { BoxProps } from "@grapp/stacks";
import { SharedValue } from "react-native-reanimated";

export type PageControlProps = Pick<BoxProps, "gap"> & {
  currentPage: SharedValue<number>;
  numberOfPages: number;
  hidesForSinglePage?: boolean;
  onPageChange: (currentPage: number) => void;
};
