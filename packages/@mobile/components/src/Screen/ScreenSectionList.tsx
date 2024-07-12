import React from "react";
import { SectionList, SectionListProps } from "react-native";
import { KeyboardAwareScrollView } from "react-native-keyboard-controller";
import { ScreenScrollView } from "./ScreenScrollView";

export type ScreenSectionListProps<ItemT> = SectionListProps<ItemT>;

export const ScreenSectionList = <ItemT = any>(
  props: ScreenSectionListProps<ItemT>,
) => {
  return (
    <SectionList
      {...props}
      renderScrollComponent={(props) => <ScreenScrollView {...props} />}
    />
  );
};
