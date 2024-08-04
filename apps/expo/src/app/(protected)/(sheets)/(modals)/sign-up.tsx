import { Box } from "@grapp/stacks";
import {
  Button,
  Screen,
  Text,
  TextInput,
  withModalStatusBar,
} from "@mobile/components";

function SignUp() {
  return (
    <Screen
      footer={
        <Box padding={3}>
          <Button title="Continue" />
        </Box>
      }
    >
      <Screen.ScrollView>
        <Box gap={4}>
          <Text>What's your email?</Text>
          <TextInput
            accessibilityLabel="Text input field"
            accessibilityHint="Dupa"
          />
          <Text>What's your email?</Text>
          <TextInput
            accessibilityLabel="Text input field"
            accessibilityHint="Dupa"
          />
          <Text>What's your email?</Text>
          <TextInput
            accessibilityLabel="Text input field"
            accessibilityHint="Dupa"
          />
          <Text>What's your email?</Text>
          <TextInput
            accessibilityLabel="Text input field"
            accessibilityHint="Dupa"
          />
          <Text>What's your email?</Text>
          <TextInput
            accessibilityLabel="Text input field"
            accessibilityHint="Dupa"
          />
          <Text>What's your email?</Text>
          <TextInput
            accessibilityLabel="Text input field"
            accessibilityHint="Dupa"
          />
          <Text>What's your email?</Text>
          <TextInput
            accessibilityLabel="Text input field"
            accessibilityHint="Dupa"
          />
          <Text>What's your email?</Text>
          <TextInput
            accessibilityLabel="Text input field"
            accessibilityHint="Dupa"
          />
          <Text>What's your email?</Text>
          <TextInput
            accessibilityLabel="Text input field"
            accessibilityHint="Dupa"
          />
        </Box>
      </Screen.ScrollView>
    </Screen>
  );
}

export default withModalStatusBar(SignUp);
