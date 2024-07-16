/** eslint-disable import/no-unresolved */
import { ReactNode } from "react";
import Animated from "react-native-reanimated";
import { createStyleSheet, useStyles } from "react-native-unistyles";
import { Text } from "../Text";
// eslint-disable-next-line import/no-unresolved
import { useDisabledStyle } from "../hooks/useDisabledStyle";
import { Size } from "../types";
import { ChipGroup } from "./ChipGroup";

type ChipProps = {
  disabled?: boolean;
  left?: ReactNode;
  // TODO: maybe this onPress should be a little bit different
  onPress?: () => void;
  right?: ReactNode;
  size?: Size;
};

/**
Use when
- you can select multiple options
- the options are short and consistant (1 or 2 words)
*/
export function Chip({ disabled, size = "m" }: ChipProps) {
  const { styles } = useStyles(stylesheet);
  const disabledStyle = useDisabledStyle({ disabled });

  return (
    <Animated.View style={[styles.container, disabledStyle]}>
      <Text style={styles.text}>Chip</Text>
    </Animated.View>
  );
}

Chip.Group = ChipGroup;

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
      paddingHorizontal: 12,
    },
    text: {
      color: theme.colors.background,
    },
  };
});
