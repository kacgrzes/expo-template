import { setStatusBarStyle } from "expo-status-bar";
import { UnistylesRuntime } from "react-native-unistyles";

export type ThemeMode = "light" | "dark" | "system";

export const changeThemeMode = async (themeMode: ThemeMode) => {
  if (themeMode === "system") {
    UnistylesRuntime.setAdaptiveThemes(true);
    setStatusBarStyle("auto");
  } else {
    UnistylesRuntime.setAdaptiveThemes(false);
    UnistylesRuntime.setTheme(themeMode);
    setStatusBarStyle(themeMode === "light" ? "dark" : "light");
  }
};
