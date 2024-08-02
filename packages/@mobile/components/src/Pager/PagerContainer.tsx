import { mergeRefs } from "@common/utils";
import React, { Children, useEffect, forwardRef } from "react";
import { PagerView, PagerViewRef, usePagerScrollHandler } from "../PagerView";
import { usePagerContext } from "./PagerRoot";

type PagerContainerProps = {
  children?: React.ReactNode;
};

export const PagerContainer = forwardRef<PagerViewRef, PagerContainerProps>(
  ({ children }, forwardedRef) => {
    const { currentPage, setNumberOfPages, pagerViewRef } = usePagerContext();

    useEffect(() => {
      setNumberOfPages(Children.count(children));
    }, [children, setNumberOfPages]);

    const handler = usePagerScrollHandler({
      onPageScroll: (e: any) => {
        "worklet";
        // eslint-disable-next-line react-compiler/react-compiler
        currentPage.value = e.offset + e.position;
      },
    });

    return (
      <PagerView
        initialPage={0}
        onPageScroll={handler}
        ref={mergeRefs(forwardedRef, pagerViewRef)}
        style={{ flex: 1 }}
      >
        {children}
      </PagerView>
    );
  },
);
