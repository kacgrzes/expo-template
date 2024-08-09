import { X } from "lucide-react-native";
/** eslint-disable import/no-unresolved */
import { ReactNode } from "react";
import {
  LinearTransition,
  useAnimatedStyle,
  withTiming,
} from "react-native-reanimated";
import { createStyleSheet, useStyles } from "react-native-unistyles";
import { AnimatedRectButton } from "../AnimatedButtons";
import { Text } from "../Text";
// eslint-disable-next-line import/no-unresolved
import { useDisabledStyle } from "../hooks/useDisabledStyle";
import { Size } from "../types";
import { ChipGroup } from "./ChipGroup";
import { ChipScrollView } from "./ChipScrollView";

type ChipProps = {
  disabled?: boolean;
  left?: ReactNode;
  // TODO: maybe this onPress should be a little bit different
  onPress?: () => void;
  onDismiss?: () => void;
  right?: ReactNode;
  size?: Size;
  selected?: boolean;
  // variant
  // status
};

/**
Use when
- you can select multiple options
- the options are short and consistant (1 or 2 words)
*/
export function Chip({
  disabled,
  size = "m",
  onDismiss,
  onPress,
  selected = false,
}: ChipProps) {
  const { styles } = useStyles(stylesheet);
  const disabledStyle = useDisabledStyle({ disabled });

  const selectedStyle = useAnimatedStyle(() => {
    return {
      backgroundColor: withTiming(selected ? "black" : "lightgrey"),
    };
  }, [selected]);

  return (
    <AnimatedRectButton
      activeOpacity={0.4}
      onPress={onPress}
      layout={LinearTransition}
      style={[styles.container(), disabledStyle, selectedStyle]}
      enabled={!disabled}
    >
      <Text
        variant="label2"
        style={styles.text({ hasOnDismiss: Boolean(onDismiss), selected })}
      >
        Chip
      </Text>
      {onDismiss ? (
        <AnimatedRectButton style={styles.iconContainer}>
          <X size={16} color="black" />
        </AnimatedRectButton>
      ) : null}
    </AnimatedRectButton>
  );
}

Chip.Group = ChipGroup;
Chip.ScrollView = ChipScrollView;

const stylesheet = createStyleSheet((theme) => {
  const height = 32;
  const offset = 2;
  const borderRadius = height / 2;

  return {
    container: () => {
      return {
        alignItems: "center",
        backgroundColor: "black",
        borderRadius: borderRadius,
        flexDirection: "row",
        gap: 4,
        height,
        justifyContent: "center",
      };
    },
    iconContainer: {
      backgroundColor: "grey",
      justifyContent: "center",
      alignItems: "center",
      height: height - offset * 2,
      borderRadius: (height - offset * 2) / 2,
      aspectRatio: 1,
      margin: offset,
    },
    text: ({
      hasOnDismiss = false,
      selected,
    }: {
      hasOnDismiss: boolean;
      selected: boolean;
    }) => {
      const margin = (height - offset * 2) / 2;

      return {
        marginLeft: margin,
        marginRight: hasOnDismiss ? undefined : margin,
        color: selected ? "white" : "black",
      };
    },
  };
});
