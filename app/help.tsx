import { ScrollView, Text } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

export default function Help() {
  return (
    <SafeAreaView style={{ flex: 1 }}>
      <ScrollView>
        <Text>This is help screen</Text>
      </ScrollView>
    </SafeAreaView>
  );
}
