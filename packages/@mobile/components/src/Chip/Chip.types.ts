import { BoxProps } from "@grapp/stacks";
import { ReactNode } from "react";
import { Size } from "../types";

export type ChipProps = {
  disabled?: boolean;
  left?: ReactNode;
  // TODO: maybe this onPress should be a little bit different
  onPress?: () => void;
  onDismiss?: () => void;
  right?: ReactNode;
  size?: Size;
  label?: string;
  selected?: boolean;
  // variant
  // status
};

export type ChipGroupProps = {
  children?: ReactNode;
  // multiple?: boolean;
} & Pick<BoxProps, "gap">;

export type ChipScrollViewProps = {
  children?: ReactNode;
};
