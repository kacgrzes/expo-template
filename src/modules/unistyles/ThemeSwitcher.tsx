import { Button } from "components/Button";

import { useTheme } from "./ThemeProvider";

export const ThemeSwitcher = () => {
  const { theme, setTheme } = useTheme();

  const toggleTheme = () => {
    if (theme === "system") {
      setTheme("light");
    } else if (theme === "light") {
      setTheme("dark");
    } else {
      setTheme("system");
    }
  };

  return <Button onPress={toggleTheme} title={theme} variant="link" />;
};
