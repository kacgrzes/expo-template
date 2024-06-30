import { ListItem, SafeAreaView, Text } from "@/components";
import { isDevelopment } from "@common/utils";
import { Box } from "@grapp/stacks";
import { useRouter } from "expo-router";
import { Home, Map } from "lucide-react-native";
import { ScrollView } from "react-native";
import { createStyleSheet, useStyles } from "react-native-unistyles";

export default function NotFound() {
  const { styles } = useStyles(stylesheet);
  const router = useRouter();

  return (
    <SafeAreaView style={styles.container}>
      <ScrollView>
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
      </ScrollView>
    </SafeAreaView>
  );
}

const stylesheet = createStyleSheet({
  container: {
    alignItems: "center",
    flex: 1,
    justifyContent: "center",
  },
});
