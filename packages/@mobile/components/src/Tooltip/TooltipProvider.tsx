import constate from "constate";
import { useState } from "react";
import {
  MeasuredDimensions,
  measure,
  useAnimatedRef,
  useFrameCallback,
  useSharedValue,
} from "react-native-reanimated";

const useTooltip = () => {
  const [visible, setVisible] = useState(false);
  const measurement = useSharedValue<MeasuredDimensions | null>(null);
  const animatedRef = useAnimatedRef();

  useFrameCallback(() => {
    measurement.value = measure(animatedRef);
  });

  return {
    animatedRef,
    measurement,
    visible,
    setVisible,
  };
};

export const [TooltipProvider, useTooltipContext] = constate(useTooltip);
