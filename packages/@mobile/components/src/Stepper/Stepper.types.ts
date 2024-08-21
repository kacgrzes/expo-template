import { ReactNode } from "react";
import { Orientation, Size } from "../types";

export type StepperControls = {
  reset: () => void;
  set: (value: number) => void;
  increment: () => void;
  decrement: () => void;
};

// autorepeat
export type StepperRootProps = {
  accessibilityLabel?: string;
  children?:
    | ReactNode
    | ((values: StepperControls & { value: number }) => ReactNode);
  defaultValue?: number;
  disabled?: boolean;
  max?: number;
  min?: number;
  onChange?: (value: number) => void;
  onValueChange?: (value: number) => void;
  orientation?: Orientation;
  size?: Size;
  step?: number;
  testID?: string;
  value?: number;
};

export type StepperRef = StepperControls;
