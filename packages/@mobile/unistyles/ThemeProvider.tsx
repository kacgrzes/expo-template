import { ThemeProvider as NavigationThemeProvider } from "@react-navigation/native";
import constate from "constate";
import { ReactNode, useEffect } from "react";
import { useMMKVString } from "react-native-mmkv";
import { useStyles } from "react-native-unistyles";

import { ThemeMode, changeThemeMode } from "./changeThemeMode";

const useThemeInternal = () => {
  const [theme = "system", setTheme] = useMMKVString("theme-mode") as [
    ThemeMode,
    (theme: ThemeMode) => void,
  ];

  useEffect(() => {
    changeThemeMode(theme);
  }, [theme]);

  return {
    theme,
    setTheme,
  };
};

export const [ThemeProviderInternal, useTheme] = constate(useThemeInternal);

export function ThemeProvider({ children }: { children: ReactNode }) {
  const {
    theme: { navigation },
  } = useStyles();

  return (
    <NavigationThemeProvider value={navigation}>
      <ThemeProviderInternal>{children}</ThemeProviderInternal>
    </NavigationThemeProvider>
  );
}
