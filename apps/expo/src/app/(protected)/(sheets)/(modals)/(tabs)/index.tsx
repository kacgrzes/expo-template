import { env } from "@common/utils";
import { Box } from "@grapp/stacks";
import { useSession } from "@mobile/auth";
import {
  ActionSheetExample,
  AppleAuthenticationButton,
  Button,
  ContextMenuExample,
  DropdownMenuExample,
  FAB,
  GoogleAuthenticationButton,
  JSONViewer,
  OnScroll,
  Screen,
  SegmentedControl,
  Text,
  TextInput,
  Title,
  useScreenScrollView,
} from "@mobile/components";
import { isHermes, openSettings } from "@mobile/utils";
import { useScrollToTop } from "@react-navigation/native";
import { formatDistance } from "date-fns";
import { Link } from "expo-router";
import { Feather } from "lucide-react-native";
import { useCallback, useEffect, useState } from "react";
import { useTranslation } from "react-i18next";
import { createStyleSheet, useStyles } from "react-native-unistyles";

const CompilerTest = () => {
  return <Text>{new Date().toUTCString()}</Text>;
};

export default function App() {
  const ref = useScreenScrollView();
  useScrollToTop(ref);

  const { styles } = useStyles(stylesheet);
  const { signOut, signIn, session } = useSession();
  const { t } = useTranslation();
  const [extended, setExtended] = useState(true);

  const handleScroll: OnScroll = useCallback((event) => {
    if (event.nativeEvent.contentOffset.y <= 0) {
      setExtended(true);
    } else {
      setExtended(false);
    }
  }, []);

  useEffect(() => {
    fetch("https://example.com/user")
      .then((response) => response.json())
      .then((data) => {
        console.log(data);
      });
  });

  return (
    <Screen
      edges={["top"]}
      fab={<FAB Icon={Feather} extended={extended} label="Hello!" />}
      footer={
        <Box padding={4} style={{ backgroundColor: "green" }}>
          <Text>Hello!</Text>
          <TextInput />
        </Box>
      }
    >
      <Screen.ScrollView
        ref={ref}
        onScroll={handleScroll}
        contentContainerStyle={styles.contentContainer}
      >
        <SegmentedControl full />
        <Title style={{ marginBottom: 12 }}>Hello</Title>
        <Text style={styles.text}>
          <Text>Open up App.js to start working on your app!{"\n"}</Text>
          <Text>{t("Welcome to React")}</Text>
        </Text>
        <CompilerTest />
        <TextInput />
        <Text>{isHermes ? <Text>Welcome to Hermes</Text> : null}</Text>
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
        <AppleAuthenticationButton full />
        <GoogleAuthenticationButton full />
        <Link href="/settings" asChild>
          <Button title="App settings" variant="link" full />
        </Link>
        <Link href="/keyboard-sheet" asChild>
          <Button title="Keyboard sheet" variant="link" full />
        </Link>
        <Link href="/sign-up" asChild>
          <Button title="Sign up" variant="link" full />
        </Link>
        <Link href="/screen-flat-list" asChild>
          <Button title="Screen FlatList" variant="link" full />
        </Link>
        <Link href="/screen-section-list" asChild>
          <Button title="Screen SectionList" variant="link" full />
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
      </Screen.ScrollView>
    </Screen>
  );
}

const stylesheet = createStyleSheet((theme) => ({
  contentContainer: {
    gap: theme.stacks.spacing * 1,
    alignItems: "center",
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
