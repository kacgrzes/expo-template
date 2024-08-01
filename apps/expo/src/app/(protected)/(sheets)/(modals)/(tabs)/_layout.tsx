import { Avatar, useBadgeStyle } from "@mobile/components";
import { useTabsScreenOptions } from "@mobile/layouts";
import { Tabs as TabsRouter } from "expo-router";
import { Compass, Home } from "lucide-react-native";

export default function Tabs() {
  const screenOptions = useTabsScreenOptions();
  const tabBarBadgeStyle = useBadgeStyle();

  return (
    <TabsRouter screenOptions={screenOptions}>
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
        name="discover"
        options={{
          title: "Discover",
          tabBarIcon: ({ color }) => <Compass size={24} color={color} />,
        }}
      />
      <TabsRouter.Screen
        name="profile"
        options={{
          title: "Profile",
          tabBarIcon: () => <Avatar size="s" />,
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
