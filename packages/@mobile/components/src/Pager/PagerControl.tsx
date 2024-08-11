import React, { useCallback } from "react";
import { PageControl } from "../PageControl";
import { PagerControlProps } from "./Pager.types";
import { usePagerContext } from "./PagerRoot";

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
