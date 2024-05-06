import { useSession } from "auth";
import {
  Button,
  ContextMenuExample,
  DropdownMenuExample,
  Text,
  JSONViewer,
  Title,
} from "components";
import { Link } from "expo-router";
import { StatusBar } from "expo-status-bar";
import { useTranslation } from "react-i18next";
import { ScrollView } from "react-native";
import { createStyleSheet, useStyles } from "react-native-unistyles";
import { env } from "utils";

export default function App() {
  const { styles } = useStyles(stylesheet);
  const { signOut, signIn, session } = useSession();
  const { t, i18n } = useTranslation();

  return (
    <ScrollView contentContainerStyle={styles.container}>
      <Title style={{ marginBottom: 12 }}>Hello</Title>
      <Text style={styles.text}>
        <Text>Open up App.js to start working on your app!{"\n"}</Text>
        <Text>{t("Welcome to React")}</Text>
      </Text>
      <Button
        full
        title={`Current language: ${i18n.language}`}
        variant="link"
        onPress={() => {
          const nextLanguage = {
            en: "fr",
            fr: "pl",
            pl: "en",
          }[i18n.language];

          i18n.changeLanguage(nextLanguage);
        }}
      />
      <JSONViewer content={env} />
      <Button
        full
        title={session ? "Sign out" : "Sign in"}
        onPress={session ? signOut : signIn}
      />
      <Link href="/about" asChild>
        <Button title="About" variant="outline" full />
      </Link>
      <Link href="/example-sheet" asChild>
        <Button title="Example Sheet" variant="link" full />
      </Link>
      <Link href="/languages" asChild>
        <Button title="Languages" variant="link" full />
      </Link>
      <ContextMenuExample />
      <DropdownMenuExample />
      <StatusBar style="auto" />
    </ScrollView>
  );
}

const stylesheet = createStyleSheet({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    padding: 16,
    gap: 4,
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
