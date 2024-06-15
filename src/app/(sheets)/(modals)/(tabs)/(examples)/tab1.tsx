import { Button, Notifier, Tooltip, ScrollView, Text } from "components";
import * as Linking from "expo-linking";
import { Pressable } from "react-native";

export default function Tab1() {
  const redirectUrl = Linking.createURL("index", {
    queryParams: { hello: "world" },
  });

  return (
    <ScrollView>
      <Tooltip>
        <Button
          title="Add notification"
          onPress={() => Notifier.create("hello!" + Math.random())}
        />
      </Tooltip>
      <Pressable
        onPress={() => {
          Linking.openURL(redirectUrl);
        }}>
        <Text>{redirectUrl}</Text>
      </Pressable>
    </ScrollView>
  );
}
