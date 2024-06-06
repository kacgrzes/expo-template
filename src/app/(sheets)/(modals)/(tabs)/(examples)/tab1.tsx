import { Button, Notifier } from "components";
import { View } from "react-native";

export default function Tab1() {
  return (
    <View>
      <Button
        title="Add notification"
        onPress={() => Notifier.create("hello!" + Math.random())}
      />
    </View>
  );
}
