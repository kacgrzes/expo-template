import { Button } from "components";

import { useTheme } from "./ThemeProvider";

export const ThemeSwitcher = () => {
  const { theme, setTheme } = useTheme();

  return (
    <Button
      onPress={() => {
        if (theme === "system") {
          setTheme("light");
        } else if (theme === "light") {
          setTheme("dark");
        } else {
          setTheme("system");
        }
      }}
      title={theme}
    />
  );
};
