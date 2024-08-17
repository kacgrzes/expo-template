import { useRef } from "react";
import { StepperRef } from "./Stepper.types";

export const useStepperRef = () => {
  return useRef<StepperRef>(null);
};
