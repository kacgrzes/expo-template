import { LucideIcon } from "lucide-react-native";
import { ComponentProps } from "react";
import { AnimatedRectButton } from "../AnimatedButtons";

export type FABProps = Pick<
  ComponentProps<typeof AnimatedRectButton>,
  "onPress"
> & {
  Icon?: LucideIcon;
  extended?: boolean;
  label?: string;
};
