import constate from "constate";
import { useMemo } from "react";

const useScreen = ({
  footerHeight,
  edges = ["bottom"],
}: {
  footerHeight?: number;
  edges?: ("bottom" | "top")[];
}) => {
  const value = useMemo(
    () => ({
      footerHeight,
      hasBottomEdge: edges.includes("bottom"),
      hasTopEdge: edges.includes("top"),
    }),
    [footerHeight, edges],
  );

  return value;
};

export const [ScreenProvider, useScreenContext] = constate(useScreen);
