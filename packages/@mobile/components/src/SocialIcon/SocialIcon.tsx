import { Facebook, Instagram, Twitter } from "lucide-react-native";
import { createStyleSheet, useStyles } from "react-native-unistyles";
import { AnimatedBaseButton } from "../AnimatedButtons";
import { Name, SocialIconProps } from "./SocialIcon.types";

export function SocialIcon({ name, onPress }: SocialIconProps) {
  const { styles } = useStyles(stylesheet);
  const Icon = {
    Facebook,
    Instagram,
    Twitter,
  }[name];

  return (
    <AnimatedBaseButton style={styles.container(name)} onPress={onPress}>
      <Icon size={24} color="white" />
    </AnimatedBaseButton>
  );
}

const stylesheet = createStyleSheet(() => {
  return {
    container: (name: Name) => {
      const backgroundColor = {
        Facebook: "#4267b2",
        Instagram: "#dd2a7b",
        Twitter: "#1da1f2",
      }[name];

      return {
        borderRadius: 24,
        width: 48,
        height: 48,
        backgroundColor,
        justifyContent: "center",
        alignItems: "center",
      };
    },
  };
});
