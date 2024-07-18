import { mmkv } from "@mobile/utils";
import { fontFamily } from "./fontFamily";
import { fonts } from "./fonts";
import { foundation } from "./foundation";
import { darkStatusColors, lightStatusColors } from "./themeStatusColors";

export const isStackDebugEnabled = () => {
  const json = mmkv.getString("dev-menu-items");
  if (!json) {
    return false;
  }
  return JSON.parse(json)["stack-debug-enabled"] ?? false;
};

const common = {
  animation: {
    duration: 300,
  },
  fonts,
  fontFamily,
  opacity: 0.4,
  stacks: {
    spacing: 4,
    debug: isStackDebugEnabled(),
  },
  colors: {},
} as const;

export const lightTheme = {
  ...common,
  name: "light",
  colors: {
    ...common.colors,
    ...lightStatusColors,
    accent: foundation.colors.blue,
    background: foundation.colors.white,
    typography: foundation.colors.black,
    // muted: foundation.colors
  },
  gradients: {
    base: [
      `${foundation.colors.white}00`,
      `${foundation.colors.white}FF`,
    ] as string[],
  },
  /**
   * @see https://reactnavigation.org/docs/themes/#basic-usage
   */
  navigation: {
    dark: false,
    colors: {
      primary: foundation.colors.blue,
      background: foundation.colors.white,
      card: foundation.colors.white,
      text: foundation.colors.black,
      border: "transparent",
      notification: undefined,
    },
  },
} as const;

export const darkTheme = {
  ...common,
  name: "dark",
  colors: {
    ...common.colors,
    ...darkStatusColors,
    accent: foundation.colors.blue,
    background: foundation.colors.black,
    typography: foundation.colors.white,
    // muted: foundation.colors
  },
  gradients: {
    base: [
      `${foundation.colors.black}00`,
      `${foundation.colors.black}FF`,
    ] as string[],
  },
  /**
   * @see https://reactnavigation.org/docs/themes/#basic-usage
   */
  navigation: {
    dark: true,
    colors: {
      primary: foundation.colors.blue,
      background: foundation.colors.black,
      card: foundation.colors.black,
      text: foundation.colors.white,
      border: "transparent",
      notification: undefined,
    },
  },
} as const;

// define other themes
