import { ActivityIndicator as ActivityIndicatorComponent } from "react-native";
import { useStyles } from "react-native-unistyles";

type ActivityIndicatorProps = {
  size?: "s" | "l";
};

export function ActivityIndicator({ size = "s" }: ActivityIndicatorProps) {
  const { theme } = useStyles();

  return (
    <ActivityIndicatorComponent
      size={size === "s" ? "small" : "large"}
      color={theme.colors.accent}
    />
  );
}
