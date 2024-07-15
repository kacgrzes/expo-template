import constate from "constate";
import { useState } from "react";
import { useSharedValue } from "react-native-reanimated";

const usePager = () => {
  const [numberOfPages, setNumberOfPages] = useState<number | undefined>(
    undefined,
  );
  const currentPage = useSharedValue(0);

  return {
    currentPage,
    numberOfPages,
    setNumberOfPages,
  };
};

export const [PagerRoot, usePagerContext] = constate(usePager);
