import * as Clipboard from "expo-clipboard";
import { Pressable, Text } from "react-native";

export function Version() {
  const appVersionWithBuildNumber = "1.0.0 (1)";

  return (
    <Pressable
      onPress={() => Clipboard.setStringAsync(appVersionWithBuildNumber)}>
      <Text>{appVersionWithBuildNumber}</Text>
    </Pressable>
  );
}
