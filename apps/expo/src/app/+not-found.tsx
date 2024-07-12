import { isDevelopment } from "@common/utils";
import { Box } from "@grapp/stacks";
import { ListItem, Screen, Text } from "@mobile/components";
import { useRouter } from "expo-router";
import { Home, Map } from "lucide-react-native";

export default function NotFound() {
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const router = useRouter();

  return (
    <Screen edges={["top", "bottom"]}>
      <Screen.ScrollView contentContainerStyle={{ paddingHorizontal: 0 }}>
        <Box padding={6} alignX={"center"} alignY={"center"}>
          <Text variant="title">Not found!</Text>
        </Box>
        <ListItem
          icon={Home}
          title="Go back home"
          onPress={() => router.navigate("/")}
        />
        {isDevelopment ? (
          <ListItem
            icon={Map}
            title="Sitemap"
            onPress={() => router.navigate("_sitemap")}
          />
        ) : null}
      </Screen.ScrollView>
    </Screen>
  );
}
