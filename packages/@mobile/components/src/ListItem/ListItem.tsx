import { ChevronRight } from "lucide-react-native";
import { createStyleSheet, useStyles } from "react-native-unistyles";

import { Box } from "@grapp/stacks";
import { useMemo } from "react";
import { Pressable } from "../Pressable";
import { Text } from "../Text";
import { ListItemProps } from "./ListItem.types";

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
      return <ChevronRight size={24} color={"grey"} strokeWidth={1.5} />;
    }

    return rightElement;
  }, [rightElement]);

  return (
    <Pressable onPress={onPress} style={styles.listItem}>
      {Icon ? (
        <Icon size={24} color={theme.colors.typography} strokeWidth={1.5} />
      ) : null}

      <Box gap={1} flex={"fluid"} style={{ justifyContent: "center" }}>
        <Text>{title}</Text>
        {details ? (
          <Text numberOfLines={1} style={{ color: "grey" }}>
            {details}
          </Text>
        ) : null}
      </Box>
      {right}
    </Pressable>
  );
}

const stylesheet = createStyleSheet(() => {
  return {
    listItem: {
      gap: 16,
      alignItems: "center",
      flexDirection: "row",
      justifyContent: "space-between",
      paddingHorizontal: 16,
      paddingVertical: 8,
      minHeight: 64,
      width: "100%",
    },
  };
});
