import Animated, {
  useAnimatedStyle,
  withTiming,
} from "react-native-reanimated";
import { createStyleSheet, useStyles } from "react-native-unistyles";

import { AnimatedBaseButton } from "../AnimatedButtons";
import { useDisabledStyle } from "../hooks/useDisabledStyle";
import { RadioButtonProps } from "./RadioButton.types";

// TODO:
// - add RadioButton.Group? with initialValue, onValueChange

/**
Use when:
- you can select only one option
- the options are long and not consistant (more than 1 - 2 words)
*/
export function RadioButton({
  disabled,
  onPress,
  selected,
  size: _size,
}: RadioButtonProps) {
  const { styles } = useStyles(stylesheet);

  const disabledStyle = useDisabledStyle({ disabled });

  const animatedDot = useAnimatedStyle(() => {
    return {
      transform: [
        {
          scale: withTiming(selected ? 1 : 0, {
            duration: 200,
          }),
        },
      ],
    };
  }, [selected]);

  return (
    <AnimatedBaseButton
      enabled={!disabled}
      onPress={onPress}
      style={[styles.container, disabledStyle]}
    >
      <Animated.View style={[styles.dot, animatedDot]} />
    </AnimatedBaseButton>
  );
}

const stylesheet = createStyleSheet((theme) => {
  return {
    container: {
      height: 24,
      width: 24,
      borderRadius: 12,
      borderWidth: 2,
      borderColor: theme.colors.typography,
      alignItems: "center",
      justifyContent: "center",
    },
    dot: {
      height: 12,
      width: 12,
      borderRadius: 6,
      backgroundColor: theme.colors.typography,
    },
  };
});
