import { useSession } from "auth";
import {
  ActionSheetExample,
  Button,
  ContextMenuExample,
  DropdownMenuExample,
  JSONViewer,
  Text,
  Title,
} from "components";
import { formatDistance } from "date-fns";
import { Link } from "expo-router";
import { useTranslation } from "react-i18next";
import { ScrollView } from "react-native";
import { createStyleSheet, useStyles } from "react-native-unistyles";
import { ThemeSwitcher } from "unistyles";
import { env } from "utils";

export default function App() {
  const { styles } = useStyles(stylesheet);
  const { signOut, signIn, session } = useSession();
  const { t, i18n } = useTranslation();

  return (
    <ScrollView
      style={styles.container}
      contentContainerStyle={styles.contentContainer}>
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
      <Text>{formatDistance(new Date(2016, 7, 1), new Date(2015, 0, 1))}</Text>
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
      <Link href="/app-icons" asChild>
        <Button title="App icons" variant="link" full />
      </Link>
      <ThemeSwitcher />
      <ActionSheetExample />
      <ContextMenuExample />
      <DropdownMenuExample />
    </ScrollView>
  );
}

const stylesheet = createStyleSheet((theme, runtime) => ({
  container: {
    marginTop: runtime.insets.top,
  },
  contentContainer: {
    // flex: 1,
    alignItems: "center",
    // justifyContent: "center",
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
}));
