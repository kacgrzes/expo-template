import { Tabs as TabsRouter } from "expo-router";
import { useStyles } from "react-native-unistyles";

export default function Tabs() {
  const { theme } = useStyles();

  return (
    <TabsRouter
      screenOptions={{
        tabBarActiveTintColor: theme.colors.accent,
        tabBarInactiveTintColor: theme.colors.typography,
        tabBarStyle: {
          backgroundColor: theme.colors.background,
        },
      }}
    />
  );
}
