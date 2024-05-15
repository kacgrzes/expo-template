import { ActivityIndicator as ActivityIndicatorComponent } from "react-native";
import { useStyles } from "react-native-unistyles";

export function ActivityIndicator() {
  const { theme } = useStyles();

  return (
    <ActivityIndicatorComponent size="small" color={theme.colors.accent} />
  );
}
