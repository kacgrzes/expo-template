import { BoxProps } from "@grapp/stacks";
import { ReactNode } from "react";

type AccordionRootSingle = {
  onValueChange?: (value: string) => void;
  defaultValue?: string;
  value?: string;
  type: "single";
};

type AccordionRootMultiple = {
  onValueChange?: (value: string[]) => void;
  defaultValue?: string[];
  value?: string[];
  type: "multiple";
};

export type AccordionRootProps = {
  children?: React.ReactNode;
  disabled?: boolean;
} & (AccordionRootSingle | AccordionRootMultiple);

export type AccordionItemProps = {
  children?: ReactNode;
  disabled?: boolean;
  value: string;
};

export type AccordionTriggerProps = BoxProps;

export type AccordionHeaderProps = BoxProps;

export type AccordionContentProps = {
  children?: ReactNode;
};
