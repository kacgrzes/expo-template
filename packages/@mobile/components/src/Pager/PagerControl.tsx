import React, { useCallback } from "react";
import { PageControl, PageControlProps } from "../PageControl";
import { usePagerContext } from "./PagerRoot";

type PagerControlProps = Omit<
  PageControlProps,
  "hidesForSinglePage" | "currentPage" | "numberOfPages" | "onPageChange"
>;

export const PagerControl = (props: PagerControlProps) => {
  const { currentPage, numberOfPages, pagerViewRef } = usePagerContext();
  const handlePageChange = useCallback(
    (currentPage: number) => {
      pagerViewRef.current?.setPageWithoutAnimation(currentPage);
    },
    [pagerViewRef],
  );

  if (!numberOfPages) {
    return null;
  }

  return (
    <PageControl
      hidesForSinglePage
      currentPage={currentPage}
      numberOfPages={numberOfPages}
      onPageChange={handlePageChange}
      {...props}
    />
  );
};
