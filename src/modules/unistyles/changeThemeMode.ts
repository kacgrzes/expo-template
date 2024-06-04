import { UnistylesRuntime } from "react-native-unistyles";

export type ThemeMode = "light" | "dark" | "system";

export const changeThemeMode = async (themeMode: ThemeMode) => {
  if (themeMode === "system") {
    UnistylesRuntime.setAdaptiveThemes(true);
  } else {
    UnistylesRuntime.setTheme(themeMode);
    UnistylesRuntime.setAdaptiveThemes(false);
  }
};
