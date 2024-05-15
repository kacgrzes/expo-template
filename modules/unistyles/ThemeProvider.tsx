import { ThemeProvider as NavigationThemeProvider } from "@react-navigation/native";
import { StatusBar } from "expo-status-bar";
import { ReactNode, createContext, useContext, useEffect } from "react";
import { useMMKVString } from "react-native-mmkv";
import { UnistylesRuntime, useStyles } from "react-native-unistyles";

import { ThemeMode, changeThemeMode } from "./changeThemeMode";

const ThemeContext = createContext<{
  theme: ThemeMode;
  setTheme: (themeMode: ThemeMode) => void;
}>({
  theme: "system",
  setTheme: () => {},
});

export function ThemeProvider({ children }: { children: ReactNode }) {
  const {
    theme: { navigation },
  } = useStyles();
  const [theme = "system", setTheme] = useMMKVString("theme-mode") as [
    ThemeMode,
    (theme: ThemeMode) => void,
  ];

  useEffect(() => {
    changeThemeMode(theme);
  }, [theme]);

  const finalTheme =
    theme === "system"
      ? UnistylesRuntime.colorScheme
      : UnistylesRuntime.themeName;

  return (
    <NavigationThemeProvider value={navigation}>
      <ThemeContext.Provider
        value={{
          theme,
          setTheme,
        }}>
        {children}
      </ThemeContext.Provider>
      <StatusBar style={finalTheme === "dark" ? "light" : "dark"} />
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
