import { ChevronRight, LucideIcon } from "lucide-react-native";
import { createStyleSheet, useStyles } from "react-native-unistyles";

import { AnimatedRectButton } from "../AnimatedButtons";
import { Text } from "../Text";
import { CommonAccessoryProps } from "../types";
import { useMemo } from "react";
import { Box } from "@grapp/stacks";

type ListItemProps = {
  details?: string;
  icon?: LucideIcon;
  onPress: () => void;
  title: string;
} & CommonAccessoryProps;

export function ListItem({
  details,
  icon: Icon,
  onPress,
  right: rightElement,
  title,
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

      <Box gap={2} flex={"fluid"} style={{ justifyContent: "center" }}>
        <Text>{title}</Text>
        {details ? <Text style={{ color: "grey" }}>{details}</Text> : null}
      </Box>
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
