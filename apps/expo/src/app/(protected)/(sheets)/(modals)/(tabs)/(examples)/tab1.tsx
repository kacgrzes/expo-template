import {
  Button,
  Notifier,
  Screen,
  ScrollView,
  Text,
  Tooltip,
} from "@mobile/components";
import * as Linking from "expo-linking";
import sample from "lodash/sample";
import { Pressable } from "react-native";
import { Example } from "./example";

export default function Tab1() {
  const redirectUrl = Linking.createURL("index", {
    queryParams: { hello: "world" },
  });

  return (
    <Screen edges={["bottom"]}>
      <Screen.ScrollView gap={4}>
        <Tooltip.Root>
          <Tooltip.Trigger>
            <Button title="Toast example" />
          </Tooltip.Trigger>
          <Tooltip.Overlay />
          <Tooltip.Content>
            <Tooltip.Arrow />
          </Tooltip.Content>
        </Tooltip.Root>
        <Button
          title={"Create notification"}
          onPress={() =>
            Notifier.create({
              status: sample(["success", "info", "warning", "error"]),
              title: "Hello",
              description: "This is a notification",
            })
          }
        />
        <Pressable
          accessibilityRole="link"
          onPress={() => {
            Linking.openURL(redirectUrl);
          }}
        >
          <Text>{redirectUrl}</Text>
        </Pressable>
        <Example />
      </Screen.ScrollView>
    </Screen>
  );
}
