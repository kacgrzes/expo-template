import React from "react";
import { FlatList, FlatListProps } from "react-native";
import { ScreenScrollView } from "./ScreenScrollView";

export type ScreenFlatListProps<ItemT> = FlatListProps<ItemT>;

export const ScreenFlatList = <ItemT = any>(
  props: ScreenFlatListProps<ItemT>,
) => {
  return (
    <FlatList
      renderScrollComponent={(props) => <ScreenScrollView {...props} />}
      {...props}
    />
  );
};
