import React from "react";
import { PageControl, PageControlProps } from "../PageControl";
import { usePagerContext } from "./PagerRoot";

type PagerControlProps = Omit<
  PageControlProps,
  "hidesForSinglePage" | "currentPage" | "numberOfPages"
>;

export const PagerControl = (props: PagerControlProps) => {
  const { currentPage, numberOfPages } = usePagerContext();

  if (!numberOfPages) {
    return null;
  }

  return (
    <PageControl
      hidesForSinglePage
      currentPage={currentPage}
      numberOfPages={numberOfPages}
      {...props}
    />
  );
};
