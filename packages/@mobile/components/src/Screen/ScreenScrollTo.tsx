import { FloatBox } from "@grapp/stacks";
import { ArrowDown, ArrowUp } from "lucide-react-native";
import React from "react";
import { FAB } from "../FAB";
import { useScreenContext } from "./ScreenContext";

export const ScrollToTop = () => {
  const { footerHeight } = useScreenContext();
  return (
    <FloatBox left={0} right={0} bottom={footerHeight + 16} alignX={"center"}>
      <FAB Icon={ArrowUp} />
    </FloatBox>
  );
};

export const ScrollToBottom = () => {
  const { footerHeight } = useScreenContext();
  return (
    <FloatBox left={0} right={0} bottom={footerHeight + 16} alignX={"center"}>
      <FAB Icon={ArrowDown} />
    </FloatBox>
  );
};
