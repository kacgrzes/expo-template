import { BoxProps } from "@grapp/stacks";

export type GroupProps = {
  orientation?: "vertical" | "horizontal";
  validTypes?: React.ComponentType<any>[];
} & BoxProps;
