import Animated, {
  useAnimatedStyle,
  withTiming,
} from "react-native-reanimated";
import { createStyleSheet, useStyles } from "react-native-unistyles";

import { AnimatedBaseButton } from "../AnimatedButtons";
import { useDisabledStyle } from "../hooks/useDisabledStyle";

type RadioButtonProps = {
  checked?: boolean;
  disabled?: boolean;
  onPress?: () => void;
};

/**
Use when:
- you can select only one option
- the options are long and not consistant (more than 1 - 2 words)
*/
export function RadioButton({ checked, disabled, onPress }: RadioButtonProps) {
  const { styles } = useStyles(stylesheet);

  const disabledStyle = useDisabledStyle({ disabled });

  const animatedDot = useAnimatedStyle(() => {
    return {
      transform: [
        {
          scale: withTiming(checked ? 1 : 0, {
            duration: 200,
          }),
        },
      ],
    };
  }, [checked]);

  return (
    <AnimatedBaseButton
      enabled={!disabled}
      onPress={onPress}
      style={[styles.container, disabledStyle]}>
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
