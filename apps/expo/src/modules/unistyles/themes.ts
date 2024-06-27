import { Theme as NavigationTheme } from "@react-navigation/native";

import { mmkv } from "@/utils";
import { fontFamily } from "./fontFamily";
import { fonts } from "./fonts";
import { foundation } from "./foundation";

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
} as const;

export const lightTheme = {
  ...common,
  name: "light",
  colors: {
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
  navigation: {
    dark: false,
    colors: {
      primary: "rgb(0, 122, 255)",
      background: foundation.colors.white,
      card: "rgb(255, 255, 255)",
      text: "rgb(28, 28, 30)",
      border: "rgb(216, 216, 216)",
      notification: "rgb(255, 59, 48)",
    },
  },
} as const;

export const darkTheme = {
  ...common,
  name: "dark",
  colors: {
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
  navigation: {
    dark: true,
    colors: {
      primary: "rgb(10, 132, 255)",
      background: foundation.colors.black,
      card: "rgb(18, 18, 18)",
      text: "rgb(229, 229, 231)",
      border: "rgb(39, 39, 41)",
      notification: "rgb(255, 69, 58)",
    },
  } as NavigationTheme,
} as const;

// define other themes
