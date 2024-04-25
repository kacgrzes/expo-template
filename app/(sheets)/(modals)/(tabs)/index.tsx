import { useSession } from "auth";
import { Button, Text, JSONViewer } from "components";
import { Link } from "expo-router";
import { StatusBar } from "expo-status-bar";
import { useTranslation } from "react-i18next";
import { ScrollView } from "react-native";
import { createStyleSheet, useStyles } from "react-native-unistyles";
import { env } from "utils/env";

export default function App() {
  const { styles } = useStyles(stylesheet);
  const { signOut, signIn, session } = useSession();
  const { t, i18n } = useTranslation();

  return (
    <ScrollView contentContainerStyle={styles.container}>
      <Text style={styles.text}>
        <Text>Open up App.js to start working on your app!{"\n"}</Text>
        <Text>{t("Welcome to React")}</Text>
      </Text>
      <Button
        title={`Current language: ${i18n.language}`}
        variant="link"
        onPress={() => {
          i18n.changeLanguage(i18n.language === "en" ? "pl" : "en");
        }}
      />
      <JSONViewer content={env} />
      <Button
        title={session ? "Sign out" : "Sign in"}
        onPress={session ? signOut : signIn}
      />
      <Link href="/about" asChild>
        <Button title="About" variant="outline" />
      </Link>
      <Link href="/example-sheet" asChild>
        <Button title="Example Sheet" variant="link" />
      </Link>
      <Link href="/languages" asChild>
        <Button title="Languages" variant="link" />
      </Link>
      <StatusBar style="auto" />
    </ScrollView>
  );
}

const stylesheet = createStyleSheet({
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
});
