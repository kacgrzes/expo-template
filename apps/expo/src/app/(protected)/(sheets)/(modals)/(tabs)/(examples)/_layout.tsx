import { TopTabs } from "@expo/layouts";
// eslint-disable-next-line import/no-unresolved
/** eslint-disable import/no-unresolved */
import { SafeAreaView } from "@mobile/components";
import { useStyles } from "react-native-unistyles";

export default function TopTabsExample() {
  const { theme } = useStyles();

  return (
    <SafeAreaView style={{ flex: 1 }} edges={["top"]}>
      <TopTabs
        screenOptions={{
          tabBarStyle: { backgroundColor: "transparent" },
          tabBarLabelStyle: {
            fontFamily: theme.fontFamily.IBMPlexSans_400Regular,
            textTransform: "none",
          },
        }}
      >
        <TopTabs.Screen name="tab1" options={{}} />
        <TopTabs.Screen name="tab2" options={{}} />
        <TopTabs.Screen name="tab3" options={{}} />
      </TopTabs>
    </SafeAreaView>
  );
}
