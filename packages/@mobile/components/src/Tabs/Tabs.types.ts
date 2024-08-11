import { ComponentProps, ReactNode } from "react";
import { AnimatedBorderlessButton } from "../AnimatedButtons";

export type TabsItemProps = {
  disabled?: boolean;
  label: string;
  selected?: boolean;
  testID?: string;
} & Pick<
  ComponentProps<typeof AnimatedBorderlessButton>,
  "onPress" | "onLongPress"
>;

export type TabsScrollViewProps = { children: ReactNode };
