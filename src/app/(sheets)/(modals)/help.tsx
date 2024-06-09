import { ScrollView, Text } from "react-native";
import { withModalStatusBar } from "utils/withModalStatusBar";

function Help() {
  return (
    <ScrollView>
      <Text>This is help screen</Text>
    </ScrollView>
  );
}

export default withModalStatusBar(Help);
