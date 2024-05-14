import { MMKV } from "react-native-mmkv";
import { UnistylesRegistry } from "react-native-unistyles";

const storage = new MMKV();
const themeMode = storage.getString("theme-mode");

import { breakpoints } from "./breakpoints";
import { darkTheme, lightTheme } from "./themes";

import "./types";

export * from "./ThemeSwitcher";
export * from "./useThemeMode";

UnistylesRegistry.addBreakpoints(breakpoints)
  .addThemes({
    dark: darkTheme,
    light: lightTheme,
    // register other themes with unique names
  })
  .addConfig({
    // you can pass here optional config described below
    adaptiveThemes: themeMode === "system" || !themeMode,
    initialTheme: themeMode === "system" || !themeMode ? undefined : themeMode,
  });
