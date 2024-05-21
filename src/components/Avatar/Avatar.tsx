import { View } from "react-native";
import { createStyleSheet, useStyles } from "react-native-unistyles";
import { Text } from "../Text";

type Size = "s" | "m" | "l";

type AvatarProps = {
  size?: Size;
};

/**
 * Avatar component
 *
 * @param {Size} size - Size of the avatar
 * - "s" - Small - bottom tab bars, navigation, etc.
 * - "m" - Medium - list or content blocks
 * - "l" - Large - within profile or settings screen
 */
export function Avatar({ size = "m" }: AvatarProps) {
  const { styles } = useStyles(stylesheet, {
    size,
  });

  return (
    <View style={styles.avatar}>
      <Text style={styles.text}>K</Text>
    </View>
  );
}

const stylesheet = createStyleSheet((theme) => {
  return {
    avatar: {
      aspectRatio: 1,
      variants: {
        size: {
          s: {
            height: 24,
            width: 24,
            borderRadius: 12,
          },
          m: {
            height: 40,
            width: 40,
            borderRadius: 20,
          },
          l: {
            height: 64,
            width: 64,
            borderRadius: 32,
          },
        },
      },
      backgroundColor: theme.colors.typography,
      justifyContent: "center",
      alignItems: "center",
    },
    text: {
      color: theme.colors.background,
      variants: {
        size: {
          s: {
            fontSize: 12,
          },
          m: {
            fontSize: 20,
          },
          l: {
            fontSize: 32,
          },
        },
      },
      fontWeight: "500",
      fontFamily: theme.fontFamily.IBMPlexSans_500Medium,
    },
  };
});
