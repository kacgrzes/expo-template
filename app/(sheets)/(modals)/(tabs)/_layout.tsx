import { Tabs as TabsRouter } from "expo-router";
import { Home, UserRound } from "lucide-react-native";
import { useStyles } from "react-native-unistyles";

export default function Tabs() {
  const { theme } = useStyles();

  return (
    <TabsRouter
      screenOptions={{
        headerShown: false,
        tabBarActiveTintColor: theme.colors.accent,
        tabBarInactiveTintColor: theme.colors.typography,
        tabBarStyle: {
          backgroundColor: theme.colors.background,
        },
        tabBarLabelStyle: {
          fontFamily: "IBMPlexSans_400Regular",
        },
      }}>
      <TabsRouter.Screen
        name="index"
        options={{
          title: "Home",
          tabBarIcon: ({ color }) => <Home size={24} color={color} />,
        }}
      />
      <TabsRouter.Screen
        name="test-1"
        options={{
          title: "Profile",
          tabBarIcon: ({ color }) => <UserRound size={24} color={color} />,
        }}
      />
    </TabsRouter>
  );
}
