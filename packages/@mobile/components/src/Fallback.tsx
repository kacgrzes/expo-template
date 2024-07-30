import { FallbackProps } from "react-error-boundary";

import { Box } from "@grapp/stacks";
import { Button } from "./Button";
import { JSONViewer } from "./JSONViewer";
import { Screen } from "./Screen";
import { Text } from "./Text";

export function Fallback({ error, resetErrorBoundary }: FallbackProps) {
  return (
    <Screen
      edges={["bottom", "top"]}
      footer={
        <Box padding={4}>
          <Button title="Try again" onPress={resetErrorBoundary} />
        </Box>
      }
    >
      <Screen.ScrollView>
        <Box gap={4}>
          <Text>Something went wrong!</Text>
          <JSONViewer content={error.message} />
        </Box>
      </Screen.ScrollView>
    </Screen>
  );
}
