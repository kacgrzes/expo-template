import { ReactNode } from "react";

export type Status =
  | "primary"
  | "secondary"
  | "success"
  | "error"
  | "warning"
  | "info"
  | "muted";
export type Size = "s" | "m" | "l";

export type CommonFormProps = {
  disabled?: boolean;
};

export type CommonAccessoryProps = {
  left?: ReactNode;
  right?: ReactNode;
};

export type OnValueChange<T> = (value: T) => void;

export type CommonValueProps<T> = {
  value?: T;
  onValueChange?: OnValueChange<T>;
};
