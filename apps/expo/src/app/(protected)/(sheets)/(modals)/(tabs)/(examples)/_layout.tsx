import { TopTabs } from "@expo/layouts";
import { SafeAreaView, Tabs } from "@mobile/components";
import { MaterialTopTabBarProps } from "@react-navigation/material-top-tabs";

function MyTabBar({ state, descriptors, navigation }: MaterialTopTabBarProps) {
  return (
    <Tabs.ScrollView>
      {state.routes.map((route, index) => {
        const { options } = descriptors[route.key];
        const label =
          options.tabBarLabel !== undefined
            ? options.tabBarLabel
            : options.title !== undefined
              ? options.title
              : route.name;

        const selected = state.index === index;

        const onPress = () => {
          const event = navigation.emit({
            type: "tabPress",
            target: route.key,
            canPreventDefault: true,
          });

          if (!selected && !event.defaultPrevented) {
            navigation.navigate(route.name, route.params);
          }
        };

        const onLongPress = () => {
          navigation.emit({
            type: "tabLongPress",
            target: route.key,
          });
        };

        return (
          <Tabs.Item
            disabled={selected}
            label={label}
            onLongPress={onLongPress}
            onPress={onPress}
            selected={selected}
            testID={options.tabBarTestID}
          />
        );
      })}
    </Tabs.ScrollView>
  );
}

export default function TopTabsExample() {
  return (
    <SafeAreaView style={{ flex: 1 }} edges={["top"]}>
      <TopTabs tabBar={MyTabBar}>
        <TopTabs.Screen name="tab1" />
        <TopTabs.Screen name="tab2" options={{}} />
        <TopTabs.Screen name="tab3" options={{}} />
      </TopTabs>
    </SafeAreaView>
  );
}
