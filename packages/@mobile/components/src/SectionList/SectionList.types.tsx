import { ComponentProps } from "react";
import { SectionList as SectionListComponent } from "react-native";

export type SectionListProps<ItemT> = ComponentProps<
  typeof SectionListComponent<ItemT>
> & {
  gap?: number;
};
