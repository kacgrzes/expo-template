import { View } from "react-native";
import { Button, Text, Notifier } from "components";
import { useRouter } from "expo-router";

export default function ExampleModal() {
  const router = useRouter();

  return (
    <View>
      <Text>Example Modal</Text>
      <Button
        title="Example sheet"
        onPress={() => {
          router.navigate("example-sheet");
        }}
      />
      <Button
        title="Example notification"
        onPress={() => {
          Notifier.create("Hello world! " + Math.random());
        }}
      />
    </View>
  );
}
