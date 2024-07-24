import { BottomTabBarHeightContext } from "@react-navigation/bottom-tabs";
import { useContext } from "react";

export function useBottomTabBarHeight() {
  const height = useContext(BottomTabBarHeightContext);

  return height ?? 0;
}
