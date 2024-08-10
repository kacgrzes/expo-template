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
  useScreenScrollView,
} from "@mobile/components";
import { isHermes, openSettings } from "@mobile/utils";
import { useScrollToTop } from "@react-navigation/native";
import { formatDistance } from "date-fns";
import { Link } from "expo-router";
import { Feather } from "lucide-react-native";
import { useCallback, useState } from "react";
import { useTranslation } from "react-i18next";

const CompilerTest = () => {
  return <Text>{new Date().toUTCString()}</Text>;
};

export default function App() {
  const ref = useScreenScrollView();
  useScrollToTop(ref);

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

  return (
    <Screen
      edges={["top"]}
      fab={<FAB Icon={Feather} extended={extended} label="Hello!" />}
      footer={
        <Box padding={4} style={{ backgroundColor: "green" }}>
          <TextInput />
        </Box>
      }
    >
      <Screen.ScrollView
        alignX="center"
        gap={2}
        onScroll={handleScroll}
        ref={ref}
      >
        <SegmentedControl full>
          <SegmentedControl.Item label="Segment #1" />
          <SegmentedControl.Item label="Segment #2" />
          <SegmentedControl.Item label="Segment #3 very very long text" />
        </SegmentedControl>
        <Button variant="solid" title="Test" full />
        <TextInput />
        <Text variant="title" style={{ marginBottom: 12 }}>
          Hello
        </Text>
        <Text textAlign="center">
          <Text>Open up App.js to start working on your app!{"\n"}</Text>
          <Text>{t("Welcome to React")}</Text>
        </Text>
        <CompilerTest />
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
        <Link href="/Main" asChild>
          <Button title="Examples" variant="link" full />
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
      <Screen.ScrollToBottom />
    </Screen>
  );
}
