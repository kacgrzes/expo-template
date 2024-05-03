import { ScrollView } from "react-native";
import { createStyleSheet, useStyles } from "react-native-unistyles";

import { Version } from "../../components/Version";

export function AboutScreen() {
  const { styles } = useStyles(stylesheet);

  return (
    <ScrollView contentContainerStyle={styles.container}>
      <Version />
    </ScrollView>
  );
}

const stylesheet = createStyleSheet({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
});
