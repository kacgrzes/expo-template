import { Theme as NavigationTheme } from "@react-navigation/native";

import { fontFamily } from "./fontFamily";
import { fonts } from "./fonts";
import { palette } from "./palette";

const common = {
  fonts,
  fontFamily,
  spacing: {
    0: 0,
    0.5: 1,
    1: 2,
    2: 4,
    3: 12,
    4: 16,
    6: 24,
    8: 32,
    12: 48,
    16: 64,
  },
  opacity: 0.4,
  stacks: {
    spacing: 4,
    debug: true,
  },
} as const;

export const lightTheme = {
  ...common,
  colors: {
    accent: palette.blue,
    background: palette.white,
    typography: palette.black,
  },
  navigation: {
    dark: false,
    colors: {
      primary: "rgb(0, 122, 255)",
      background: palette.white,
      card: "rgb(255, 255, 255)",
      text: "rgb(28, 28, 30)",
      border: "rgb(216, 216, 216)",
      notification: "rgb(255, 59, 48)",
    },
  },
} as const;

export const darkTheme = {
  ...common,
  colors: {
    accent: palette.blue,
    background: palette.black,
    typography: palette.white,
  },
  navigation: {
    dark: true,
    colors: {
      primary: "rgb(10, 132, 255)",
      background: palette.black,
      card: "rgb(18, 18, 18)",
      text: "rgb(229, 229, 231)",
      border: "rgb(39, 39, 41)",
      notification: "rgb(255, 69, 58)",
    },
  } as NavigationTheme,
} as const;

// define other themes
