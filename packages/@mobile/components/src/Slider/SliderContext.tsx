import constate from "constate";
import { useCallback, useState } from "react";

const useSlider = ({
  defaultValue,
  disabled,
  inverted,
  max,
  min,
  minStepsBetweenThumbs,
  onChange,
  onValueChange,
  onValueCommit,
  orientation,
  step,
  value: controlledValue,
}) => {
  const [internalValue, setInternalValue] = useState(defaultValue);
  const value = controlledValue !== undefined ? controlledValue : internalValue;

  const handleChange = useCallback((newValues: number[]) => {
    if (!disabled) {
      const clampedValues = newValues.map((v) =>
        Math.min(Math.max(v, min), max),
      );
      const steppedValues = clampedValues.map(
        (v) => Math.round(v / step) * step,
      );

      setInternalValue(steppedValues);
      onChange?.(steppedValues);
      onValueChange?.(steppedValues);
    }
  }, []);

  return {
    disabled,
    inverted,
    max,
    min,
    onChange: handleChange,
    onValueChange: handleChange,
    onValueCommit,
    orientation,
    step,
    value,
  };
};

export const [SliderProvider, useSliderContext] = constate(useSlider);
