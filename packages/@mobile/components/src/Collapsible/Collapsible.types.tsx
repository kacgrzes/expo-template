import { BoxProps } from "@grapp/stacks";
import { ReactNode } from "react";

export type CollapsibleContentProps = {
  children?: ReactNode;
};

export type CollapsibleRootProps = {
  children?: ReactNode;
  defaultOpen?: boolean;
  disabled?: boolean;
  onOpenChange?: (open: boolean) => void;
  open?: boolean;
};

export type CollapsibleTriggerProps = BoxProps;
