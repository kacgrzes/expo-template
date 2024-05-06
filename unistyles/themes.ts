import { opacity } from "react-native-reanimated/lib/typescript/reanimated2/Colors";
import { palette } from "./palette";

const common = {
  margins: {
    sm: 2,
    md: 4,
    lg: 8,
    xl: 12,
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
