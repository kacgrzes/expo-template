import { useCallback, useState } from "react";
import { useLatest } from "./useLatest";

/**
 * @title useControlledState
 * @returns A tuple with the following elements:
 * - The current value.
 * - A function to update the value.
 */
export type UseControlled = <T>(
  /**
   * controlled value
   */
  value: T | undefined,
  /**
   * default value
   */
  defaultValue: T,
  /**
   * callback when value change
   */
  onChange?: ((v: T, ...args: any[]) => void) | undefined,
) => [T, (value: T) => void];

export const useControlled: UseControlled = <T>(
  value: T | undefined,
  defaultValue: T,
  onChange?: (v: T, ...args: any[]) => void,
): [T, (value: T) => void] => {
  const [stateValue, setStateValue] = useState(
    value !== undefined ? value : defaultValue,
  );
  const isControlled = value !== undefined;
  const onChangeRef = useLatest(onChange);

  const setValue = useCallback(
    (newValue: T) => {
      if (!isControlled) {
        setStateValue(newValue);
      }
      onChangeRef.current?.(newValue);
    },
    [isControlled, onChangeRef],
  );

  return [isControlled ? value : stateValue, setValue];
};
