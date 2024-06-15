import { Avatar, useBadgeStyle } from "components";
import { Tabs as TabsRouter } from "expo-router";
import { Home } from "lucide-react-native";
import { useStyles } from "react-native-unistyles";

export default function Tabs() {
  const { theme } = useStyles();
  const tabBarBadgeStyle = useBadgeStyle();

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
          tabBarBadge: 3,
          tabBarBadgeStyle,
        }}
      />
      <TabsRouter.Screen
        name="profile"
        options={{
          title: "Profile",
          tabBarIcon: ({ color }) => <Avatar size="s" />,
        }}
      />
      <TabsRouter.Screen
        name="(examples)"
        options={{
          title: "Top tabs",
        }}
      />
    </TabsRouter>
  );
}
