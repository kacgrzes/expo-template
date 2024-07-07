import { Box } from "@grapp/stacks";
import { Button, Screen, Text, TextInput } from "@mobile/components";

export default function SignUp() {
  return (
    <Screen
      footer={
        <Box padding={4}>
          <Button title="Continue" />
        </Box>
      }
    >
      <Screen.ScrollView contentContainerStyle={{ padding: 16 }}>
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
