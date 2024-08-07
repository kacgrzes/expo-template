import { useRef } from "react";
import { ScrollView } from "react-native";

export const useScrollRef = () => useRef<ScrollView | null>(null);

export type ScrollViewRef = ReturnType<typeof useScrollRef>;
