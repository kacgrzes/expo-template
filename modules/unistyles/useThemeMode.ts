import { useEffect } from "react";
import { useMMKVString } from "react-native-mmkv";

import { ThemeMode, changeThemeMode } from "./changeThemeMode";

export const useThemeMode = () => {
  const [themeMode, setThemeModeRaw] = useMMKVString("theme-mode");

  useEffect(() => {
    changeThemeMode(themeMode as ThemeMode);
  }, [themeMode]);

  const setThemeMode = (themeMode: ThemeMode) => {
    setThemeModeRaw(themeMode);
  };

  return [themeMode as ThemeMode, setThemeMode] as const;
};
