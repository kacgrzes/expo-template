import { StepperDecrement } from "./StepperDecrement";
import { StepperDisplay } from "./StepperDisplay";
import { StepperIcon } from "./StepperIcon";
import { StepperIncrement } from "./StepperIncrement";
import { StepperRoot } from "./StepperRoot";

export const Stepper = {
  Decrement: StepperDecrement,
  Display: StepperDisplay,
  Icon: StepperIcon,
  Increment: StepperIncrement,
  Root: StepperRoot,
};

export { useStepperRef } from "./useStepperRef";
export * from "./Stepper.types";
