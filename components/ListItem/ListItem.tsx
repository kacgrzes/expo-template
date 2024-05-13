import { ChevronRight } from "lucide-react-native";
import { createStyleSheet, useStyles } from "react-native-unistyles";

import { AnimatedRectButton } from "../AnimatedButtons";
import { Text } from "../Text";

type ListItemProps = {
  onPress: () => void;
  title: string;
};

export function ListItem({ title = "Plop", onPress }: ListItemProps) {
  const { styles, theme } = useStyles(stylesheet);

  return (
    <AnimatedRectButton
      activeOpacity={0.1}
      onPress={onPress}
      style={styles.listItem}>
      <Text>{title}</Text>
      <ChevronRight
        size={24}
        color={theme.colors.typography}
        strokeWidth={1.5}
      />
    </AnimatedRectButton>
  );
}

const stylesheet = createStyleSheet(() => {
  return {
    listItem: {
      alignItems: "center",
      flexDirection: "row",
      justifyContent: "space-between",
      padding: 16,
      width: "100%",
    },
  };
});
