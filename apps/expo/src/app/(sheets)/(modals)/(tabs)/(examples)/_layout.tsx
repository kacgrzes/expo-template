import { TopTabs } from "@expo/layouts";
// eslint-disable-next-line import/no-unresolved
/** eslint-disable import/no-unresolved */
import { SafeAreaView } from "@mobile/components";

export default function TopTabsExample() {
  return (
    <SafeAreaView style={{ flex: 1 }} edges={["top"]}>
      <TopTabs
        screenOptions={{ tabBarStyle: { backgroundColor: "transparent" } }}
      >
        <TopTabs.Screen name="tab1" options={{}} />
        <TopTabs.Screen name="tab2" options={{}} />
        <TopTabs.Screen name="tab3" options={{}} />
      </TopTabs>
    </SafeAreaView>
  );
}
