import { BottomSheetView } from "@gorhom/bottom-sheet";
import { Check } from "lucide-react-native";
import { ListItem } from "@/components/ListItem";

import { useTheme } from "./ThemeProvider";
import { createStyleSheet, useStyles } from "react-native-unistyles";

export const ThemeSwitcher = () => {
  const { theme, setTheme } = useTheme();
  const { styles } = useStyles(stylesheet);

  return (
    <BottomSheetView style={styles.container}>
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

const stylesheet = createStyleSheet(() => {
  return {
    container: {
      paddingBottom: 16,
    },
  };
});
