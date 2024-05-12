import { JSONViewer } from "components";
import PACKAGE_JSON from "package.json";
import { ScrollView } from "react-native";
import { createStyleSheet, useStyles } from "react-native-unistyles";
import { isDeveloopment } from "utils";

import { Version } from "../../components/Version";

export function AboutScreen() {
  const { styles } = useStyles(stylesheet);

  return (
    <ScrollView contentContainerStyle={styles.container}>
      <Version />
      {isDeveloopment && <JSONViewer content={PACKAGE_JSON.dependencies} />}
    </ScrollView>
  );
}

const stylesheet = createStyleSheet({
  container: {
    // flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
});
