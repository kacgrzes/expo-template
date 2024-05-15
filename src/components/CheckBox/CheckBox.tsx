import { Check } from "lucide-react-native";
import {
  interpolateColor,
  useAnimatedStyle,
  useDerivedValue,
  withTiming,
} from "react-native-reanimated";
import { createStyleSheet, useStyles } from "react-native-unistyles";

import { AnimatedBaseButton } from "../AnimatedButtons";
import { useDisabledStyle } from "../hooks/useDisabledStyle";

type CheckBoxProps = {
  checked?: boolean;
  disabled?: boolean;
};

export function CheckBox({ checked, disabled }: CheckBoxProps) {
  const { theme, styles } = useStyles(stylesheet);
  const disabledStyle = useDisabledStyle({ disabled });

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
      style={[styles.container, disabledStyle, animatedStyle]}>
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
