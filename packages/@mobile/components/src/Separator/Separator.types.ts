import { BoxProps } from "@grapp/stacks";
import { ReactNode } from "react";
import { Orientation } from "../types";

export type SeparatorProps = {
  children?: ReactNode;
  orientation?: Orientation;
} & Pick<BoxProps, "gap">;
