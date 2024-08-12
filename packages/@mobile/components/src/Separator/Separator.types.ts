import { BoxProps } from "@grapp/stacks";
import { ReactNode } from "react";

export type SeparatorProps = {
  children?: ReactNode;
  orientation?: "vertical" | "horizontal";
} & Pick<BoxProps, "gap">;
