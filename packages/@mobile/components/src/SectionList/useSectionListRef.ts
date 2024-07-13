import { useRef } from "react";
import { SectionList } from "react-native";

export const useSectionListRef = () => useRef<SectionList>(null);
