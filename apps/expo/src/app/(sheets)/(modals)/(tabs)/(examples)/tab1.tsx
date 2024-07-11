import {
  Button,
  Notifier,
  ScrollView,
  Text,
  Tooltip,
} from "@mobile/components";
import * as Linking from "expo-linking";
import { Pressable } from "react-native";

export default function Tab1() {
  const redirectUrl = Linking.createURL("index", {
    queryParams: { hello: "world" },
  });

  return (
    <ScrollView>
      <Tooltip>
        <Button title="Toast example" />
      </Tooltip>
      <Button
        title={"Create notification"}
        onPress={() => Notifier.create("hello!" + Math.random())}
      />
      <Pressable
        accessibilityRole="link"
        onPress={() => {
          Linking.openURL(redirectUrl);
        }}
      >
        <Text>{redirectUrl}</Text>
      </Pressable>
    </ScrollView>
  );
}
