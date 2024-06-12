import { ChevronRight, LucideIcon } from "lucide-react-native";
import { createStyleSheet, useStyles } from "react-native-unistyles";

import { AnimatedRectButton } from "../AnimatedButtons";
import { Text } from "../Text";
import { CommonAccessoryProps } from "../types";
import { useMemo } from "react";

type ListItemProps = {
  onPress: () => void;
  title: string;
  icon?: LucideIcon;
} & CommonAccessoryProps;

export function ListItem({
  title,
  onPress,
  icon: Icon,
  right: rightElement,
}: ListItemProps) {
  const { styles, theme } = useStyles(stylesheet);
  const right = useMemo(() => {
    if (!rightElement) {
      return (
        <ChevronRight
          size={24}
          color={theme.colors.typography}
          strokeWidth={1.5}
        />
      );
    }

    return rightElement;
  }, [rightElement, theme.colors.typography]);

  return (
    <AnimatedRectButton
      activeOpacity={0.1}
      onPress={onPress}
      style={styles.listItem}>
      {Icon ? (
        <Icon size={24} color={theme.colors.typography} strokeWidth={1.5} />
      ) : null}
      <Text style={{ flexGrow: 1 }}>{title}</Text>
      {right}
    </AnimatedRectButton>
  );
}

const stylesheet = createStyleSheet(() => {
  return {
    listItem: {
      gap: 16,
      alignItems: "center",
      flexDirection: "row",
      justifyContent: "space-between",
      padding: 16,
      minHeight: 64,
      width: "100%",
    },
  };
});
