import React, { Children, useEffect, forwardRef } from "react";
import { PagerView, PagerViewRef, usePagerScrollHandler } from "../PagerView";
import { usePagerContext } from "./PagerRoot";

type PagerContainerProps = {
  children?: React.ReactNode;
};

export const PagerContainer = forwardRef<PagerViewRef, PagerContainerProps>(
  // TODO: what should I do about this ref?
  ({ children }, ref) => {
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
        ref={(instance: PagerViewRef | null) => {
          // @ts-ignore
          pagerViewRef.current = instance;
          if (typeof ref === "function") {
            ref(instance);
          } else if (typeof ref === "object") {
            // @ts-ignore
            ref.current = instance;
          }
        }}
        style={{ flex: 1 }}
      >
        {children}
      </PagerView>
    );
  },
);
