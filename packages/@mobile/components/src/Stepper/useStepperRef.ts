import { useRef } from "react";

export type StepperRef = {
  reset: () => void;
  set: (value: number) => void;
  increment: () => void;
  decrement: () => void;
};

export const useStepperRef = () => {
  return useRef<StepperRef>(null);
};
