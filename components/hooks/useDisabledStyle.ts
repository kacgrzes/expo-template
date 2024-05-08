import { useAnimatedStyle, withTiming } from "react-native-reanimated";
import { useStyles } from "react-native-unistyles";

export function useDisabledStyle({ disabled }: { disabled?: boolean }) {
  const { theme } = useStyles();
  const disabledStyle = useAnimatedStyle(() => {
    return {
      opacity: withTiming(disabled ? theme.opacity : 1, {
        duration: 200,
      }),
    };
  }, [disabled]);

  return disabledStyle;
}
