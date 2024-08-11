import { createStyleSheet, useStyles } from "react-native-unistyles";
import FadeInOut from "../FadeInOut";
import { Image } from "../Image";
import { Skeleton } from "../Skeleton";
import { Text } from "../Text";
import { AvatarProps, Size } from "./Avatar.types";

const getSizeNumber = (sizeName: Size) => {
  const sizes = {
    s: 24,
    m: 40,
    l: 64,
  };

  return sizes[sizeName];
};

const getSizeStyle = (size: Size) => {
  const sizeNumber = getSizeNumber(size);

  return {
    height: sizeNumber,
    width: sizeNumber,
    borderRadius: sizeNumber / 2,
  };
};

/**
 * Avatar component
 *
 * @param {Size} size - Size of the avatar
 * - "s" - Small - bottom tab bars, navigation, etc.
 * - "m" - Medium - list or content blocks
 * - "l" - Large - within profile or settings screen
 */
export function Avatar({ size = "m", loading, source }: AvatarProps) {
  const { styles } = useStyles(stylesheet, {
    size,
  });

  if (loading) {
    return <Skeleton.Circle size={getSizeNumber(size)} />;
  }

  if (source) {
    return (
      <FadeInOut>
        <Image
          accessibilityIgnoresInvertColors
          source={source}
          style={styles.avatar}
        />
      </FadeInOut>
    );
  }

  return (
    <FadeInOut style={styles.avatar}>
      <Text style={styles.text}>K</Text>
    </FadeInOut>
  );
}

const stylesheet = createStyleSheet((theme) => {
  return {
    avatar: {
      aspectRatio: 1,
      backgroundColor: "#E1E9EE",
      justifyContent: "center",
      alignItems: "center",
      variants: {
        size: {
          s: getSizeStyle("s"),
          m: getSizeStyle("m"),
          l: getSizeStyle("l"),
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
        },
      },
      fontWeight: "500",
      fontFamily: theme.fontFamily.IBMPlexSans_500Medium,
    },
  };
});
