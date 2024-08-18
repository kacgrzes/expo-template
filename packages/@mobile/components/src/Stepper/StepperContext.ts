import constate from "constate";

const useStepper = ({
  decrement,
  disabled,
  increment,
  max,
  min,
  orientation,
  size,
  value,
}) => {
  return {
    decrement,
    disabled,
    increment,
    max,
    min,
    orientation,
    size,
    value,
  };
};

export const [StepperProvider, useStepperContext] = constate(useStepper);
