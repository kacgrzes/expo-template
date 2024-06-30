import { ActivityIndicator as ActivityIndicatorComponent } from "react-native";
import { useStyles } from "react-native-unistyles";
import { Status } from "../types";

type ActivityIndicatorProps = {
  size?: "s" | "l";
  status?: Status;
};

export function ActivityIndicator({ size = "s" }: ActivityIndicatorProps) {
  const { theme } = useStyles();

  return (
    <ActivityIndicatorComponent
      color={theme.colors.accent}
      size={size === "s" ? "small" : "large"}
    />
  );
}
