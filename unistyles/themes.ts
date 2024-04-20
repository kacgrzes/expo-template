import { palette } from "./palette";

export const lightTheme = {
  colors: {
    accent: palette.blue,
    background: palette.white,
    typography: palette.black,
  },
  margins: {
    sm: 2,
    md: 4,
    lg: 8,
    xl: 12,
  },
} as const;

export const darkTheme = {
  colors: {
    accent: palette.blue,
    background: palette.black,
    typography: palette.white,
  },
  margins: {
    sm: 2,
    md: 4,
    lg: 8,
    xl: 12,
  },
} as const;

// define other themes
