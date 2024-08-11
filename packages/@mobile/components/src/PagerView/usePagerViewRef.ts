import { useRef } from "react";
import { PagerViewRef } from "./PagerView.types";

export const usePagerViewRef = () => useRef<PagerViewRef>(null);
