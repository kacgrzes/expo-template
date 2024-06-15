import { createStyleSheet, useStyles } from "react-native-unistyles";
import { Text } from "../Text";
import { Size } from "../types";
import { ReactNode } from "react";
import Animated from "react-native-reanimated";
import { useDisabledStyle } from "../hooks/useDisabledStyle";

type ChipProps = {
  disabled?: boolean;
  left?: ReactNode;
  // TODO: maybe this onPress should be a little bit different
  onPress?: () => void;
  right?: ReactNode;
  size: Size;
};

/**
Use when
- you can select multiple options
- the options are short and consistant (1 or 2 words)
*/
export function Chip({ disabled, left, onPress, right, size }: ChipProps) {
  const { styles } = useStyles(stylesheet);
  const disabledStyle = useDisabledStyle({ disabled });

  return (
    <Animated.View style={[styles.container, disabledStyle]}>
      <Text style={styles.text}>Chip</Text>
    </Animated.View>
  );
}

const stylesheet = createStyleSheet((theme) => {
  return {
    container: {
      alignItems: "center",
      backgroundColor: theme.colors.typography,
      borderRadius: 20,
      flexDirection: "row",
      gap: 4,
      height: 40,
      justifyContent: "center",
      marginTop: 24,
      paddingHorizontal: 12,
    },
    text: {
      color: theme.colors.background,
    },
  };
});
