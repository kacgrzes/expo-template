import { BoxProps } from "@grapp/stacks";
import React, { ReactElement } from "react";
import { KeyboardAwareScrollViewProps } from "react-native-keyboard-controller";
import { FABProps } from "../FAB";
import { FlatListProps } from "../FlatList";
import { SectionListProps } from "../SectionList";

export type ScreenProps = {
  children?: React.ReactNode;
  fab?: ReactElement<FABProps>;
  footer?: ReactElement<BoxProps>;
  edges?: ("bottom" | "top")[];
};

export type ScreenFlatListProps<ItemT> = FlatListProps<ItemT>;

export type ScreenScrollViewProps = KeyboardAwareScrollViewProps & {
  children?: React.ReactNode;
} & BoxProps;

export type ScreenSectionListProps<ItemT> = SectionListProps<ItemT>;
