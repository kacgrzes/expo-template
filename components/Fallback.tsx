import { FallbackProps } from "react-error-boundary";
import { SafeAreaView } from "react-native-safe-area-context";

import { Button } from "./Button";
import { Text } from "./Text";

export function Fallback({ error, resetErrorBoundary }: FallbackProps) {
  return (
    <SafeAreaView>
      <Text>Something went wrong!</Text>
      <Text>{error.message}</Text>
      <Button title="Try again" onPress={resetErrorBoundary} />
    </SafeAreaView>
  );
}
