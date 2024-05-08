import { palette } from "./palette";

const common = {
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
} as const;

export const lightTheme = {
  ...common,
  colors: {
    accent: palette.blue,
    background: palette.white,
    typography: palette.black,
  },
} as const;

export const darkTheme = {
  ...common,
  colors: {
    accent: palette.blue,
    background: palette.black,
    typography: palette.white,
  },
} as const;

// define other themes
