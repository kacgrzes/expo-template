export type Name = "Facebook" | "Instagram" | "Twitter";

export type SocialIconProps = {
  name: Name;
  onPress: () => void;
};
