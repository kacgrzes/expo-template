import { ReactNode } from "react";
import { PressableProps } from "../Pressable";

export type TabsItemProps = {
  disabled?: boolean;
  label: string;
  selected?: boolean;
  testID?: string;
} & Pick<PressableProps, "onPress" | "onLongPress">;

export type TabsScrollViewProps = { children: ReactNode };
