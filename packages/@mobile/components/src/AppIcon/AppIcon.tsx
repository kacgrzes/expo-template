import { createStyleSheet, useStyles } from "react-native-unistyles";
import { Image, ImageProps } from "../Image";

type AppIconProps = Pick<ImageProps, "source">;

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
export function AppIcon({ source }: AppIconProps) {
  const { styles } = useStyles(stylesheet);

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
      borderRadius: 15,
    },
  };
});