import { BoxProps } from "@grapp/stacks";

export type CenterProps = Omit<BoxProps, "alignX" | "alignY">;
