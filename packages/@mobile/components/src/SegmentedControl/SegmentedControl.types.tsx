import { ReactNode } from "react";
import { Size } from "../types";

export type SegmentedControlProps = {
  children?: ReactNode;
  defaultSelectedIndex?: number;
  disabled?: boolean;
  full?: boolean;
  onValueChange?: (index: number) => void;
  selectedIndex?: number;
  size?: Size;
  // animated?: boolean;
  // multiselect?: boolean;
  // testID?: string;
  // onChange (with event)
  // withItemBorders
};

export type SegmentedControlItemProps = {
  index?: number;
  label: string;
  onPress?: () => void;
};
