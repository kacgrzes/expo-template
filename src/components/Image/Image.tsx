import { Image as ExpoImage, ImageProps as ExpoImageProps } from "expo-image";
import { createStyleSheet, useStyles } from "react-native-unistyles";

export type ImageProps = ExpoImageProps;

export function Image({
  style,
  autoplay = true,
  cachePolicy = "disk",
  contentFit = "cover",
  contentPosition = "center",
  onError = () => console.log("Image: onError"),
  transition = {
    duration: 300,
    effect: "cross-dissolve",
    timing: "ease-in-out",
  },
  ...props
}: ImageProps) {
  const { styles } = useStyles(stylesheet);

  return <ExpoImage style={[styles.image, style]} {...props} />;
}

const stylesheet = createStyleSheet((theme) => {
  return {
    image: {
      backgroundColor: "lightgrey",
    },
  };
});
