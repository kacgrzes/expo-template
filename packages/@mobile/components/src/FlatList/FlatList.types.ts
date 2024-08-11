import { ComponentProps } from "react";
import { FlatList as RNFlatList } from "react-native";

export type FlatListProps<ItemT> = ComponentProps<typeof RNFlatList<ItemT>> & {
  gap?: number;
};
