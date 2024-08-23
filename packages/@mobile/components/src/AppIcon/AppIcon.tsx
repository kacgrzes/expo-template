import { createStyleSheet, useStyles } from "react-native-unistyles";
import { Image } from "../Image";
import { AppIconProps } from "./AppIcon.types";

/**
 * # AppIcon
 *
 * @component
 *
 * @description A component that was generated by Plop
 *
 * @example
 *
 * ```tsx
 * <AppIcon />
 * ```
 */
export function AppIcon({ source, context }: AppIconProps) {
  const { styles } = useStyles(stylesheet, { context });

  return (
    <Image
      accessibilityIgnoresInvertColors
      source={source}
      style={styles.appIcon}
    />
  );
}

const stylesheet = createStyleSheet((_theme) => {
  return {
    appIcon: {
      width: 64,
      height: 64,
      variants: {
        context: {
          "home-screen-icon": {
            width: 64,
            height: 64,
            borderRadius: 15,
          },
          notification: {
            width: 24,
            height: 24,
            borderRadius: 6,
          },
        },
      },
    },
  };
});
