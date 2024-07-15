import React, { Children, useEffect, forwardRef } from "react";
import { PagerView, PagerViewRef, usePagerScrollHandler } from "../PagerView";
import { usePagerContext } from "./PagerRoot";

type PagerContainerProps = {
  children?: React.ReactNode;
};

export const PagerContainer = forwardRef<PagerViewRef, PagerContainerProps>(
  ({ children }, ref) => {
    const { currentPage, setNumberOfPages } = usePagerContext();

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
        ref={ref}
        initialPage={0}
        style={{ flex: 1 }}
        onPageScroll={handler}
      >
        {children}
      </PagerView>
    );
  },
);
