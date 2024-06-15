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

  return <Image style={styles.appIcon} source={source} />;
}

const stylesheet = createStyleSheet((theme) => {
  return {
    appIcon: {
      width: 64,
      height: 64,
      borderRadius: 15,
    },
  };
});