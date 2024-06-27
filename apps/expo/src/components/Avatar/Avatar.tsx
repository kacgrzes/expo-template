import { View } from "react-native";
import { createStyleSheet, useStyles } from "react-native-unistyles";
import { Text } from "../Text";
import { Image, ImageProps } from "../Image";

type Size = "s" | "m" | "l";

type AvatarProps = {
  /**
   * Size of the avatar
   * - "s" - Small - bottom tab bars, navigation, etc.
   * - "m" - Medium - list or content blocks
   * - "l" - Large - within profile or settings screen
   */
  size?: Size;
} & Pick<ImageProps, "source">;

/**
 * Avatar component
 *
 * @param {Size} size - Size of the avatar
 * - "s" - Small - bottom tab bars, navigation, etc.
 * - "m" - Medium - list or content blocks
 * - "l" - Large - within profile or settings screen
 */
export function Avatar({ size = "m", source }: AvatarProps) {
  const { styles } = useStyles(stylesheet, {
    size,
  });

  if (source) {
    return (
      <Image
        accessibilityIgnoresInvertColors
        source={source}
        style={styles.avatar}
      />
    );
  }

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
      backgroundColor: theme.colors.typography,
      justifyContent: "center",
      alignItems: "center",
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
          default: {
            height: 40,
            width: 40,
            borderRadius: 20,
          },
        },
      },
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
          default: {
            fontSize: 20,
          },
        },
      },
      fontWeight: "500",
      fontFamily: theme.fontFamily.IBMPlexSans_500Medium,
    },
  };
});
