import { Box } from "@grapp/stacks";
import { Minus, Plus } from "lucide-react-native";
import React, {
  forwardRef,
  useCallback,
  useEffect,
  useImperativeHandle,
  useState,
} from "react";

import { Button } from "../Button";
import { Text } from "../Text";
import { StepperRef, StepperRootProps } from "./Stepper.types";

export const StepperRoot = forwardRef<StepperRef, StepperRootProps>(
  (
    {
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
      <Box
        direction={orientation === "horizontal" ? "row" : "column"}
        style={{ alignSelf: "flex-start" }}
      >
        <Button
          variant="outline"
          size={size}
          icon={<Minus color={"black"} />}
          onPress={decrement}
          disabled={disabled || value <= min}
        />
        <Box
          alignX={"center"}
          alignY={"center"}
          paddingY={orientation === "vertical" ? 2 : undefined}
          paddingX={orientation === "horizontal" ? 2 : undefined}
        >
          <Text>{value}</Text>
        </Box>
        <Button
          variant="outline"
          size={size}
          icon={<Plus color={"black"} />}
          onPress={increment}
          disabled={disabled || value >= max}
        />
      </Box>
    );
  },
);
