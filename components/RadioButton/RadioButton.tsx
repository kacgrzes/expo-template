import { BaseButton } from "react-native-gesture-handler";
import Animated, {
  useAnimatedStyle,
  withTiming,
} from "react-native-reanimated";
import { createStyleSheet, useStyles } from "react-native-unistyles";

type RadioButtonProps = {
  disabled?: boolean;
  checked?: boolean;
  onPress?: () => void;
};

export function RadioButton({ checked, disabled, onPress }: RadioButtonProps) {
  const { styles } = useStyles(stylesheet);

  const animatedContainer = useAnimatedStyle(() => {
    return {
      opacity: withTiming(disabled ? 0.4 : 1, {
        duration: 200,
      }),
    };
  }, [disabled]);

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
    <BaseButton onPress={onPress}>
      <Animated.View style={[styles.container, animatedContainer]}>
        <Animated.View style={[styles.dot, animatedDot]} />
      </Animated.View>
    </BaseButton>
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
