import { ListItem } from "components";
import { useRouter } from "expo-router";
import { ScrollView } from "react-native";
import { createStyleSheet, useStyles } from "react-native-unistyles";

import { Version } from "../../components/Version";

export function AboutScreen() {
  const router = useRouter();
  const { styles } = useStyles(stylesheet);

  return (
    <ScrollView contentContainerStyle={styles.container}>
      <ListItem title="Terms and conditions" onPress={() => {}} />
      <ListItem title="Privacy policy" onPress={() => {}} />
      <ListItem
        title="Licenses"
        onPress={() => {
          router.navigate("/licenses");
        }}
      />
      <Version />
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
