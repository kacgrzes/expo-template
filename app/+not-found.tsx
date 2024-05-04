import { Link } from "expo-router";
import { Text } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { createStyleSheet, useStyles } from "react-native-unistyles";
import { isDeveloopment } from "utils";

export default function NotFound() {
  const { styles } = useStyles(stylesheet);

  return (
    <SafeAreaView style={styles.container}>
      <Text>Not found!</Text>
      <Link href="/">
        <Text>Go back home</Text>
      </Link>
      {isDeveloopment && (
        <Link href="_sitemap">
          <Text>Sitemap</Text>
        </Link>
      )}
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
