import { View } from "react-native";
import { createStyleSheet, useStyles } from "react-native-unistyles";
import { Text } from "../Text";
import { Dot } from "../Dot";

type BadgeProps = {
  /** Value in the badge. Badge will be a dot if this is not provided/ */
  value?: number;
};

/**
 * # Badge
 *
 * @component
 *
 * @description A badge is a small, contextual UI element that typically displays a status, notification count, or short piece of information. It is often attached to an icon, avatar, or a button, providing additional context or highlighting a change in status.
 *
 * @example
 *
 * ```tsx
 * <Badge value={3} />
 * ```
 */
export function Badge({ value }: BadgeProps) {
  const { styles } = useStyles(stylesheet);

  if (!value) {
    return <Dot />;
  }

  return (
    <View style={styles.badge}>
      <Text variant="badge" style={{ color: "#fff" }}>
        {value}
      </Text>
    </View>
  );
}

const stylesheet = createStyleSheet((theme) => {
  return {
    badge: {
      alignItems: "center",
      backgroundColor: "rgb(255, 59, 48)",
      borderRadius: 9,
      color: "#fff",
      flexShrink: 1,
      fontFamily: theme.fontFamily.IBMPlexSans_400Regular,
      fontSize: 14,
      height: 18,
      justifyContent: "center",
      lineHeight: 18,
      paddingHorizontal: 4,
    },
  };
});

export const useBadgeStyle = () => useStyles(stylesheet).styles.badge;
