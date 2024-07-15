import React from "react";
import { PageControl } from "../PageControl";
import { usePagerContext } from "./PagerRoot";

export const PagerControl = () => {
  const { currentPage, numberOfPages } = usePagerContext();

  if (!numberOfPages) {
    return null;
  }

  return (
    <PageControl currentPage={currentPage} numberOfPages={numberOfPages} />
  );
};
