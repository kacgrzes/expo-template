import React, { useCallback } from "react";
import { FlatList, FlatListProps, useFlatListRef } from "../FlatList";
import { ScreenFlatListProps } from "./Screen.types";
import { ScreenScrollView } from "./ScreenScrollView";

export const ScreenFlatList = <ItemT = any>(
  props: ScreenFlatListProps<ItemT>,
) => {
  const renderScrollComponent = useCallback((scrollProps: any) => {
    return <ScreenScrollView {...scrollProps} />;
  }, []);

  return <FlatList renderScrollComponent={renderScrollComponent} {...props} />;
};

export const useScreenFlatListRef = useFlatListRef;
