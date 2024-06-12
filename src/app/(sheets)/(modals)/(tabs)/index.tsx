import { FloatBox } from "@grapp/stacks";
import { useSession } from "auth";
import {
  ActionSheetExample,
  Button,
  ContextMenuExample,
  DropdownMenuExample,
  JSONViewer,
  SegmentedControl,
  Text,
  Title,
  FAB,
  ScrollView,
  OnScroll,
} from "components";
import { formatDistance } from "date-fns";
import { Link } from "expo-router";
import { Feather } from "lucide-react-native";
import { Fragment, useCallback, useState } from "react";
import { useTranslation } from "react-i18next";
import { createStyleSheet, useStyles } from "react-native-unistyles";
import { env, isHermes, openSettings } from "utils";

export default function App() {
  const { styles } = useStyles(stylesheet);
  const { signOut, signIn, session } = useSession();
  const { t, i18n } = useTranslation();
  const [extended, setExtended] = useState(true);

  const handleScroll: OnScroll = useCallback((event) => {
    if (event.nativeEvent.contentOffset.y <= 0) {
      setExtended(true);
    } else {
      setExtended(false);
    }
  }, []);

  return (
    <Fragment>
      <ScrollView
        scrollEventThrottle={1000 / 60} // 60 FPS
        onScroll={handleScroll}
        style={styles.container}
        contentContainerStyle={styles.contentContainer}>
        <SegmentedControl full />
        <Title style={{ marginBottom: 12 }}>Hello</Title>
        <Text style={styles.text}>
          <Text>Open up App.js to start working on your app!{"\n"}</Text>
          <Text>{t("Welcome to React")}</Text>
        </Text>
        <Text>{isHermes ? <Text>Welcome to Hermes</Text> : null}</Text>
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
        <Text>
          {formatDistance(new Date(2016, 7, 1), new Date(2015, 0, 1))}
        </Text>
        <Text>{t("todayIs", { date: new Date() })}</Text>
        <JSONViewer width={"100%"} marginY={4} content={env} />
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
        <Link href="/example-modal" asChild>
          <Button title="Example Modal" variant="link" full />
        </Link>
        <Link href="/settings" asChild>
          <Button title="App settings" variant="link" full />
        </Link>
        <Button
          title="Open settings"
          variant="link"
          onPress={openSettings}
          full
        />
        <ActionSheetExample />
        <ContextMenuExample />
        <DropdownMenuExample />
      </ScrollView>
      <FloatBox bottom={16} right={16}>
        <FAB Icon={Feather} extended={extended} label="Hello!" />
      </FloatBox>
    </Fragment>
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
