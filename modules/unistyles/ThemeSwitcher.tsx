import { Button } from "components";

import { useThemeMode } from "./useThemeMode";

export const ThemeSwitcher = () => {
  const [themeMode, setThemeMode] = useThemeMode();

  console.log({ themeMode });

  return (
    <Button
      onPress={() => {
        if (themeMode === "system") {
          setThemeMode("light");
        } else if (themeMode === "light") {
          setThemeMode("dark");
        } else {
          setThemeMode("system");
        }
      }}
      title={themeMode}
    />
  );
};
