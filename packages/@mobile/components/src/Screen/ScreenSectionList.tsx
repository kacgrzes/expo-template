import React, { useCallback } from "react";
import { SectionList, SectionListProps } from "../SectionList";
import { useSectionListRef } from "../SectionList";
import { ScreenScrollView } from "./ScreenScrollView";

export type ScreenSectionListProps<ItemT> = SectionListProps<ItemT>;

export const ScreenSectionList = <ItemT = any>(
  props: ScreenSectionListProps<ItemT>,
) => {
  const renderScrollComponent = useCallback((scrollProps: any) => {
    return <ScreenScrollView {...scrollProps} />;
  }, []);

  return (
    <SectionList renderScrollComponent={renderScrollComponent} {...props} />
  );
};

export const useScreenSectionListRef = useSectionListRef;
