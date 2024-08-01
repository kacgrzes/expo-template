import { BottomTabNavigationOptions } from "@react-navigation/bottom-tabs";
import { useStyles } from "react-native-unistyles";

export const useTabsScreenOptions = (): BottomTabNavigationOptions => {
  const { theme } = useStyles();

  return {
    headerShown: false,
    tabBarActiveTintColor: theme.colors.primary,
    tabBarInactiveTintColor: theme.colors.typography,
    tabBarLabelStyle: {
      fontFamily: "IBMPlexSans_400Regular",
    },
  };
};
