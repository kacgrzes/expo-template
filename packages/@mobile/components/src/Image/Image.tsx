import { Image as ExpoImage, ImageTransition } from "expo-image";
import { createStyleSheet, useStyles } from "react-native-unistyles";
import { ImageProps } from "./Image.types";

export function Image({
  style,
  autoplay = true,
  cachePolicy = "disk",
  contentFit = "cover",
  contentPosition = "center",
  onError = () => console.log("Image: onError"),
  transition = {},
  ...props
}: ImageProps) {
  const { styles, theme } = useStyles(stylesheet);

  return (
    <ExpoImage
      transition={{
        duration: theme.animation.duration,
        effect: "cross-dissolve",
        timing: "ease-in-out",
        ...(transition as ImageTransition),
      }}
      style={[styles.image, style]}
      {...props}
    />
  );
}

const stylesheet = createStyleSheet((_theme) => {
  return {
    image: {
      backgroundColor: "lightgrey",
    },
  };
});
