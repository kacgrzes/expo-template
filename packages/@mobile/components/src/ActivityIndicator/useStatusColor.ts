import { useMemo } from "react";
import { useStyles } from "react-native-unistyles";
import { Status } from "../types";

export function useStatusColor(status?: Status) {
  const { theme } = useStyles();

  const color = useMemo(() => {
    switch (status) {
      case "success":
        return theme.colors.success;
      case "error":
        return theme.colors.error;
      case "warning":
        return theme.colors.warning;
      case "info":
        return theme.colors.info;
      case "muted":
      default:
        return theme.colors.muted;
    }
  }, [status, theme.colors]);

  return color;
}
