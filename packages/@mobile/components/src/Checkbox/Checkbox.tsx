import { Check } from "lucide-react-native";
/** eslint-disable import/no-unresolved */
import React, { useState, useCallback } from "react";
import {
  interpolateColor,
  useAnimatedStyle,
  useDerivedValue,
  withTiming,
} from "react-native-reanimated";
import { createStyleSheet, useStyles } from "react-native-unistyles";

import { AnimatedBaseButton } from "../AnimatedButtons";
// eslint-disable-next-line import/no-unresolved
import { useDisabledStyle } from "../hooks/useDisabledStyle";
import { CheckboxProps } from "./Checkbox.types";

// TODO: how do I implement indeterminate state?

/**
 * Use when
 * - you can select multiple options
 * - the options are long and not consistant (more than 1 - 2 words)
 * - Applied settings need to be confirmed and reviewed by user before they are submitted
 * - Defined settings require an action like Submit, OK, Next, Apply before displaying results
 */
export function Checkbox({
  checked: controlledChecked,
  disabled,
  size: _size,
  onValueChange,
}: CheckboxProps) {
  const { theme, styles } = useStyles(stylesheet);
  const disabledStyle = useDisabledStyle({ disabled });

  // Internal state for uncontrolled usage
  const [internalChecked, setInternalChecked] = useState(false);

  // Use prop value if provided, otherwise use internal state
  const checked =
    controlledChecked !== undefined ? controlledChecked : internalChecked;

  const handlePress = useCallback(() => {
    if (disabled) return;

    if (controlledChecked === undefined) {
      // Uncontrolled: update internal state
      setInternalChecked((prev) => !prev);
    }

    // Call onChange if provided
    onValueChange?.(!checked);
  }, [disabled, controlledChecked, checked, onValueChange]);

  const chekedValue = useDerivedValue(() => {
    return withTiming(checked ? 1 : 0, {
      duration: 200,
    });
  }, [checked]);

  const animatedStyle = useAnimatedStyle(() => {
    return {
      backgroundColor: interpolateColor(
        chekedValue.value,
        [0, 1],
        [theme.colors.background, theme.colors.typography],
      ),
    };
  }, [checked, theme.colors.background, theme.colors.typography]);

  return (
    <AnimatedBaseButton
      style={[styles.container, disabledStyle, animatedStyle]}
      onPress={handlePress}
      enabled={!disabled}
    >
      <Check size={18} strokeWidth={2} color={theme.colors.background} />
    </AnimatedBaseButton>
  );
}

const stylesheet = createStyleSheet((theme) => {
  return {
    container: {
      height: 24,
      width: 24,
      borderRadius: 4,
      borderWidth: 2,
      borderColor: theme.colors.typography,
      alignItems: "center",
      justifyContent: "center",
    },
  };
});
