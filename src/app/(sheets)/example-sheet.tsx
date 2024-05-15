import { BottomSheetView } from "@gorhom/bottom-sheet";
import { Text } from "components";
import { createStyleSheet, useStyles } from "react-native-unistyles";

export default function ExampleSheet() {
  const { styles } = useStyles(stylesheet);

  return (
    <BottomSheetView style={styles.container}>
      <Text>Example Sheet</Text>
    </BottomSheetView>
  );
}

const stylesheet = createStyleSheet({
  container: {
    padding: 24,
  },
});
