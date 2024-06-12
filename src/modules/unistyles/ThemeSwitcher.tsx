import { BottomSheetView } from "@gorhom/bottom-sheet";
import { Check } from "lucide-react-native";
import { ListItem } from "components";

import { useTheme } from "./ThemeProvider";

export const ThemeSwitcher = () => {
  const { theme, setTheme } = useTheme();

  return (
    <BottomSheetView>
      <ListItem
        icon={theme === "system" ? Check : undefined}
        onPress={() => setTheme("system")}
        title="Use my device settings"
      />
      <ListItem
        icon={theme === "light" ? Check : undefined}
        onPress={() => setTheme("light")}
        title="Light"
      />
      <ListItem
        icon={theme === "dark" ? Check : undefined}
        onPress={() => setTheme("dark")}
        title="Dark"
      />
    </BottomSheetView>
  );
};
