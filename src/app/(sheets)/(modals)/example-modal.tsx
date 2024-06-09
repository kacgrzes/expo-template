import { View } from "react-native";
import { Button, Text, Notifier } from "components";
import { useRouter } from "expo-router";
import { withModalStatusBar } from "utils/withModalStatusBar";

function ExampleModal() {
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

export default withModalStatusBar(ExampleModal);
