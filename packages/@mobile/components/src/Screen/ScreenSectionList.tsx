import React, { useCallback } from "react";
import { SectionList } from "../SectionList";
import { useSectionListRef } from "../SectionList";
import { ScreenSectionListProps } from "./Screen.types";
import { ScreenScrollView } from "./ScreenScrollView";

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
