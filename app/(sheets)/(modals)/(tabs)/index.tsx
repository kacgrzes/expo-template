import { useSession } from "auth";
import { Text } from "components";
import { Link } from "expo-router";
import { StatusBar } from "expo-status-bar";
import { useTranslation } from "react-i18next";
import { Button, Pressable, ScrollView, View } from "react-native";
import { createStyleSheet, useStyles } from "react-native-unistyles";
import { env } from "utils/env";

export default function App() {
  const { styles } = useStyles(stylesheet);
  const { signOut } = useSession();
  const { t, i18n } = useTranslation();

  return (
    <ScrollView contentContainerStyle={styles.container}>
      <Text style={styles.text}>
        <Text>Open up App.js to start working on your app!{"\n"}</Text>
        <Text>{t("Welcome to React")}</Text>
      </Text>
      <Pressable
        onPress={() => {
          i18n.changeLanguage(i18n.language === "en" ? "pl" : "en");
        }}>
        <Text style={styles.button}>{`Current language: ${i18n.language}`}</Text>
      </Pressable>
      <View style={styles.jsonViewer}>
        <Text>{JSON.stringify(env, null, 2)}</Text>
      </View>
      <Button title="Sign out" onPress={signOut} />
      <Link href="/about">
        <Text>About</Text>
      </Link>
      <Link href="/example-sheet">
        <Text>Example Sheet</Text>
      </Link>
      <StatusBar style="auto" />
    </ScrollView>
  );
}

const stylesheet = createStyleSheet((theme, runtime) => {
  return {
    container: {
      flex: 1,
      alignItems: "center",
      justifyContent: "center",
    },
    text: {
      justifyContent: "center",
      textAlign: "center",
    },
    button: {
      padding: 8,
      justifyContent: "center",
      textAlign: "center",
    },
    jsonViewer: {
      padding: 16,
      backgroundColor: "lightgrey",
      borderRadius: 4,
    },
  };
});
