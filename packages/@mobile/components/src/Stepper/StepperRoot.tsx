import { Box } from "@grapp/stacks";
import React, {
  forwardRef,
  useCallback,
  useEffect,
  useImperativeHandle,
  useState,
} from "react";

import { StepperRef, StepperRootProps } from "./Stepper.types";
import { StepperProvider } from "./StepperContext";

export const StepperRoot = forwardRef<StepperRef, StepperRootProps>(
  (
    {
      children,
      defaultValue = 0,
      disabled,
      max = Infinity,
      min = -Infinity,
      onChange,
      onValueChange,
      orientation = "horizontal",
      size = "m",
      step = 1,
      value: controlledValue,
    },
    ref,
  ) => {
    const [internalValue, setInternalValue] = useState(defaultValue);
    const value =
      controlledValue !== undefined ? controlledValue : internalValue;

    useEffect(() => {
      onChange?.(value);
      onValueChange?.(value);
    }, [value, onChange, onValueChange]);

    const reset = useCallback(
      () => setInternalValue(defaultValue),
      [defaultValue],
    );

    const increment = useCallback(
      () => setInternalValue((prev) => Math.min(prev + step, max)),
      [step, max],
    );

    const decrement = useCallback(
      () => setInternalValue((prev) => Math.max(prev - step, min)),
      [step, min],
    );

    useImperativeHandle(
      ref,
      () => {
        return {
          decrement,
          increment,
          reset,
          set: setInternalValue,
        };
      },
      [decrement, increment, reset],
    );

    return (
      <StepperProvider
        decrement={decrement}
        disabled={disabled}
        increment={increment}
        max={max}
        min={min}
        orientation={orientation}
        size={size}
        value={value}
      >
        <Box
          direction={orientation === "horizontal" ? "row" : "column"}
          style={{ alignSelf: "flex-start" }}
        >
          {typeof children === "function"
            ? children({
                decrement,
                increment,
                reset,
                set: setInternalValue,
                value,
              })
            : children}
        </Box>
      </StepperProvider>
    );
  },
);
