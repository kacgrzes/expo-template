import { Status } from "../types";
import { ActivityIndicator as ActivityIndicatorComponent } from "react-native";
import { useStyles } from "react-native-unistyles";

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
