import { Box } from "@grapp/stacks";
import { Screen, Text, TextInput } from "@mobile/components";

export default function ScreenSectionList() {
  return (
    <Screen>
      <Screen.SectionList
        sections={[
          {
            title: "Section 1",
            data: ["Item 1", "Item 2", "Item 3", "Item 4", "Item 5"],
          },
          {
            title: "Section 2",
            data: ["Item 4", "Item 5", "Item 6", "Item 7", "Item 8"],
          },
        ]}
        renderSectionHeader={({ section }) => {
          return <Text>{section.title}</Text>;
        }}
        SectionSeparatorComponent={() => {
          return <Box height={8} />;
        }}
        renderItem={() => {
          // eslint-disable-next-line react-native-a11y/has-valid-accessibility-descriptors, react-native-a11y/has-accessibility-hint
          return <TextInput accessibilityLabel="Text input field" />;
        }}
      />
    </Screen>
  );
}
