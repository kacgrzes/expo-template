import { useRef } from "react";
import { FlatList } from "react-native";

export const useFlatListRef = () => useRef<FlatList>(null);
