import { ListItem, SocialIcon, Title } from "components";
import { applicationName } from "expo-application";
import { useRouter } from "expo-router";
import { ScrollView, View } from "react-native";
import { createStyleSheet, useStyles } from "react-native-unistyles";

import { Version } from "../../components/Version";

export function AboutScreen() {
  const router = useRouter();
  const { styles } = useStyles(stylesheet);

  return (
    <ScrollView contentContainerStyle={styles.container}>
      <View style={styles.top}>
        <Title>{applicationName}</Title>
      </View>
      <ListItem
        icon="Clipboard"
        title="Terms and conditions"
        onPress={() => {}}
      />
      <ListItem icon="LockKeyhole" title="Privacy policy" onPress={() => {}} />
      <ListItem
        icon="FileCheck"
        title="Licenses"
        onPress={() => {
          router.navigate("/licenses");
        }}
      />
      <View style={styles.socials}>
        <SocialIcon name="Facebook" onPress={() => {}} />
        <SocialIcon name="Instagram" onPress={() => {}} />
        <SocialIcon name="Twitter" onPress={() => {}} />
      </View>
      <Version />
    </ScrollView>
  );
}

const stylesheet = createStyleSheet({
  top: {
    padding: 24,
  },
  container: {
    // flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  socials: {
    flexDirection: "row",
    gap: 8,
    padding: 16,
  },
});
