import { FallbackProps } from "react-error-boundary";
import { Text, Button } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

export function Fallback({ error, resetErrorBoundary }: FallbackProps) {
  return (
    <SafeAreaView>
      <Text>Something went wrong!</Text>
      <Text>{error.message}</Text>
      <Button title="Try again" onPress={resetErrorBoundary} />
    </SafeAreaView>
  );
}
