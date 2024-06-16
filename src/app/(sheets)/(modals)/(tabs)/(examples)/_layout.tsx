import { TopTabs } from "@/layouts";
import { SafeAreaView } from "@/components";

export default function TopTabsExample() {
  return (
    <SafeAreaView style={{ flex: 1 }} edges={["top"]}>
      <TopTabs
        screenOptions={{ tabBarStyle: { backgroundColor: "transparent" } }}>
        <TopTabs.Screen name="tab1" options={{}} />
        <TopTabs.Screen name="tab2" options={{}} />
        <TopTabs.Screen name="tab3" options={{}} />
      </TopTabs>
    </SafeAreaView>
  );
}
