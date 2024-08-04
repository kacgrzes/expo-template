import { Box } from "@grapp/stacks";
import { FAB, Screen, TextInput, withModalStatusBar } from "@mobile/components";

function ScreenFlatList() {
  return (
    <Screen
      fab={<FAB />}
      footer={
        <Box padding={3} style={{ backgroundColor: "green" }}>
          <TextInput />
        </Box>
      }
    >
      <Screen.FlatList
        data={Array.from({ length: 50 }).map((_, i) => i)}
        renderItem={() => {
          // eslint-disable-next-line react-native-a11y/has-accessibility-hint
          return <TextInput accessibilityLabel="Text input field" />;
        }}
      />
    </Screen>
  );
}

export default withModalStatusBar(ScreenFlatList);
