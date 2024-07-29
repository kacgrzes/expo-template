import constate from "constate";
import { useState } from "react";
import { useSharedValue } from "react-native-reanimated";
import { usePagerViewRef } from "../PagerView";

const usePager = () => {
  const pagerViewRef = usePagerViewRef();
  const [numberOfPages, setNumberOfPages] = useState<number | undefined>(
    undefined,
  );
  const currentPage = useSharedValue(0);

  return {
    currentPage,
    numberOfPages,
    pagerViewRef,
    setNumberOfPages,
  };
};

export const [PagerRoot, usePagerContext] = constate(usePager);
