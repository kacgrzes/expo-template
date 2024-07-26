import {
  Button,
  Notifier,
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
    <ScrollView
      contentContainerStyle={{
        gap: 16,
      }}
    >
      <Tooltip.Root>
        <Tooltip.Trigger>
          <Button title="Toast example" />
        </Tooltip.Trigger>
        <Tooltip.Overlay />
        <Tooltip.Content />
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
    </ScrollView>
  );
}
