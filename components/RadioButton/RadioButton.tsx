import { BaseButton } from "react-native-gesture-handler";
import Animated, {
  useAnimatedStyle,
  withTiming,
} from "react-native-reanimated";
import { createStyleSheet, useStyles } from "react-native-unistyles";

type RadioButtonProps = {
  checked?: boolean;
  onPress?: () => void;
};

export function RadioButton({ checked, onPress }: RadioButtonProps) {
  const { styles } = useStyles(stylesheet);

  const animatedDot = useAnimatedStyle(() => {
    return {
      // transformOrigin: "center",
      transform: [
        {
          scale: withTiming(checked ? 1 : 0, {
            duration: 100,
          }),
        },
      ],
    };
  }, [checked]);

  return (
    <BaseButton style={styles.container} onPress={onPress}>
      <Animated.View style={[styles.dot, animatedDot]} />
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
