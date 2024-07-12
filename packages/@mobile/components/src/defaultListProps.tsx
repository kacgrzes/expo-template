import React from "react";
import { ScrollView } from "./ScrollView";

export const defaultKeyExtractor = (item: any, index: number) =>
  item.id || index.toString();

export const defaultRenderScrollComponent = ({ hitSlop, ...props }: any) => (
  <ScrollView {...props} />
);
