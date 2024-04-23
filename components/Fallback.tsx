import { Text, Button } from "components";
import { FallbackProps } from "react-error-boundary";
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
