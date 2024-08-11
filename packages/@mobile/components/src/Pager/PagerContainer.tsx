import { mergeRefs } from "@common/utils";
import React, { Children, useEffect, forwardRef } from "react";
import { PagerView, PagerViewRef, usePagerScrollHandler } from "../PagerView";
import { PagerContainerProps } from "./Pager.types";
import { usePagerContext } from "./PagerRoot";

export const PagerContainer = forwardRef<PagerViewRef, PagerContainerProps>(
  ({ children, initialPage = 0, ...rest }, forwardedRef) => {
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
        initialPage={initialPage}
        onPageScroll={handler}
        ref={mergeRefs(forwardedRef, pagerViewRef)}
        style={{ flex: 1 }}
        {...rest}
      >
        {children}
      </PagerView>
    );
  },
);
