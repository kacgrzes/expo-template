import { icons, ChevronRight } from "lucide-react-native";
import { createStyleSheet, useStyles } from "react-native-unistyles";

import { AnimatedRectButton } from "../AnimatedButtons";
import { Text } from "../Text";

type ListItemProps = {
  onPress: () => void;
  title: string;
  icon?: keyof typeof icons;
};

export function ListItem({ title, onPress, icon }: ListItemProps) {
  const { styles, theme } = useStyles(stylesheet);
  const Icon = icon ? icons[icon] : null;

  return (
    <AnimatedRectButton
      activeOpacity={0.1}
      onPress={onPress}
      style={styles.listItem}>
      {Icon ? (
        <Icon size={24} color={theme.colors.typography} strokeWidth={1.5} />
      ) : null}
      <Text style={{ flexGrow: 1 }}>{title}</Text>
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
      gap: 16,
      alignItems: "center",
      flexDirection: "row",
      justifyContent: "space-between",
      padding: 16,
      width: "100%",
    },
  };
});
