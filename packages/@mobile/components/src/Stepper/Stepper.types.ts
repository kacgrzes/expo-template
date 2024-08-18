import { ReactNode } from "react";
import { Size } from "../types";

// autorepeat
export type StepperRootProps = {
  accessibilityLabel?: string;
  children?: ReactNode;
  defaultValue?: number;
  disabled?: boolean;
  max?: number;
  min?: number;
  onChange?: (value: number) => void;
  onValueChange?: (value: number) => void;
  orientation?: "horizontal" | "vertical";
  size?: Size;
  step?: number;
  testID?: string;
  value?: number;
};

export type StepperRef = {
  reset: () => void;
  set: (value: number) => void;
  increment: () => void;
  decrement: () => void;
};
