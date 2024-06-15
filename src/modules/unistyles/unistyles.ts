import { UnistylesRegistry } from "react-native-unistyles";

import { breakpoints } from "./breakpoints";
import { themeMode } from "./themeMode";
import { darkTheme, lightTheme } from "./themes";

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
