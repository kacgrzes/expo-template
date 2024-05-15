import {
  DarkTheme,
  DefaultTheme,
  ThemeProvider as NavigationThemeProvider,
} from "@react-navigation/native";
import { StatusBar } from "expo-status-bar";
import { ReactNode, createContext, useContext, useEffect } from "react";
import { useMMKVString } from "react-native-mmkv";
import { UnistylesRuntime } from "react-native-unistyles";

import { ThemeMode, changeThemeMode } from "./changeThemeMode";

const ThemeContext = createContext<{
  theme: ThemeMode;
  setTheme: (themeMode: ThemeMode) => void;
}>({
  theme: "system",
  setTheme: () => {},
});

export function ThemeProvider({ children }: { children: ReactNode }) {
  const [theme = "system", setTheme] = useMMKVString("theme-mode") as [
    ThemeMode,
    (theme: ThemeMode) => void,
  ];

  useEffect(() => {
    changeThemeMode(theme);
  }, [theme]);

  return (
    <NavigationThemeProvider
      value={
        theme === "dark"
          ? DarkTheme
          : theme === "light"
            ? DefaultTheme
            : UnistylesRuntime.colorScheme === "dark"
              ? DarkTheme
              : DefaultTheme
      }>
      <ThemeContext.Provider
        value={{
          theme,
          setTheme,
        }}>
        {children}
      </ThemeContext.Provider>
      <StatusBar style={theme === "system" ? "auto" : theme} />
    </NavigationThemeProvider>
  );
}

export const useTheme = () => {
  const context = useContext(ThemeContext);

  if (!context) {
    throw new Error("useTheme must be used within a ThemeProvider");
  }

  return context;
};
