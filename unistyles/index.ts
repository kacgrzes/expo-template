import { UnistylesRegistry } from "react-native-unistyles";

import { breakpoints } from "./breakpoints";
import { darkTheme, lightTheme } from "./themes";
import "./types";

UnistylesRegistry.addBreakpoints(breakpoints)
  .addThemes({
    light: lightTheme,
    dark: darkTheme,
    // register other themes with unique names
  })
  .addConfig({
    // you can pass here optional config described below
    adaptiveThemes: true,
  });
